<template>
  <div class="list-item bg-white flex-sb font-12 mb-16">
    <span class="black bold">{{ invoice.id }}</span>
    <span class="violet-gray">Due {{ invoice.paymentDue }}</span>
    <span class="violet-gray">{{ invoice.clientName }}</span>
    <span class="black bold font-16">£ {{ invoice.total }}</span>
    <span class="status-badge flex-c bold" :class="statusColor">
      <svg
        class="mr-8"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" :fill="dotColor" />
      </svg>

      {{ invoice.status }}
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
        return 'black bg-gray'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  border-radius: 8px;
  padding: 16px 32px;
  box-shadow: $shadow;
  cursor: pointer;
  border: 1px solid #fff;
  transition: border 0.2s;
  &:hover {
    border: 1px solid $violet;
  }
}
.status-badge {
  width: 104px;
  height: 40px;
  text-align: center;
}
</style>
