<script>
import AppMenu from './components/AppMenu.vue';
import ProductForm from './components/ProductForm.vue';
import ProductsTable from './components/ProductsTable.vue';

import { store } from './store/data';

export default {
  components: { ProductsTable, ProductForm, AppMenu },
  data() {
        return {
            products: store.products,
            categories: store.categories,
        };
    },
    mounted() {
      store.loadData()
    },
}
</script>

<template>
  <div class="container">
    <AppMenu></AppMenu>
    <ProductsTable></ProductsTable>
    <ProductForm></ProductForm>
    <footer><small>Diseño Web en Entorno Cliente - IES Mestre Ramon Esteve</small></footer>
  </div>
</template>