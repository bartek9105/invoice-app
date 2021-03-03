<template>
  <div class="container">
    <header class="flex-sb">
      <div class="flex-col">
        <h1 class="mb-16">Invoices</h1>
        <span class="font-12 gray">There are 7 total invoices</span>
      </div>
      <div class="flex-sb">
        <div class="status-filter mr-40">
          <span class="bold font-12 mr-16" @click="displayDropdown = !displayDropdown">
            Filter by status
          </span>
          <img src="@/assets/icons/arrow.svg" />
          <Dropdown v-if="displayDropdown" class="dropdown" />
        </div>
        <AddButton />
      </div>
    </header>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
import AddButton from '@/components/AddButton.vue'

export default {
  name: 'Home',
  components: {
    Dropdown,
    AddButton
  },
  data() {
    return {
      displayDropdown: false
    }
  }
}
</script>

<style lang="scss" scoped>
.status-filter {
  position: relative;
  cursor: pointer;
}
.dropdown {
  position: absolute;
  top: 48px;
  left: -24px;
}
</style>
