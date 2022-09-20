import { BaseModel, column, hasOne } from '@ioc:Adonis/Lucid/Orm'


export default class Hotel extends BaseModel {


  @column()
  public hotelName: string

  @column()
  public  place: string

  @column()
  public  address: string

  @column()
  public   builtyear: number

  
}
