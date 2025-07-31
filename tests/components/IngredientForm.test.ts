import { mountSuspended } from '@nuxt/test-utils/runtime';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { VueWrapper } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

import IngredientForm from '../../app/components/IngredientForm.vue';

describe('IngredientForm', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(async () => {
    wrapper = await mountSuspended(IngredientForm);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render component correctly', async () => {
    expect(wrapper.text()).toContain('Add an ingredient manually');
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });

  it('should enable the button when name is filled', async () => {
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();

    const nameInput = wrapper.find('input[placeholder="Ingredient name"]');
    await nameInput.setValue('Tomato');

    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
  });

  it('should emit "add-ingredient" event when submit is hit', async () => {
    const nameInput = wrapper.find('input[placeholder="Ingredient name"]');
    const amountInput = wrapper.find('input[placeholder="Amount"]');

    await nameInput.setValue('Tomato');
    await amountInput.setValue('2');

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted()['add-ingredient']).toBeTruthy();
    expect(wrapper.emitted()['add-ingredient']![0][0]).toEqual({
      name: 'Tomato',
      amount: '2',
    });

    expect(nameInput.element.value).toBe('');
    expect(amountInput.element.value).toBe('');
  });
});
