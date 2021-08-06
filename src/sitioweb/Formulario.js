import React from 'react'

const Formulario = () => {
    return(

    <div>   
       <hr />
    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Formulario de inscripcion</button>
    <hr />
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Inscripcion de padres de familia</button>
    <hr />
    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Inscripcion a Talleres</button>
    <hr />
    <p>En este apartado se esta considerando algunos tipos de botones y sus funcionalidades</p>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Formulario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Nombres y apellidos:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Mensaje:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-primary">Enviar Mensaje</button>
      </div>
    </div>
  </div>
  </div> 
    </div>    
    )
}

export default Formulario