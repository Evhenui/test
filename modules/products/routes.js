import { createResolver } from '@nuxt/kit';

const path = createResolver(import.meta.url);

export default {
  name: 'categorySlug',
  path: '/:categorySlug',
  file: path.resolve('./pages/index.vue'),
  children: [
    {
      name: 'categorySlug.productSlug',
      path: '/:categorySlug/:productSlug',
      file: path.resolve('./pages/products/index.vue'),
    },
  ],
};
