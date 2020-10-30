import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header/Header'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Header, {})
})

afterEach(() => {
  wrapper.destroy()
})

describe('Header.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  test('matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('HTML matches its snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders a default wrapper className', () => {
    expect(wrapper.find('div').classes()).toEqual(['header__wrapper'])
  })
})
