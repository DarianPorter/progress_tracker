class User < ApplicationRecord 
    validates :email, :password_digest, :first_name, :last_name, presence: true
    validates :email, uniqueness: true
    
    has_many :objectives

    after_initialize :ensure_token
    before_save :ensure_capitalize

    def class_year
        return "0000" if read_attribute(:class_year) == nil
        return  read_attribute(:class_year)
 
    end

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_capitalize
        self.first_name.capitalize!
        self.first_name.capitalize!
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        return self.session_token
    end

    def self.find_by_cred(email, password)
        user = User.find_by(email: email)
        return nil if user == nil
        return user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        return BCrypt::Password.new(self.password_digest).is_password?(password)        
    end
end 