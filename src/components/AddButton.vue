<template>
  <button class="btn btn-purple add-btn">
    <img src="@/assets/icons/plus.svg" alt="Add" class="add-btn__icon" />
    New invoice
  </button>
</template>

<script>
export default {
  name: 'AddButton'
}
</script>

<style lang="scss" scoped>
.add-btn {
  display: flex;
  align-items: center;
  &__icon {
    margin-right: 1rem;
  }
}
</style>
