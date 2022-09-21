const Product = require("../models/product.model");

exports.getProductModel = async (queries) => {
  if (queries.categoryBy && queries.sizeBy) {
    const result = await Product.find({
      $and: [{ category: queries.categoryBy }, { size: queries.sizeBy }],
    });
    return result;
  }

  if (queries.categoryBy) {
    const result = await Product.find({ category: queries.categoryBy });
    return result;
  }
  if (queries.sizeBy) {
    const result = await Product.find({ size: queries.sizeBy });
    return result;
  }
  const result = await Product.find();
  return result;
};
exports.createProductModel = async (data) => {
  const result = await Product.create(data);
  return result;
};
