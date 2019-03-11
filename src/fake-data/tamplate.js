export default {
  templateLayoutId: 1,
    companyName: 'XXX有限公司',
      no: {
    value: '', //輸入文字
      readonly: true, //true 不可編輯 false 可編輯
        placeholder: '請輸入表格編碼' //placeholder
  },
  name: '自主檢查表',
    pages: [
      {
        section1: {
          rows: [
            {
              rowId: 's-1-r-0',
              rowIndex: 0,
              rowType: 'two-column',
              columsAmount: 2,
              isFixed: true,
              columns: [
                {
                  columnId: 's-1-r-0-c-0',
                  columnIndex: 0,
                  columntype: 'label',
                  value: '工程名稱',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-0-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '請輸入工程名稱',
                  readonly: true
                }
              ]
            },
            {
              rowId: 's-1-r-1',
              rowType: 'four-coloum',
              rowIndex: 1,
              columsAmount: 4,
              isFixed: true,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'label',
                  value: '承攬廠商',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '請輸入廠商名稱',
                  readonly: true
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'label',
                  value: '協力廠商',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-1-c-5',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '請輸入廠商名稱',
                  readonly: true
                },
              ]
            },
            {
              rowId: 's-1-r-2',
              rowType: 2,
              rowIndex: 2,
              columsAmount: 4,
              isFixed: true,
              columns: [
                {
                  columnId: 's-1-r-2-c-0',
                  columnIndex: 0,
                  columntype: 'label',
                  value: '檢查位置',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '請輸入位置',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-2',
                  columnIndex: 2,
                  columntype: 'label',
                  value: '檢查日期',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-3',
                  columnIndex: 3,
                  columntype: 'datepicker',
                  value: '',
                  placeholder: '請選擇日期',
                  readonly: true
                },
              ]
            }
          ],
        },
        section2: {
          rows: [
            {
              rowId: 's-2-r-0',
              rowType: 'five-column',
              rowIndex: 0,
              columsAmount: 5,
              isFixed: true,
              columns: [
                {
                  columnId: 's-1-r-2-c-0',
                  columnIndex: 0,
                  columntype: 'label',
                  value: '檢查項目及名稱(QC工程表)',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-1',
                  columnIndex: 1,
                  columntype: 'label',
                  value: '引用QC工程表之檢查標準(定量定性)',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-2',
                  columnIndex: 2,
                  columntype: 'label',
                  value: '實際檢查情形',
                  placeholder: '',
                  readonly: true
                },
                {
                  columnId: 's-1-r-2-c-3',
                  columnIndex: 3,
                  columntype: 'label',
                  value: '檢查結果',
                  placeholder: '',
                  readonly: true,

                },
                {
                  columnId: 's-1-r-2-c-4',
                  columnIndex: 4,
                  columntype: 'label',
                  value: '備註',
                  placeholder: '',
                  readonly: true
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            },
            {
              rowId: 's-2-r-1',
              rowType: 'five-column',
              rowIndex: 1,
              columsAmount: 5,
              isFixed: false,
              columns: [
                {
                  columnId: 's-1-r-1-c-0',
                  columnIndex: 0,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查項目',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-1',
                  columnIndex: 1,
                  columntype: 'input',
                  value: '',
                  placeholder: '編輯檢查標準',
                  readonly: false,
                  changeable: false
                },
                {
                  columnId: 's-1-r-1-c-2',
                  columnIndex: 2,
                  columntype: 'input', //預設是input
                  //columntype='input' value='', columntype='select' value={ label:'',value:''}, columntype='doubleInput' value=['',''] , columntype='tripleInput' value=['','','']
                  value: '',
                  placeholder: '請輸入檢查情形',
                  readonly: true,
                  changeable: true,
                  typeSpec: { //changeable 為 true 才會有typeSpec
                    optionList: [
                      {
                        label: '',
                        value: ''
                      }
                    ]
                  }
                },
                {
                  columnId: 's-1-r-1-c-3',
                  columnIndex: 3,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false,

                },
                {
                  columnId: 's-1-r-1-c-4',
                  columnIndex: 4,
                  columntype: 'input',
                  value: '',
                  placeholder: '',
                  readonly: true,
                  changeable: false
                },
              ]
            }
          ],
        },
      },
      {},
      {}
    ],
}