import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
    constructor(){
        super('/api/cars')
        this.router
        .get('', this.getCars)
        .post('', this.createCar)
        .get('/:carId', this.getCarById)
        .put('/:carId', this.editCar)
        .delete('/:carId', this.deleteCar)
    }

    async getCars(req, res, next) {
        try {
          let cars = await carsService.getCars()
          res.send(cars)
        } catch (error) {
          next(error)
        }
      }
    
      async createCar(req, res, next) {
        try {
          let carData = req.body
          let car = await carsService.createCar(carData)
          res.send(car)
        }
        catch (error) {
          next(error)
        }
      }
    
      async getCarById(req, res, next) {
        try {
          let car = await carsService.getCarById(req.params.carId)
          res.send(car)
        }
        catch (error) {
          next(error)
        }
      }
    
    
      async editCar(req, res, next) {
        try {
          let carData = req.body // the data from the client usually a form
          let car = await carsService.editCar(req.params.carId, carData)
          res.send(car)
        }
        catch (error) {
          next(error)
        }
      }
    
      async deleteCar(req, res, next) {
        try {
          let car = await carsService.deleteCar(req.params.carId)
          res.send(car)
        }
        catch (error) {
          next(error)
        }
      }
}