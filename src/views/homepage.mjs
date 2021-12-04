import header from '../components/header.mjs'
import lastEpisodes from '../components/lastEpisodes.mjs'
import about from '../components/about.mjs'

const data = {

}

const template = `
<div class="container-fluid">
  <div class="row row-cols-1">
    <div class="col p-0">
      ${header}
    </div>
    <div class="col p-0">
      ${lastEpisodes}
    </div>
    <div class="col p-0">
      ${about}
    </div>
  </div>
</div>
`

export default template
