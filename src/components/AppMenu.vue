<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">Almacén IESMRE</span>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" data-div="div-prods" aria-current="page" href="#">Productos</a>
          <a class="nav-link" data-div="div-cats" href="#">Categorías</a>
          <a class="nav-link" data-div="div-form-prod" href="#">Añadir producto</a>
          <a class="nav-link" data-div="div-form-cat" href="#">Añadir categoría</a>
          <a class="nav-link" data-div="div-about" href="#">Sobre nosotros</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {};
  },
};
</script>
