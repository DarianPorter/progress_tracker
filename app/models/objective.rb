class Objective < ApplicationRecord
    validates :name, presence: true

    belongs_to :user 
    has_many :tasks 

    def is_complete?
        self.tasks.each { |task| return false if !task.finished }
        self.finished = true
        self.save!
    end

end