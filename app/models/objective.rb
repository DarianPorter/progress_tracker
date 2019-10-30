class Objective < ApplicationRecord
    validates :name, presence: true

    belongs_to :user 
    has_many :tasks 

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
end