export const useIngredientParser = () => {
  const parseIngredients = (rawText: string): Ingredient[] => {
    const lines = rawText.split('\n').map(line => line.trim()).filter(Boolean);

    const ingredients: Ingredient[] = [];

    const amountRegex = /^([\d.,/]+(?:\s?(?:g|kg|ml|l|pcs|pieces|to taste|tbsp|tsp))?)/i;

    for (const line of lines) {
      const amountMatch = line.match(amountRegex);

      if (amountMatch) {
        const amount = amountMatch[0];
        const name = line.slice(amount.length).trim();

        if (name) {
          ingredients.push({ name, amount });
        } else {
          ingredients.push({ name: line, amount: undefined });
        }
      } else {
        ingredients.push({ name: line });
      }
    }
    return ingredients;
  };

  return { parseIngredients };
};
