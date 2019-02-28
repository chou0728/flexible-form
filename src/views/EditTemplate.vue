<style lang="stylus">

.table
  width 100%
  height 150vh
  background #fff

.table-info
  display grid 
  grid-template-columns 1fr 1fr 1fr
  -ms-grid-columns 1fr 1fr 1fr

  .table-info__item
    padding 20px
    background #fff
    text-align center

.table-name
  text-align center
  padding 10px 40px 0px 40px

  input
    width 100%
    text-align center
    border #fff 
    outline none 
    box-shadow none
    resize none
    font-size 20px    
    
    &:hover
      border 1px solid red
      box-shadow none

    &:focus 
      border 1px solid red
      outline none 
      box-shadow none


.table-sections
  padding 10px 40px 20px 40px

  .row__add
    width 100%
    height 32px
    line-height 32px
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

  .table-section-one
    display grid
    -ms-grid-columns 1fr 
    grid-template-columns 1fr 
    margin-top 20px
    background gray
    border 1px solid gray
    grid-gap 1px
  
    .row
      background gray
      display grid
      -ms-grid-columns 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr
      grid-gap 1px

      &:hover 
        border 1px solid red

    .row:nth-child(1):hover,.row:nth-child(2):hover,.row:nth-child(3):hover
      border none

    .is-two-column
      -ms-grid-columns 0.25fr 0.75fr  
      grid-template-columns 0.25fr 0.75fr  

    .column
      background #fff
      text-align center

  .table-section-one-hover
    background #fff
    border 1px solid #fff


  .ivu-input
    border none 
    outline none 
    box-shadow none
    resize none

    &:hover
      border none
    &:focus 
      border none
      outline none 
      box-shadow none

  .table-section__body 
    display grid
    -ms-grid-columns 1fr 
    grid-template-columns 1fr 
    margin 20px 0
    background #fff
    // border 1px solid #000
    // border-bottom none
    grid-gap 1px

    .row
      position relative
      background #fff
      display grid
      -ms-grid-columns 1fr 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr 1fr
      background #000
      grid-gap 1px      
      transition .2s all ease-out
      border 1px solid #000
      // border-bottom 0px 

      &:first-child
        border-bottom none

      // &:not(.is-focus)
      //   border-bottom 1px solid #000

      &:hover
        transition .2s all ease-in
        border 1px solid red

    .is-focus
      transition .6s all ease-out
      margin 25px 0 
      border 1px solid red


    
    .row-mask
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
        
    .column
      position relative
      background #fff
      
      textarea
        text-align center



    .column-mask
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


    //隨著rowType而做增添
    .is-five-column
      -ms-grid-columns 1fr 1fr 1fr 1fr 1fr
      grid-template-columns 1fr 1fr 1fr 1fr 1fr

    .is-title-row
      -ms-grid-columns 1fr 
      grid-template-columns 1fr

</style>

