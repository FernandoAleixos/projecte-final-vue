<template>
  <tr>
    <td>
      {{ prod.id }}
    </td>
    <td>
      {{ prod.name }}
    </td>
    <td>
      {{ prod.category }}
    </td>
    <td>
      {{ prod.units }}
    </td>
    <td>
      {{ prod.price + " €/u" }}
    </td>
    <td>
      <!--TODO function que calcula el importe del producto-->
      {{ importe() }}
    </td>
    <td>
      <!--TODO Acciones del producto (subir/bajar unidades, editar y borrar)-->
      <button @click="udsUp" class="btn btn-sm bg-light">
        <span class="bi bi-arrow-up"></span>
      </button>

      <button @click="udsDown" class="btn btn-default btn-sm bg-light">
        <span class="bi bi-arrow-down bg-light"></span>
      </button>

      <button @click="editProd" class="btn btn-default btn-sm bg-light">
        <span class="bi bi-pencil bg-light"></span>
      </button>

      <button @click="delProd" class="btn btn-default btn-sm bg-light">
        <span class="bi bi-trash3 bg-light"></span>
      </button>
    </td>
  </tr>
</template>

<script>
import { store } from '../store/data';

export default {
  name: "product-item",

  props: {
    prod: {
      type: Object,
      required: true
    },
  },
  data() {
    return {}
  },
  methods: {
    importe() {
      //Calcula el importe total del producto
      let total = this.prod.price * this.prod.units;
      return total.toFixed(2) + '€';
    },
    udsUp() {
      //Subir unidades al producto
      store.subirUds(this.prod.id)
    },
    udsDown() {
      //Bajar unidades al producto
      store.bajarUds(this.prod.id)
    },
    editProd() {
      //Editar el producto
      console.log('Futuras implementaciones')
    },
    delProd() {
      //Eliminar el producto
      if (window.confirm('Estas seguro que quieres eliminar este producto?')) {
        store.eliminarProd(this.prod.id)
      }
    }
  },
  mounted() {
    store.loadData()
  }
}
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

tr, td {
  border: 0;
  padding: 0;
}
</style>