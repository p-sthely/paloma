const data = {
  
}

const template = `
<nav class="navbar navbar-expand-lg navbar-light bg-light px-2 py-3">
  <div class="container-fluid">
    <a class="navbar-brand fs-4" href="#">Paloma</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">À propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Épisodes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav flex-row px-lg-4">
          <li class="nav-item">
            <a class="nav-link text-dark pe-2" href="#"><i class="bi bi-instagram"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark pe-2" href="#"><i class="bi bi-youtube"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark pe-2" href="#"><i class="bi bi-facebook"></i></a>
          </li>
        </ul>
        <a class="btn btn-secondary rounded-0 px-4" role="button">Donner</a>
      </div>
    </div>
  </div>
</nav>
`

export default template
