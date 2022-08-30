<template>
  <div class="overflow-hidden">
    <ForYou />
  </div>
</template>

<script>
import ForYou from '@/components/foryou'

export default {
  name: 'App',
  components: {
    ForYou,
  },
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
@import '@/assets/scss/styles.scss';
</style>
