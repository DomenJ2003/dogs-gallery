import { mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import { createPinia } from "pinia";
import { useDogStore } from "../../store/dogStore";
import ErrorModal from "../modals/ErrorModal.vue";

const CustomButton = {
  template: "<button>{{ label }}</button>",
  props: ["label", "action"],
};

const pinia = createPinia();
const mockUseDogStore = () => {
  return useDogStore(pinia);
};

describe("ErrorModal", () => {
  it("renders error modal when there is an error message", () => {
    const dogStore = mockUseDogStore();
    const errorMessage = "Error";
    dogStore.errorMessage = errorMessage;
    const wrapper = mount(ErrorModal, {
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

    expect(wrapper.find(".error-modal-container").exists()).toBe(true);
    expect(wrapper.find(".error-body").text()).toContain(errorMessage);
    expect(wrapper.findComponent(CustomButton).exists()).toBe(true);
    expect(wrapper.findComponent(CustomButton).props("label")).toBe("Retry");
  });
});
