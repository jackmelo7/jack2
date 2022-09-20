import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customer_hotels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('age')
      table.integer('yearofstarting')
      table.string('hotel_name').primary()
    })  
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
