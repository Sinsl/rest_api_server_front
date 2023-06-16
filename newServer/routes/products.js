const express = require('express');
const router = express.Router();




router.get('/:id', (req, res) => {
  console.log('get id')
  const { id } = req.params;
  // const prodUrl = require('../db/users/users.json')

  const prod = prodUrl.find((item) => item.id === id);

  prod
    ? res.json({status: 'ok', prod})
    : res.json({status: 'error', message: 'user not found'})
});





module.exports = router;
