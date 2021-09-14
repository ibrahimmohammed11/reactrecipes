import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="card text-center bg-info mt-4">
                    <div className="card-body">
                        <h5 className="card-title text-white">© 2021 <strong>Ibrahim Mohamed</strong> All rights reserved.
                        <a href="https://www.linkedin.com/in/ibrahim-mohammed-306134209/" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-linkedin-in  mx-2 icon"></i></a>
                        <a href="https://github.com/ibrahimmohammed11" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-github  mr-2 icon"></i></a>
                        <i className="fab fa-dribbble  mr-3 icon"></i>
                        </h5>
                        <i className="fas fa-utensils mx-3 fa-lg text-white icon"></i>
                        <i className="fas fa-award mr-3 fa-lg text-white icon"></i>
                        <i className="fas fa-cookie-bite fa-lg text-white icon"></i>
                    </div>
                </div>
            </Fragment>
        )
    }
}

