const products = require('../products.json')

const getProducts = (req, res) => {
  let {price} = req.query
  if(!price) {
    res.status(200).send(products)  
  } else {
    let filteredProducts = products.filter(item => {
      return item.price >= +price
    })
    res.status(200).send(filteredProducts)
  }
  
}

module.exports = getProducts