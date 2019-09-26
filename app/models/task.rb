class Task < ApplicationRecord
    validates :taskname, :description, presence: true

    belongs_to :objective
end 