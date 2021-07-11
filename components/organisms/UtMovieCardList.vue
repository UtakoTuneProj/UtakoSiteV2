<template>
  <div class="movielist">
    <ut-movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Movie } from '~/@types/movie'
import UtMovieCard from '~/components/molecules/UtMovieCard.vue'

@Component({
  components: {
    UtMovieCard,
  },
})
export default class UtMovieCardList extends Vue {
  @Prop() public movies!: Movie[]
}
</script>

<style lang="scss" scoped>
.movielist {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.8rem;
  column-gap: 0.8rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
