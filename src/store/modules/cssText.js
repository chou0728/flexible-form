const state = {
  printTemplateCssText: `
    @media print {
      #printElement {
        width: 21cm;
        height: 29.7cm;
        padding: 10mm;
        margin: 0 auto;
      }

      table {
        border: 1px solid #000;
        border-collapse: collapse;
      }

      td {
        height: 34px;
        border: 1px solid #000;
        padding: 5px;
      }

      .section-one-table {
        width: 100%;
      }

      .section-two-table {
        margin-top: -1px;
      }

      .section-one-row,
      .section-two-row {
        page-break-inside: avoid;
      }

      .section-one-row td:nth-child(odd) {
        width: 20%;
      }

      .section-two-row td {
        width: 20%;
      }
    }
  `
}

const mutations = {}

const actions = {}
const getters = {
  printTemplateCssText: state => state.printTemplateCssText
}
export default {
  state,
  mutations,
  actions,
  getters
}
