<script lang="ts" setup>
import { onErrorCaptured } from 'vue'

const quickLinks = [
  {
    label: 'Connexion',
    to: '/login',
    icon: 'ri-account-circle-line',
  },
]

onErrorCaptured((error) => {
  if (error instanceof Error) {
    console.log(error.message)
  }
  return false
})
</script>

<template>
  <DsfrHeader
    service-title="DTNUM"
    service-description="Fabrique numérique"
    :logo-text="['Ministère', 'de l’intérieur']"
    :quick-links="quickLinks"
  />

  <div class="fr-container fr-mt-3w fr-mt-md-5w fr-mb-5w">
    <router-view />
  </div>
</template>
