# COOKSMART:

We are a page of cooking recipes, described by teachers so that our students and users can learn their recipes. We indicate ingredients with their quantities, allergens and method of preparation. All separated by categories. At the same time, the ingredients of the recipes selected by the teachers for their elaboration are all collected in a total list of ingredients that the administrator receives. the administrator receives these individual lists plus the total list of all these lists and can edit this last list. This one is designed for the purchase of ingredients, so you can edit it if there are ingredients that you may have in stock.

# TOOLS:

-Jira:
https://acalabustos.atlassian.net/jira/software/projects/FIN/boards/2

-Desktop graphic reference.

Figma:
https://www.figma.com/file/BQIskQl8MPebxlx859YY2Y/PROTOTYPE?node-id=0-1&t=7sx8YryM9i9y5xm0-0

-Git / GitHub:
https://github.com/Proyecto-Pedagogico-Recetas/Frontend

-Visual Studio Code

TECHNOLOGIES:
-React
-HTML
-Bootstrap
-CSS
-JS

Requirements, Installation and Getting started:
-NodeJS.
1) Clone the repository
2) npm install
5) npm run dev

# CONTENT:

USER PAGES:
-Modal user, user login.
-Modal user, register login.
-First user page (home), landing page that shows what you will find on our platform with images of different recipes.
-Second user page (menu) with the different categories.
Each category with title and image, and you can open it if you do click. 
*When you select the category what you want, we can see the third page:
-Third user page (Recipes for categories), you can see all the recipes of the category that you select previously.
-Fourth user page, you can see all ingredients, allergens and who make the recipe.
*When you select My recipes (in the navbar menu):
-Fifth user page, the user can see all the recipes that she/he added. Three buttons add new ingredient, add and edit recipes. 
-Sixth user page, formulary to add or edit a recipe with a button to add the recipe or to add the new changes.
-Seven user page (Blog in the navbar menu), the user can open a blog’s link.
ADMIN PAGES:
-Modal Admin, admin login.
-First admin page (home), landing page that shows what you will find on our platform with images of different recipes.
-Second admin page (menu) with the different categories.
-Third admin page, where can edit, deleted and add categories.
-Fourth admin page, where can edit, deleted and add recipes.
-Fifth admin page, where can edit, deleted and add users.
- Sixth admin page, where you can see the list of ingredients of the different masters and the total list of ingredients of all masters. The administrator can edit, download and send by email this list.


We use Bootstrap to make the web responsive.
User experience.
Admin experience.
Repository commits related to the task checklist.
CRUD user: can see, add, edit and delete recipes.
CRUD admin: can see and edit the ingredient’s list. Can make changes with the users.
Search Bar: You can search by categories.

# COMPONET TESTING: 

* CardRecipeTest: This is a unit test file for the CardRecipe component. The @testing-library/react and @testing-library/jest-dom libraries are used for integration with Jest. The file imports the necessary tools, the CardRecipe component, and vi.mock to simulate the data received by the component. In the describe block, all the tests that will be performed are grouped, and beforeEach is used to render the component before each test. The tests verify that the recipe name, author, category, and link to view the recipe are correctly rendered using screen.getByText and expect.

* RecipeInfoTest: This is a unit test file for the RecipeInfo component, which is imported from "../src/Component/RecipeInfo.jsx".
The @testing-library/react and @testing-library/jest-dom testing libraries are used to perform the tests. 
The file contains four tests that verify if the different elements of the recipe are displayed correctly, such as the title, description, ingredients, and image. For each test, the screen.getByText function is used to get the element containing the desired text, and the expect function is used to verify that this element is present in the DOM. vi.mock is also used to create a mock of react-router-dom's useLoaderData, which returns fictitious data of a recipe that will be used in the tests.

* RegisterTest: This code is a set of unit tests for the web application that allows users to register. The @testing-library/react testing library is being used to render and test the Register component. The first test checks if all the form fields are correctly rendered on the screen. The getByLabelText method is used to obtain the corresponding input fields for each form label, and then it is verified that they are present on the screen using the toBeInTheDocument method. The second test verifies if values can be entered into the form fields. The fireEvent.change method is used to simulate user input in each input field. Then, the toHaveValue method is used to verify if the user's input values have been correctly updated on the screen. Overall, these unit tests are important to ensure that the user registration form works correctly, and that any future changes to the code do not affect its functionality.


correctly:

![Test](https://user-images.githubusercontent.com/117833121/235528417-bc316fae-a454-42de-b6fa-94ae59ac491c.JPG)

-If in terminal we execute the: npm run test command, our tests should pass.

Our Team:

[<img src="https://avatars.githubusercontent.com/u/117833586?v=4" width=115><br><sub> Ainhoa Cala </sub>](https://github.com/acalabustos)| [<img src="https://avatars.githubusercontent.com/u/117833121?v=4" width=115><br><sub> Jennifer Cordero </sub>](https://github.com/JenniferCorderoR) |[<img src="https://avatars.githubusercontent.com/u/117834632?v=4" width=115><br><sub> Anyi Flores </sub>](https://github.com/Anyi79) |[<img src="https://avatars.githubusercontent.com/u/117834265?v=4" width=115><br><sub> Celia García </sub>](https://github.com/CeliaGC) |[<img src="https://avatars.githubusercontent.com/u/117834229?v=4" width=115><br><sub> RoseMary Rengel </sub>](https://github.com/rrengelj) |
| :---: | :---: | :---: |  :---: |  :---: | 
