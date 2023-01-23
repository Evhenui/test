<template>
  <section class="main" :class="{ active: activeFilters }">
    <NavigationBar :activeFilters="activeFilters" @sendCheckboxesValue="sendCheckboxesValue"/>
    <CatalogList 
      class="main__catalog-list" 
      :changeView="changeView" 
      :products="products"
    />
    <ModalShowResult :active="activeFilters" />
  </section>
</template>

<script setup>
import NavigationBar from "~/modules/products/pages/filter/components/sections/NavigationBar.vue";
import CatalogList from "~/modules/products/pages/filter/components/sections/CatalogList.vue";
import ModalShowResult from "~/modules/products/pages/filter/components/sections/ModalShowResult.vue";

const props = defineProps({
 changeView: { type: Boolean, required: false},
 activeFilters: { type: Boolean, required: false},
 products: { type: Object, required: false},
});

const emits = defineEmits(['sendData']);

function sendCheckboxesValue(val) {
  emits('sendData', val)
}

</script>

<style lang="scss" scoped>
.main {
  @include flex-container(row, flex-start, flex-start);

  gap: 8px;

  @include bigMobile {
    @include flex-container(column, flex-start, flex-start);

    gap: 64px;

    &.active {
      width: 100%;

      .main__catalog-list {
        display: none;
      }
    }
  }

  &__selected {
    display: none;

    @include bigMobile {
      width: 100%;

      display: flex;
    }
  }
}
</style>
            