<template>
  <div class="container">
    <header class="header flex-sb">
      <div class="flex-col">
        <h1 class="mb-16">Invoices</h1>
        <span class="font-12 gray">There are {{ invoices.length }} total invoices</span>
      </div>
      <div class="flex-sb">
        <div class="status-filter mr-40">
          <span class="bold font-12 mr-16" @click="displayDropdown = !displayDropdown">
            Filter by status
          </span>
          <img src="@/assets/icons/arrow.svg" />
          <Dropdown v-if="displayDropdown" class="dropdown" @statusFilter="filter" />
        </div>
        <AddButton />
      </div>
    </header>
    <InvoiceList v-if="invoices.length > 0" :invoices="invoices" />
    <div v-else class="text-center">
      <img class="mb-64" src="@/assets/icons/empty.svg" alt="No invoices" />
      <h2 class="mb-24">There is nothing here</h2>
      <p class="font-12 gray line-15">
        Create an invoice by clicking the <br />
        <span class="bold">New Invoice</span>
        button and get started
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Dropdown from '@/components/Dropdown.vue'
import AddButton from '@/components/AddButton.vue'
import InvoiceList from '@/components/InvoiceList.vue'

export default {
  name: 'Home',
  components: {
    Dropdown,
    AddButton,
    InvoiceList
  },
  data() {
    return {
      displayDropdown: false,
      filterStatus: []
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
    ...mapActions(['fetchInvoices']),
    filter(status) {
      this.filterStatus = status
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 65px;
}
.status-filter {
  position: relative;
  cursor: pointer;
}
.dropdown {
  position: absolute;
  top: 48px;
  left: -24px;
}
</style>
