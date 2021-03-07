<template>
  <button class="btn btn-purple add-btn">
    <img src="@/assets/icons/plus.svg" alt="Add" class="add-btn__icon" />
    <span>New <span v-if="width > 600">invoice</span></span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AddButton',
  computed: {
    ...mapGetters(['width'])
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
  display: flex;
  align-items: center;
  &__icon {
    margin-right: 1rem;
    @media (max-width: 600px) {
      margin-right: 0.5rem;
    }
  }
}
</style>
