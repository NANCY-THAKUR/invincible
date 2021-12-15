import React from 'react'
// import Home from '../views/home/Home'
// import About from '../views/home/about/About'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Home"><h6 style={{color:window.location.href.includes('/Home')?"red":"black"}}>Navbar</h6></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home"><h6 style={{color:window.location.href.includes('/Home')?"red":"black"}}>Home</h6></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/About"><h6 style={{color:window.location.href.includes('/About')?"red":"black"}}>About</h6></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/Page1"><h6 style={{color:window.location.href.includes('/Page1')?"red":"black"}}>Page1</h6></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/Page2"><h6 style={{color:window.location.href.includes('/Page2')?"red":"black"}}>Page2</h6></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/Page3"><h6 style={{color:window.location.href.includes('/Page3')?"red":"black"}}>Page3</h6></a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




            
        </>
    )
}

export default Navbar;

