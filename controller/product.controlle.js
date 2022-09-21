const { getProductModel, createProductModel } = require("../services/product.services")

module.exports.getAllProduct = async (req,res,next) => {
    try {

        const queries = {}
        if(req.query.category){
            const categoryBy = req.query.category;
            queries.categoryBy = categoryBy
        }
        if(req.query.size){
            const sizeBy = req.query.size;
            queries.sizeBy = sizeBy
        }
        const result = await getProductModel(queries)
        res.status(200).json({
            status:true,
            message:"data get success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can't get data",
            error:error.message
        })
    }
}

module.exports.createProduct = async (req,res,next) => {
    try {
        const result = await createProductModel(req.body)
        res.status(200).json({
            status:true,
            message:"data insert success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can't get data",
            error:error.message
        })
    }
}