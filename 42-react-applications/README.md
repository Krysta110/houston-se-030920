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



1. Plan a component hierarcy
    * Plan where to put state
2. Build a static version
    * No events yet
3. Add inverse data flow 
    * So that we can respond to events (the user doing things)


* App - Parent to the AirlineList / Grandparent of AirlineListItem
    * state: { Array of tickets, Selected Airline Name }
    * children
        * AirlineList -  Child to the App / Parent to the AirlineListItem
            * state: { Array of airlines }  
            * children:
                * AirlineListItem []

        * AirlineDetail
            * state
            * children
                * AirlineTitle
                * TicketList
                    * TicketListItem []
                * Form