# Rails Authentication

* ### Resources

  - **Formative Education Deck:** <https://formative.education/projects/25/edit>



### Learning Goals

* Add a secured password to a user model using `has_secure_password` and a `password_digest`
* Check password equivalence with `.authenticate`

> Break
- Use the session to implement authorization
- Use `before_action` hooks to run code before any controller action



### Learning Goal 1: Define Authentication, Hashing, Encryption
##### Demonstrate
* The difference between authentication and authorization
* Define hashing
* Why we would want to hash user passwords
* Using 

##### Questions 





### Learning Goal 2: Add a secure password to a user model using `has_secure_password` and `password_digest`

##### Demonstrate

- `BCrypt::Password.create("my password")`
- `my_password = BCrypt::Password.new("$2a$12$to3T6g10t0o1ekf1M4kpjuRp4R8.PHJvSAq4
  fJ8jZ29MTx0ku1L/2")`
- Adding a `password_digest` to the users table
- Adding `has_secure_password` to the users model
- How we can now set the password of a user and it will create the `password_digest` hash

##### Vocabulary

- BCrypt 
  - A gem for hashing strings

##### Questions 




### Learning Goal 3: Check password equivalence with `.authenticate`

##### Demonstrate

- Using `.authenticate`
- Adding that logic to an `authenticate` endpoint
- Saving the users `id` in the session

##### Questions 





```ruby
def create
    traveler = Traveler.find_by(username: params[:username])
    if traveler && traveler.authenticate(params[:password])
        # Authenticated!
        session[:current_traveler_id] = traveler.id
        redirect_to "/travelers/#{traveler.id}/"
    else
        # Ooops!
    end
end



def current_traveler
    Traveler.find(session[:current_traveler_id])
end
```