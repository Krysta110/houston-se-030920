class User
    def passport=(value)
    @passport = value
  end
    def passport
    return @passport
  end
end

class Passport
    def user=(value)
    @user = value
  end
    def user
    return @user
  end
end

josh = User.new()
joshs_passport = Passport.new()

josh.passport = joshs_passport
joshs_passport.user = josh

p josh.passport.user == josh
