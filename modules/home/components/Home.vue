<template>
  <section class="main-page">
    <MainSlider :items="mainSliderItems" />

    <div class="main-page__banner">
      <div class="main-page__banner-wrapper">
        <div class="main-page__banner-image">
          <img src="~~/assets/icons/big-logo.svg" alt="logo" />
        </div>
        <div class="main-page__banner-text">
          <h3 class="main-page__banner-title">
            LogicPower — стандарт мощности!
          </h3>
          <p class="main-page__banner-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>

    <div class="main-page__slider-category-block">
      <div class="main-page__slider-category-block-wrp">
        <SliderCategoryComponent />

        <div class="main-page__about-company">
          <div class="main-page__about-company-title-w">
            <h5 class="main-page__about-company-title">
              {{ _T("@About company") }}
            </h5>
            <p class="main-page__about-company-text">
              {{ _T("@History of company development") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <AboutUsSliderComponent />

    <div class="main-page__team-block">
      <div class="main-page__team-w">
        <p class="main-page__team-text">
          {{ _T("@LP team set itself new goal") }}
        </p>
      </div>
    </div>

    <div class="main-page__catalogs">
      <div class="main-page__catalogs-wrapper">
        <Navigation
          class="main-page__catalog-nav"
          @navChange="calcCurrNav"
          :CurrentNav="currentNav"
        />
        <!----------------------------------- waiting for data 'cards'-------------------------------------------->
        <RegularSlider v-if="currentNav === 1" :cards="cardItemsNovelties" />
        <!----------------------------------- waiting for data -------------------------------------------->
        <RegularSlider v-else :cards="cardItemsPopular" />
        <!----------------------------------- waiting for data 'cards'-------------------------------------------->
      </div>
    </div>

    <div class="main-page__b2b-block">
      <div class="main-page__b2b-bgr">
        <img
          class="main-page__b2b-bgr-img"
          src="/img/mainB2bBckgrnd.png"
          alt=""
        />
      </div>
      <div class="main-page__b2b-block-container">
        <div class="main-page__b2b-logo">
          <p class="main-page__b2b-logo-title">B2B</p>
        </div>
        <div class="main-page__b2b-heading">
          <h3 class="main-page__b2b-heading-title">
            {{ _T("@Convenient portal for orders and workflow") }}
          </h3>
          <p class="main-page__b2b-heading-text">
            {{ _T("@B2B portal for wholesale buyers") }}
          </p>
        </div>
        <div class="main-page__b2b-info">
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              {{ _T("@Expansion of business due new products") }}
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              {{ _T("@Flexibility of product range") }}
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              {{ _T("@Excellent service and comfortable conditions") }}
            </p>
          </div>
          <div class="main-page__b2b-info-item">
            <p class="main-page__b2b-info-text">
              {{ _T("@Guaranteed product quality and technical support") }}
            </p>
          </div>
        </div>
        <a class="main-page__b2b-link" href="https://b2b.logicpower.ua/">
          {{ _T("@Go to B2B") }}
        </a>
      </div>
    </div>

    <div class="main-page__coop-block">
      <div class="main-page__coop-title-w">
        <h2 class="main-page__coop-title">{{ _T("@We cooperate") }}</h2>
        <p class="main-page__coop--title-text">
          ТМ LOGICPOWER – 100% {{ _T("@Manufacturer quality assurance") }}
        </p>
      </div>
      <CooperationSliderComponent />
    </div>

    <div class="main-page__news-block">
      <div class="main-page__news-title-w">
        <h2 class="main-page__news-title">
          {{ _T("@News") }}
          <span>&#38;</span>
          {{ _T("@Articles") }}
        </h2>
        <p class="main-page__news-title-text">
          {{ _T("@All you need to know about technologies") }} LOGICPOWER
        </p>
      </div>
      <div class="main-page__news-card-w">
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="/img/mainNewsImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">{{ _T("@News") }}</h3>
            <p class="main-page__news-card-text">
              {{ _T("@Useful information about our company") }}
            </p>
            <a class="main-page__news-link" href="#">{{ _T("@Go") }}</a>
          </div>
        </div>
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="/img/mainBlogImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">{{ _T("@Blog") }}</h3>
            <p class="main-page__news-card-text">
              {{ _T("@Reviews articles expert advice") }}
            </p>
            <a class="main-page__news-link" href="#">{{ _T("@Go") }}</a>
          </div>
        </div>
        <div class="main-page__news-card">
          <a class="main-page__news-link" href="#">
            <div class="main-page__news-card-img-cont">
              <img
                class="main-page__news-card-img"
                src="/img/mainFaqImg.png"
                alt=""
              />
            </div>
          </a>
          <div class="main-page__news-card-info">
            <h3 class="main-page__news-card-title">FAQ</h3>
            <p class="main-page__news-card-text">
              {{ _T("@Frequently Asked Questions") }}
            </p>
            <a class="main-page__news-link" href="#">{{ _T("@Go") }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SliderCategoryComponent from "~/modules/home/components/SliderCategory.vue";
import CooperationSliderComponent from "~~/modules/home/components/cooperationSlider/CooperationSlider.vue";
import AboutUsSliderComponent from "~/modules/home/components/aboutUsSlider/AboutUsSlider.vue";
import MainSlider from "~/modules/home/components/mainSlider/MainSlider.vue";
import RegularSlider from "~/modules/home/components/regularSliders/RegularSlider.vue";
import Navigation from "~/modules/home/components/regularSliders/Navigation.vue";

const mainSliderItems = [
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "#F36C21"
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "#F36C21"
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "#F36C21"
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
    imgBorderColor: "#F36C21"
  },
];

const cardItemsNovelties = [
  {
    suggestions: ["novelty", "top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: true,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
];

const cardItemsPopular = [
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
];

const currentNav = ref(1);

function calcCurrNav(idx) {
  currentNav.value = idx;
}
</script>

<style lang="scss">
.main-page {
  //main-page__slider-category-block

  width: 100%;

  @include flex-container(column, center);

  gap: 32px;

  @include bigMobile {
    gap: 24px;
  }

  &__slider-category-block {
    padding: 24px 16px 64px;
  }

  &__slider-category-block-wrp {
    @extend %width-main;

    @include flex-container(column, stretch, center);
    gap: 64px;
    
    margin: auto;

    @include mobile {
      gap: 48px;
    }
  }

  &__banner {
    @extend %padding-wrp;

    @include bigMobile {
      display: none;
    }
  }

  &__banner-wrapper {
    @extend %width-main;

    @include flex-container(row, space-between, center);

    background-color: white;

    border-radius: 16px;

    gap: 16px;
    padding: 32px;
    margin: auto;
  }

  &__banner-image {
    flex: 1 0 auto;
  }

  &__banner-text {
    max-width: 1105px;
    width: 100%;

    @include flex-container(column, center, flex-start);

    gap: 32px;
  }

  &__banner-title {
    @include font(34, 41, 600);
    color: #2b2b2b;
  }

  &__banner-subtitle {
    @include font(20, 28, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__about-company {
    @extend %width-main;

    border-radius: 16px;

    color: white;
    background-color: #393d38;

    @include mobile {
      border-radius: 8px;
    }
  }

  &__about-company-title-w {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }

  &__about-company-title {
    max-width: 347px;
    width: 100%;
    min-height: 270px;

    @include flex-container(row, center, center);
  }

  &__about-company-title-w {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }

  &__about-company-title {
    @include font(28, 40, 600);
    letter-spacing: 0.02em;

    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;

    background-color: var(--color-primary-base);

    @include bigMobile {
      max-width: none;
      min-height: 70px;

      border-bottom-left-radius: 0;
      border-top-right-radius: 16px;
    }

    @include mobile {
      @include font(22, 26, 600);

      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
  }

  &__about-company-text {
    @include flex-container(row, center, center);
    align-self: center;

    @include font(18, 25, 500);
    letter-spacing: 0.02em;

    padding: 16px;

    @include mobile {
      @include font;

      padding: 24px 16px;
    }
  }

  // main-page__team-block
  &__team-block {
    @include flex-container(column, stretch, center);

    padding: 0 16px;

    @include mobile {
      padding: 32px 16px;
    }
  }

  &__team-w {
    @extend %width-main;

    @include flex-container(row, center, center);

    background: linear-gradient(91.75deg, #f36c21 0.14%, #f5821f 99.6%);
    border-radius: 16px;

    padding: 32px;

    @include mobile {
      border-radius: 8px;
      padding: 16px 8px;
    }
  }

  &__team-text {
    width: 100%;
    max-width: 1248px;

    @include font(18, 25, 500);
    letter-spacing: 0.02em;

    color: white;

    @include mobile {
      @include font;
    }
  }

  // main-page__b2b-block
  &__b2b-block {
    position: relative;

    @include flex-container(column, stretch, center);

    padding: 64px 16px;
  }

  &__catalogs {
    background-color: white;

    padding: 48px 16px 0 16px;

    @include bigMobile {
      padding: 48px 0 48px 16px;
    }
  }

  &__catalogs-wrapper {
    @extend %width-main;
    
    @include flex-container(column, center, center);

    gap: 48px;
    
    margin: auto;
  }

  &__b2b-bgr {
    position: absolute;
    @include setAbs;
  }

  &__b2b-bgr-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__b2b-block-container {
    position: relative;

    @extend %width-main;

    @include flex-container(column, stretch, center);
    gap: 48px;

    @include mobile {
      gap: 32px;
    }
  }

  &__b2b-logo {
    max-width: 200px;
    width: 100%;
    height: 200px;

    @include flex-container(row, center, center);

    border-radius: 50%;
    background-color: var(--color-primary-base);

    @include mobile {
      max-width: 100px;
      height: 100px;
    }
  }

  &__b2b-logo-title {
    @include font(34, 41, 600);
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: white;

    @include mobile {
      @include font(24, 31, 700);
    }
  }

  &__b2b-heading {
    @include flex-container(column, stretch, center);
    gap: 32px;

    color: white;
  }

  &__b2b-heading-title {
    @include font(32, 42, 600);
    text-align: center;

    @include mobile {
      @include font(16, 22, 400);
    }
  }

  &__b2b-heading-text {
    @include font(20, 30, 600);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-align: center;

    @include mobile {
      @include font(16, 20, 600);
    }
  }

  &__b2b-info {
    width: 100%;

    @include flex-container;
    gap: 32px;

    @include bigMobile {
      flex-direction: column;
      align-items: center;

      gap: 24px;
    }
  }

  &__b2b-info-item {
    width: 100%;
    max-width: 343px;
    min-height: 237px;

    @include flex-container(column, center, center);

    background-color: #f3f3f3;
    border-radius: 8px;

    padding: 16px;

    @include bigMobile {
      max-width: 643px;
      min-height: auto;
    }
  }

  &__b2b-info-text {
    @include font;
    letter-spacing: 0.02em;
  }

  &__b2b-link {
    width: 100%;
    max-width: 363px;

    @include flex-container(row, center, center);

    @include font(20, 30, 600);
    text-transform: uppercase;

    color: white;
    background-color: var(--color-primary-base);
    border-radius: 6px;

    padding: 8px 0;
    transition: 0.2s ease-in-out;

    @include mobile {
      max-width: 230px;
    }

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  // main-page__coop-block

  &__coop-block {
    /* min-height: 504px; */

    @include flex-container(column, flex-start, center);
    gap: 64px;

    @extend %padding-wrp;

    @include mobile {
      min-height: 330px;

      gap: 48px;
    }
  }

  &__coop-title-w {
    width: 100%;

    @include flex-container(column, stretch, center);
    gap: 24px;
  }

  &__coop-title {
    @include font(32, 42, 600);
    text-align: center;

    @include mobile {
      @include font(22, 26, 600);
    }
  }

  &__coop--title-text {
    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    @include mobile {
      @include font(18, 22, 600);
    }
  }

  //main-page__news-block
  &__news-block {
    width: 100%;

    @include flex-container(column, center, center);
    gap: 64px;

    background-color: white;

    @extend %padding-wrp;

    @include mobile {
      gap: 48px;
    }
  }

  &__news-title-w {
    width: 100%;

    @include flex-container(column, stretch, center);
    gap: 24px;

    padding-top: 64px;

    @include mobile {
      gap: 16px;

      padding-top: 40px;
    }
  }

  &__news-title {
    @include font(32, 40, 600);
    text-align: center;
    text-transform: capitalize;

    & span {
      color: var(--color-primary-base);
    }

    @include mobile {
      @include font(22, 26, 600);
    }
  }

  &__news-title-text {
    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    @include mobile {
      @include font(18, 22, 500);
    }
  }

  &__news-card-w {
    @extend %width-main;

    @include flex-container(row, center);
    flex-wrap: wrap;

    --gap: 16px;
    gap: var(--gap);

    margin-bottom: 64px;

    @include mobile {
      margin-bottom: 80px;
    }
  }

  &__news-card {
    @include flex-container(column, stretch, center);

    gap: calc(var(--gap) * 1.5);

    background-color: white;
    box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);

    border-radius: 8px;

    @include set-item-count-in-row(3);

    @include bigMobile {
      @include set-item-count-in-row(2);
    }

    @include mobile {
      gap: calc(var(--gap) * 2);

      width: 100%;
      max-width: 343px;
    }
  }

  &__news-link {
    width: 100%;

    @include font(18, 24);
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 0.02em;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    color: var(--color-primary-base);

    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  &__news-card-img-cont {
    width: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &__news-card-img {
    width: 100%;
    height: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    pointer-events: none;
  }

  &__news-card-info {
    height: 100%;

    @include flex-container(column, space-between, center);
    gap: 16px;

    padding: 0 10px 20px;

    @include mobile {
      gap: 16px;

      padding-bottom: 24px;
    }
  }

  &__news-card-title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    text-align: center;

    @include mobile {
      @include font(18, 22, 600);
      letter-spacing: 0.02em;
    }
  }

  &__news-card-text {
    @include font;
    text-align: center;
    letter-spacing: 0.02em;

    color: #8a8a8a;

    @include lineClamp(4);

    @include mobile {
      @include font(12, 16);
    }
  }
}
</style>
