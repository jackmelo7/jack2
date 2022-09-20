import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Validator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    "name": schema.string(),
    "age":schema.number(),
    "yearofstarting":schema.number(),
    "hotelName":schema.string(),

    




  })

  
  public messages: CustomMessages = {}
}
