const router = require('express').Router();

const serviceController = require('../Controllers/ServiceController')

//rotas de service
  //post
router.route('/service').post((req, res) => serviceController.create(req, res));
  //getall
router.route('/service').get((req, res) => serviceController.getAll(req, res))
  //get
router.route('/service/:id').get((req, res) => serviceController.get(req, res))
  //delete
router.route('/service/:id').delete((req, res) => serviceController.delete(req, res))
  //put
router.route('/service/:id').put((req, res) => serviceController.update(req, res))

module.exports = router;
