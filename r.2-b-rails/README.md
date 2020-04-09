
### Subjects to Cover 
* `form_with`
* Sketching Associations 
* Search & Filter (options)
* When to use plural and singular
* Writing migrations from the terminal

# Library Catalog
* User should be able to see a list of books
    * The books authors
        * When you click on a books author 
        * user sees other books by the same author
    * The books genre
        * When you click on the books genre
        * user sees other books in the same genre
* User should be able to see a list of authors
    * Takes you to the single author page
* User (think librarian) should be able to add a book to the catalog


### Data Schema
Author | Book | Genre

Genre -< Book
Author -< Contribution >- Book

# Authors
1. Angelo
2. Isaac

# Book
1. The Definitive Guide to Creating Data Schemas

# Contributions
1. book_id: 1, author_id: 1
2. book_id: 1, author_id: 2
