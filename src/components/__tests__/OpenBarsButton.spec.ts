import { mount } from '@vue/test-utils'
import { expect, it, describe, vitest } from 'vitest'

import OpenBarsButton from '../OpenBarsButton.vue'

describe('OpenBarsButton', ()=>{

  it('should call action on click', async ()=>{

    const action = vitest.fn();

    const customButton = mount(OpenBarsButton, {
      props: {
        action: action,
      }
    });

    await customButton.trigger('click');

    expect(action).toHaveBeenCalledOnce();

  })

});