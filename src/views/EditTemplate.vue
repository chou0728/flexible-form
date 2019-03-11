<style lang="stylus">

.table
  width 100%
  min-height 100vh
  background #fff
  padding 10px 40px 20px 40px

  .pagebreak  //TODO:刪除
    width 100%
    height 2px
    background #f00
    position relative
    left 0
    top 110vh
    z-index 3
    page-break-before always

//A4尺寸
@media print
  .table
    width 21cm
    height 29.7cm
    margin 30mm 45mm 30mm 45mm


.table-info
  display grid 
  grid-template-columns 1fr 1fr 1fr
  -ms-grid-columns 1fr 1fr 1fr

  .table-info__item
    padding 20px
    background #fff
    text-align center

.table-name
  width 100%
  text-align center
  padding 5px 10px
  background transparent
  border 1px solid transparent
  transition .35s all ease-in-out

  &:hover
    background #c7d8e0
    border 1px solid #0dbbfb
  
  &:hover > .table-name__input
    background #fff

  &:focus-within
    background #c7d8e0
    border 1px solid #0dbbfb

  &__input
    width 100%
    background transparent
    text-align center
    border 1px solid #fff
    border-radius 2px
    outline none 
    box-shadow none
    resize none
    font-size 20px    
    transition .35s all ease-in-out

    &:focus
      background #fff


.table-sections

  .add-row-button
    width 100%
    height 36px
    line-height 36px
    border 1px dashed #000
    background #fff
    margin-top 10px
    text-align center 
    

    &:hover
      cursor pointer
    
    &:before
      content '+'
      font-size 18px
      padding-right 5px

  .section-one
    display grid
    -ms-grid-columns 1fr 
    grid-template-columns 1fr 
    margin-top 20px

    .two-column-row
      -ms-grid-columns 0.25fr 0.75fr  
      grid-template-columns 0.25fr 0.75fr 

    .row
      display grid
      -ms-grid-columns 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr
      border 1px solid gray
      transition .4s all ease-in-out
      page-break-inside avoid

      &:nth-child(n+2)
        margin-top -1px

      &:hover 
        border-color #0dbbfb
        cursor pointer

      &:hover + .row
        border-top 1px solid #0dbbfb
       
      &:focus-within
        border-color #0dbbfb

    .column
      width 100%
      height 36px
      line-height 36px
      background #fff
      border-right 1px solid #000    
      text-align center
      position relative
      transition .35s all ease-in-out
      pointer-events none

      &:last-child
        border-right none
      
      &:focus-within
        background #c7d8e0

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
        text-align center

        &:focus
          background #fff
      
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



  .section-two 
    display grid
    -ms-grid-columns 1fr 
    grid-template-columns 1fr 
    margin-top 20px

    .row
      display grid
      -ms-grid-columns 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr
      border 1px solid gray
      transition .4s all ease-in-out
      page-break-inside avoid

      &:nth-child(n+2)
        margin-top -1px

      &:hover 
        border-color #0dbbfb
        cursor pointer

      &:hover + .five-column-row
        border-top 1px solid #0dbbfb

      &:hover + .one-column-row
        border-top 1px solid #0dbbfb
       
      &:focus-within
        border-color #0dbbfb

    .column
      width 100%
      background #fff
      border-right 1px solid #000    
      text-align center
      position relative
      transition .35s all ease-in-out
      pointer-events none
      display flex
      justify-content center
      align-items center
      padding 5px 0

      &:last-child
        border-right none
      
      &:focus-within
        background #c7d8e0

      .editable-input 
        width calc(100% - 20px)
        height auto
        padding 5px 10px
        border 1px solid transparent 
        opacity 1
        transition .35s all ease-in-out
        background transparent
        border-radius 2px
        cursor text
        outline none

        &:focus
          background #fff
        
      .readonly-input
        width 100%
        height auto
        padding 5px 10px
        border 1px solid transparent
        background transparent
        opacity 1
        transition .35s all ease-in-out
        outline none
        pointer-events none
        text-align center


      .edit-button
        width calc(100% - 10px)
        height auto
        max-height 34px
        line-height 34px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        background #eff4f6
        border none 
        border-radius 2px
        opacity 0
        pointer-events none
        transition all .35s ease-in-out
        outline none
      
      textarea
        overflow hidden
        resize none

        &::placeholder
          text-align center
      
      .ivu-select
        padding 0 4px

      .two-unit-input, .three-unit-input
        display flex
        justify-content center

        span 
          padding 0 5px
          display inline-block
          line-height 36px
        input 
          width 40%
          height 36px
          border 1px solid rgba(0,0,0,0.2)
          border-radius 2px
          outline none

      .three-unit-input input
        width 30%


    &__row-mask
      width 100%
      height 100%
      z-index 3
      position absolute
      left 0 
      top 0
      background transparent
      opacity 1
      // border 1px solid #000

      &:hover
        opacity .3
        background gray
        cursor pointer

    .row-mask-is-focus
      background gray
      opacity .3
        
    &__column
      position relative
      background #fff
      
      textarea
        text-align center



    &__column-mask
      width 100%
      height 100%
      position absolute
      left 0 
      top 0
      z-index 4
      text-align center
      opacity 0
      transition .3s all ease-in-out
    
      &:hover
        cursor pointer
    
      &__btn
        width 90%
        height 85%
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        background red
        color #fff
        border-radius 4px
      
        span 
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)

    .column-mask-is-hover
      opacity 1
      transition .3s all ease-in-out


    //隨著rowType做變化
    .five-column-row
      -ms-grid-columns 1fr 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr 1fr

    .one-column-row
      -ms-grid-columns 1fr 
      grid-template-columns 1fr

    .empty-row
      -ms-grid-columns 1fr 
      grid-template-columns 1fr
      border none
      margin-top 0px !important
      margin-bottom 1px !important



  // === 動態class ===

  //.row
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

  //.column
  .is-focus-column
    background #fff

  .is-focus-column:hover
    background #c7d8e0

  //.edit-button
  .is-focus-column:hover > .edit-button
    opacity 1
    border-color #c6e2ff
    background #fff
    color #409eff
    pointer-events auto

  //.editable-input
  .is-focus-column:hover > .editable-input
    background #fff

  .is-focus-input
    background #f8fafb





