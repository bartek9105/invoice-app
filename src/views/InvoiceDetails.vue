<template>
  <div class="container">
    <router-link to="/">
      <BackButton />
    </router-link>
    <header class="header flex-sb-c">
      <div class="header__status flex-sb-c">
        <span>Status</span>
        <StatusBadge :status="invoice.status" />
      </div>
      <div class="header__buttons">
        <Button type="edit" class="header__button">Edit</Button>
        <Button type="delete" class="header__button">Delete</Button>
        <Button>Mark as Paid</Button>
      </div>
    </header>
    <main class="invoice">
      <div class="invoice__top flex-sb-b">
        <section>
          <h3 class="invoice__id">{{ invoice.id }}</h3>
          <span class="invoice__label invoice__label--description">{{ invoice.description }}</span>
        </section>
        <section class="invoice__address flex-col">
          <span>{{ invoice.senderAddress.street }}</span>
          <span>{{ invoice.senderAddress.city }}</span>
          <span>{{ invoice.senderAddress.postCode }}</span>
          <span>{{ invoice.senderAddress.country }}</span>
        </section>
      </div>
      <section class="invoice__details flex-sb-b">
        <div>
          <div class="flex-col">
            <span class="invoice__label">Invoice Date</span>
            <h3 class="invoice__date">{{ invoice.createdAt }}</h3>
          </div>
          <div class="flex-col">
            <span class="invoice__label">Payment Due</span>
            <h3>{{ invoice.paymentDue }}</h3>
          </div>
        </div>
        <div class="flex-col">
          <span class="invoice__label">Bill to</span>
          <h3 class="invoice__client-name">{{ invoice.clientName }}</h3>
          <div class="invoice__address invoice__address--bill">
            <span>{{ invoice.clientAddress.street }}</span>
            <span>{{ invoice.clientAddress.city }}</span>
            <span>{{ invoice.clientAddress.postCode }}</span>
            <span>{{ invoice.clientAddress.country }}</span>
          </div>
        </div>
        <div class="flex-col">
          <span class="invoice__label">Sent to</span>
          <h3>{{ invoice.clientEmail }}</h3>
        </div>
      </section>
      <section class="invoice__items">
        <InvoiceItemsTable v-if="width > 600" :invoice-items="invoice.items" />
        <InvoiceItemsList v-else :invoice-items="invoice.items" />
      </section>
      <section class="invoice__summary flex-sb-c">
        <span class="invoice__amount-due">Amount Due</span>
        <span class="invoice__total">£ {{ invoice.total }}</span>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/Button.vue'
import BackButton from '@/components/BackButton.vue'
import StatusBadge from '@/components/StatusBadge.vue'
import InvoiceItemsTable from '@/components/InvoiceItemsTable.vue'
import InvoiceItemsList from '@/components/InvoiceItemsList.vue'

export default {
  name: 'InvoiceDetails',
  components: {
    Button,
    BackButton,
    StatusBadge,
    InvoiceItemsTable,
    InvoiceItemsList
  },
  props: {
    id: String
  },
  computed: {
    ...mapGetters(['width']),
    invoice() {
      return this.$store.getters.invoice(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header,
.invoice {
  background-color: $white;
  border-radius: $border-radius-sm;
}
.header {
  box-shadow: $shadow;
  margin-top: 2rem;
  padding: 1.25rem 2rem;
  &__buttons {
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      background-color: $white;
      padding: 1.25rem 1.5rem;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  &__status {
    color: $violet-gray;
    font-size: $font-sm;
    @media (max-width: 600px) {
      width: 100%;
    }
    span {
      margin-right: 1rem;
    }
  }
  &__button {
    margin-right: 0.5rem;
  }
}
.invoice {
  margin-top: 1.5rem;
  padding: 3rem;
  @media (max-width: 600px) {
    padding: 2rem;
    margin-bottom: 9rem;
  }
  @media (max-width: 375px) {
    padding: 1.5rem;
  }
  &__top {
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  &__client-name {
    margin-bottom: 0.5rem;
  }
  &__date {
    margin-bottom: 2rem;
  }
  &__details {
    flex-wrap: wrap;
    margin-top: 1.25rem;
  }
  &__label {
    color: $violet-lighter;
    font-size: $font-sm;
    margin-bottom: 0.75rem;
    &--description {
      display: block;
      margin-top: 0.5rem;
    }
  }
  &__address {
    color: $violet-lighter;
    font-size: $font-xsm;
    line-height: 18px;
    text-align: right;
    @media (max-width: 600px) {
      margin-bottom: 0.625rem;
      margin-top: 1.875rem;
      text-align: left;
    }
    &--bill {
      text-align: left;
    }
    span {
      display: block;
    }
  }
  &__items {
    background-color: #f9fafe;
    border-radius: $border-radius-sm $border-radius-sm 0 0;
    padding: 2rem 2rem 2.5rem 2rem;
    margin-top: 3rem;
  }
  &__summary {
    color: $white;
    background-color: $gray;
    border-radius: 0 0 $border-radius-sm $border-radius-sm;
    padding: 1.5rem 2rem;
  }
  &__amount-due {
    font-size: $font-xsm;
  }
  &__total {
    font-size: 1.5rem;
    font-weight: $font-bold;
  }
}
</style>
