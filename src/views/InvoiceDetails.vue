<template>
  <div class="container">
    <router-link to="/">
      <BackButton />
    </router-link>
    <header class="header flex-sb-c">
      <div class="header__status">
        <span>Status</span>
        <StatusBadge :status="invoice.status" />
      </div>
      <div>Buttons</div>
    </header>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import StatusBadge from '@/components/StatusBadge.vue'

export default {
  name: 'InvoiceDetails',
  components: {
    BackButton,
    StatusBadge
  },
  props: {
    id: String
  },
  computed: {
    invoice() {
      return this.$store.getters.invoice(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $white;
  box-shadow: $shadow;
  padding: 1.25rem 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  &__status {
    display: flex;
    align-items: center;
    font-size: $font-sm;
    color: $violet-gray;
    span {
      margin-right: 1rem;
    }
  }
}
</style>
