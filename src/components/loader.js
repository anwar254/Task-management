import React from 'react'

export default class Loader extends React.Component{
    render(){
        return(
            <div className="tsk-loader">
                <div className="loader-container">
                    <div className="bounce" id="loader"></div>
                </div>
            </div>
        )
    }
}