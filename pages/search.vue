<template>
  <div class="main">
    <ut-movie-card-list :movies="movies" />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import moment from 'moment'
import { Vue, Component } from 'vue-property-decorator'
import { Movie } from '~/@types/movie'
import UtMovieCardList from '~/components/organisms/UtMovieCardList.vue'

@Component({
  components: {
    UtMovieCardList,
  },
})
export default class PageSearch extends Vue {
  movie: Movie = {
    id: 'sm9',
    title: 'あたらしいきょく',
    thumbnail: undefined,
    firstRetrieve: moment(),
    userNickname: 'とあるミクのマスター',
    movieScore: 33.4,
    viewCounter: 5,
    commentCounter: 5,
    mylistCounter: 5,
    songIndexes: [],
    tags: ['ゆったり', 'ピアノミク']
  }

  get movies(): Movie[] {
    return [this.movie, this.movie, this.movie, this.movie, this.movie]
  }
}
</script>

<style lang="scss" scoped>
.main {
  > .movielist {
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
}
</style>
