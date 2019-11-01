class Task < ApplicationRecord
    validates :taskname, :description, presence: true

    belongs_to :objective

    def ensure_capitalize
        self.taskname.capitalize!
    end
end 