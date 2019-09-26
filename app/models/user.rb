class User < ApplicationRecord 
    validates :email, :password_digest, :first_name, :last_name, presence: true
    validates :email, uniqueness: true
    
    belongs_to :cohort
    has_many :objectives

    after_initialize :ensure_token

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
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