<template lang="pug">
  .edit-template-wrapper
    TemplateHeader.edit-template-header
      router-link(to="" slot="go-back") 返回範本列表
      ViewButton(slot="save-button" @click="save") 儲存
      ViewButton(slot="deploy-button") 發佈
    TemplateBody.edit-template-body
      h3.side-title(slot="side-title") 列樣式
      .side-content(slot="side-content")
        .row-components
          .five-column-component.component-wrapper(
            v-if="rowComponentVisible"
            @click="changeComponent('five-column')")
            img(src="../assets/images/five_column.png").component-icon
            p.component-name 五欄
          .title-row-component.component-wrapper(
            v-if="rowComponentVisible"
            @click="changeComponent('title-row')")
            img(src="../assets/images/one_column.png").component-icon
            p.component-name 分類標題列
        .column-components
          .input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent('input')")
            img(src="../assets/images/input.png").component-icon
            p.component-name 文字敘述
          .select-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent('select')")
            img(src="../assets/images/select.png").component-icon
            p.component-name 下拉選單
          .two-unit-input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent('two-unit-input')")
            img(src="../assets/images/two_unit_input.png").component-icon
            p.component-name 相乘
          .three-unit-input-component.component-wrapper(
            v-if="columnComponentVisible"
            @click="changeComponent('three-unit-input')")
            img(src="../assets/images/three_unit_input.png").component-icon
            p.component-name 三乘


      .table(slot="main-content")
        .table-info
          .table-info__item 版次 {{initialData.templateLayoutId}}
          .table-info__item {{initialData.companyName}}
          .table-info__item {{initialData.no.placeholder}}
        .table-name
          input.table-name__input(type="text" v-model="initialData.name")
        .table-sections
          .table-section.table-section-one
            div.row(
              v-for="(row,index) in initialData.pages[0].section1.rows"
              :class="{'is-two-column': row.rowType === 'two-column'}")
              div.column(
                v-for="(column,index) in row.columns")
                ViewInput(
                  :key="index"
                  v-model="column.value"
                  :readonly="column.readonly"
                  :placeholder="column.placeholder")
          .row__add(@click="addSectionRow(1)") 新增一列

          .table-section.table-section__body
            div.row(
              v-for="(row,index) in initialData.pages[0].section2.rows"
              :class="{'is-title-row': row.rowType === 'title-row','is-five-column': row.rowType === 'five-column','is-focus':rowFocusIndex === index}")
              div.row-mask(
                v-if="rowMaskVisible"
                :class="{'row-mask-is-focus':rowFocusIndex === index}"
                @click="handleRowMaskClick(row,index)"
                @dblclick="handleRowMaskDblclick(row,index)")
              div.column(
                v-for="(column,index) in row.columns")
                div.column-mask(
                  v-if="column.changeable"
                  @mouseover="handleColumnHover(column,index)"
                  @mouseout="handleColumnHover(column,index)"
                  @click="handleColumnMaskClick(column,index)"
                  :class="{'column-mask-is-focus':columnFocusId === column.columnId,'column-mask-is-hover':columnHoverId === column.columnId}")
                  .column-mask__btn 
                    span 編輯
                ViewSelect(
                  v-if="isSelect === column.columnId || column.columnType === 'select' "
                  :key="index"
                  v-model="column.value")
                ViewInput(
                  v-else-if="isInput === column.columnId || column.columnType === 'input'"
                  :key="index"
                  type="textarea"
                  v-model="column.value"
                  :autosize="{ minRows: 1, maxRows: 6 }"
                  :readonly="column.readonly"
                  :placeholder="column.placeholder")
                ViewInput(
                  v-else
                  type="textarea"
                  @input="handleCellInput(column)"
                  :key="index"
                  v-model="column.value"
                  :autosize="{ minRows: 1, maxRows: 6 }"
                  :readonly="column.readonly"
                  :placeholder="column.placeholder") 
                  
          .row__add(@click="addSectionRow(2)") 新增一列

      

                    

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
        columnFocusId:'',
        columnHoverId:'',
        rowFocusIndex:'',
        isSelect:'',
        isInput:''
      }
    },
    watch: {},
    computed: {
    },
    methods: {
      ...mapActions(['']),
      changeComponent(componentName){
        console.log('changeComponent')
        const { rowIndex, columIndex } = this.selectedItem
        switch (componentName) {
          case 'title-row':
            this.initialData.pages[0].section2.rows[rowIndex].columns.splice(0,4)
            this.initialData.pages[0].section2.rows[rowIndex].rowType = componentName
            break;
          case 'five-column':
            this.initialData.pages[0].section2.rows[rowIndex].columns = this.deepCopy(this.secondSectionDefaultRow.columns)
            this.initialData.pages[0].section2.rows[rowIndex].rowType = componentName
            break;
          case 'input':
            this.isSelect = ''
            this.isInput = this.columnFocusId
            this.initialData.pages[0].section2.rows[rowIndex].columns[columIndex].columntype = componentName
            break;
          case 'select':
            this.isInput = ''
            this.isSelect = this.columnFocusId
            this.initialData.pages[0].section2.rows[rowIndex].columns[columIndex].columntype = componentName
            break;
        
        }

      },
      save(){
        alert('test')
      },
      handleColumnHover(column,index) {
        if(this.columnHoverId === '') {
          this.columnHoverId = column.columnId
          return
        }
        this.columnHoverId = ''
        
      },
      handleColumnMaskClick(colum,index) {
        this.selectedItem.columIndex = index
        this.selectedItem.columId = colum.columnId
        this.columnFocusId = colum.columnId
        this.rowComponentVisible = false
        this.columnComponentVisible = true
      },
      handleRowMaskClick(row,index){
        if(index === 0) {
          return 
        }
        this.rowFocusIndex = index
        this.rowComponentVisible = true
        this.columnComponentVisible = false
        this.selectedItem.rowIndex = index
        this.selectedItem.rowId = row.rowId
        console.log('handleRowMaskClick')
        $('.table-section__body .row:not(.is-focus)').css('border-bottom','1px solid #000')
      },
      handleRowMaskDblclick(row,index){
        if(index === 0) {
          return 
        }
        this.rowMaskVisible = false
        this.rowComponentVisible = false
        this.columnComponentVisible = false
        console.log('handleRowMaskDblclick')
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
      handleCellInput(column) {
        console.log(column)
      },
      handleCellClick(column,index){

      },
      changeRowType(row,index) {
        console.log(row)
        console.log(index)
        console.log(this.initialData.pages[0].section2.rows[index].rowType)
      },
      initTableData(){

        this.initialData.pages[0].section1.rows.forEach( (row,index) => {
          row.rowId = this.createUuid()
          row.columns.forEach( (column,index) => {
            column.columnId = this.createUuid()
          })
        })

        console.log(this.initialData)
        
        $('.table-name__input').focus()
      }
    },
    created() {},
    mounted() {
      this.initTableData()
      // console.log(JSON.stringify(this.initialData))
    },
    destroyed() {},
    components: {}
  };
</script>
