<template>
  <div class="container">
    <header class="header">
      <div>
        <h1>Invoices</h1>
        <span class="header__total">There are {{ invoices.length }} total invoices</span>
      </div>
      <div class="header__actions">
        <div class="header__filter">
          <span @click="displayDropdown = !displayDropdown">
            Filter by status
          </span>
          <img src="@/assets/icons/arrow.svg" />
          <Dropdown v-if="displayDropdown" class="dropdown" @statusFilter="filter" />
        </div>
        <AddButton />
      </div>
    </header>
    <InvoiceList v-if="invoices.length > 0" :invoices="invoices" />
    <div v-else>
      <img src="@/assets/icons/empty.svg" alt="No invoices" />
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the <br />
        <span>New Invoice</span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  line-height: $line-height-sm;
  &__actions {
    display: flex;
    align-items: center;
  }
  &__total {
    display: block;
    font-size: $font-sm;
    color: $violet-light;
    margin-top: 0.5rem;
  }
  &__filter {
    font-size: $font-sm;
    font-weight: $font-bold;
    position: relative;
    cursor: pointer;
    margin-right: 2.5rem;
  }
}
.dropdown {
  position: absolute;
  top: 48px;
  left: -24px;
}
</style>
