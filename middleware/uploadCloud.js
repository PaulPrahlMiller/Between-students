require('dotenv').config
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// const uploadCloud = () =>{

//     cloudinary.uploader.upload('', {
//         resource_type: 'image',
//     }).then((result)=>{
//         console.log("success", JSON.stringify(result, null, 2));
    
//     }).catch((error)=>{
//         console.log("error", JSON.stringify(error, null, 2));
//     })
// }

module.exports = cloudinary;