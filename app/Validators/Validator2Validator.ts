import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Validator2Validator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({

    "hotelName":schema.string(),
    "place":schema.string(),
    "address":schema.string(),
    "builtyear":schema.number()






  })

  
  public messages: CustomMessages = {}
}
