<style lang="stylus">

.template-header-wrapper
  width 100%
  height 60px
  line-height 60px
  background #555
  
  .template-header
    display flex
    flex-direction row
    justify-content space-between

  .go-back-link
    padding-left 20px
    a
      color #fff
  
  .buttons-area
    display flex
    justify-content space-between

    button
      margin 10px

    
</style>

<template lang="pug">
  .template-header-wrapper
    .template-header
      .go-back-link
        slot(name="go-back")
      .buttons-area
        slot(name="save-button")
        slot(name="deploy-button")

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  watch: {},
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {},
  destroyed() {},
  components: {}
};
</script>
