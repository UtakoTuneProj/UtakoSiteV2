<template>
  <v-card @click="onClick">
    <div class="movie-card">
      <v-img
        contain
        :src="thumbnailSrc"
        height="100%"
        width="32%"
        class="thumb"
      />
      <div class="movinfo">
        <div class="top grey--text">
          <div class="taglist text-caption">
            <span v-for="tag in movie.tags" :key="tag" class="tag"
              >#{{ tag }}</span
            >
          </div>
        </div>
        <div class="title">{{ movie.title }}</div>
        <div class="bottom body-2">{{ movie.userNickname }}</div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Movie } from '~/@types/movie'

@Component
export default class UtMovieCard extends Vue {
  @Prop() public movie!: Movie

  get thumbnailSrc() {
    return this.movie.thumbnail || '/img/thumbnail_not_found.png'
  }

  get isAnalyzed() {
    return this.movie.songIndexes.length > 0
  }

  get linkTarget() {
    return '/movie/' + this.movie.id
  }

  @Emit('click')
  public onClick() {
    return this.movie
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  height: 7.2rem;
  padding: 0.6rem;

  > .thumb {
    height: 100%;
    flex-grow: 0;
  }

  > .movinfo {
    display: flex;
    flex-direction: column;
    margin-left: 0.6rem;
    flex-grow: 1;

    > .top {
      > .taglist {
        > .tag:not(:first-child) {
          margin-left: 0.2rem;
        }
      }
    }

    > .title {
      flex-grow: 1;
    }
  }
}
</style>
