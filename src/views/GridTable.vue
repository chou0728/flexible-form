<style scoped lang="stylus">

*
  box-sizing border-box
h1
  text-align center
  padding-bottom 30px

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
    border-color #0dbbfb
    cursor pointer

  .row:hover + .row
    border-top 1px solid #0dbbfb


  .column
    width 100%
    height 34px
    background #fff
    border-right 1px solid #000    
    text-align center
    line-height 34px  
    position relative
    transition .35s all ease-in-out
    pointer-events none

  .column:last-child
    border-right none

  .editable-input
    width calc(100% - 10px)
    height calc(100% - 10px)
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    padding 0 10px
    border 1px solid transparent
    display block
    opacity 1
    transition .35s all ease-in-out
    background transparent
    border-radius 2px
    cursor text
    outline none


  .readonly-input
    width 100%
    height 100%
    padding 0 10px
    border 1px solid transparent
    background transparent
    display block
    opacity 1
    transition .35s all ease-in-out
    outline none
    pointer-events none
    text-align center

  .edit-button
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    background #eff4f6
    border none 
    border-radius 2px
    width calc(100% - 10px)
    height 28px
    line-height 28px
    padding 0 0 2px
    opacity 0
    pointer-events none
    transition all .35s ease-in-out
    outline none

  //動態class

  //for .row
  .is-focus-row
    transition .35s all ease-in-out
    margin 20px 0 !important
    border 1px solid #0dbbfb
  
  .is-focus-row:hover + .row
    border-top 1px solid #000

  .is-blur-row
    opacity .3
  
  .is-blur-row:hover
    opacity .75

  // for column
  .is-focus-column
    background #fff

  .is-focus-column:hover
    background #c7d8e0
  
  // for .edit-button
  .is-focus-column:hover > .edit-button
    opacity 1
    border-color #c6e2ff
    background #fff
    color #409eff
    pointer-events auto

  //for .editable-input
  .is-focus-column:hover > .editable-input 
    background #fff

  .is-focus-input
    background #f8fafb
    // border 1px solid #6c94a8

</style>



<template lang="pug">

.wrapper(@click="removeFocus($event)")
  h1 動態表單
  .table
    .row(@click="rowClick($event)" v-for="(row,index) in rowList" :key="index")
      .column(v-for="(column,index) in row.columnList" :key="index")
        template(v-if=" column.type ==='input' ")
          input.editable-input(
            type="text" 
            placeholder="請輸入標題"
            @click="inputClick($event)" 
            @mouseout="inputMouseout($event)")
        template(v-else)
          input.readonly-input(type="text" readonly placeholder="請輸入內容(readonly)")
          button.edit-button(@click="editButtonClick($event)") 編輯
          

</template>

<script>

export default {
  name:'GridTable',
  props:{},
  data() {
    return {
      rowList: [
        {
          columnList:[
            {
              type:'input'
            },
            {
              type:''
            },
            {
              type:'input'
            },
            {
              type:''
            }
          ]
        },
        {
          columnList:[
            {
              type:'input'
            },
            {
              type:''},
            {
              type:'input'
            },
            {
              type:''
            }
          ]
        },
        {
          columnList:[
            {
              type:'input'
            },
            {
              type:''
            },
            {
              type:'input'
            },
            {
              type:''
            }
          ]
        }
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    rowClick(event) {
      event.stopPropagation()
      if(!$(event.target).is('.row')){
        return 
      }
      $('.row').removeClass('is-focus-row')
      $('.row').addClass('is-blur-row')
      $(event.target).addClass('is-focus-row')
      $(event.target).removeClass('is-blur-row')
      $(event.target).find('.column').addClass('is-focus-column')
      $(event.target).find('.column').css('pointer-events','auto')
    },
    removeFocus(event) {
      event.stopPropagation()
      $('.row').removeClass('is-focus-row')
      $('.row').removeClass('is-blur-row')
      $('.column').removeClass('is-focus-column')
      $('.column').css('pointer-events','none')
    },
    editButtonClick(event) {
      event.stopPropagation()
      // console.log('editButtonClick')
    },
    inputClick(event) {
      event.stopPropagation()
      $(event.target).addClass('is-focus-input')
    },
    inputMouseout(event) {
      event.stopPropagation()
      $(event.target).removeClass('is-focus-input')
      // $(event.target).blur()
    }
  },
  created() {},
  mounted() {},
  destroyed() {},
  components: {}
};
</script>
