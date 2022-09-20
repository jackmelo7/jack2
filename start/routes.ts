

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/add','CustomersController.add')
    Route.delete('/del','CustomersController.del')
    Route.put('/update','CustomersController.update')
    Route.get('/read','CustomersController.read')
    Route.post('/search','CustomersController.search')
    Route.get('/sortname','CustomersController.sortname')
    Route.get('/sortage','CustomersController.sortage')
    Route.get('/sortyearofstarting','CustomersController.sortyearofstarting')
    Route.get('/hotelName','CustomersController.hotelName')
    Route.get('/count','CustomersController.count')
  
    
    }).prefix('pre')






    Route.group(() => {
        Route.post('/create','HotelsController.create')
        Route.delete('/delete','HotelsController.delete')
        Route.put('/updating','HotelsController.updating')
        Route.get('/reading','HotelsController.reading')
        Route.post('/searching','HotelsController.searching')
        Route.get('/sorthotelname','HotelsController.sorthotelname')
        Route.get('/sortplace','HotelsController.sortplace')
        Route.get('/sortaddress','HotelsController.sortaddress')
        Route.get('/sortbuiltyear','HotelsController.sortbuiltyear')
        })
    

