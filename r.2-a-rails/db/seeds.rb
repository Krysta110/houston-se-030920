Song.destroy_all
Album.destroy_all
Artist.destroy_all

drake = Artist.create({ name: "Drake" })
coldplay = Artist.create({ name: 'Coldplay'})
chet = Artist.create({ name: 'Chet Baker'})
daft_punk = Artist.create({ name: 'Daft Punk '})
george_strait = Artist.create({ name: 'George Strait'})

Album.create({ name: 'Album 1', artist_id: Artist.all.sample.id })
Album.create({ name: 'Album 2', artist_id: Artist.all.sample.id })
Album.create({ name: 'Album 3', artist_id: Artist.all.sample.id })
Album.create({ name: 'Album 4', artist_id: Artist.all.sample.id })

Song.create({ name: 'Hotline Bling', album_id: Album.all.sample.id })
Song.create({ name: 'Yellow', album_id: Album.all.sample.id })
Song.create({ name: 'My Funny Valentine', album_id: Album.all.sample.id })
Song.create({ name: 'Verdis Quo', album_id: Album.all.sample.id })
Song.create({ name: 'Right or Wrong', album_id: Album.all.sample.id })