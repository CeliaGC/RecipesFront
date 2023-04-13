
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Tarjeta = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Receta</h3>
              <h6 className="card-subtitle mb-2 text-muted">Personas</h6>
              <h6 className="card-subtitle mb-2 text-muted">Breve descripcion</h6>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-primary">Botón 1</button>
                <button className="btn btn-secondary">Botón 2</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
