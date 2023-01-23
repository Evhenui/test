import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'productCard',
  path: '/productCard',
  file: path.resolve('./components/ProductCard.vue'),
};