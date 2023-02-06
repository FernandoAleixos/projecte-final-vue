<template> 
  <td>
    {{ product.id }}
  </td>
  <td>
    {{ product.name }}
  </td>
  <td>
    {{ category.name }}
  </td>
  <td>
    {{ product.units }}
  </td>
  <td>
    {{ product.price }}
  </td>
  <td>
    <!--TODO function que calcula el importe del producto-->
  </td>
  <td>
    <!--TODO Acciones del producto (subir/bajar unidades, editar y borrar)-->
  </td>
</template>
<script>
  import { store } from '../store/data';

  export default {
    name: "product-item",
    components: { ProductItem },
    data() {
      return {
        product: store.products,
        category: store.categories
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