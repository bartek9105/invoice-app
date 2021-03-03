<template>
  <div class="list-item bg-white flex-sb font-12">
    <span class="black bold">#RT3080</span>
    <span class="violet-gray">Due 19 Aug 2021</span>
    <span class="violet-gray">Jensen Huang</span>
    <span class="black bold font-16">£ 1,800.90</span>
    <span class="status-badge flex-c bg-green green bold">
      <img src="@/assets/icons/dot.svg" class="mr-8" />
      Paid
    </span>
    <img src="@/assets/icons/arrow-right.svg" />
  </div>
</template>

<script>
export default {
  name: 'InvoiceListItem'
}
</script>

<style lang="scss" scoped>
.list-item {
  border-radius: 8px;
  padding: 16px 32px;
  box-shadow: $shadow;
  cursor: pointer;
  border: 1px solid #fff;
  transition: border 0.2s;
  &:hover {
    border: 1px solid $violet;
  }
}
.status-badge {
  width: 104px;
  height: 40px;
  text-align: center;
}
</style>
