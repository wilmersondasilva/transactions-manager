import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('renders the heading title', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.text()).toMatch('Gerenciador de Transações')
  })
})
