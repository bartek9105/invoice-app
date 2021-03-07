<template>
  <div>
    <div v-if="width > 700" class="invoice-list-item invoice-list-item-desktop flex-sb-c">
      <span class="invoice-list-item__id">{{ invoice.id }}</span>
      <span class="invoice-list-item__date">Due {{ invoice.paymentDue }}</span>
      <span class="invoice-list-item__name">{{ invoice.clientName }}</span>
      <span class="invoice-list-item__total">£ {{ invoice.total }}</span>
      <StatusBadge :status="invoice.status" />
      <img src="@/assets/icons/arrow-right.svg" />
    </div>
    <div v-else class="invoice-list-item invoice-list-item-mobile">
      <div class="flex-sb-c top-bar">
        <span class="invoice-list-item__id">{{ invoice.id }}</span>
        <span class="invoice-list-item__name">{{ invoice.clientName }}</span>
      </div>
      <div class="flex-sb-c">
        <div class="flex-col">
          <span class="invoice-list-item__date date">Due {{ invoice.paymentDue }}</span>
          <span class="invoice-list-item__total">£ {{ invoice.total }}</span>
        </div>
        <StatusBadge :status="invoice.status" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StatusBadge from '@/components/StatusBadge.vue'

export default {
  name: 'InvoiceListItem',
  components: {
    StatusBadge
  },
  props: {
    invoice: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['width']),
    invoiceStatus() {
      return this.invoice.status[0].toUpperCase() + this.invoice.status.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.invoice-list-item {
  background-color: $white;
  line-height: $line-height-sm;
  letter-spacing: $letter-spacing-xl;
  font-size: $font-sm;
  font-weight: $font-medium;
  padding: 1rem 1.5rem 1rem 2rem;
  margin-bottom: 1rem;
  box-shadow: $shadow;
  border: 1px solid $white;
  border-radius: 0.5rem;
  transition: border 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid $violet;
  }
  &__id {
    font-weight: $font-bold;
    color: $black;
  }
  &__date {
    color: $violet-lighter;
  }
  &__name {
    color: $violet-gray;
  }
  &__total {
    color: $black;
    font-size: $font-md;
    font-weight: $font-bold;
    line-height: $line-height-lg;
    letter-spacing: $letter-spacing-md;
  }
}
.invoice-list-item-mobile {
  .top-bar {
    margin-bottom: 1.5rem;
  }
  .date {
    margin-bottom: 0.5rem;
  }
}
</style>
