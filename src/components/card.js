import React from 'react';

export default function Card(props){
    let flx = {
        flexBasis: 30+"%",
    }
    let flx1 = {
        flexBasis: 70+"%",
        margin: 0
    }
    return(
        <div className="tsk-card">
            <div className="tsk-card-header">
                <div className="tsk-card-left" style={flx1}>
                    <h3>card title</h3>
                </div>
                <div className="tsk-card-right" style={flx}>i</div>
            </div>
            <div className="tsk-card-content">
                <p>This is just a test text. It has no real meaning.</p>
            </div>
            <div className="tsk-card-footer">
                <div className="columns">
                    <div className="column">
                        <p>Owner: <span> Anwar</span></p>
                    </div>
                    <div className="column">
                        <p >Mar 12 - Apr 20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}