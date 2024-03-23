import { mount } from '@vue/test-utils'
import { expect, it, describe, vitest } from 'vitest'

import CloseBarsButton from '../OpenBarsButton.vue'

describe('CloseBarsButton', ()=>{

  it('should call action on click', async ()=>{

    const action = vitest.fn();

    const customButton = mount(CloseBarsButton, {
      props: {
        action: action,
      }
    });

    await customButton.trigger('click');

    expect(action).toHaveBeenCalledOnce();

  })

});