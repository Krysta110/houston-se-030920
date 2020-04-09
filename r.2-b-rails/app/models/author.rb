class Author < ApplicationRecord

    has_many(:contributions)
    has_many(:books, { through: :contributions })

end