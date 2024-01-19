<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

const username = ref('')
const password = ref('')

const loginUser = async (username: string, password: string) => {
  await userStore.login({ username, password })
}
</script>

<template>
  <div class="flex flex-col gap-4 w-1/2 <md:w-full">
    <div>
      <DsfrInput
        v-model="username"
        label="E-mail ou RIO"
        label-visible
        type="email"
        placeholder="claire.nollet@interieur.gouv.fr"
      />
    </div>
    <PasswordCt
      v-model="password"
      @update:model-value="(value) => (password = value)"
    />
    <DsfrButton
      label="Connexion"
      :disabled="!username || !password"
      icon="ri-account-circle-line"
      @click="loginUser(username, password)"
    />
  </div>
</template>
