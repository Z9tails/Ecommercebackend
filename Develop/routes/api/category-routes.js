const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll(
    {include:[Product]}

  ).then((data) => res.json(data))
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {where: {id: req.params.id}, 
    include:[Product]}
    )
  // be sure to include its associated Products
  .then((data) => res.json(data))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => res.json(data))
});

router.put('/:id', (req, res) => {
  Category.update(req.body,
    {where: {id: req.params.id}}).then((data) => res.json(data))
});

router.delete('/:id', (req, res) => {
 Category.destroy({ where:{id: req.params.id }})
 .then ((data) => res.json(data))
 }
);

module.exports = router;
