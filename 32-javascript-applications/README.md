# Airport Administration Portal

# User Stories:

### MVP (Minimum Viable Product)

- User will be able to see a list of airlines
- User will be able to select an airline 
    - to see a list of tickets
        - Should be able to see the starting point
        - Should be able to see the destination
        - Should be able to see the date
        - Should be able to see the price
        - Should be able to see the seat number
    - User will be able to create a ticket for the selected airline
        - It should appear in the list
        - It should persist



* Airlines Controller
  * `index` (to get a list of airlines)
  * `airline_tickets `(get the tickets for a specific airline)
* Tickets Controller 
  * `create` (create a ticket associated with the selected airline)



### Steps

#### Step 1: Define Schema

* Airline -< Tickets

* Airline
  *  
  * `name` (string)
* Ticket
  * `belongs_to` airline
  * `airline_id` (integer)
  * `destination` (string)
  * `starting_point` (string)
  * `seat_number` (string)
  * `date` (date time)
  * `price` (float)



#### Step 2 Make the Tables

* `rails generate model/migration`



#### Step 3 Create Seed Data to test the Tables

* Destroy everything first
* Create some fake data



#### Step 4 Create the controller methods

* ALWAYS TEST THESE AS YOU FINISH  THEM
* Use fetch or postman for the non-get requests



#### Step 5 Create the frontend

* 








