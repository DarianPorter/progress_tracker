class Cohort < ApplicationRecord
    validates :year, presence: true

    has_many :students, foreign_key: :cohort_id, class_name: :User
end