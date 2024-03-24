import { mount } from "@vue/test-utils";
import { expect, it, describe, vitest } from "vitest";
import CustomButton from "../common/CustomButton.vue";

describe("CustomButton", () => {
  it("should display label", () => {
    const label = "Button name";

    const customButton = mount(CustomButton, {
      props: {
        label: label,
        action: () => {},
      },
    });

    expect(customButton.html()).toContain(label);
  });

  it("should call action on click", async () => {
    const action = vitest.fn();
    const label = "Button name";

    const customButton = mount(CustomButton, {
      props: {
        action: action,
        label: label,
      },
    });

    await customButton.trigger("click");

    expect(action).toHaveBeenCalledOnce();
  });
});
