<template>
  <div>
    <div class="status-filter" @click="displayDropdown = !displayDropdown">
      <span class="status-filter__text"> Filter <span v-if="width > 600"> by status </span> </span>
      <img src="@/assets/icons/arrow.svg" :class="{ rotate: displayDropdown }" />
    </div>
    <div v-if="displayDropdown" class="dropdown">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dropdown',
  data() {
    return {
      status: [],
      displayDropdown: false
    }
  },
  computed: {
    ...mapGetters(['width'])
  },
  methods: {
    emitStatusFilter() {
      this.$emit('statusFilter', this.status)
    }
  }
}
</script>

<style lang="scss" scoped>
.status-filter {
  position: relative;
  cursor: pointer;
  &__text {
    margin-right: 1rem;
    font-size: $font-sm;
    font-weight: $font-bold;
  }
}
.dropdown {
  position: absolute;
  background-color: $white;
  box-shadow: $shadow;
  width: 192px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  margin-left: -2rem;
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
.rotate {
  transition: transform 0.3s ease-in-out;
  transform: rotate(180deg);
}
</style>
