class Contribution < ApplicationRecord

    belongs_to(:author) # author_id
    belongs_to(:book) # book_id

end