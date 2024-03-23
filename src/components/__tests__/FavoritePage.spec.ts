import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import FavoritesPage from '../FavoritesPage.vue'; // Assuming your component file is named FavoritesPage.vue
import { createPinia } from 'pinia';
import { useDogStore } from '../../store/dogStore';


const MainGrid = {
  template: '<div></div>',
  props: ['showFavorites']
};

const pinia = createPinia();
const mockUseDogStore = () => {
  return useDogStore(pinia);
};

describe('FavoritesPage', async () => {

  it('renders MainGrid component with showFavorites prop set to true', async () => {
    const wrapper = mount(FavoritesPage, {
      global: {
        components: {
          MainGrid
        },
        plugins: [pinia],
        mocks: {
          useDogStore: mockUseDogStore,
        }}
    });

    expect(wrapper.findComponent(MainGrid).props('showFavorites')).toBe(true);
  });
});