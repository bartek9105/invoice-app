<template>
  <div class="invoice-items-list">
    <div
      v-for="(item, index) in invoiceItems"
      :key="index"
      class="invoice-items-list__item flex-sb-c"
    >
      <div class="flex-col">
        <span class="invoice-items-list__name">{{ item.name }}</span>
        <span class="invoice-items-list__quantity">{{ item.quantity }} x £ {{ item.price }}</span>
      </div>
      <span class="invoice-items-list__price">£ {{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceItemsList',
  props: {
    invoiceItems: Array,
    default: () => []
  }
}
</script>

<style lang="scss" scoped>
.invoice-items-list {
  &__item {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
  &__name,
  &__price {
    font-size: $font-sm;
    font-weight: $font-bold;
    margin-bottom: 0.5rem;
  }
  &__quantity {
    color: $violet-lighter;
    font-size: $font-sm;
    font-weight: $font-bold;
  }
}
</style>
