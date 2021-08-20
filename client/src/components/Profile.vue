<template>
  <div>
    Hola, estoy en el perfil de {{ this.$store.state.user.email }}
  </div>
</template>

<script>
export default {
    name: 'Profile'
};
</script>

<style scoped>

</style>
