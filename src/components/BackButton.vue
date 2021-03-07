<template>
  <div class="back-btn">
    <img src="@/assets/icons/arrow.svg" alt="back" class="back-btn__icon" />
    <span>Go back</span>
  </div>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>

<style lang="scss">
.back-btn {
  font-size: $font-sm;
  font-weight: $font-bold;
  color: $black;
  cursor: pointer;
  &__icon {
    transform: rotate(90deg);
    margin-right: 1.5rem;
  }
}
</style>
