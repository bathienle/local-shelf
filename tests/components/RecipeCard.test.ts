import { mountSuspended } from '@nuxt/test-utils/runtime';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { VueWrapper } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

import RecipeCard from '../../app/components/RecipeCard.vue';

const sampleRecipe = {
  image: 'https://example.com/image.jpg',
  title: 'Delicious Pancakes',
  usedIngredients: [
    { id: 1, amount: 2, unit: 'cups', name: 'Flour' },
    { id: 2, amount: 1, unit: 'cup', name: 'Milk' },
  ],
  missedIngredients: [
    { id: 3, amount: 1, unit: 'tbsp', name: 'Sugar' },
  ],
};

describe('RecipeCard.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(async () => {
    wrapper = await mountSuspended(RecipeCard, {
      props: { recipe: sampleRecipe },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render recipe image and title correctly', () => {
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(sampleRecipe.image);
    expect(img.attributes('alt')).toBe('Recipe Image');

    expect(wrapper.text()).toContain(sampleRecipe.title);
  });

  it('should render used ingredients section when usedIngredients exist', () => {
    expect(wrapper.text()).toContain('Used Ingredients:');

    sampleRecipe.usedIngredients.forEach(ingredient => {
      expect(wrapper.text()).toContain(`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`);
    });
  });

  it('should render missed ingredients section when missedIngredients exist', () => {
    expect(wrapper.text()).toContain('Missed Ingredients:');

    sampleRecipe.missedIngredients.forEach(ingredient => {
      expect(wrapper.text()).toContain(`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`);
    });
  });

  it('should not render used ingredients section if none exist', async () => {
    await wrapper.setProps({
      recipe: { ...sampleRecipe, usedIngredients: [] },
    });

    expect(wrapper.text()).not.toContain('Used Ingredients:');
  });

  it('should not render missed ingredients section if none exist', async () => {
    await wrapper.setProps({
      recipe: { ...sampleRecipe, missedIngredients: [] },
    });

    expect(wrapper.text()).not.toContain('Missed Ingredients:');
  });
});
