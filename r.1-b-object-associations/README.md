### User 

#### `User#name`
* Returns the name of a user

#### `User#buy_tshirt`
* Accepts a tshirt as an parameter and associates with that user

#### `User#tshirts`
* Return an array of all the tshirts a user has

#### `User.most_tshirts`
* Return the user with the most tshirts


### Purchase

#### `Purchase#person`
* Returns the user who made the purchase

#### `Purchase#tshirt`
* Returns the tshirt that was purchased

### TShirt 

#### `TShirt#color`
* Returns the color of the TShirt

#### `TShirt#brand`
* Returns the brand of the TShirt

#### `TShirt#size`
* Returns the size of the TShirt

#### `TShirt#owners`
* Returns an array of users who have bought that shirt

#### `TShirt.all`
* Returns an array of all TShirts