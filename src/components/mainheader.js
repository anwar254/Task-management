import React from 'react';

export default class MainHeader extends React.Component{
    render(){
        return(
            <nav className="navbar main-navigation" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <h1>Task management</h1>

                        <div className="navbar-burger">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <button className="button is-primary">login</button>
                                    <button className="button is-info">Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}