<template>
  <table class="invoice-items-table">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>QTY.</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in invoiceItems" :key="index">
        <td>{{ item.name }}</td>
        <td class="invoice-items-table__col-mod">{{ item.quantity }}</td>
        <td class="invoice-items-table__col-mod">£ {{ item.price }}</td>
        <td>£ {{ item.total }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'InvoiceItemsTable',
  props: {
    invoiceItems: Array,
    default: () => []
  }
}
</script>

<style lang="scss" scoped>
.invoice-items-table {
  width: 100%;
  th {
    font-size: $font-xsm;
    font-weight: $font-medium;
    color: $violet-lighter;
    padding-bottom: 2rem;
    text-align: left;
    &:nth-of-type(2) {
      text-align: center;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      text-align: right;
    }
  }
  td {
    font-size: $font-sm;
    font-weight: $font-bold;
    color: $black;
    padding-bottom: 2rem;
    &:nth-of-type(2) {
      text-align: center;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      text-align: right;
    }
  }
  &__col-mod {
    color: $violet-lighter !important;
  }
}
</style>
