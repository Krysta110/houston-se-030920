
exports.up = function(knex) {
    return knex.schema.createTable('reviews', function (table) {
        table.increments();
        table.string('rating');
        table.integer('lat');
        table.integer('lng');
        table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews')
};
