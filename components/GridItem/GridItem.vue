<template>
  <div class="grid__wrapper">
    <nuxt-link :to="`/${data.slugCompany}/${data.slugProjectName}`">
      <img :src="logoUrl(data.logoURL)" />
    </nuxt-link>
    <span v-html="data.desc"></span>
  </div>
</template>
<script>
export default {
  name: 'GridItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    logoUrl(str) {
      return `/logos/${str.split('/')[1]}`
    }
  }
}
</script>
