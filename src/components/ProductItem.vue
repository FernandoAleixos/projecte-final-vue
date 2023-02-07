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
    <button @click="udsUp" type="button" class="btn btn-default btn-sm bg-light">
      <span class="glyphicon glyphicon-arrow-up"></span>
    </button>

    <button @click="udsDown" type="button" class="btn btn-default btn-sm bg-light">
      <span class="glyphicon glyphicon-arrow-down"></span>
    </button>

    <button @click="editProd" type="button" class="btn btn-default btn-sm bg-light">
      <span class="glyphicon glyphicon-pencil"></span>
    </button>

    <button @click="delProd" type="button" class="btn btn-default btn-sm bg-light">
      <span class="glyphicon glyphicon-trash"></span>
    </button>
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
    importe(id) {
      //Calcula el importe total del producto
      store.calcularImporte(id)
    },
    udsUp(id) {
      //Subir unidades al producto
      store.subirUds(id)
    },
    udsDown(id) {
      //Bajar unidades al producto
      store.bajarUds(id)
    },
    editProd(id) {
      //Editar el producto
      store.editarProd(id)
    },
    delProd(id) {
      //Eliminar el producto
      if (window.confirm('Estas seguro que quieres eliminar este producto?')) {
        store.eliminarProd(id);
      }
    }
  }
}
</script>