<template>
  <section class="filter">
    <div 
      class="filter__wrapper"
      :class="{active: filtersSwitch}"
    >
      <h1 class="filter__title">Название категории</h1>

      <nav class="filter__navigation">
        <div class="filter__navigation-wrapper">
          <ButtonFilter
            @click="filtersSwitch = !filtersSwitch"
            class="filter__button-filter"
          />
          <ButtonChangeView class="filter__button-filter" @click="activeFilter" />
        </div>
      </nav>
      <section class="filter__header" :class="{ active: filtersSwitch }">
        <SelectedFilter
          class="filter__filters"
          :items="filterItem"
        />
        <SelectGroup
          class="filter__select"
          :selectList="selectItems"
          :caption="'По умолчанию'"
        />
      </section>
       <CatalogMain 
        :changeView="changeView" 
        :activeFilters="filtersSwitch" 
        :products="products"
        @sendData="getData"
      />
    </div>

  </section>
</template>
  
<script setup>
import SelectedFilter from "~/modules/products/pages/filter/components/sections/SelectedFilter.vue";
import CatalogMain from "~/modules/products/pages/filter/components/sections/CatalogMain.vue";
import SelectGroup from "~/modules/shared/components/dropdowns/SelectGroup.vue";
import ButtonChangeView from "~/modules/products/pages/filter/components/UI/ButtonChangeView.vue";
import ButtonFilter from "~/modules/products/pages/filter/components/UI/ButtomFilter.vue";

const props = defineProps({
  products: { type: Object, required: false},
});

const selectedFilter = ref(null);

const test = reactive([])

const filterItem = [
  { name: "Евровилка" },
  { name: "1000/900" },
  { name: "1000/900" },
  { name: "700-1200 грн" },
];

const selectItems = [
  { title: "По умолчанию" },
  { title: "Дешёвые" },
  { title: "Дорогие" },
  { title: "Популярные" },
];

function getData(val) {
  
  test.push(val)
  console.log(test)
}

const changeView = ref(false);
const activeFilters = ref(false);
const heightFilters = ref(0);
const mobileFilters = ref(false);

const filtersSwitch = ref(false);

function activeFilter() {
  changeView.value = !changeView.value;
}
</script>
  
<style lang="scss" scoped>
.filter {
  @extend %padding-wrp;

  @include bigMobile {
    padding: 0;
  }

  &__wrapper {
    @extend %width-main;

    @include flex-container(column, flex-start, flex-start);

    margin: 0 auto;
    padding-bottom: 136px;
    gap: 24px;

    @include bigMobile {
      &.active {
        padding: 0;
      }
    }
  }

  &__title {
    @include font(36, 43, 700);
    color: #2b2b2b;

    @include bigMobile {
      width: 100%;
      
      @include font(24, 34, 700);

      padding: 0 16px;
    }
  }

  &__navigation {
    display: none;

    @include bigMobile {
      width: 100%;

      display: block;

      padding: 0 16px;
    }
  }

  &__navigation-wrapper {

    @include flex-container(row, space-between, flex-end);

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 16px;
  }

  &__header {
    width: 100%;

    @include flex-container(row, space-between, flex-end);

    @include bigMobile {
      padding: 0 16px;
      &.active {
        .filter__filters {
          display: flex;
        }

        .filter__select {
          display: none;
        }
      }
    }
  }

  &__select {
    max-width: 363px;

    z-index: 101;

    @include bigMobile {
      max-width: 100%;
    }
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: block;
    }
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: flex;
    }
  }

  &__filters {
    @include bigMobile {
      width: 100%;

      display: none;

      overflow: hidden;

      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
        