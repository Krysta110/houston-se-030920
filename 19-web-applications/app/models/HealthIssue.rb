class HealthIssue < ActiveRecord::Base

    has_many(:diagnoses)
    has_many(:patients, through: :diagnoses)

end