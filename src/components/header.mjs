import navbar from './navbar.mjs'
import cover from './cover.mjs'
import hero from './hero.mjs'

const data = {
  
}

const template = `
<div class="header vh-100">
  ${navbar}
  ${cover}
  <div class="d-flex h-75 justify-content-center">
    ${hero}
  </div>
</div>
`

export default template
