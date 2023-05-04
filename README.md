COOKSMART:

We are a page of cooking recipes, described by teachers so that our students and users can learn their recipes. We indicate ingredients with their quantities, allergens and method of preparation. All separated by categories. At the same time, the ingredients of the recipes selected by the teachers for their elaboration are all collected in a total list of ingredients that the administrator receives. the administrator receives these individual lists plus the total list of all these lists and can edit this last list. This one is designed for the purchase of ingredients, so you can edit it if there are ingredients that you may have in stock.

TOOLS:

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

CONTENT:

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

COMPONET TESTING: 

-CardRecipeTest:  Es   un   archivo   de   pruebas   unitarias   para   el
componente CardRecipe. Se utiliza la biblioteca @testing-library/react
y   @testing-library/jest-dom   para   integración   con   Jest.   El   archivo
importa   las   herramientas   necesarias,   el   componente   CardRecipe   y
vi.mock   para   simular   los   datos   que   recibe   la   componente.   En   el
bloque describe se agrupan todas las pruebas que se van a realizar y
se   usa   beforeEach   para   renderizar   la   componente   antes   de   cada
prueba.   Las   pruebas   comprueban   que   el   nombre   de   la   receta,   el
autor,   la   categoría   y   el   enlace   para   ver   la   receta   se   rendericen
correctamente, utilizando screen.getByText y expect.
RecipeInfoTest:   Es   un   archivo   de   prueba   unitaria   para   el
componente   RecipeInfo   que   se   importa   desde
"../src/Component/RecipeInfo.jsx". Se utiliza la biblioteca de pruebas
@testing-library/react   y   @testing-library/jest-dom   para   realizar   las
pruebas. El archivo contiene cuatro pruebas que comprueban si los
distintos elementos de la receta se muestran correctamente, como el
título, la descripción, los ingredientes y la imagen. Para cada prueba,
se utiliza la función screen.getByText para obtener el elemento que
contiene   el   texto   deseado   y   la   función   expect   para   comprobar   que
este elemento está presente en el DOM. También se utiliza vi.mock
para   crear   un   mock   de   useLoaderData   de   react-router-dom   que
devuelve   datos   ficticios   de   una   receta   que   se   utilizarán   en   las
pruebas.

-RegisterTest: Este código es un conjunto de pruebas unitarias para
la   aplicación   web   que   permite   a   los   usuarios   registrarse.   Se   está
utilizando   la   biblioteca   de   pruebas   @testing-library/react   para
renderizar y probar el componente Register.
La primera prueba comprueba si todos los campos del formulario se
están renderizando correctamente en la pantalla. Se utiliza el método
getByLabelText para obtener los campos de entrada correspondientes
a cada etiqueta del formulario y luego se verifica que estén presentes
en la pantalla con el método toBeInTheDocument.
La   segunda   prueba   verifica   si   se   pueden   introducir   valores   en   los
campos   del   formulario.   Se   utiliza   el   método   fireEvent.change   para
simular la entrada de datos del usuario en cada campo de entrada.
Luego se utiliza el método toHaveValue para verificar si los valores de
entrada del usuario se han actualizado correctamente en la pantalla.
En   general,   estas   pruebas   unitarias   son   importantes   para   asegurar
que el formulario de registro de usuario funciona correctamente y que
cualquier cambio futuro en el código no afecte su funcionamiento.
Test Backend

-RecipeItemTest:Este archivo de prueba es para verificar si el método ValidateRecipe
de la clase RecipeItemService funciona correctamente.
Primero, se crean tres objetos RecipeItem (recipeA, recipeB y recipeC)
con   diferentes   valores   de   propiedad.   Luego,   se   llama   al   método
ValidateRecipe de la clase RecipeItemService para cada uno de estos


correctly:

![Test](https://user-images.githubusercontent.com/117833121/235528417-bc316fae-a454-42de-b6fa-94ae59ac491c.JPG)

-If in terminal we execute the: npm run test command, our tests should pass.

Our Team:

[<img src="https://avatars.githubusercontent.com/u/117833586?v=4" width=115><br><sub> Ainhoa Cala </sub>](https://github.com/acalabustos)| [<img src="https://avatars.githubusercontent.com/u/117833121?v=4" width=115><br><sub> Jennifer Cordero </sub>](https://github.com/JenniferCorderoR) |[<img src="https://avatars.githubusercontent.com/u/117834632?v=4" width=115><br><sub> Anyi Flores </sub>](https://github.com/Anyi79) |[<img src="https://avatars.githubusercontent.com/u/117834265?v=4" width=115><br><sub> Celia García </sub>](https://github.com/CeliaGC) |[<img src="https://avatars.githubusercontent.com/u/117834229?v=4" width=115><br><sub> RoseMary Rengel </sub>](https://github.com/rrengelj) |
| :---: | :---: | :---: |  :---: |  :---: | 
