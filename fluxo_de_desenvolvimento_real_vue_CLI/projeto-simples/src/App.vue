<template>

  <h1>{{ titulo }}</h1>

</template>

<script>
export default  {
  data: function() {
    return {
      titulo: "Ola vuejs"
    }
  },
  created: {
      change() {
            setInterval(function() {
                this.titulo = "Ola Jefferson"
            }, 1000)
      }
  }
}

</script>

<style scoped>


</style>