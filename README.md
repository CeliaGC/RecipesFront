# COOK-SMART

"CookSmart" is a full-stack application designed for recipe management in a cooking academy. The initial need is to have a platform where teachers can save, consult, and select recipes that, once added to a favorites list, generate a list with all the necessary ingredients and quantities to prepare them. This list is then automatically sent to the person in charge of the storeroom for purchase processing. Other user profiles, such as "student", are also considered, allowing them to consult the recipes. The recipes are grouped into categories and can be consulted using various filters.

## Technology stack used in Back-end:
* **Microsoft Visual Studio** - [Sitio web oficial](https://visualstudio.microsoft.com/es/)
* **C#** - [Sitio web oficial](https://learn.microsoft.com/es-es/dotnet/csharp/)
* **ASP.NET Core 6** - [Sitio web oficial](https://dotnet.microsoft.com/es-es/download/dotnet/6.0)
* **Entity Framework 7** - [Sitio web oficial](https://learn.microsoft.com/es-es/ef/core/what-is-new/ef-core-7.0/plan)
* **SQL Server Management Studio 18** - [Sitio web oficial](https://learn.microsoft.com/es-es/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16&viewFallbackFrom=sql-server-ver18)  

## Technology stack used in Front-end:
* **Visual Studio Code** 
* **HTML, CSS, Javascript** 
* **React Vite** 
* **Axios** 
* **Bootstrap**  

## Both Front and Back-end:
* **Git** 
* **GitHub** 



## Installation:
Create a directory on your computer to store the project:
* Run ***$ git clone https://github.com/Proyecto-Pedagogico-Recetas/APIRecipes.git***
* Run ***$ git clone https://github.com/Proyecto-Pedagogico-Recetas/Frontend.git***


## How to use it? 
In terminal, in front-end directory run:
* To install the dependencies ***$ npm install***
* To install react router ***$ npm install react-router-dom@6***
* To install axios ***$ npm install axios***
* To activate the server and keep this terminal open ***$ npm run dev***

In back-end, get de server from connection step in SSMS. Add a new connection to server in server explorer, paste de server name, type the new database name and confirm to create the database. Right click on the new connection and get the data connection string from "Properties". Copy it and paste the connection string in appsettings.json file, exactly overwritting from terms "Data"... to ..."Security=true".  
In terminal, run the command "update-database" so the migrations from project Data will be applied in order to built the database in SQL Server. Then you can use the SQL commands here provided to ingress by this order:
* First rol type "Administrador"
* First "UserAdmin"

We also provide some other commands so you can also register a few more files in some tables directly from SQL.


## Methodologies:
*Methodology Agile with Scrum
* Mob Programming
* Pair Programming
* Solo Programming


## Screenshots:
### This is our BBDD:
 ![Diagramatablas](https://user-images.githubusercontent.com/117833121/236322754-6a31388d-5f1e-4591-a3eb-bd062e4b1561.png)

## Media queries:

* insert into RolType

([Name], [Description],IsActive)

values
('Administrador','Access to all methods, management of users', 1)

('Operator','Posts, selects and lists recipes', 1)   

('Visitor','Consults recipes', 1) 



* select * from RolType


* insert into Users

(IdRol, [UserName], InsertDate, IsActive, EncryptedPassword, EncryptedToken, TokenExpireDate)

values  

(1, 'UserAdmin', GETDATE(), 1, '$2a$11$ESGTCdOxoR8oBsDj1OB9m.EmSJ3KTXf.Z873KzubFOtC16dno/0Cq', '', GETDATE())
--password asdasd2, this user, due to his IdRol, will be the only with this rol asingned and the only one able to insert other users--

(2, 'UserOperator', GETDATE(), 1, '$2a$11$F62mpHhfDZQJ65p50Lzz0OgzMnu3fZXcZWTbDjdMl.UrYcJqqG6k6', '', GETDATE())

(3, 'UserVisitor', GETDATE(), 1, '$2a$11$F62mpHhfDZQJ65p50Lzz0OgzMnu3fZXcZWTbDjdMl.UrYcJqqG6k6', '', GETDATE())


* select * from Users


* insert into Alergens

([Name], [IsActive], [IsChecked])

values

('Gluten', 1 , 0 ),

('Lactosa', 1 , 0 )

('Frutos secos', 1, 0)


* select * from Alergens

* insert into Categories

([Name])

values

('Carne'),

('Pescado'),

('Pasta'),

('Arroz')


* select * from Categories





## Tests:


* RecipeItemTest: This test file is to verify if the ValidateRecipe method of the RecipeItemService class works correctly. First, three RecipeItem objects (recipeA, recipeB, and recipeC) with different property values are created. Then, the ValidateRecipe method of the RecipeItemService class is called for each of these objects. Finally, the check or assertion is made that each of these recipe objects returns the expected value in the ValidateRecipe method, using the Assert.AreEqual assertion method. If any of the assertions fail, the custom error message is displayed on the console. In summary, this test file verifies if the ValidateRecipe method of the RecipeItemService class works correctly and produces the expected results for each RecipeItem object.

* OrderItemTest: This code shows an example of a unit test for the OrderItem class. The OrderItemTest class has a ValidateOrderTest method, which is responsible for testing the validity of the OrderItem instance. First, three instances of OrderItem are created with different values for their properties. Then the ValidateOrderA methods are commented out, leaving only the test objects, but the validation code is commented out. Finally, the Assert.AreEqual methods are used to verify that the validation result is true. It is important to mention that the commented code found within the OrderItemService.ValidateOrderA method and the OrderItemService class is a possible implementation of OrderItem object validation.

* UserItemTest: This code shows an example of a unit test using the Microsoft .NET unit testing framework, known as MSTest. The test is performed on the UserItemTest class, and the test method is called ValidateUserTest. The ValidateUserTest method uses three instances of the UserItem class, userA, userB, and userC, and configures them with specific values for each property of the UserItem class. Then, each user is attempted to be validated by calling the ValidateUser method of the UserService class, which is defined in a separate file not included in this code. However, it appears that this method is not used in this implementation since it is commented out in the //Act section.

* Finally, three assertions are included using the Assert.AreEqual method to verify that the users are valid. However, these assertions are also commented out in the //Assert section, suggesting that this particular test has been disabled or not fully implemented.


![Test-Back](https://user-images.githubusercontent.com/117833121/235530906-dbbab2c3-47b4-4258-96eb-29da1ac24bdb.JPG)


## Contributors:
[<img src="https://avatars.githubusercontent.com/u/117833586?v=4" width=115><br><sub> Ainhoa Cala </sub>](https://github.com/acalabustos)| [<img src="https://avatars.githubusercontent.com/u/117833121?v=4" width=115><br><sub> Jennifer Cordero </sub>](https://github.com/JenniferCorderoR) |[<img src="https://avatars.githubusercontent.com/u/117834632?v=4" width=115><br><sub> Anyi Flores </sub>](https://github.com/Anyi79) |[<img src="https://avatars.githubusercontent.com/u/117834265?v=4" width=115><br><sub> Celia García </sub>](https://github.com/CeliaGC) |[<img src="https://avatars.githubusercontent.com/u/117834229?v=4" width=115><br><sub> RoseMary Rengel </sub>](https://github.com/rrengelj) |
| :---: | :---: | :---: |  :---: |  :---: |

## Next steps:
 
* Administrator limits the recipes that each user can view (subscription): This means that the system administrator can restrict access to certain recipes for specific users, depending on the type of subscription they have.

* Save your recipes as favorites: This feature allows users to save their favorite recipes to a special list, so they can easily access them in the future.

* Tags: Tags are keywords used to categorize and organize recipes. For example, tags like "vegetarian," "dessert," "quick," "easy," etc. can be used.

* Download technical sheet: The technical sheet is a document that describes the details of a recipe, such as the ingredients, quantities, cooking times, etc. This  feature allows users to download this information in a file format for later use.

* Email notification: This feature allows users to receive email notifications when new recipes are added or existing information is updated.

* Download ingredient list: This feature allows users to download an ingredient list for a specific recipe, to facilitate the purchase of ingredients.

* Filter recipes by user: This feature allows users to search and filter recipes by the user who created them.

* Incorporate more users (students), sections like blog, curiosities, recipe images, subject content: This feature refers to the possibility of adding new users, such   as students, and creating additional sections in the system, such as a blog, a section for curiosities, recipe images and subject-specific content.

* Add tag: This feature allows users to add new tags to an existing recipe to categorize it more specifically.
