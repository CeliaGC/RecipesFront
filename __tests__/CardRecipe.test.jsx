import { render } from "@testing-library/react";
import CardRecipe from "./";

describe("CardRecipe", () => {
  test("renders recipe cards", () => {
    const recipes = [
      {
        id: 1,
        name: "Recipe 1",
        posteBy: "Poste by 1",
        categoryName: "Category 1",
        author: "Author 1",
        category: {
          id: 1,
          name: "Category 1",
        },
      },
      {
        id: 2,
        name: "Recipe 2",
        posteBy: "Poste by 2",
        categoryName: "Category 2",
        author: "Author 2",
        category: {
          id: 2,
          name: "Category 2",
        },
      },
    ];

    const categories = [
      {
        id: 1,
        name: "Category 1",
      },
      {
        id: 2,
        name: "Category 2",
      },
    ];

    const { getByText } = render(
      <CardRecipe recipes={recipes} categories={categories} />
    );

    const recipe1 = getByText(/Recipe 1/);
    expect(recipe1).toBeInTheDocument();

    const recipe2 = getByText(/Recipe 2/);
    expect(recipe2).toBeInTheDocument();
  });
});
