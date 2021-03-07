<template>
  <div class="container">
    <header class="header">
      <div>
        <h1>Invoices</h1>
        <span class="header__total">{{ invoicesTotal }}</span>
      </div>
      <div class="header__actions">
        <Dropdown class="header__filter" @statusFilter="filter" />
        <AddButton />
      </div>
    </header>
    <main>
      <InvoiceList v-if="invoices.length > 0" :invoices="invoices" />
      <NoItems v-else />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Dropdown from '@/components/Dropdown.vue'
import AddButton from '@/components/AddButton.vue'
import InvoiceList from '@/components/InvoiceList.vue'
import NoItems from '@/components/NoItems.vue'

export default {
  name: 'Home',
  components: {
    Dropdown,
    AddButton,
    InvoiceList,
    NoItems
  },
  data() {
    return {
      filterStatus: []
    }
  },
  computed: {
    ...mapGetters(['width']),
    invoices() {
      return this.$store.getters.invoices(this.filterStatus)
    },
    invoicesTotal() {
      if (this.width >= 600) {
        return `There are ${this.invoices.length} total invoices`
      }
      return `${this.invoices.length} invoices`
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
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
  &__actions {
    display: flex;
    align-items: center;
  }
  &__total {
    display: block;
    font-size: $font-sm;
    color: $violet-light;
    margin-top: 0.5rem;
    @media (max-width: 600px) {
      margin-top: 0.25rem;
    }
  }
  &__filter {
    margin-right: 2.5rem;
    @media (max-width: 768px) {
      margin-right: 1rem;
    }
  }
}
</style>
