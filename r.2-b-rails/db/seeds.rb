Book.destroy_all
Author.destroy_all
Contribution.destroy_all
Genre.destroy_all

5.times do 
    Author.create({
        name: Faker::Book.author
    })
end

5.times do 
    Genre.create({
        name: Faker::Book.genre
    })
end

10.times do 
    Book.create({
        name: Faker::Book.title,
        genre_id: Genre.all.sample.id
    })
end

5.times do 
    Contribution.create({
        author_id: Author.all.sample.id,
        book_id:  Book.all.sample.id
    })
end