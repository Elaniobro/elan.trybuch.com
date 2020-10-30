<template>
  <div class="grid__wrapper">
    <div v-for="link in links" :key="link.id" class="grid__item">
      <GridItem />
    </div>
  </div>
</template>
<script>
import GridItem from '@/components/GridItem/GridItem'

export default {
  name: 'Grid',
  components: { GridItem },
  data() {
    return {
      links: [1, 2, 3, 4],
    }
  },
}
</script>
