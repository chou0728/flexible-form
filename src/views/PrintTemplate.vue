<style lang="stylus">
.table
	#printElement
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
</style>

<template lang="pug">
  .print-tamplate
    ViewButton(@click="printTable") 列印
    .table
      #printElement 
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
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'PrintTemplate',
	data() {
		return {
			tamplateData
		}
	},
	watch: {},
	computed: {
		...mapGetters(['printTemplateCssText'])
	},
	methods: {
		mergeCell() {
			const two = $('.section-one-row').children('td')[1]
			$(two).attr('colspan', '4')
		},
		printTable() {
			const { Printd } = window.printd
			this.printd = new Printd()
			const { contentWindow } = this.printd.getIFrame()
			const printElement = document.getElementById('printElement')
			this.printd.print(printElement, [this.printTemplateCssText])

			//方法一
			// const printElement = document.getElementById('printElement')
			// const iframeElement = document.getElementById('iframeElement')
			// let doc = iframeElement.contentWindow.document
			// doc.write(`<div id="printElement">${printElement.innerHTML}</div>`)
			// console.log(iframeElement)
			// doc.close(iframeElement)
			// iframeElement.contentWindow.focus()
			// iframeElement.contentWindow.print()

			//方法二
			// const printElement = document.getElementById('printElement')
			// const iframeElement = document.createElement('iframe')
			// let doc = null
			// iframeElement.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
			// document.body.appendChild(iframeElement)
			// doc = iframeElement.contentWindow.document
			// doc.write(`<div>${printElement.innerHTML}</div>`)
			// doc.close()
			// iframeElement.contentWindow.focus()
			// iframeElement.contentWindow.print()

			//方法三
			// const printElement = $('#printElement').html()
			// const iframeElement = document.createElement('iframe')
			// iframeElement.setAttribute('id','printFrame')
			// // iframeElement.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
			// iframeElement.srcdoc =
			// `
			// <html>
			//   <body>
			//     ${printElement}
			//   </body>
			// </html>
			// `
			// $('body').append(iframeElement)
			// let doc = iframeElement.contentWindow.document
			// // doc.body.innerHTML = printElement
			// iframeElement.contentWindow.focus()
			// $('body').append(iframeElement)
			// iframeElement.contentWindow.print()

			//方法四
			// const printElement = $('#printElement').html()
			// const originalBodyContent = $('body').html()
			// $('body').html(printElement)
			// window.print()
			// $('body').html(originalBodyContent)
			return
		}
	},
	created() {
		this.tamplateData.pages[0].section1.rows.forEach(row => {
			row.rowId = this.createUuid()
			row.columns.forEach(column => {
				column.columnId = this.createUuid()
			})
		})
		this.tamplateData.pages[0].section2.rows.forEach(row => {
			row.rowId = this.createUuid()
			row.columns.forEach(column => {
				column.columnId = this.createUuid()
				column.value =
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32'
			})
		})
	},
	mounted() {
		this.mergeCell()
	},
	destroyed() {},
	components: {}
}
</script>
