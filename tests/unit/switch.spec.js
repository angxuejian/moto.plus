import store from '@/store'
import { shallowMount } from '@vue/test-utils'
import moSwitch from '@/components/switch'
/**
 * shallowMount: 只渲染自身组件内容，不会渲染组件内的子组件
 * mount: 会渲染组件内的子组件
 */


describe('Components:switch', () => {
  it('render default switch component style', () => {
    const wrapper = shallowMount(moSwitch, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.find('.switch').exists()).toBeTruthy()
    expect(wrapper.find('.switch__theme').exists()).toBeFalsy()
  })
})

