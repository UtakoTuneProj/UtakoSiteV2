<template>
  <v-card class="pa-4">
    <v-card-title class="headline"> プレイヤーの設定 </v-card-title>
    <div class="my-2">
      <v-card-subtitle> 再生数による優先 </v-card-subtitle>
      <v-slider
        v-model="scoreLevel"
        :tick-labels="scoreSliderLabel"
        :max="2"
        step="1"
        ticks="always"
        tick-size="4"
        class="mx-4"
      />
    </div>
    <div class="my-2">
      <v-card-subtitle> 新曲の優先 </v-card-subtitle>
      <v-checkbox v-model="isPreferNewer" class="mx-4" label="優先する" />
    </div>
    <v-card-actions class="justify-end">
      <v-btn text color="error" @click="onCancel">キャンセル</v-btn>
      <v-btn text color="primary" @click="onSave">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class UtPlayerSettingModal extends Vue {
  public scoreSliderLabel = ['少ない', 'おまかせ', '多い']

  public scoreLevel = 1
  public isPreferNewer = true

  @Emit('save')
  public onSave() {
    return {
      scoreLevel: this.scoreLevel,
      isPreferNewer: this.isPreferNewer,
    }
  }

  @Emit('cancel')
  public onCancel() {
    return {
      scoreLevel: this.scoreLevel,
      isPreferNewer: this.isPreferNewer,
    }
  }
}
</script>
