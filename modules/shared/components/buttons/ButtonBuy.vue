<template>
  <button
    class="button-buy"
    @click="active = !active"
    :class="[
      state,
      { disabled: inactive },
      { buy: !inactive },
      { transparent: transparent },
      { active: active}
    ]"
    :disabled="inactive"
  >
    <div class="button-buy__images">
      <img
        class="button-buy__image buy-orange"
        src="~~/assets/icons/card-buy-orange.svg"
        alt="buy"
      />
      <img
        class="button-buy__image buy"
        src="~~/assets/icons/card-buy.svg"
        alt="buy"
      />
      <img
        class="button-buy__image report"
        src="~~/assets/icons/card-report.svg"
        alt="report"
      />
      <img
        class="button-buy__image pre-order"
        src="~~/assets/icons/card-pre-order.svg"
        alt="pre order"
      />
    </div>
    <div class="button-buy__titles">
      <span class="button-buy__title buy">Купить</span>
      <span class="button-buy__title report">Сообщить</span>
      <span class="button-buy__title pre-order">Предзаказ</span>
      <span class="button-buy__title in-basket">В корзине</span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  state: { type: String, required: false },
  inactive: { type: Boolean, required: false },
  transparent: { type: Boolean, required: false },
});

const active = ref(0);

</script>

<style lang="scss" scoped>
.button-buy {
  width: 100%;

  @include flex-container(row, center, center);

  border-radius: 6px;

  padding: 8px;
  gap: 8px;

  &.buy {
    background-color: #f36c21;

    &:hover {
      background-color: #FF5B00;
    }

    &:active {
      background-color: #AC450B;
    }

    &:disabled {
      background-color: #8A8A8A;
    }

    .button-buy__image.buy {
      display: block;
    }

    .button-buy__title.buy {
      display: block;
    }
    
  }

  &.report {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }
  }

  &.pre-order {
    background-color: #4490bb;

    .button-buy__image.pre-order {
      display: block;
    }

    .button-buy__title.pre-order {
      display: block;
    }
  }

  &.disabled {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }

    .button-buy__image.buy,
    .button-buy__image.pre-order {
      display: none;
    }

    .button-buy__title.buy,
    .button-buy__title.pre-order {
      display: none;
    }
  }

  &.transparent {
    border-radius: 8px;

    background-color: #F36C21;
    border: 1px solid #F36C21;

    gap: 16px;

    &:hover {
      border-color: #FF5B00;
    }

    &:active {
      border-color: #AC450B;
    }

    &.active {
      border-color: #F36C21;

      background-color: rgba(243, 108, 33, 0.1);
      .button-buy__title.in-basket {
        display: block;

        color: #F36C21;

        @include bigMobile {
          @include font(18, 24, 400);
        }
      }

      .button-buy__title.buy {
        display: none;
      }

      .button-buy__image.buy-orange {
        display: block;

        @include bigMobile {
          width: 24px;
          height: 24px;
        }
      }

      .button-buy__image.buy {
        display: none;
      }
    }

    .button-buy__title.buy {
      display: block;

      color: white;

      @include bigMobile {
        @include font(18, 24, 400);
      }
    }

    @include bigMobile {
      border-radius: 6px;

      background-color: #f36c21;

      gap: 8px;

      .button-buy__image.buy {
        display: block;

        @include bigMobile {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  &__image {
    width: 24px;
    height: 24px;

    display: none;

    color: white;

    @include bigMobile {
      width: 16px;
      height: 16px;
    }
  }

  &__title {
    display: none;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: white;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }
}
</style>
