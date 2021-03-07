<template>
  <div>
    <div v-for="invoice in invoices" :key="invoice.id">
      <router-link :to="{ name: 'InvoiceDetails', params: { id: invoice.id } }">
        <InvoiceListItem :invoice="invoice" />
      </router-link>
    </div>
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