</style>

<template lang="pug">
  .edit-template-wrapper(@click="removeFocus($event)")
    TemplateHeader.edit-template-header
      router-link(to="" slot="go-back") 返回範本列表
      ViewButton(slot="save-button" @click="save") 儲存
      ViewButton(slot="deploy-button" @click="printTable") 列印
    TemplateBody.edit-template-body
      h3.side-title(slot="side-title") 列樣式
      .side-content(slot="side-content")
        .row-components
          .five-column-component.component-wrapper(
            v-if="rowComponentVisible"
            @click="changeComponent($event, 'five-column')")
            img(src="../assets/images/five_column.png").component-icon
            p.component-name 五欄
          .title-row-component.component-wrapper(
            v-if="rowComponentVisible"
            @click="changeComponent($event, 'title-row')")
            img(src="../assets/images/one_column.png").component-icon
            p.component-name 分類標題列
          .empty-row-component.component-wrapper(
            v-if="rowComponentVisible"
            @click="changeComponent($event, 'empty-row')")
            img(src="../assets/images/one_column.png").component-icon
            p.component-name 空白列
        .column-components
          .input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent($event, 'input')")
            img(src="../assets/images/input.png").component-icon
            p.component-name 文字敘述
          .select-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent($event, 'select')")
            img(src="../assets/images/select.png").component-icon
            p.component-name 下拉選單
          .two-unit-input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent($event, 'two-unit-input')")
            img(src="../assets/images/two_unit_input.png").component-icon
            p.component-name 相乘
          .three-unit-input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent($event, 'three-unit-input')")
            img(src="../assets/images/three_unit_input.png").component-icon
            p.component-name 三乘


      .table#printArea(slot="main-content")
        .table-info
          .table-info__item 版次 {{initialData.templateLayoutId}}
          .table-info__item {{initialData.companyName}}
          .table-info__item {{initialData.no.placeholder}}
        .table-name
          input.table-name__input(
            id="initFocus"
            type="text" 
            v-model="initialData.name")
        .table-sections
          .section-one
            .row.section-one-row(
              v-for="(row,index) in initialData.pages[0].section1.rows"
              :class="{'two-column-row': row.rowType === 'two-column'}"
              @click="rowClick($event, row, index)")
              .column(
                v-for="(column,index) in row.columns")
                input(
                  :key="index"
                  v-model="column.value"
                  :class="{'readonly-input': column.readonly,'editable-input': !column.readonly}"
                  :readonly="column.readonly"
                  :placeholder="column.placeholder")
            
          .add-row-button(@click="addSectionRow(1)") 新增一列
          .section-two
            .row.section-two-row(
              v-for="(row,index) in initialData.pages[0].section2.rows"
              :key="index"
              :class="{'empty-row': row.rowType === 'empty-row','one-column-row': row.rowType === 'title-row','five-column-row': row.rowType === 'five-column','is-focus-row':focusRowId === row.rowId}"
              @click="rowClick($event, row, index)")
              .column(v-for="(column,index) in row.columns" :key="index")
                template(v-if="column.changeable")
                  textarea.readonly-input(
                    v-if="column.columntype === 'input' "
                    v-model="column.value"
                    :readonly="column.readonly"
                    :placeholder="column.placeholder")
                  ViewSelect.readonly-input(
                    v-if="column.columntype === 'select' "
                    v-model="column.value"
                    :readonly="column.readonly"
                    :placeholder="column.placeholder")
                  div.readonly-input.two-unit-input(
                    v-if="column.columntype === 'two-unit-input' ")
                    input(readonly)
                    span X
                    input(readonly)
                  div.readonly-input.three-unit-input(
                    v-if="column.columntype === 'three-unit-input' ")
                    input(readonly)
                    span X
                    input(readonly)
                    span X
                    input(readonly)
                  button.edit-button(
                    @click="editButtonClick($event, column, index)") 編輯
                template(v-else)
                  textarea(
                    :class="{'readonly-input': column.readonly,'editable-input': !column.readonly}"
                    v-model="column.value"
                    :readonly="column.readonly"
                    :placeholder="column.placeholder")
            //- .pagebreak
                  
          .add-row-button(@click="addSectionRow(2)") 新增一列
          


