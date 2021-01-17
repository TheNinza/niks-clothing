import { all, call, put, takeLatest, select } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import {
  clearCart,
  setCartFromFirebase,
  setCartFromFirebaseSuccess,
} from "./cart.actions";
import { getUserCartRef } from "../../firebase/firebase.utils";
import CartActionTypes from "./cart.types";
import { selectCurrentUser } from "../user/user.selectors";
import { selectCartItems } from "./cart.selectors";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* setLocalStateCart({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
  yield put(setCartFromFirebaseSuccess());
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, setLocalStateCart);
}

export function* updateFirebaseCart() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
      CartActionTypes.SET_CART_FROM_FIREBASE_SUCCESS,
    ],
    updateFirebaseCart
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
