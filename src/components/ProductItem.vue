<template> 

</template>
<script>
  import { store } from '../store/data';

  export default {
    name: "product-item",
    components: { ProductItem },
    data() {
      return {
        products: store.products
      }
    },
    methods: {
      udsUp(id) {
        //Subir unidades al producto
      },
      udsDown(id) {
        //Bajar unidades al producto
      },
      editProd(id) {
        //Editar el producto
      },
      delProd(id) {
        //Eliminar el producto
      }
    }
  }
</script>