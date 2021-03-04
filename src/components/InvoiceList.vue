<template>
  <div>
    <InvoiceListItem v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InvoiceListItem from '@/components/InvoiceListItem.vue'

export default {
  name: 'InvoiceList',
  components: {
    InvoiceListItem
  },
  props: {
    filterStatus: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    invoices() {
      return this.$store.getters.invoices(this.filterStatus)
    }
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
