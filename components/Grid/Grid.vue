<template>
  <section class="grid__wrapper">
    <article
      v-for="gridItem in gridItems"
      :key="gridItem.id"
      :class="{
        grid__item: true,
        [`grid__item--${gridItem.id}`]: true,
        [`grid__item--${gridItem.type}`]: true
      }"
      :data-id="gridItem.id"
      :data-project="gridItem.projectName"
      @click="handleGridItemClick"
    >
      <nuxt-link :to="`/${gridItem.slugCompany}/${gridItem.slugProjectName}`">
        <figure class="grid__figure--wrapper">
          <nuxt-image
            src="https://res.cloudinary.com/df92rgcyi/image/upload/v1605715376/rockstar_games-red-dead-redemption-3.png"
            width="300"
            height="169"
          />
          <!-- <img class="grid__figure--img" :src="gridItem.thumbnails.thumb_lg" /> -->
          <figcaption>
            <div class="grid__figure--caption-company">
              {{ gridItem.company }}
            </div>
            <div class="grid__figure--caption-project-name">
              {{ gridItem.projectName }}
            </div>
          </figcaption>
        </figure>
      </nuxt-link>
    </article>
  </section>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    gridItems: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleGridItemClick(e) {
      // const id = e.target.dataset.id
      // const project = e.target.dataset.project
    }
  }
}
</script>
<style lang="scss" scoped>
.grid {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 48px 24px;
    margin: 0 24px;
  }

  &__item {
    opacity: 1;
    outline: 1px solid var(--bg-secondary);
    // filter: grayscale(1) blur(1.5px);

    &:hover {
      // filter: grayscale(0) blur(0);
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
