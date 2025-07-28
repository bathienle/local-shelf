export const useIngredientParser = () => {
  const parseIngredients = (rawText: string): Ingredient[] => {
    const lines = rawText.split('\n').map(line => line.trim()).filter(Boolean);

    const ingredients: Ingredient[] = [];

    const quantityRegex = /^([\d.,/]+(?:\s?(?:g|kg|ml|l|pcs|pieces|to taste|tbsp|tsp))?)/i;

    for (const line of lines) {
      const quantityMatch = line.match(quantityRegex);

      if (quantityMatch) {
        const quantity = quantityMatch[0];
        const name = line.slice(quantity.length).trim();

        if (name) {
          ingredients.push({ name, quantity });
        } else {
          ingredients.push({ name: line, quantity: undefined });
        }
      } else {
        ingredients.push({ name: line });
      }
    }
    return ingredients;
  };

  return { parseIngredients };
};
