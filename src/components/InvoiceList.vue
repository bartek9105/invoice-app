<template>
  <div>
    <InvoiceListItem v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script>
import InvoiceListItem from '@/components/InvoiceListItem.vue'

export default {
  name: 'InvoiceList',
  components: {
    InvoiceListItem
  },
  props: {
    invoices: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
