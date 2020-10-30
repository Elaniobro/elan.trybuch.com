import { shallowMount } from '@vue/test-utils'
import ColorModePicker from '@/components/ColorModePicker/ColorModePicker'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(ColorModePicker, {
    data() {
      return {
        colors: ['light', 'dark'],
      }
    },
    mocks: {
      // adds mocked `$colorMode` object to the Vue instance
      // before mounting component
      $colorMode: {
        preference: 'dark',
        value: 'dark',
      },
    },
  })
})

// Destroy component after each test case runs
afterEach(() => {
  wrapper.destroy()
})

// Snapshot testing
describe('ColorModePicker.vue HTML', () => {
  test('matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('HTML matches its snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})

// Component testing
describe('ColorModePicker.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
})

// Component method testing
describe('ColorModePicker.vue methods', () => {
  test('getClasses(color) on click', async () => {
    jest.spyOn(wrapper.vm, 'getClasses')
    wrapper.find('.color-mode-picker__list--item').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.getClasses).toHaveBeenCalled()
  })

  test('dark mode clicked', () => {
    wrapper.find('.color-mode-picker__list--dark').trigger('click')
    expect(wrapper.vm.getClasses('dark')).toEqual({
      preferred: true,
      selected: true,
    })
  })

  test('light mode clicked', () => {
    const lightWrapper = shallowMount(ColorModePicker, {
      data() {
        return {
          colors: ['light', 'dark'],
        }
      },
      mocks: {
        // adds mocked `$colorMode` object to the Vue instance
        // before mounting component
        $colorMode: {
          preference: 'light',
          value: 'light',
        },
      },
    })
    expect(lightWrapper.vm.getClasses('dark')).toEqual({
      preferred: false,
      selected: false,
    })
  })
})
