class Book < ApplicationRecord

    belongs_to(:genre)
    has_many(:contributions)
    has_many(:authors, { through: :contributions })

end