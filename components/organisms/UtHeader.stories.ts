import { withKnobs } from '@storybook/addon-knobs'
import { actions } from '@storybook/addon-actions'
import UtHeader from './UtHeader.vue'

export default {
  title: 'organisms/UtHeader',
  component: UtHeader,
  decorators: [withKnobs],
}

export const basic = () => ({
  components: { UtHeader },
  props: {
    actions: {
      default: actions('click'),
    },
  },
  template: `
        <UtHeader
            v-on="actions"
        />
    `,
})
