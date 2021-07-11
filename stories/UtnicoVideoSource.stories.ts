import UtNicoVideoSource from '@/components/atoms/UtNicoVideoSource.vue'

export default {
  title: 'atoms/UtNicoVideoSource',
  components: UtNicoVideoSource,
}

export const asComponent = () => ({
  components: { UtNicoVideoSource },
  props: {
    movieId: {
      default: 'sm9',
    },
  },
  template: `<UtNicoVideoSource :movieId="movieId"/>`,
})
