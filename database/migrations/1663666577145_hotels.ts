import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('hotel_name').primary()
      table.string('place')
      table.string('address')
      table.integer('builtyear')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
