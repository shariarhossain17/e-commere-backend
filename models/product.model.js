const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide name"],
      trim: true,
      unique: [true, "name must be unique"],
      minLength: [3, "name must be at least 3 character"],
      maxLength: [100, "Name is to large"],
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price cant't be negative"],
    },
    color:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true,
        enum: {
            values: ["xl", "l","m"],
            message: "",
          },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);

          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "quantity must be integer",
    },
    stock: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "stock-out"],
        message: "",
      },
    },

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
