<template>
  <div class="dropdown">
    <div class="dropdown__unit">
      <input
        id="draft"
        v-model="status"
        class="dropdown__checkbox"
        type="checkbox"
        name="draft"
        value="draft"
        @change="emitStatusFilter"
      />
      <label for="draft" class="dropdown__label">Draft</label>
    </div>
    <div class="dropdown__unit">
      <input
        id="pending"
        v-model="status"
        class="dropdown__checkbox"
        type="checkbox"
        name="pending"
        value="pending"
        @change="emitStatusFilter"
      />
      <label for="pending" class="dropdown__label">Pending</label>
    </div>
    <div class="dropdown__unit">
      <input
        id="Paid"
        v-model="status"
        class="dropdown__checkbox"
        type="checkbox"
        name="Paid"
        value="paid"
        @change="emitStatusFilter"
      />
      <label for="Paid" class="dropdown__label">Paid</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      status: []
    }
  },
  methods: {
    emitStatusFilter() {
      this.$emit('statusFilter', this.status)
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  background-color: $white;
  box-shadow: $shadow;
  width: 192px;
  padding: 1.5rem;
  &__unit {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
  &__checkbox {
    margin-right: 0.75rem;
  }
  &__label {
    color: $black;
    font-size: $font-sm;
    font-weight: $font-bold;
    cursor: pointer;
  }
}
</style>
