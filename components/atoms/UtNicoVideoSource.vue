<template>
  <iframe frameborder="no" scrolling="no" allow="fullscreen" :src="src" />
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UtMovieCard extends Vue {
  @Prop() public movieId!: string

  get src(): string {
    return `https://embed.nicovideo.jp/watch/${this.movieId}?jsapi=1`
  }
}
</script>

<style lang="scss" scoped>
.movie-source {
  margin: auto;
}
</style>
