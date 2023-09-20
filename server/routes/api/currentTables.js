const express = require('express');
const router = express.Router();
const { create, getAllCurrentTable } = require('../../controllers/currentTable');

router.post(
  '/',
  create,
);

router.get('/',  getAllCurrentTable)

module.exports = router;
