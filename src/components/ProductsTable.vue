<template>
  <div class="container">
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoria</th>
          <th scope="col">Uds.</th>
          <th scope="col">Precio/u</th>
          <th scope="col">Importe</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <product-item v-for="product in products" :key="product.id" />
          <!--TODO Items-->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { store } from '../store/data';
  import ProductItem from './ProductItem.vue';

  export default {
    name: "product-table",
    components: { ProductItem },
    data() {
      return {
        products: store.products
      }
    },
    mounted() {
      store.loadData()
    }
  }
</script>
