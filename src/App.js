
function App() {
  return (
    <div className="container">
	      <header className="row bg-secondary">
		      <img src="https://i.ibb.co/brMyw7w/header.jpg" class="img-fluid" alt="..."/>
	      </header>

    <nav className="row bg-danger">
		<nav class="navbar navbar-expand-lg navbar-dark bg-prymary">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">Navbar</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Dropdown 1
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <li><a class="dropdown-item" href="#">Action</a></li>
					  <li><a class="dropdown-item" href="#">Another action</a></li>
					  <li><hr class="dropdown-divider"/></li>
					  <li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Dropdown 2
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <li><a class="dropdown-item" href="#">Action</a></li>
					  <li><a class="dropdown-item" href="#">Another action</a></li>
					  <li><hr class="dropdown-divider"/></li>
					  <li><a class="dropdown-item" href="#">Something else here</a></li>
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

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
				  <div className="carousel-item active">
					<img src="https://i.ibb.co/L8bCT1L/galeria1.jpg" className="d-block w-100" alt="..."/>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/NprQTbj/galeria2.jpg" className="d-block w-100" alt="..."/>
				  </div>
				  <div className="carousel-item">
					<img src="https://i.ibb.co/Krdf1B6/galeria3.jpg" className="d-block w-100" alt="..."/>
				  </div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
				  <span className="visually-hidden">Next</span>
				</button>
			</div>
		</article>
		
    <aside className="col-md-3 d-flex justify-content-center bg-secondary">
			<div className="card" style={{width: '18rem'}}>
				<img src="https://i.ibb.co/TrHCmbp/colibri.jpg" class="card-img-top" alt="..."/>
				<div className="card-body">
				  <h5 className="card-title">Card title</h5>
				  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			  </div>
		</aside>

    <article className="col-md-3 bg-primary">
    <hr />
    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
    <hr />
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
    <hr />
    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>
    <hr />
    <p>En este apartado se esta considerando algunos tipos de botones y sus funcionalidades</p>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>

<section></section>
			
		</article>

    <article className="col-md-5 justify-content-center bg-success">
      <div className="d-flex align-items-stretch pt-2">
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7330240690453!2d-71.55089728556737!3d-16.387556888684934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses!2spe!4v1627013364366!5m2!1ses!2spe" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
			</div>
      <h5>Los Arcess 202. Distrito de Cayma - Arequipa </h5> <h6>Número de contacto: 054232323</h6>
		</article>
 
    <article class="col-md-7 d-flex justify-content-center bg-secondary">
    
    <iframe width="744" height="409" src="https://www.youtube.com/embed/MFEVevUHIV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			
		</article>

		
	</section>

	<footer className="row bg-dark d-flex justify-content-center aling-ítems-center text-light" style={{height: '120px'}}>
		<span>Información del sitio web</span>
	</footer>
</div>
  );
}

export default App;
