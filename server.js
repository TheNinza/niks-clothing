const express = require("express");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", async (req, res) => {
  const { cartItems, currentUser } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map(({ name, imageUrl, price, quantity }) => ({
        price_data: {
          currency: "INR",
          product_data: {
            name,
            images: [imageUrl],
          },
          unit_amount: price * 100,
        },
        quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.referer}/?success=true`,
      cancel_url: `${req.headers.referer}/?canceled=true`,
      customer_email: currentUser.email,
      shipping_address_collection: {
        allowed_countries: ["IN", "US"],
      },
    });

    console.log(session);

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json(error);
  }
});
