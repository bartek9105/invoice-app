<template>
  <nav class="main-nav">
    <img src="@/assets/icons/logo.svg" alt="logo" />
    <div class="main-nav__content">
      <img src="@/assets/icons/moon.svg" alt="dark-theme" class="main-nav__dark-theme-icon" />
      <div class="main-nav__avatar">
        <img src="https://picsum.photos/40" alt="avatar" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $gray;
  border-radius: 0 20px 20px 0;
  width: 103px;
  height: 100%;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
    border-radius: 0;
    display: flex;
  }
  @media (max-width: 375px) {
    height: 72px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100% - 103px);
    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      width: calc(100% - 80px);
      height: 100%;
    }
  }
  &__dark-theme-icon {
    width: 20px;
    height: 20px;
    margin: 0 auto 2rem auto;
    @media (max-width: 768px) {
      margin: 0 2rem 0 0;
    }
    @media (max-width: 768px) {
      margin: 0 1.5rem 0 0;
    }
  }
  &__avatar {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
    border-top: 1px solid #494e6e;
    @media (max-width: 768px) {
      border-top: 0;
      border-left: 1px solid #494e6e;
      padding: 1.5rem 2rem;
      height: 100%;
    }
    @media (max-width: 375px) {
      padding: 1.25rem 1.5rem;
    }
    img {
      border-radius: 50%;
    }
  }
}
</style>
