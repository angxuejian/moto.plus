import { ref } from 'vue'
import { createStore } from 'vuex'
import { shallowMount  } from '@vue/test-utils'
import moSwitch from '@/components/switch/index'
/**
 * shallowMount: 只渲染自身组件内容，不会渲染组件内的子组件
 * mount: 会渲染组件内的子组件
 */

const store = createStore({ 
  state() { return { theme: '' } },
  mutations: {
    SET_THEME: (state, value) => { state.theme = value },
  },
})

describe('Components:switch', () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(moSwitch, {
      global: { plugins: [store] },
      props: { 
        theme: false,
        modelValue: false,
      },
    })
  })

  test('render default style', () => {
 
    /**
     * classes: 只能找到 moSwitch组件根节点的class
     * find: 可以找到 moSwitch组件下的所有class
     */
    expect(wrapper.find('.switch').exists()).toBe(true)
    expect(wrapper.find('.switch__theme').exists()).toBe(false)
  })

  it('render theme style', async () => {
    await wrapper.setProps({ theme: true })
    expect(wrapper.find('.switch').exists()).toBeFalsy()
    expect(wrapper.find('.switch__theme').exists()).toBeTruthy()
  })

  it('set theme style checkbox value', async () => {
    await wrapper.setProps({ theme: true })
    await store.commit('SET_THEME', 'dark')

    expect(wrapper.find('.switch').exists()).toBeFalsy()
    expect(wrapper.find('.switch__theme').exists()).toBeTruthy()
    expect(wrapper.find('.switch__checked').exists()).toBeTruthy()
  })

  it('v-model', async () => {
    const vm = wrapper.vm
    const value = ref(true)

    await wrapper.setProps({ modelValue: value })
    expect(vm.checked).toBe(true)

    await wrapper.setProps({ modelValue: false })
    expect(vm.checked).toBe(false)
    expect(value.value).toBe(false)
  })

  it('change event', async () => {
    const vm = wrapper.vm

    vm.$emit('change', true)
    await vm.$nextTick()
    expect(wrapper.emitted().change[0][0]).toBe(true)

    vm.$emit('change', false)
    await vm.$nextTick()
    expect(wrapper.emitted().change[1][0]).toBe(false)
  })
})

