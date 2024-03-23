import { mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import { createPinia } from "pinia";
import { useDogStore } from "../../store/dogStore";
import DetailPage from "../DetailPage.vue";

const CustomButton = {
  template: "<button>{{ label }}</button>",
  props: ["label", "action"],
};

const pinia = createPinia();
const mockUseDogStore = () => {
  return useDogStore(pinia);
};

describe("DetailComponent", () => {
  it("renders detail component with image and description", () => {
    const wrapper = mount(DetailPage, {
      global: {
        components: {
          CustomButton,
        },
        plugins: [pinia],
        mocks: {
          useDogStore: mockUseDogStore,
        },
      },
    });

    expect(wrapper.find(".detail-img").exists()).toBe(true);

    expect(wrapper.find(".detail-content p").text()).toContain(
      "Lorem ipsum dolor"
    );

    const buttons = wrapper.findAllComponents(CustomButton);
    expect(buttons.length).toBe(2);
    expect(buttons[0].text()).toBe("Previus");
    expect(buttons[1].text()).toBe("Next");
  });
});
