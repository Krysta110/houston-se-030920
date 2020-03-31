Dog.destroy_all
Breed.destroy_all
Owner.destroy_all

josh = Owner.create({ name: 'Josh', age: 22 })
tess = Dog.create({ name: 'Tess', age: 10, owner: josh, img_url: "" })
rizzo = Dog.create({ name: 'Rizzo', age: 2, owner: josh, img_url: "" })
pip = Dog.create({ name: 'Pip', age: 5 , owner: josh, img_url: ""})