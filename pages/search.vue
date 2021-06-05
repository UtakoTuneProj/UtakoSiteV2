<template>
  <div class="main">
    <ut-movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import moment from 'moment'
import { Vue, Component } from 'vue-property-decorator'
import { Movie } from '~/@types/movie'

@Component
export default class PageSearch extends Vue {
  movie: Movie = {
    id: 'sm9',
    title: 'hoge',
    thumbnail: undefined,
    firstRetrieve: moment(),
    userNickname: 'h',
    movieScore: 33.4,
    viewCounter: 5,
    commentCounter: 5,
    mylistCounter: 5,
    songIndexes: [],
  }

  get movies(): Movie[] {
    return [this.movie, this.movie]
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: #333;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
}
</style>
