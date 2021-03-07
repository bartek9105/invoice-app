<template>
  <div class="container">
    <router-link to="/">
      <BackButton />
    </router-link>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'InvoiceDetails',
  components: {
    BackButton
  },
  props: {
    id: String
  }
}
</script>

<style></style>
