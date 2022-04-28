const User = require('./User')
const Product = require('./Product')

exports.allUsers=()=>{
}



exports.insertManyUsers=()=>{
    console.log('We are tryna insert!')
    const manyUsers = [
        {"firstname":"Lebron",  "lastname":"James",  "address":"Näsby", "email":"Lebron@gmail.com", "password":"HashedPassword1"}, 
        {"firstname":"Jennifer",  "lastname":"Lopez",  "address":"Hammer", "email":"JenifferLopez@gmail.com", "password":"HashedPassword1"}, 
        {"firstname":"Fernando",  "lastname":"Torres",  "address":"Kristianstad Centrum", "email":"Tores@gmail.com", "password":"HashedPassword1"}, 
    ]
    User.insertMany(manyUsers).then(function(){
        console.log("Data inserted on users")  // Success
    }).catch(function(error){
        console.log("We got an error!", error)      // Failure
    });
}
exports.insertManyProducts=()=>{
    console.log('We are tryna insert!')
    const manyProducts = [
        {"product_name":"Smart-Tv",  "category":"Electronics",  "owner_id":"62672819656dff68080d4a79",   "cost":"3000",   "description":" You dont want to miss this one lol "},
        {"product_name":"Office-Chair",  "category":"Furniture",  "owner_id":"62672819656dff68080d4a7a",   "cost":"1200",   "description":" Kind of new, barely used"},
        {"product_name":"Sofa",  "category":"Furniture",  "owner_id":"F62672819656dff68080d4a79",   "cost":"950",   "description":" Nothing wrong with the sofa, I just want to move so im selling it."},
        {"product_name":"Refrigerator",  "category":"Electronics",  "owner_id":"626733fbec9559504b0cafc3",   "cost":"2300",   "description":"In a good condition. Like new!"}
    ]
    Product.insertMany(manyProducts).then(function(){
        console.log("Data inserted on Products")  // Success
    }).catch(function(error){
        console.log("We got an errrorrr!", error)      // Failure
    });
}

