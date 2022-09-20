
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomerHotel extends BaseModel {
  @column({ isPrimary: true })
  public hotelName: string

  @column()
  public name:string

  @column()
  public age:number

  @column()
  public yearofstarting:number



}
