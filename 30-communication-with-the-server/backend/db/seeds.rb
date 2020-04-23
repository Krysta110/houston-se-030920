# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   NPC.create(name: 'Luke', movie: movies.first)
Step.destroy_all
Npc.destroy_all
Player.destroy_all

Player.create( name: 'Link', x: 100, y: 100)

Npc.create( name: 'Rochell', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Adam', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Josie', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Mark', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Trey', x: rand(0..500), y: rand(0..500) )

Npc.create( name: 'Jessica', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Olivia', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Jing', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Zoe', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'TK', x: rand(0..500), y: rand(0..500) )

Npc.create( name: 'Jack', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Eli', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Bobby', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Cory', x: rand(0..500), y: rand(0..500) )
Npc.create( name: 'Hema', x: rand(0..500), y: rand(0..500) )

directions = [ 'left', 'right', 'up', 'down' ]

Npc.all.each do | npc |

    x = 0
    y = 0

    8.times do 
        direction = directions.sample
        duration = rand(300..1000)

        if direction == 'left'
            x -= duration
        end

        if direction == 'right'
            x += duration
        end

        if direction == 'up'
            y += duration
        end

        if direction == 'down'
            y -= duration
        end

        Step.create({ direction: direction, duration: duration, npc: npc })
    end

    if x > 0
        Step.create({ direction: 'left', duration: x, npc: npc })
    end

    if y > 0
        Step.create({ direction: 'down', duration: y, npc: npc })
    end

    if x < 0
        Step.create({ direction: 'right', duration: -1*x, npc: npc })
    end

    if y < 0
        Step.create({ direction: 'up', duration: -1*y, npc: npc })
    end


end