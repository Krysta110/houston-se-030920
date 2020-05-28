
exports.up = function (knex) {
    return knex.schema.createTable('reviews', function (t) {
        t.increments();
        t.string('rating');
        t.integer('lat');
        t.integer('lng');
        t.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('reviews')
};
