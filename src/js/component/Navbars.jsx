import React from "react";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <div className="row w-100">
      <div className="col">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>212 Keele St</a>
      </div>
      <div className="col">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>Sneakers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>Clothes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={{ color: "white" }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>

  
	);
};

export default Navbar;

