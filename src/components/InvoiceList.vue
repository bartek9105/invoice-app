<template>
  <div>
    <InvoiceListItem v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InvoiceListItem from '@/components/InvoiceListItem.vue'

export default {
  name: 'InvoiceList',
  components: {
    InvoiceListItem
  },
  computed: {
    ...mapGetters(['invoices'])
  },
  created() {
    this.fetchInvoices()
  },
  methods: {
    ...mapActions(['fetchInvoices'])
  }
}
</script>

<style></style>
