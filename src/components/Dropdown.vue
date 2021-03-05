<template>
  <div class="dropdown flex col">
    <div class="mb-16">
      <input
        id="draft"
        v-model="status"
        type="checkbox"
        name="draft"
        class="mr-12"
        value="draft"
        @change="emitStatusFilter"
      />
      <label for="draft">Draft</label>
    </div>
    <div class="mb-16">
      <input
        id="pending"
        v-model="status"
        type="checkbox"
        name="pending"
        class="mr-12"
        value="pending"
        @change="emitStatusFilter"
      />
      <label for="pending">Pending</label>
    </div>
    <div>
      <input
        id="Paid"
        v-model="status"
        type="checkbox"
        name="Paid"
        class="mr-12"
        value="paid"
        @change="emitStatusFilter"
      />
      <label for="Paid">Paid</label>
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
  background-color: #fff;
  box-shadow: $shadow;
  border-radius: 8px;
  font-size: $font-sm;
  font-weight: $font-bold;
  padding: 24px;
  width: 192px;
  z-index: 1;
}
</style>
