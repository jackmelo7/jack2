import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CustomerHotel from 'App/Models/CustomerHotel'
import Validator from 'App/Validators/Validator'

export default class CustomersController {
    public async add({request}:HttpContextContract){
        const v = await request.validate(Validator)
        const table1 = new CustomerHotel()
        table1.name=v['name']
        table1.age=v['age']
        table1.yearofstarting=v['yearofstarting']
        table1.hotelName=v['hotelName']
        await table1.save()
        return CustomerHotel.all()

}
public async del({request}:HttpContextContract){
    const d=await CustomerHotel.findOrFail(request.input('id'))
    d.delete()
    return CustomerHotel.all()

 }
 public async read(){
    return CustomerHotel.all()
}
public async update({request}:HttpContextContract){
    const val=await request.validate(Validator)
    const a=await CustomerHotel.findOrFail(request.input('id'))
    a.hotelName=val['hotelName']
    a.save()
    return "updated"

}

public async search({ request }: HttpContextContract) {
    const a = request.input("find")
    return Database
        .from('customer_hotels') .where((query) => {
        if (/^[0-9]/.test(a)) {query.where('id' ,a)
        .orWhere('yearofstarting', a)

        .orWhere('age', a)
    }})
        .orWhere((query) => {query
        .where('name', a)
        .orWhere('hotel_name', a)
        })
}
public async sortname() {
    return CustomerHotel.query().orderBy("name",'asc')
    }
    public async sortage() {
        return CustomerHotel.query().orderBy("age",'asc')
        }
        public async sortyearofstarting() {
            return CustomerHotel.query().orderBy("yearofstarting",'asc')
            }
            public async sorthotelName() {
                return CustomerHotel.query().orderBy("hotelName",'asc')
                }


public async count() {
   const count = await Database
  .from('customer_hotels')
  .countDistinct('name')                          // Returns array

const total = count[0]['count(distinct "name")'] 
return total

}

}