import moment from 'moment'
import { SongIndex } from './song_index'

export interface Movie {
  id: string
  title: string
  thumbnail: string | undefined
  firstRetrieve: moment.Moment
  userNickname: string
  movieScore: number
  viewCounter: number
  commentCounter: number
  mylistCounter: number
  songIndexes: SongIndex[]
  tags: string[]
}
