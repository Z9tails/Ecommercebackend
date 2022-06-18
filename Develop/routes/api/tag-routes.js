const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
   Tag.findAll({ include: [Product] })
   .then((data) => res.json(data));
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({ where: { id: req.params.id }, include: [Product] });
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((data) => res.json(data));
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } }).then((data) =>
    res.json(data)
  );
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where:{id: req.params.id }})
 .then ((data) => res.json(data))
 
});

module.exports = router;
