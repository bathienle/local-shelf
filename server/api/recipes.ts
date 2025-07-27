export default defineEventHandler(async (event) => {
  const { ingredients } = getQuery(event);

  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey) {
    return {
      error: 'API key not configured',
    };
  }

  const url = 'https://api.spoonacular.com/recipes/findByIngredients' +
    `?ingredients=${ingredients}` +
    '&number=10' +
    `&apiKey=${apiKey}`;

  try {
    return await $fetch(url);
  } catch (error) {
    return {
      error: 'Failed to fetch recipes',
      details: (error as Error).message,
    };
  }
});
