<template>
  <header class="header__wrapper">
    <nav class="header__nav">
      <h1 class="header__nav--logo">
        <nuxt-link to="/">
          Portfolio Site of Elan Trybuch, Brooklyn, NY
        </nuxt-link>
      </h1>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: grid;
    grid-template-columns: 180px 1fr 1fr 1fr;
  }
  &__nav {
    &--logo {
      background: url('~assets/images/name.png') no-repeat;
      text-indent: -999999px;
      display: block;
      width: 178px;
      height: 79px;
    }
  }
}
</style>
