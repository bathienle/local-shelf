import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import AppHeader from '../../app/components/AppHeader.vue';

describe('AppHeader', () => {
  it('should render all navigation links correctly', async () => {
    const wrapper = await mountSuspended(AppHeader);

    expect(wrapper.text()).toContain('LocalShelf');
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Ingredients');
    expect(wrapper.text()).toContain('Recipes');
    expect(wrapper.text()).toContain('About');
  });

  it('should toggles mobile menu correctly', async () => {
    const wrapper = await mountSuspended(AppHeader);

    expect(wrapper.find('div.md\\:hidden.px-4.pt-4').exists()).toBe(false);

    const toggleButton = wrapper.find('button.md\\:hidden');
    await toggleButton.trigger('click');

    expect(wrapper.find('div.md\\:hidden.px-4.pt-4').exists()).toBe(true);
  });
});