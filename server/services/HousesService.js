import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class HousesService {
    async getHouses() {
      //                                   v query object
      let houses = await dbContext.Houses.find()
      return houses
    }
    async getHouseId(houseId) {
      let house = await dbContext.Houses.findById(houseId)
      if (!house) {
        throw new BadRequest('Invalid House Id')
      }
      return house
    }
    async createHouse(houseData) {
      let house = await dbContext.Houses.create(houseData)
      return house
    }
  
    async editHouse(houseId, houseData) {
      let house = await this.getHouseById(houseId)
  
      house.bedrooms = houseData.bedrooms || house.bedrooms
      house.bathrooms = houseData.bathrooms || house.bathrooms
      house.year = houseData.year || house.year
      house.price = houseData.price || house.price
      house.imgUrl = houseData.imgUrl || house.imgUrl
      house.description = houseData.description || house.description
  
      await house.save() // never use update its dangerous
      return house
    }
  
    async deleteHouse(houseId) {
      let house = await this.getHouseById(houseId)
  
      await house.remove() // this deletes it from the database
      return house
  
    }
  }
  
  
  export const housesService = new HousesService()