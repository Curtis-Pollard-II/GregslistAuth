import { housesService } from "../services/HousesService"
import BaseController from "../utils/BaseController"

export class HousesController extends BaseController {
    constructor(){
        super('/api/houses')
        this.router
        .get('', this.getHouses)
        .post('', this.createHouse)
        .get('/:houseId', this.getHouseById)
        .put('/:houseId', this.editHouse)
        .delete('/:houseId', this.deleteHouse)
    }

    async getHouses(req, res, next) {
        try {
          let houses = await housesService.getHouses()
          res.send(houses)
        } catch (error) {
          next(error)
        }
      }
    
      async createHouse(req, res, next) {
        try {
          let houseData = req.body
          let house = await housesService.createHouse(houseData)
          res.send(house)
        }
        catch (error) {
          next(error)
        }
      }
    
      async getHouseById(req, res, next) {
        try {
          let house = await housesService.getHouseById(req.params.houseId)
          res.send(house)
        }
        catch (error) {
          next(error)
        }
      }
    
    
      async editHouse(req, res, next) {
        try {
          let houseData = req.body // the data from the client usually a form
          let house = await housesService.editHouse(req.params.houseId, houseData)
          res.send(house)
        }
        catch (error) {
          next(error)
        }
      }
    
      async deleteHouse(req, res, next) {
        try {
          let house = await housesService.deleteHouse(req.params.houseId)
          res.send(house)
        }
        catch (error) {
          next(error)
        }
      }
}