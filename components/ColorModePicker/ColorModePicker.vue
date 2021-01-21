<template>
  <div class="color-mode-picker__wrapper">
    <div style="display: block">
      <label class="switch" for="checkbox">
        <input id="checkbox" type="checkbox" :checked="isChecked" />
        <div class="slider round" @click="handleCheck()"></div>
        <span
          v-for="color of colors"
          :key="color"
          :class="{
            [`color-mode-picker__list--${color}`]: true,
            'color-mode-picker__list--item': true,
            'list__item--selected': !getClasses(color).selected
          }"
          @click="$colorMode.preference = color"
        >
          <i :class="`fas fa-${color} fa`" @click="handleCheck()"></i>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
/**
 * @vue-data {Array.<string>} [colors] - returns an array of theme names to use
 */

export default {
  name: 'ColorModePicker',
  data() {
    return {
      isChecked: false,
      colors: ['sun', 'moon'],
      colorMode: null
    }
  },

  methods: {
    /**
     * Returns which theme is preferred and selected
     * @arg color {String} value representing a theme
     * @returns {Object}
     **/
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }

      console.log(this.$colorMode)

      this.colorMode = this.$colorMode.preference
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    },

    handleCheck(color) {
      this.$colorMode.preference = this.colorMode
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style lang="scss">
.color-mode-picker {
  &__wrapper {
    .list__item--selected {
      // filter: invert(0.75);
      display: inline;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    list-style: none;
    justify-content: center;
    align-content: center;
    align-items: center;
    border: 1px solid var(--bg-invert);
    border-radius: 6px;

    &--item {
      padding: 4px;
      display: none;
      border-radius: 3px;
      margin-top: 2px;
      color: var(--bg-invert);
      opacity: 0.75;
    }

    &--dark {
      background: var(--bg-invert);
    }
    &--light {
      background: var(--bg-invert);
    }

    &--sun {
      left: 3px;
      position: relative;
      top: 7px;
    }

    &--moon {
      position: relative;
      right: -30px;
      top: 7px;
    }
  }

  .icon__wrapper {
    color: var(--color);
  }
}
// <label class="switch" for="toggle">
//   <input id="toggle" class="checkbox" type="checkbox" />
// </label>
.switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.switch input {
  // display: none;
  position: absolute;
  bottom: -20px;
}

.slider {
  background-color: #cccccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &::before {
    background-color: var(--bg-invert);
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
  }
}
input:checked + .slider {
  background-color: var(--bg);
}

input:checked + .slider::before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
  border: 1px solid var(--color-primary);
}

.slider.round::before {
  border-radius: 50%;
}
</style>
