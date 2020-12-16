import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.collections;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

// as collectionUrlParam is being passed in from our collection component's mapStateToProps running whenever
// our state changes and calling a new instance of our selectCollection function. So we need to memoize the
// the whole selectCollection funcion

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
