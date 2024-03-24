import { mount } from "@vue/test-utils";
import { expect, it, describe, vitest } from "vitest";
import SidebarButton from "../common/SidebarButton.vue";

describe("SidebarButton", () => {
  it("should call action on click", async () => {
    const action = vitest.fn();

    const customButton = mount(SidebarButton, {
      props: {
        action: action,
      },
    });

    await customButton.trigger("click");

    expect(action).toHaveBeenCalledOnce();
  });

  it("should have class close-button", async () => {
    const action = vitest.fn();

    const customButton = mount(SidebarButton, {
      props: {
        action: action,
        isCloseButton: true,
      },
    });

    expect(customButton.classes()).includes("close-button");
  });

  it("should have class bars-button", async () => {
    const action = vitest.fn();

    const customButton = mount(SidebarButton, {
      props: {
        action: action,
      },
    });

    expect(customButton.classes()).includes("bars-button");
  });
});
