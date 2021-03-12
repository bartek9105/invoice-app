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
          <span class="invoice__description">{{ invoice.description }}</span>
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
        <table v-if="width > 600" class="invoice__table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in invoice.items" :key="index">
              <td>{{ item.name }}</td>
              <td class="invoice__item-mod">{{ item.quantity }}</td>
              <td class="invoice__item-mod">£ {{ item.price }}</td>
              <td>£ {{ item.total }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="width <= 600" class="invoice__list">
          <div
            v-for="(item, index) in invoice.items"
            :key="index"
            class="invoice__list__item flex-sb-c"
          >
            <div class="flex-col">
              <span class="invoice__list__name">{{ item.name }}</span>
              <span class="invoice__list__quantity">{{ item.quantity }} x £ {{ item.price }}</span>
            </div>
            <span class="invoice__list__price">£ {{ item.price }}</span>
          </div>
        </div>
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

export default {
  name: 'InvoiceDetails',
  components: {
    Button,
    BackButton,
    StatusBadge
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
  }
  &__description {
    display: block;
    color: $violet-lighter;
    font-size: $font-sm;
    margin-top: 0.5rem;
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
  &__table {
    width: 100%;
    th {
      font-size: $font-xsm;
      font-weight: $font-medium;
      color: $violet-lighter;
      padding-bottom: 2rem;
      text-align: left;
      &:nth-of-type(2) {
        text-align: center;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        text-align: right;
      }
    }
    td {
      font-size: $font-sm;
      font-weight: $font-bold;
      color: $black;
      padding-bottom: 2rem;
      &:nth-of-type(2) {
        text-align: center;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        text-align: right;
      }
    }
  }
  &__item-mod {
    color: $violet-lighter !important;
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
  &__list {
    &__item {
      &:not(:last-of-type) {
        margin-bottom: 1.5rem;
      }
    }
    &__name,
    &__price {
      font-size: $font-sm;
      font-weight: $font-bold;
      margin-bottom: 0.5rem;
    }
    &__quantity {
      color: $violet-lighter;
      font-size: $font-sm;
      font-weight: $font-bold;
    }
  }
}
</style>
