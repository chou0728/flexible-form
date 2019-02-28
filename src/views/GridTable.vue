<style scoped lang="stylus">

*
  box-sizing border-box

.wrapper
  padding 50px
  height 100vh

.table
  display grid
  -ms-grid-columns 1fr
  grid-template-columns 1fr

  .row
    display grid
    -ms-grid-columns 1fr 1fr 1fr 1fr
    grid-template-columns 1fr 1fr 1fr 1fr
    border 1px solid #000
    transition .4s all ease-in-out

  .row:nth-child(n+2)
    margin-top -1px

  .row:hover
    border-color red
    cursor pointer

  .row:hover + .row
    border-top 1px solid red


  .column
    width 100%
    height 20px
    border-right 1px solid #000      

  .column:last-child
    border-right none


  //動態class

  .is-focus
    transition .4s all ease-in-out
    margin 20px 0 !important
    border 1px solid red
  
  .is-focus:hover + .row
    border-top 1px solid #000

</style>



<template lang="pug">

.wrapper(@click="removeFocus($event)")
  .table
    .row.row-normal(@click="rowClick($event)")
      .column
      .column
      .column
      .column
    .row.row-normal(@click="rowClick($event)")
      .column
      .column
      .column
      .column
    .row.row-normal(@click="rowClick($event)")
      .column
      .column
      .column
      .column
    .row.row-normal(@click="rowClick($event)")
      .column
      .column
      .column
      .column





</template>

<script>

export default {
  name:'GridTable',
  props:{},
  data() {
    return {
      rowList: [
        {
          cellList:[
            {},
            {},
            {}
          ]
        },
        {
          cellList:[
            {},
            {},
            {}
          ]}
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    rowClick(event){
      event.stopPropagation()
      //先將其他row的class移除，再將現在focus的row加上class
      $('.row').removeClass('is-focus')
      $(event.target).parent().addClass('is-focus')
      
    },
    removeFocus(event){
      event.stopPropagation()
      $('.row').removeClass('is-focus')
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  components: {}
};
</script>
