import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <a className="navbar-brand" href="#"><i className="fab fa-react"></i>&nbsp;Full-Stack Developer Vinicius C.</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                            <a className="nav-item nav-link" href="#">Home</a>
                            <a className="nav-item nav-link" href="#">Channel</a>
                            <a className="nav-item nav-link" href="#">Login</a>
                        </div>
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control mr-3" placeholder="Username"/>&nbsp;
                                <button className="btn btn-outline-success">Login</button>
                            </div>
                        </form>
                    </section>

                </nav>
            </div>
        );
    }
}

export default Navbar;