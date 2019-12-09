const express=require('express')
const router=express.Router()
const customerController=require('../app/controllers/customerController')
const departmentController=require('../app/controllers/deparmentsController')
const employeeController=require('../app/controllers/employeeController')
const ticketController=require('../app/controllers/ticketController')


router.get('/customer',customerController.list)
router.post('/customer',customerController.create)
router.get('/customer/:id',customerController.show)
router.put('/customer/:id',customerController.update)
router.delete('/customer/:id',customerController.destroy)

router.get('/departments',departmentController.list)
router.post('/departments',departmentController.create)
router.get('/departments/:id',departmentController.show)
router.put('/departments/:id',departmentController.update)
router.delete('/departments/:id',departmentController.destroy)

router.get('/employees',employeeController.list)
router.post('/employee',employeeController.create)
router.get('/employee/:id',employeeController.show)
router.put('/employee/:id',employeeController.update)
router.delete('/employee/:id',employeeController.destroy)

router.get('/tickets',ticketController.list)
router.post('/ticket',ticketController.create)
router.get('/ticket/:id',ticketController.show)
router.put('/ticket/:id',ticketController.update)
router.delete('/ticket/:id',ticketController.destroy)

module.exports= router