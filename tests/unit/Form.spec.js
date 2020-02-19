import { shallowMount } from '@vue/test-utils'
import Form from '@/pages/form/Form.vue'

describe('Form.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Form)
  })

  it('renders the description field error message ', async () => {
    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-description-error]').exists()).toBe(true)
  })

  it('renders the correct description field error message ', async () => {
    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-description-error]').text()).toMatch('Campo obrigatório')
  })

  it('renders the amount field error message ', async () => {
    wrapper.find('[data-description]').setValue('Some value')
    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-amount-error]').exists()).toBe(true)
  })

  it('renders the correct amount field error message ', async () => {
    wrapper.find('[data-description]').setValue('Some value')
    wrapper.find('form').trigger('submit')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-amount-error]').text()).toMatch('Valor não pode ser 0')
  })

  it('renders the amount value with maskered correctly ', async () => {
    const amountInput = wrapper.find('[data-amount]')
    amountInput.setValue('1009990')
    console.log(amountInput)
    await wrapper.vm.$nextTick()
    expect(amountInput.element.value).toMatch('R$ 10.099,90')
  })

})
