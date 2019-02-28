<style lang="stylus">

.template-body-wrapper
  width 100%  

  .main-area
    height calc(100vh - 60px)
    background #bbb
    padding 50px
    overflow auto
    -ms-overflow-style none //scrollbar hidden for IE
    overflow -moz-scrollbars-none //scrollbar hidden for Firefox

    &::-webkit-scrollbar  //scrollbar hidden for Chrome & Safari
      display none

  .side-area
    height calc(100vh - 60px)
    background #fff

    &__title
      padding 10px
      border-bottom 1px solid #bbb
      background #ddd

  .column-components
    display flex 
    flex-wrap wrap

    .component-wrapper
      width 50%

  .component-wrapper
    width 100%
    padding 30px
    border-right 1px solid #bbb
    border-bottom 1px solid #bbb
    text-align center

    &:hover
      cursor pointer


  .component-icon
    width 100%
    margin-bottom 10px

</style>

<template lang="pug">
  .template-body-wrapper
    ViewRow.template-body
      ViewCol.main-area(span="19")
        slot(name="main-content")
      ViewCol.side-area(span="5")
        .side-area__title
          slot(name="side-title")
        .side-area__content
          slot(name="side-content")
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
