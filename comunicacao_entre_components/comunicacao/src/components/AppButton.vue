<template>
    <button class="btn btn-primary">
        <slot />
    </button>
</template>

<script>

export default({
   props: {
       title: {
           type: String,
           default: "clique"
       }
   }
})
</script>
