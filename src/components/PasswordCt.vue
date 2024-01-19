<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Mot de passe',
  },
})

const emits = defineEmits(['update:model-value'])

const localValue = ref(props.modelValue)
const isPassword = ref(true)
</script>

<template>
  <div class="w-full flex items-end">
    <div class="w-full">
      <DsfrInput
        v-model="localValue"
        :type="isPassword ? 'password' : 'text'"
        :label="props.label"
        label-visible
        @update:model-value="emits('update:model-value', localValue)"
      />
    </div>
    <v-icon
      class="mb-2 ml--8 cursor-pointer"
      :title="isPassword ? 'Afficher le mot de passe' : 'Cacher le mot de passe'"
      :name="isPassword ? 'ri-eye-line' : 'ri-eye-off-line'"
      @click="isPassword = !isPassword"
    />
  </div>
</template>
