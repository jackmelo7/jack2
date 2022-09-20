 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Hotel from 'App/Models/Hotel'
import Validator2Validator from 'App/Validators/Validator2Validator'

export default class HotelsController {

    public async create({request}:HttpContextContract){
        const v2 = await request.validate(Validator2Validator)
        const table2 = new Hotel()
        table2.hotelName=v2['hotelName']
        table2.place=v2['place']
        table2.address=v2['address']
        table2.builtyear=v2['builtyear']
        await table2.save()
        return Hotel.all()
}
public async delete({request}:HttpContextContract){
    const d=await Hotel.findOrFail(request.input('id'))
    d.delete()
    return Hotel.all()

 }
 public async reading(){
    return Hotel.all()
}
public async updating({request}:HttpContextContract){
    const val=await request.validate(Validator2Validator)
    const a=await Hotel.findOrFail(request.input('id'))
    a.place=val['place']
    a.address=val['address']
    a.save()
    return "updated"
}
public async searching({ request }: HttpContextContract) {
    const a = request.input("find")
    return Database
        .from('hotels') .where((query) => {
        if (/^[0-9]/.test(a)) {query.where('id' ,a)
        

        .orWhere('builtyear', a)
    }})
        .orWhere((query) => {query
        .where('place', a)
        .orWhere('hotel_name', a)
        })
}
public async sorthotelname() {
    return Hotel.query().orderBy("hotelName",'asc')
    }
    public async sortplace() {
        return Hotel.query().orderBy("place",'asc')
        }
        public async sortaddress() {
            return Hotel.query().orderBy("address",'asc')
            }
            public async sortbuiltyear() {
                return Hotel.query().orderBy("builtyear",'asc')
                }
}
