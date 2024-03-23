import { mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import { createPinia } from "pinia";
import AppBar from "../AppBar.vue";
import { useDogStore } from "../../store/dogStore";

const pinia = createPinia();
const mockUseDogStore = () => {
  return useDogStore(pinia);
};

describe("AppBar.vue", () => {
  it("renders welcome message when no breed is selected", () => {
    const dogStore = mockUseDogStore();
    const wrapper = mount(AppBar, {
      global: {
        plugins: [pinia],
        mocks: {
          useDogStore: dogStore,
        },
      },
    });

    expect(wrapper.find(".title").text()).toBe("Welcome to Dog Gallery");
  });

  it("renders selected breed in uppercase when a breed is selected", async () => {
    const mockSelectedBreed = "labrador";
    const dogStore = mockUseDogStore();
    dogStore.setSelectedBreed(mockSelectedBreed);

    const wrapper = mount(AppBar, {
      global: {
        plugins: [pinia],
        mocks: {
          useDogStore: dogStore,
        },
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find(".title").text()).toBe(mockSelectedBreed.toUpperCase());
  });

  it("contains navigation links", () => {
    const wrapper = mount(AppBar);

    const links = wrapper.findAll(".link");

    expect(links.length).toBe(2);
    expect(links[0].text()).toBe("Home");
    expect(links[1].text()).toBe("Favorites");
  });
});
