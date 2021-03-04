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
          <Dropdown v-if="displayDropdown" class="dropdown" @statusFilter="filter" />
        </div>
        <AddButton />
      </div>
    </header>
    <InvoiceList :filter-status="filterStatus" />
  </div>
</template>

<script>
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
  methods: {
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
