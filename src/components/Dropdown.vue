<template>
  <div class="dropdown flex col bg-white font-12 bold px-24 py-24 index-1 shadow radius-8">
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
  width: 192px;
}
</style>
