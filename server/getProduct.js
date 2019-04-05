const products = require('../products.json')

const getProduct = (req, res) => {
  let {id} = req.params
  let showProduct = products.find(item => {
    return item.id === +id
  })

  console.log(showProduct)

  if(!showProduct) {
    res.status(500).send('Item not in list')
  } 

  res.status(200).send(showProduct)
}

module.exports = getProduct