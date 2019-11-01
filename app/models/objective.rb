class Objective < ApplicationRecord
    validates :name, presence: true

    belongs_to :user 
    has_many :tasks 

    before_save :ensure_capitalize

    def is_complete?
        if self.tasks.length == 0
            self.finished = false
            self.save
            return
        end
        self.tasks.each do |task| 
            if !task.finished 
                self.finished = false
                return
            end
        end
        self.finished = true
        self.save!
    end

    def ensure_capitalize
        self.name.capitalize!
    end
end