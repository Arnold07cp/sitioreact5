import React from 'react'

const MenuNav = () => {
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-prymary"></nav>
        <nav className="row bg-danger">
		<nav class="navbar navbar-expand-lg navbar-dark bg-prymary">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">Inicio-React</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Sitio-CMS
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <li><a class="dropdown-item" href="http://misitioenlineab.epizy.com/?i=1">Ir al sito</a></li>
					
					</ul>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Sitio-LMS
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <li><a class="dropdown-item" href="https://plataformaistph2021.milaulas.com/?redirect=0">Ir al Sitio</a></li>
					
					</ul>
				  </li>
				</ul>
				<form class="d-flex">
				  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
				  <button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			  </div>
			</div>
		  </nav>
	</nav>
    </div> 
    )
}

export default MenuNav