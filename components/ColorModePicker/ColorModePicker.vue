<template>
  <div class="color-mode-picker__wrapper">
    <ul class="color-mode-picker__list">
      <li
        v-for="color of colors"
        :key="color"
        :class="{
          [`color-mode-picker__list--${color}`]: true,
          'color-mode-picker__list--item': true,
          'list__item--preferred': getClasses(color).preferred,
          'list__item--selected': !getClasses(color).selected
        }"
        @click="$colorMode.preference = color"
      >
        <span class="icon__wrapper">
          <i
            :class="`fas fa-${color} fa-2x`"
            @click="$colorMode.preference = color"
          >
          </i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * @vue-data {Array.<string>} [colors] - returns an array of theme names to use
 */

export default {
  name: 'ColorModePicker',
  data() {
    // ['system', 'light', 'dark']
    return {
      colors: ['sun', 'moon']
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
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
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
      background: var(--bg);
      color: var(--bg-invert);
      opacity: 0.75;
    }

    &--dark {
      background: var(--bg-invert);
    }
    &--light {
      background: var(--bg-invert);
    }
  }

  .icon__wrapper {
    color: var(--color);
  }
}
</style>
