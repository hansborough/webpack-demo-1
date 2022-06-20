import x from './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')
console.log('div')
console.log(div)
div.innerHTML = `
<img src="${png}">
`