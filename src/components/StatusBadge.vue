<template>
  <div class="status-badge" :class="statusColor">
    <svg
      class="status-badge__icon"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" :fill="iconColor" />
    </svg>
    {{ status }}
  </div>
</template>

<script>
export default {
  name: 'StatusBadge',
  props: {
    status: {
      type: String,
      default: 'Not specified'
    }
  },
  computed: {
    statusColor() {
      if (this.status === 'paid') {
        return 'green bg-green'
      }
      if (this.status === 'pending') {
        return 'orange bg-orange'
      }
      if (this.status === 'draft') {
        return 'gray bg-gray'
      }
      return ''
    },
    iconColor() {
      if (this.status === 'paid') {
        return '#33D69F'
      }
      if (this.status === 'pending') {
        return 'orange'
      }
      if (this.status === 'draft') {
        return 'black'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.status-badge {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: $font-bold;
  width: 104px;
  height: 40px;
  border-radius: 0.375rem;
  &__icon {
    margin-right: 0.5rem;
  }
}
</style>
