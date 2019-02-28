import Vue from 'vue'
import uuidv4 from 'uuid/v4'

// global mixin
Vue.mixin({
  methods: {
    // 讀取中遮罩區塊 (當有很多個api要同時執行時，可以手動加上loading)
    manualLoadingBlock: async function (action) {
      try {
        this.$store.dispatch('app/increaseLoadingCounter')
        await action()
      } finally {
        this.$store.dispatch('app/decreaseLoadingCounter')
      }
    },
    isNumber (sNumber) {
      let number = /^\d+$/
      return number.test(sNumber)
    },
    isValid (sInvalid) {
      if (!sInvalid) {
        return false
      } else {
        return true
      }
    },
    deepCopy (value) {
      const deepDataToString = JSON.stringify(value)
      const deepData = JSON.parse(deepDataToString)
      return deepData
    },
    isNonEmptyObject (sObject) {
      if (typeof sObject === 'object' && Object.keys(sObject).length > 0) {
        return true
      } else {
        return false
      }
    },
    isNonEmptyArray (sArray) {
      if (Array.isArray(sArray) && sArray.length > 0) {
        return true
      } else {
        return false
      }
    },
    isEmptyString (sString) {
      if (!sString) {
        return true
      } else {
        return false
      }
    },
    consoleLogError (value) {
      console.log(`%c${value}`, 'color:crimson;font-size:12px;')
    },
    createUuid () {
      return uuidv4()
    }
  }
})

// =======================================================
// manualLoadingBlock 使用範例 (example.vue)

// methods: {
//   callMultipleWebApi() {
//     this.manualLoadingBlock( async () =>{
//       await this.callFirstWebApi()
//       await this.callSecondWebApi()
//       await this.callThirdWebApi()
//     })
//   }
// }
