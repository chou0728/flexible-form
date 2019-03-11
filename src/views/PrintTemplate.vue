<style lang="stylus">

.print-tamplate 
  
  #printArea
    width 21cm
    padding 10mm
    margin 0 auto
    min-height 29.7cm
    // position relative

    .page-break
      width 100%
      height 2px
      background #f00
      position relative
      left 0
      top calc(29.7cm - 10mm)
      z-index 3
      page-break-before always


  table
    width 100%
    border 1px solid #000
    border-collapse collapse
  
  td
    height 34px
    border 1px solid #000
    padding 5px

  .section-two-table
    margin-top -1px


  .section-one-row
    td:nth-child(odd)
      width 20%
  
  .section-two-row
    td
      width 20%

@media print
  #printArea
    width 21cm
    height 29.7cm
    padding 10mm
    margin 0 auto 
  
  table
    border 1px solid #000
    border-collapse collapse

  td
    height 34px
    border 1px solid #000
    padding 5px

  .section-one-table
    width 100%

  .section-two-table
    margin-top -1px

  .section-one-row
    page-break-inside avoid
    td:nth-child(odd)
      width 20%
  
  .section-two-row
    page-break-inside avoid
    td
      width 20%


</style>

<template lang="pug">
  .print-tamplate
    ViewButton(@click="printTable") 列印
    #printArea 
      .page-break
      table.section-one-table
        tbody
          tr.section-one-row(v-for=" (row, index) in tamplateData.pages[0].section1.rows" :key="row.rowId")
            td(v-for="(column, index) in row.columns" :key="column.columnId") {{column.value}}
      
      table.section-two-table
        tbody
          tr.section-two-row(v-for=" (row, index) in tamplateData.pages[0].section2.rows" :key="row.rowId")
            td(v-for="(column, index) in row.columns" :key="column.columnId") {{column.value}}

</template>

<script>
  import tamplateData from '../fake-data/tamplate.js'


  export default {
    name: 'PrintTemplate',
    data() {
      return {
        tamplateData
      }
    },
    watch: {},
    computed: {
    },
    methods: {
      mergeCell() {
        const two = $('.section-one-row').children('td')[1]
        $(two).attr('colspan','4')
      },
      printTable(){
        const printAreaContent = $('#printArea').html()
        const originalBodyContent = $('body').html()
        $('body').html(printAreaContent)
        window.print()
        $('body').html(originalBodyContent)
        return
      },
      
    },
    created() {
      
      this.tamplateData.pages[0].section1.rows.forEach(row => {
        row.rowId = this.createUuid()
        row.columns.forEach( column => {
          column.columnId = this.createUuid()
        })
      });
      this.tamplateData.pages[0].section2.rows.forEach(row => {
        row.rowId = this.createUuid()
        row.columns.forEach( column => {
          column.columnId = this.createUuid()
          column.value = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32'
        })
      });},
    mounted() {
      this.mergeCell()
    },
    destroyed() {},
    components: {}
  };
</script>
