## Arrays and Hashes

# Both contain elements
# They both list things
# We can iterate over either one
# They can be changed

# Hashes have keys and values
# Arrays we can reference elements using indexes
# Arrays are defined with square brackets
# Hashes are defined with curly braces

# The number of things in an array can change
# The number of things in a hash usually don't

josh_cards = [
    {
        number: 3,
        suite: 'Spade'
    },
    {
        number: 4,
        suite: 'Spade'
    },
    {
        number: 100,
        suite: 'Spade'
    },
    {
        number: 8,
        suite: 'Spade'
    }
]
steven_cards = [
    {
        number: 6,
        suite: 'Spade'
    },
    {
        number: 9,
        suite: 'Spade'
    },
    {
        number: 200,
        suite: 'Spade'
    },
    {
        number: 2,
        suite: 'Spade'
    }
]


def highest_card(cards)
    highest_card_i_found_so_far = cards[0]
    cards.each do | card | 
        if(card[:number] > highest_card_i_found_so_far[:number])
            highest_card_i_found_so_far = card
        end
    end
    return (highest_card_i_found_so_far)
end

josh_highest_card = highest_card(josh_cards)
steven_highest_card = highest_card(steven_cards)

p josh_highest_card