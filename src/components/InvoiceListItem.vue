<template>
  <div class="invoice-list-item">
    <span class="invoice-list-item__id">{{ invoice.id }}</span>
    <span class="invoice-list-item__date">Due {{ invoice.paymentDue }}</span>
    <span class="invoice-list-item__name">{{ invoice.clientName }}</span>
    <span class="invoice-list-item__total">£ {{ invoice.total }}</span>
    <span class="invoice-list-item__status" :class="statusColor">
      <svg
        class="invoice-list-item__dot"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" :fill="dotColor" />
      </svg>

      {{ invoiceStatus }}
    </span>
    <img src="@/assets/icons/arrow-right.svg" />
  </div>
</template>

<script>
export default {
  name: 'InvoiceListItem',
  props: {
    invoice: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusColor() {
      if (this.invoice.status === 'paid') {
        return 'green bg-green'
      }
      if (this.invoice.status === 'pending') {
        return 'orange bg-orange'
      }
      if (this.invoice.status === 'draft') {
        return 'gray bg-gray'
      }
      return ''
    },
    dotColor() {
      if (this.invoice.status === 'paid') {
        return '#33D69F'
      }
      if (this.invoice.status === 'pending') {
        return '#FF8F00'
      }
      if (this.invoice.status === 'draft') {
        return '#0C0E16'
      }
      return ''
    },
    invoiceStatus() {
      return this.invoice.status[0].toUpperCase() + this.invoice.status.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.invoice-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  &__status {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: $font-bold;
    width: 104px;
    height: 40px;
    border-radius: 0.375rem;
  }
  &__dot {
    margin-right: 0.5rem;
  }
}
.green {
  color: $green;
}
.bg-green {
  background-color: $green-light;
}
.orange {
  color: $orange;
}
.bg-orange {
  background-color: $orange-light;
}
.gray {
  color: $gray;
}
.bg-gray {
  background-color: $gray-light;
}
</style>
