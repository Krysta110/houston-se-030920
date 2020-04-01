class Patient < ActiveRecord::Base
    has_many(:diagnoses)
    has_many(:health_issues, through: :diagnoses)
end