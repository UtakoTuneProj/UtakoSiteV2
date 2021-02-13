import { withKnobs } from '@storybook/addon-knobs'
import { actions } from '@storybook/addon-actions'
import UtPlayerSettingModal from '@/components/organisms/UtPlayerSettingModal.vue'

export default {
  title: 'organisms/UtPlayerSettingModal',
  component: UtPlayerSettingModal,
  decorators: [withKnobs],
}

export const basic = () => ({
  components: { UtPlayerSettingModal },
  props: {
    actions: {
      default: actions('save', 'cancel'),
    },
  },
  template: `
        <UtPlayerSettingModal
            v-on="actions"
        />
    `,
})
