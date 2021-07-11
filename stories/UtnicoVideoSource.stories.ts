import { withKnobs, text } from '@storybook/addon-knobs'
import UtNicoVideoSource from '@/components/atoms/UtNicoVideoSource.vue'

export default {
  title: 'atoms/UtNicoVideoSource',
  decorators: [withKnobs],
}
export const asComponent = () => ({
  components: { UtNicoVideoSource },
  props: {
    movieId: {
      default: text('movieId', 'sm9'),
    },
  },
  template: `<UtNicoVideoSource :movieId="movieId"/>`,
})
