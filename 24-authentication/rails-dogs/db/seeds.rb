DogFeedingTime.destroy_all
FeedingTime.destroy_all
Dog.destroy_all
Breed.destroy_all
User.destroy_all

josh = User.create({ username: 'Josh', password: 'bradybunch' })

terrier = Breed.create({ name: 'Terrier' })
golden_retriever = Breed.create({ name: 'Golden Retriever' })
schnauzer = Breed.create({ name: 'Schnauzer' })


morning = FeedingTime.create({ label: 'Morning' })
afternoon = FeedingTime.create({ label: 'Afternoon' })
evening = FeedingTime.create({ label: 'Evening' })


tess = Dog.create({ 
    name: 'Tess', 
    user_id: josh.id,
    age: 10, 
    breed: terrier,
    feeding_times: [ morning, afternoon ],
    img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/tess.jpg"
})
rizzo = Dog.create({ 
    name: 'Rizzo', 
    user_id: josh.id,
    age: 2, 
    breed: schnauzer,
    feeding_times: [ morning, evening ],
    img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/rizzo.jpg" 
})
pip = Dog.create({ 
    name: 'Pip', 
    user_id: josh.id,
    age: 5 , 
    breed: schnauzer,
    feeding_times: [ evening ],
    img_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/pip.jpg"
})