/** Демо-рецепт для локального просмотра UI без backend */
export const DEMO_PASSWORD = "demo";

export function getDemoRecipes() {
  return [
    {
      id: 0,
      name: "Latte",
      tastes: [
        { id: 0, name: "sweetness" },
        { id: 1, name: "bitterness" },
      ],
      default_ingredients: [
        { id: 0, name: "milk", value: 200 },
        { id: 1, name: "espresso", value: 30 },
      ],
      change_coefficients: [
        {
          id: 0,
          name: "milk",
          tastes: [
            { id: 0, name: "sweetness", value: 0.05 },
            { id: 1, name: "bitterness", value: -0.02 },
          ],
        },
        {
          id: 1,
          name: "espresso",
          tastes: [
            { id: 0, name: "bitterness", value: 0.08 },
          ],
        },
      ],
    },
  ];
}

export function getPasswordFromUrl() {
  const params = new URL(document.location.toString()).searchParams;
  return params.get("password");
}

export function isDemoPassword(password) {
  return !password || password === DEMO_PASSWORD;
}
