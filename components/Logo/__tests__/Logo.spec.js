import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo/Logo'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Logo, {})
})

afterEach(() => {
  wrapper.destroy()
})

describe('Logo.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  test('matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('HTML matches its snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders a single image', () => {
    expect(wrapper.findAll('svg').length).toEqual(1)
  })
})
