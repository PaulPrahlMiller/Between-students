exports.welcome = (req, res) => {
  res.json({ message: 'Hello from the API' });
};

exports.products =(req, res)=>{

  res.json({ message: 'Now you are looking for products' });
}
exports.users =(req, res)=>{
  res.json({ message: 'Now you are looking for users' });
}

