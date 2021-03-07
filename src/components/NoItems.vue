<template>
  <div class="no-items">
    <img src="@/assets/icons/empty.svg" alt="No invoices" />
    <h2 class="no-items__heading">There is nothing here</h2>
    <p class="no-items__description">
      Create an invoice by clicking the <br />
      <span class="no-items__new-invoice">New Invoice</span>
      button and get started
    </p>
  </div>
</template>

<script>
export default {
  name: 'NoItems'
}
</script>

<style lang="scss" scoped>
.no-items {
  text-align: center;
  &__heading {
    margin: 4rem 0 1.5rem 0;
  }
  &__description {
    font-size: $font-sm;
    line-height: $line-height-sm;
    color: $violet-light;
    letter-spacing: $letter-spacing-xl;
  }
  &__new-invoice {
    font-weight: $font-bold;
  }
}
</style>
