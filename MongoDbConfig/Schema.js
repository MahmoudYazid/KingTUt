import mongoose, { Schema, model } from "mongoose";


const usersSchima = new Schema({
    name: String,
    password: String,
    type: String

})
const ClassificationsSchima = new Schema({
    name: String,


})
const KeywordsSchima = new Schema({
    word: String,


})
const ProductssSchima = new Schema({
    name: String,
    imgname: String,
    description: String,
    classification: String,
    


})


export const UsersModel = mongoose.models.users || model('users', usersSchima)
export const ClassificationsModel = mongoose.models.Classifications || model('Classifications', ClassificationsSchima)
export const productsModel = mongoose.models.products || model('products', ProductssSchima)
export const KeyWordsModel = mongoose.models.keywords || model('keywords', KeywordsSchima)