<style scoped lang="stylus">

.wrapper
  padding 0 50px 
.table
  display table
  width 100%
  border-collapse collapse

  .title
    display table-caption
    text-align center
    font-weight bold
    font-size larger
  
  .heading
    display table-row
    text-align center
    font-weight bold
  
  .row 
    display table-row
    position relative

  .row-mask
    display table-cell
    width 0


  .cell
    display table-cell
    border solid thin #000
    padding 0 5px
    text-align center

.row-is-highlight
  background red


</style>



<template lang="pug">

.wrapper
  .table
    .title
      p This is table
    .heading
      .cell
        p Heading 1
      .cell
        p Heading 2
      .cell
        p Heading 3
    .row(v-for="row in rowList" @click="rowClick($event)")
      .row-mask
      .cell(v-for="cell in row.cellList")
        p this is cell





</template>

<script>

export default {
  name:'DivTable',
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
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    rowClick(event){
      $(event.target).addClass('row-is-highlight')
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  components: {}
};
</script>
