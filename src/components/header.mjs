import navbar from './navbar.mjs'
import cover from './cover.mjs'

const data = {
  text: 'Hello World!',
  style: {
    h1: `
      padding-bottom: 1em;
      color: #333;
    `
  }
}

const template = `
<div class="header">
  ${navbar}
  ${cover}
</div>
`

export default template
