<template>
  <div class="card-product" ref="productWrapper">
    <div class="card-product__w">
      <div class="card-product__container">
        <div class="card-title">
          <h1 class="card-title__text">
            <!------------------------ change products[0] when get data --------------------------------------------->
            <span class="card-title__text-bold">
              {{ products[0].name[lang] }}
            </span>
            <span class="card-title__text-normal">
              {{ ` ${products[0].sku}` }}
              </span>
            <!------------------------------------------------------------------------------------------------------->
          </h1>
          <div class="card-title__code">
            <!-- <Rating 
              :reviews="'12'" 
              :points="'3'"
              class="card-product__rating mobile"
            />  -->
            <!------------------------ change products[0] when get data --------------------------------------------->
            <div class="card-title__code-wrapper">
              <span class="card-title__code-text">Код:</span>
              <span class="card-title__code-number">
                {{ products[0].code}}
              </span>
            </div>
            <!------------------------------------------------------------------------------------------------------->
          </div>
        </div>
        <!-- <Rating 
          :reviews="'12'" 
          :points="'3'"
          class="card-product__rating"
        />  -->
      </div>
    </div>

    <div class="card-product__navigation" ref="navigation">
      <CardProductNav @navChange="calcCurrNav" :CurrentNav="currentNav" />
    </div>

    <div class="card-product__w">
      <div class="card-product__container">
        <!------------------------ change products[0] when get data need 'advantage', 'sale', 'price', 'payments', 'guarantee', 'delivery' , 'status in slider'--------------------------------------------->
        <CardAboutProduct
          :class="{ active: currentNav === activePage }"
          :product="products[0]"
          @getPriceEl="getPriceEl"
        />
        <!------------------------------------------------------------------------------------------------------->
      </div>
    </div>

    <div class="card-product__w">
      <div class="card-product__container">
        <div class="spec" ref="spec">
          <div class="spec__w">
            <ProductSlider
              :title="'С этим товаром покупают'"
              class="slider"
              :class="{ active: currentNav === activePage }"
              :cards="cards"
            />
            <!------------------------ change products[0] when get data --------------------------------------------->
            <CardProductDescription
              class="description"
              :class="[
                { active: currentNav === activePage },
                { active: currentNav === 2 },
              ]"
              id="description"
              :contentFromServer="products[0].description[lang]"
            >
              <h3 class="spec__title">
                Описание
                <span class="spec__article">{{ products[0].name[lang] }}</span>
              </h3>
            </CardProductDescription>
            <!------------------------------------------------------------------------------------------------------->
            <CardProductCharacteristics
              :class="[
                { active: currentNav === activePage },
                { active: currentNav === 2 },
              ]"
              :specifications="products[0].specifications"
            >
              <h3 class="spec__title">
                Характеристики
                <span class="spec__article">{{ products[0].name[lang] }}</span>
              </h3>
            </CardProductCharacteristics>
            <!------------------------ change products[0] when get data hasn`n data instructions--------------------------------------------->
            <CardProductInstruction
              :class="[
                { active: currentNav === activePage },
                { active: currentNav === 4 },
              ]"
              :attachments="products[0].attachments"
            >
              <h3 class="spec__title">
                Загрузки
                <span class="spec__article">{{ products[0].name[lang] }}</span>
              </h3>
            </CardProductInstruction>
            <!------------------------------------------------------------------------------------------------------->

            <!------------------------ change products[0] when get data hasn`n data video--------------------------------------------->
            <CardProductVideo :class="{ active: currentNav === 3 }">
              <h3 class="spec__title">
                Видео
                <span class="spec__article">Название продукта</span>
              </h3>
            </CardProductVideo>
            <!------------------------------------------------------------------------------------------------------->
          </div>
          <div class="aside" ref="aside">
            <CardProductAside :product="products[0]" />
          </div>
        </div>
        <!------------------------ change products[0] when get data hasn`n data price sale--------------------------------------------->
        <Transition name="price-fade">
          <div class="price-bar" v-if="visibilityPrice">
            <div class="price-bar__money-sale">
        <!--       <p class="price-bar__money-sale-old">3500 грн</p> -->
              <p class="price-bar__money-sale-new">{{ `${products[0].prices[0].money.amount} ${products[0].prices[0].money.currency}` }}</p>
            </div>
            <ButtonBuy :transparent="true"/>
          </div>
        </Transition>
        <!------------------------------------------------------------------------------------------------------->
      </div>
      <ProductSlider
        class="slider long"
        :title="'Просмотренные товары'"
        :cards="cards"
      />
    </div>
  </div>
</template>

<script setup>
import CardAboutProduct from "~~/modules/product/components/productTabs/CardAboutProduct.vue";
import CardProductAside from "~~/modules/product/components/productTabs/CardProductAside.vue";
import CardProductCharacteristics from "~~/modules/product/components/productTabs/CardProductCharacteristics.vue";
import CardProductDescription from "~~/modules/product/components/productTabs/CardProductDescription.vue";
import CardProductInstruction from "~~/modules/product/components/productTabs/CardProductInstruction.vue";
import CardProductNav from "~~/modules/product/components/productTabs/CardProductNav.vue";
import CardProductVideo from "~~/modules/product/components/productTabs/CardProductVideo.vue";
// import Rating from "~~/components/common/sections/Rating.vue";
import ButtonBuy from "~~/modules/shared/components/buttons/ButtonBuy.vue";
import ProductSlider from "~~/modules/shared/components/sliderProductCard/ProductSlider.vue";
import { useHeaderStore } from "~~/store/headerStore";

const header = useHeaderStore();
const heightHeaderStore = header.height;

const productWrapper = ref(null);
const navigation = ref(null);
const aside = ref(null);
const spec = ref(null);
const priceSection = ref(null);

const currentNav = ref(1);
const visibilityPrice = ref(false);
const navHeight = ref("");
const activePage = ref(1);
const sliderSize = ref(0);
const heightHeader = ref("");
const timeout = ref(0);

const { urlLang } = useRoute().params;
const lang = urlLang ? urlLang : "ru";
const { data: products } = await useFetch(
  `/api/products?pageSize=25&pageNum=1&categoryId=`
);

//-------------------------testing array, wait for a data-----------------------
const cards = [
  {
    isOrderable: true,
    id: "a19dcc59-e445-46d9-bb48-3c7c024ae117",
    code: "0003139",
    sku: "S-K03 BOX 15 см",
    slug: "kabel-usb-otg-dlya-galaxy-tab-s-k03-box-15-sm",
    name: {
      ru: "Кабель USB OTG для Galaxy Tab",
      uk: "Кабель USB OTG для Galaxy Tab",
    },
    description: {
      ru: "<p>USB OTG для Galaxy tab (15см) S-K03 BOX &ndash; кабель переходник для подключения мобильных девайсов к стандартному разъему съемных цифровых накопителей (USB порт).<br /> Посредством данного аксессуара возможно подключение к современным гаджетам не только цифровых накопителей, но также устройств ввода, джойстиков, и других устройств с USB интерфейсом.<br /> <br /> Основные характеристики USB OTG для Galaxy tab (15см) S-K03 BOX:<br /> ●&nbsp;&nbsp; &nbsp;Тип: кабель переходник USB OTG/Galaxy tab<br /> ●&nbsp;&nbsp; &nbsp;Интерфейс: Galaxy Tab<br /> ●&nbsp;&nbsp; &nbsp;Совместимостим с: Samsung Galaxy Tab P7500 / P7100 / P7300 2<br /> ●&nbsp;&nbsp; &nbsp;Длина провода: 15 см</p>",
      uk: '<p>Кабель перехідник USB OTG Galaxy Tab S-K03 BOX 15 см для підключення мобільних девайсів до стандартного роз"єму знімних цифрових накопичувачів (USB порт). За допомогою даного аксесуара можливе підключення до сучасних гаджетів не тільки цифрових накопичувачів, але й пристроїв введення, джойстиків та інших пристроїв з USB інтерфейсом. Основні характеристики USB OTG Galaxy Tab S-K03 BOX: - Тип - кабель перехідник; - Довжина кабелю - 15 см; - Інтерфейс - Galaxy Tab; - Інтерфейс підключення до ПК - USB; - Сумісність - Samsung Galaxy Tab P7500, P7100, P7300 2; - Колір - чорний.</p>',
    },
    status: "inStock",
    prices: [{ type: "current", money: { amount: 6, currency: "UAH" } }],
    manufacturer: { name: "LogicPower", slug: "logicpower" },
    specifications: [
      {
        id: 268,
        name: { ru: "Вес, кг", uk: "Вага, кг" },
        option: { id: 3152, value: { ru: 0.18, uk: 0.18 } },
      },
      {
        id: 269,
        name: { ru: "Объем, м.куб", uk: "Об'єм, м.куб" },
        option: { id: 4092, value: { ru: 0.000095, uk: 0.000095 } },
      },
      {
        id: 270,
        name: { ru: "Тип", uk: "Тип" },
        option: { id: 2512, value: { ru: "кабели USB", uk: "кабелі USB" } },
      },
      {
        id: 344,
        name: { ru: "Длина провода, м", uk: "Довжина кабелю, м" },
        option: { id: 4093, value: { ru: "0.15", uk: "0.15" } },
      },
      {
        id: 345,
        name: { ru: "Интерфейс", uk: "Інтерфейс" },
        option: { id: 2879, value: { ru: "Type-C", uk: "Type-C" } },
      },
      {
        id: 341,
        name: {
          ru: "Интерфейс подключения к ПК",
          uk: "Інтерфейс під'єднання до ПК",
        },
        option: { id: 4094, value: { ru: "OTG", uk: "OTG" } },
      },
      {
        id: 329,
        name: { ru: "Цвет", uk: "Колір" },
        option: { id: 2114, value: { ru: "черный", uk: "чорний" } },
      },
      {
        id: 295,
        name: { ru: "Гарантия, мес", uk: "Гарантія, міс" },
        option: { id: 1693, value: { ru: "1", uk: "1" } },
      },
    ],
    categories: [{ id: "33508bfa-9865-4559-afed-1ca480fde306" }],
    images: [
      {
        locales: ["ru", "uk"],
        url: "https://dev.api.logicpower.ua/static/attachments/9/68/46af21419009ba264915a71870f90.png",
        thumbnails: [
          {
            type: "large",
            url: "https://dev.api.logicpower.ua/static/attachments/b/75/29388bffa99d9748eb3f11a9dc251.jpg",
          },
          {
            type: "medium",
            url: "https://dev.api.logicpower.ua/static/attachments/a/10/ca03b20e36767f28f3e7df117b472.jpg",
          },
          {
            type: "small",
            url: "https://dev.api.logicpower.ua/static/attachments/8/69/c696ded1f7557fdd9ac03b46f92eb.jpg",
          },
        ],
      },
      {
        locales: ["ru", "uk"],
        url: "https://dev.api.logicpower.ua/static/attachments/7/06/31ee1dc504a4fec29f32946b91c5c.png",
        thumbnails: [
          {
            type: "large",
            url: "https://dev.api.logicpower.ua/static/attachments/7/1c/b43dfa80ac89e8b89a814edb6659b.jpg",
          },
          {
            type: "medium",
            url: "https://dev.api.logicpower.ua/static/attachments/a/1f/d1e789e9585c25866612a359ecba9.jpg",
          },
          {
            type: "small",
            url: "https://dev.api.logicpower.ua/static/attachments/f/3a/e1dd2f13716d7e4db9c2d15c76ae2.jpg",
          },
        ],
      },
    ],
    attachments: [],
  },
  {
    isOrderable: true,
    id: "a19dcc59-e445-46d9-bb48-3c7c024ae117",
    code: "0003139",
    sku: "S-K03 BOX 15 см",
    slug: "kabel-usb-otg-dlya-galaxy-tab-s-k03-box-15-sm",
    name: {
      ru: "Кабель USB OTG для Galaxy Tab",
      uk: "Кабель USB OTG для Galaxy Tab",
    },
    description: {
      ru: "<p>USB OTG для Galaxy tab (15см) S-K03 BOX &ndash; кабель переходник для подключения мобильных девайсов к стандартному разъему съемных цифровых накопителей (USB порт).<br /> Посредством данного аксессуара возможно подключение к современным гаджетам не только цифровых накопителей, но также устройств ввода, джойстиков, и других устройств с USB интерфейсом.<br /> <br /> Основные характеристики USB OTG для Galaxy tab (15см) S-K03 BOX:<br /> ●&nbsp;&nbsp; &nbsp;Тип: кабель переходник USB OTG/Galaxy tab<br /> ●&nbsp;&nbsp; &nbsp;Интерфейс: Galaxy Tab<br /> ●&nbsp;&nbsp; &nbsp;Совместимостим с: Samsung Galaxy Tab P7500 / P7100 / P7300 2<br /> ●&nbsp;&nbsp; &nbsp;Длина провода: 15 см</p>",
      uk: '<p>Кабель перехідник USB OTG Galaxy Tab S-K03 BOX 15 см для підключення мобільних девайсів до стандартного роз"єму знімних цифрових накопичувачів (USB порт). За допомогою даного аксесуара можливе підключення до сучасних гаджетів не тільки цифрових накопичувачів, але й пристроїв введення, джойстиків та інших пристроїв з USB інтерфейсом. Основні характеристики USB OTG Galaxy Tab S-K03 BOX: - Тип - кабель перехідник; - Довжина кабелю - 15 см; - Інтерфейс - Galaxy Tab; - Інтерфейс підключення до ПК - USB; - Сумісність - Samsung Galaxy Tab P7500, P7100, P7300 2; - Колір - чорний.</p>',
    },
    status: "inStock",
    prices: [{ type: "current", money: { amount: 6, currency: "UAH" } }],
    manufacturer: { name: "LogicPower", slug: "logicpower" },
    specifications: [
      {
        id: 268,
        name: { ru: "Вес, кг", uk: "Вага, кг" },
        option: { id: 3152, value: { ru: 0.18, uk: 0.18 } },
      },
      {
        id: 269,
        name: { ru: "Объем, м.куб", uk: "Об'єм, м.куб" },
        option: { id: 4092, value: { ru: 0.000095, uk: 0.000095 } },
      },
      {
        id: 270,
        name: { ru: "Тип", uk: "Тип" },
        option: { id: 2512, value: { ru: "кабели USB", uk: "кабелі USB" } },
      },
      {
        id: 344,
        name: { ru: "Длина провода, м", uk: "Довжина кабелю, м" },
        option: { id: 4093, value: { ru: "0.15", uk: "0.15" } },
      },
      {
        id: 345,
        name: { ru: "Интерфейс", uk: "Інтерфейс" },
        option: { id: 2879, value: { ru: "Type-C", uk: "Type-C" } },
      },
      {
        id: 341,
        name: {
          ru: "Интерфейс подключения к ПК",
          uk: "Інтерфейс під'єднання до ПК",
        },
        option: { id: 4094, value: { ru: "OTG", uk: "OTG" } },
      },
      {
        id: 329,
        name: { ru: "Цвет", uk: "Колір" },
        option: { id: 2114, value: { ru: "черный", uk: "чорний" } },
      },
      {
        id: 295,
        name: { ru: "Гарантия, мес", uk: "Гарантія, міс" },
        option: { id: 1693, value: { ru: "1", uk: "1" } },
      },
    ],
    categories: [{ id: "33508bfa-9865-4559-afed-1ca480fde306" }],
    images: [
      {
        locales: ["ru", "uk"],
        url: "https://dev.api.logicpower.ua/static/attachments/9/68/46af21419009ba264915a71870f90.png",
        thumbnails: [
          {
            type: "large",
            url: "https://dev.api.logicpower.ua/static/attachments/b/75/29388bffa99d9748eb3f11a9dc251.jpg",
          },
          {
            type: "medium",
            url: "https://dev.api.logicpower.ua/static/attachments/a/10/ca03b20e36767f28f3e7df117b472.jpg",
          },
          {
            type: "small",
            url: "https://dev.api.logicpower.ua/static/attachments/8/69/c696ded1f7557fdd9ac03b46f92eb.jpg",
          },
        ],
      },
      {
        locales: ["ru", "uk"],
        url: "https://dev.api.logicpower.ua/static/attachments/7/06/31ee1dc504a4fec29f32946b91c5c.png",
        thumbnails: [
          {
            type: "large",
            url: "https://dev.api.logicpower.ua/static/attachments/7/1c/b43dfa80ac89e8b89a814edb6659b.jpg",
          },
          {
            type: "medium",
            url: "https://dev.api.logicpower.ua/static/attachments/a/1f/d1e789e9585c25866612a359ecba9.jpg",
          },
          {
            type: "small",
            url: "https://dev.api.logicpower.ua/static/attachments/f/3a/e1dd2f13716d7e4db9c2d15c76ae2.jpg",
          },
        ],
      },
    ],
    attachments: [],
  },
];
//------------------------------------------------------------------------------

function calcCurrNav(idx) {
  currentNav.value = idx;
}

function calcNavHeight() {
  navHeight.value = `${navigation.value.getBoundingClientRect().height}px`;
}

function getPriceEl(el) {
  priceSection.value = el;
}

function calcBlockPriceVisibility() {
  if (window.innerWidth < 1024) {
    const callback = function (entries) {
      if (entries[0].isIntersecting) {
        visibilityPrice.value = false;
      } else {
        visibilityPrice.value = true;
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(priceSection.value);
  }
}

function getWidthSlider() {
  if (window.innerWidth > 1024) { const gap = parseInt(getComputedStyle(spec.value, null).getPropertyValue("gap"));
    const mainPadding =
      parseInt(getComputedStyle(productWrapper.value, null).getPropertyValue("--local-pad")) * 2;
    const widthAside = aside.value.offsetWidth;
    const space = widthAside + mainPadding + gap;

    if (window.innerWidth < 1470) {
      sliderSize.value = window.innerWidth - space + "px";
    } else {
      sliderSize.value = "1076px";
    }
  }
}

function onResize() {
  clearTimeout(timeout.value)

  timeout.value = setTimeout(() => {
    calcBlockPriceVisibility();
    calcNavHeight();
    getWidthSlider();
  }, 500);
}

watch(heightHeaderStore, (val) => {
  heightHeader.value = val.header;
});

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", calcBlockPriceVisibility);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", calcBlockPriceVisibility);
});
</script>

<style lang="scss" scoped>
.card-product {
  --mobile-width: #{$mobile-big-width};
  --local-pad: 16px;

  position: relative;

  @include flex-container(column, flex-start);
  align-items: center;
  gap: 16px;

  padding-bottom: 80px;

  &__navigation {
    width: 100%;

    position: sticky;
    top: v-bind(heightHeader);
    z-index: 100;

    background-color: #f7f9fa;

    @include mobile {
      top: 56px;
    }
  }

  &__rating {
    @include flex-container(row, flex-start);

    padding: 0;
    gap: 8px;

    @include mobile {
      display: none;
    }

    &.mobile {
      display: none;

      @include mobile {
        display: flex;
      }
    }
  }

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    align-items: center;

    padding: 0 16px;
  }

  &__container {
    @extend %width-main;

    @include flex-container(column, flex-start);
    gap: 16px;

    margin-bottom: 16px;
  }
}

.card-title {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  flex-wrap: wrap;
  gap: 16px;

  padding-top: 16px;

  &__text {
    @include font(36, 42);

    @include bigMobile {
      @include font(24, 28);
    }
  }

  &__text-bold {
    font-weight: 600;

    @include bigMobile {
      display: block;
    }
  }

  &__code {
    @include mobile {
      width: 100%;

      @include flex-container(row, space-between, center);
    }
  }

  &__code-wrapper {
    @include flex-container(row, center, center);
    gap: 8px;

    @include font(36, 47, 600);

    @include bigMobile {
      @include font(24, 28);

      gap: 4px;
    }
  }

  &__code-text {
    color: #2b2b2b;

    @include mobile {
      @include font(16, 19, 400);
      color: #8a8a8a;
    }
  }

  &__code-number {
    @include mobile {
      @include font(16, 19, 400);
    }
  }
}

.description {
  scroll-margin-top: 160px;
}

.spec {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    gap: 16px;
  }

  &__title {
    @include font(18, 22, 700);
    color: #2b2b2b;

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__article {
    font-weight: 600;
    color: #8a8a8a;
  }
}

.price-bar {
  width: 100%;

  display: none;
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 16px 8px;

  @include bigMobile {
    @include flex-container(row, space-between, center);
  }

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include font;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include font(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include font(24, 28, 500);
  }
}

.slider {
  max-width: v-bind(sliderSize);

  display: none;

  &.long {
    max-width: 1440px;

    display: block;
  }

  &.active {
    display: block;
  }

  @include bigMobile {
    max-width: 100%;
  }
}

.aside {
  --space-top: 16px;

  position: sticky;
  top: calc(var(--space-top) + v-bind(navHeight) + v-bind(heightHeader));

  @include bigMobile {
    display: none;
  }
}

.price-fade-enter-active,
.price-fade-leave-active {
  transition: opacity 0.3s ease;
}

.price-fade-enter-from,
.price-fade-leave-to {
  opacity: 0;
}
</style>
