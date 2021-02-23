const express = require('express');
const multer = require('multer')
const multerCfg = require('../config/multer');

const router = express.Router();
const studentsController = require('../controllers/studentsController')

router.post('/create', multer(multerCfg).single('file'), studentsController.addStudent)
router.get('/', studentsController.findStudent)
router.get('/:id', studentsController.findStudentById)
router.put('/:id/:avatarKey', multer(multerCfg).single('file'), studentsController.updateStudent)
router.delete('/:id', studentsController.deleteById)

module.exports = router