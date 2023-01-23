<template>
  <div>
    <div v-if="category?.children?.length">
      <Catalog :categories="category.children" />
    </div>
    <div v-else>
      <h3>You are here: {{ breadCrumbs }}</h3>
      <Filter 
        :products="products"
        v-if="products?.length"
      />
 <!--      <div class="catalog-list__items" v-if="products?.length">
         <SliderCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :change-view="null"
        />
      </div> -->
      <div v-else>Товары не найдены...</div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~~/store/categoriesStore';
import { useCriteriaStore } from '~~/store/criteriaStore';
import SliderCard from '~~/modules/shared/components/slideCard/SlideCard.vue';
import Catalog from '~/modules/catalog/components/Catalog.vue';
import { getFullPath } from '~/utils/breadCrumbs';
import Filter from '~/modules/products/pages/filter/components/Filter.vue';

const { urlLang, categorySlug, productSlug } = useRoute().params;

const lang = urlLang ? urlLang : 'ru';

const slug = categorySlug || productSlug;

//Try breadcrumb logic
const breadCrumbs = getFullPath(slug).reduce(
  (accumulator, currentValue) =>
    accumulator ? accumulator + ' | ' + currentValue[lang] : currentValue[lang],
  '',
);
//Try breadcrumb logic

const categoryStore = useCategoriesStore();
const category = categoryStore.getCategoryBySlug(slug);

const { data: products } = await useFetch(
  `/api/products?pageSize=25&pageNum=1&categoryId=${category.id}`,
);

const criteriaStore = useCriteriaStore();
await criteriaStore.fetch({ categoryId: category.id });

const criteria = criteriaStore.getCriteria;

</script>

<style lang="scss" scoped>
.catalog-list {
  &__wrapper {
    @include flex-container(column, flex-start);

    gap: 64px;
    margin-bottom: 64px;
  }

  &__items {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 8px;
  }

  &__navigation {
    @include flex-container(column, center, center);

    gap: 32px;
  }

  &__pagination {
    @include flex-container(row, center, center);

    gap: 26px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 26px;
  }
}
</style>
