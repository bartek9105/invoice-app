<template>
  <button class="btn btn-main" :class="buttonType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    default: () => ''
  },
  computed: {
    buttonType() {
      if (this.type === 'edit') {
        return 'btn-edit'
      }
      if (this.type === 'delete') {
        return 'btn-delete'
      }
      return 'btn-purple'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-main {
  padding: 1rem 1.5rem !important;
}
</style>
