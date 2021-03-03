<template>
  <div class="container">
    <header class="header flex-sb">
      <div class="flex-col">
        <h1 class="mb-16">Invoices</h1>
        <span class="font-12 gray">There are 7 total invoices</span>
      </div>
      <div class="flex-sb">
        <div class="status-filter mr-40">
          <span class="bold font-12 mr-16" @click="displayDropdown = !displayDropdown">
            Filter by status
          </span>
          <img src="@/assets/icons/arrow.svg" />
          <Dropdown v-if="displayDropdown" class="dropdown" />
        </div>
        <AddButton />
      </div>
    </header>
    <InvoiceListItem />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Dropdown from '@/components/Dropdown.vue'
import AddButton from '@/components/AddButton.vue'
import InvoiceListItem from '@/components/InvoiceListItem.vue'

export default {
  name: 'Home',
  components: {
    Dropdown,
    AddButton,
    InvoiceListItem
  },
  data() {
    return {
      displayDropdown: false
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
