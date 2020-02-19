import { shallowMount } from '@vue/test-utils'
import EmptyList from '@/components/EmptyList.vue'

describe('EmptyList.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'Não há transações cadastradas'
    const wrapper = shallowMount(EmptyList, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