</template>

<script>

// 如果是切換分類標題列，加上is-title-row class之外，還要去移除裡面的物件數量
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'EditTemplate',
    data() {
      return {
        initialData:{
          templateLayoutId:1,
          companyName:'XXX有限公司',
          no:{
            value:'', //輸入文字
            readonly:true, //true 不可編輯 false 可編輯
            placeholder:'請輸入表格編碼' //placeholder
          },
          name: '自主檢查表',
          pages:[
            {
              section1:{
                rows:[
                  {
                    rowId:'s-1-r-0',
                    rowIndex:0,
                    rowType: 'two-column',
                    columsAmount:2,
                    isFixed:true,
                    columns:[
                      { 
                        columnId:'s-1-r-0-c-0',
                        columnIndex:0,
                        columntype: 'label',
                        value: '工程名稱',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-0-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: 'fsdfsfsd',
                        placeholder:'請輸入工程名稱',
                        readonly:true
                      }
                    ]
                  },
                  {
                    rowId:'s-1-r-1',
                    rowType: 'four-coloum',
                    rowIndex:1,
                    columsAmount:4,
                    isFixed:true,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'label',
                        value: '承攬廠商',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'請輸入廠商名稱',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'label',
                        value: '協力廠商',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-1-c-5',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'請輸入廠商名稱',
                        readonly:true
                      },
                    ]
                  },
                  {
                    rowId:'s-1-r-2',
                    rowType: 2,
                    rowIndex:2,
                    columsAmount:4,
                    isFixed:true,
                    columns:[
                      {
                        columnId:'s-1-r-2-c-0',
                        columnIndex:0,
                        columntype: 'label',
                        value: '檢查位置',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'請輸入位置',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-2',
                        columnIndex:2,
                        columntype: 'label',
                        value: '檢查日期',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-3',
                        columnIndex:3,
                        columntype: 'datepicker',
                        value: '',
                        placeholder:'請選擇日期',
                        readonly:true
                      },
                    ]
                  }
                ],
              },
              section2:{
                rows:[
                  {
                    rowId:'s-2-r-0',
                    rowType: 'five-column',
                    rowIndex:0,
                    columsAmount:5,
                    isFixed:true,
                    columns:[
                      {
                        columnId:'s-1-r-2-c-0',
                        columnIndex:0,
                        columntype: 'label',
                        value: '檢查項目及名稱(QC工程表)',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-1',
                        columnIndex:1,
                        columntype: 'label',
                        value: '引用QC工程表之檢查標準(定量定性)',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-2',
                        columnIndex:2,
                        columntype: 'label',
                        value: '實際檢查情形',
                        placeholder:'',
                        readonly:true
                      },
                      {
                        columnId:'s-1-r-2-c-3',
                        columnIndex:3,
                        columntype: 'label',
                        value: '檢查結果',
                        placeholder:'',
                        readonly:true,

                      },
                      {
                        columnId:'s-1-r-2-c-4',
                        columnIndex:4,
                        columntype: 'label',
                        value: '備註',
                        placeholder:'',
                        readonly:true
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  },
                  {
                    rowId:'s-2-r-1',
                    rowType: 'five-column',
                    rowIndex:1,
                    columsAmount:5,
                    isFixed:false,
                    columns:[
                      {
                        columnId:'s-1-r-1-c-0',
                        columnIndex:0,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查項目',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-1',
                        columnIndex:1,
                        columntype: 'input',
                        value: '',
                        placeholder:'編輯檢查標準',
                        readonly:false,
                        changeable:false
                      },
                      {
                        columnId:'s-1-r-1-c-2',
                        columnIndex:2,
                        columntype: 'input', //預設是input
                        //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                        value: '', 
                        placeholder:'請輸入檢查情形',
                        readonly:true,
                        changeable:true,
                        typeSpec:{ //changeable 為 true 才會有typeSpec
                          optionList:[
                            {
                              label:'',
                              value:''
                            }
                          ]
                        }
                      },
                      {
                        columnId:'s-1-r-1-c-3',
                        columnIndex:3,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false,
                        
                      },
                      {
                        columnId:'s-1-r-1-c-4',
                        columnIndex:4,
                        columntype: 'input',
                        value: '',
                        placeholder:'',
                        readonly:true,
                        changeable:false
                      },
                    ]
                  }
                ],
              },
            },
            {},
            {}
          ],
        },
        pages:[ //每新增一個page就往裡面丟一個object.
          {
            section1:{},
            section2:{},
          },
          {
            section1:{},
            section2:{},
          }
        ],
        selectedItem:{
          rowIndex:-1,
          columnIndex:-1,
          rowType:'',
          columnType:'',
          rowId:'',
          columnId:''
        },
        firstSectionDefaultRow:{
          rowType: 1,
          columns:[
            {
              columntype: 'label',
              value: '',
              placeholder:'請輸入標題名稱',
              readonly:false
            },
            {
              columntype: 'input',
              value: '',
              placeholder:'請輸入文字',
              readonly:true
            },
            {
              columntype: 'label',
              value: '',
              placeholder:'請輸入標題名稱',
              readonly:false
            },
            {
              columntype: 'input',
              value: '',
              placeholder:'請輸入文字',
              readonly:true
            },
          ]
        },
        secondSectionDefaultRow:{
          rowId:'',
          rowType: 'five-column',
          columsAmount:5,
          isFixed:false,
          columns:[
            {
              columnId:'',
              columnIndex:0,
              columntype: 'input',
              value: '',
              placeholder:'編輯檢查項目',
              readonly:false,
              changeable:false
            },
            {
              columnId:'',
              columnIndex:1,
              columntype: 'input',
              value: '',
              placeholder:'編輯檢查標準',
              readonly:false,
              changeable:false
            },
            {
              columnId:'',
              columnIndex:2,
              columntype: 'input', //預設是input
              //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
              value: '', 
              placeholder:'請輸入檢查情形',
              readonly:false,
              changeable:true,
              typeSpec:{ //changeable 為 true 才會有typeSpec
                optionList:[
                  {
                    label:'',
                    value:''
                  }
                ]
              }
            },
            {
              columnId:'',
              columnIndex:3,
              columntype: 'input',
              value: '',
              placeholder:'',
              readonly:true,
              changeable:false,
              
            },
            {
              columnId:'',
              columnIndex:4,
              columntype: 'input',
              value: '',
              placeholder:'',
              readonly:true,
              changeable:false
            },
          ]
        },
        rowMaskVisible:true,
        columnComponentVisible:false,
        rowComponentVisible:false,
        focusRowId:'',
        isSelect:'',
        isInput:'',
      }
    },
    watch: {},
    computed: {
    },
    methods: {
      ...mapActions(['']),
      printTable(){
        const printAreaContent = $('#printArea').html()
        const originalBodyContent = $('body').html()
        $('body').html(printAreaContent)
        window.print()
        $('body').html(originalBodyContent)
        return
      },
      autosize() {
        $('textarea').on('input',function() {
          $(this).css('height', 'auto').css('height', `${this.scrollHeight}px`)
        })
      },
      editButtonClick(event, column, index,) {
        event.stopPropagation()
        this.selectedItem.columnIndex = index
        this.selectedItem.columnId = column.columnId
        this.rowComponentVisible = false
        this.columnComponentVisible = true
      },
      rowClick(event,row,index) {
        event.stopPropagation()
        console.log(event)
        console.log(event.target)

        if(!$(event.target).is('.row')) {
          this.columnComponentVisible = false
          this.rowComponentVisible = false
          return 
        }

        if($(event.target).is('.row')) {
          this.columnComponentVisible = false
          this.rowComponentVisible = true
        }

        if($(event.target).is('.section-one-row')) {
          this.rowComponentVisible = false
          if(index === 0 || index === 1 || index === 2) {
            return 
          }
        }

        if($(event.target).is('.section-two-row')) {
          if(index === 0) {
            this.columnComponentVisible = false
            this.rowComponentVisible = false
            return 
          }
        }

        this.focusRowId = row.rowId
        this.selectedItem.rowIndex = index
        this.selectedItem.rowId = row.rowId
        
        $('.column').css('pointer-events','none')
        $('.column').removeClass('is-focus-column')
        $('.row').removeClass('is-focus-row')
        $('.row').addClass('is-blur-row')
        $(event.target).addClass('is-focus-row')
        $(event.target).removeClass('is-blur-row')
        $(event.target).find('.column').addClass('is-focus-column')
        $(event.target).find('.is-focus-column').css('pointer-events','auto')

      },
      removeFocus(event) {
        console.log(event.target)
        event.stopPropagation()
        $('.row').removeClass('is-focus-row')
        $('.row').removeClass('is-blur-row')
        $('.column').removeClass('is-focus-column')
        $('.column').css('pointer-events','none')
        this.rowComponentVisible = false
        this.columnComponentVisible = false
      },
      changeComponent(event,componentName){
        event.stopPropagation()
        const { rowIndex, columnIndex } = this.selectedItem
        switch (componentName) {
          case 'empty-row':
            this.initialData.pages[0].section2.rows[rowIndex].columns = this.deepCopy(this.secondSectionDefaultRow.columns)
            this.initialData.pages[0].section2.rows[rowIndex].columns.splice(0,4)
            this.initialData.pages[0].section2.rows[rowIndex].rowType = componentName
            break;
          case 'title-row':
            this.initialData.pages[0].section2.rows[rowIndex].columns = this.deepCopy(this.secondSectionDefaultRow.columns)
            this.initialData.pages[0].section2.rows[rowIndex].columns.splice(0,4)
            this.initialData.pages[0].section2.rows[rowIndex].rowType = componentName
            break;
          case 'five-column':
            this.initialData.pages[0].section2.rows[rowIndex].columns = this.deepCopy(this.secondSectionDefaultRow.columns)
            this.initialData.pages[0].section2.rows[rowIndex].rowType = componentName
            break;
          default:
            this.initialData.pages[0].section2.rows[rowIndex].columns[columnIndex].columntype = componentName
            break;
        
        }

      },
      save(){
        
      },
      addSectionRow(section){
        if(section === 1) {
          const newRow = this.deepCopy(this.firstSectionDefaultRow)
          newRow.rowId = this.createUuid()
          newRow.columns.forEach( column => column.columnId = this.createUuid() ) 
          this.initialData.pages[0].section1.rows.push(newRow)

        } else { 
          const newRow = this.deepCopy(this.secondSectionDefaultRow)
          newRow.rowId = this.createUuid()
          newRow.columns.forEach( column => column.columnId = this.createUuid() ) 
          this.initialData.pages[0].section2.rows.push(newRow)
        }
        console.log(section)
      },
      init(){
        //將第一個input預設focus
        $('#initFocus').focus()
        //將所有textarea預設autosize
        this.autosize()
        //創建id
        this.initialData.pages[0].section1.rows.forEach( (row,index) => {
          row.rowId = this.createUuid()
          row.columns.forEach( (column,index) => {
            column.columnId = this.createUuid()
          })
        })
      }
    },
    created() {},
    mounted() {
      this.init()
      // console.log(JSON.stringify(this.initialData))
    },
    destroyed() {},
    components: {}
  };
</script>
