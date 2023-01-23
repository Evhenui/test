<template>
  <section class="characteristics">
    <slot></slot>
    <div 
      class="characteristics__cont"
      v-for="item in specifications"
      :key="item.id"
    >
      <p class="characteristics__name">{{ item.name[lang] }}</p>
      <p class="characteristics__value">{{ item.option.value[lang] }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  specifications: { type: Array, required: false},
});

const { urlLang } = useRoute().params;

const lang = urlLang ? urlLang : 'ru';
</script>

<style lang="scss" scoped>
.characteristics {
  display: none;
  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad);

  &.active {
    @include flex-container(column, flex-start);
  }

  &__cont {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;

    @include bigMobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__name {
    @include font(16, 22, 600);

    @include bigMobile {
      @include font(14, 20, 500);
    }
  }

  &__value {
    @include font;

    @include bigMobile {
      @include font(14, 20);
    }
  }
}
</style>
