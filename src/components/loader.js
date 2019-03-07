import React from 'react';
// import Ball from './ball'

export default class Loader extends React.Component{
	// componentDidMount(){
	// 	const elem = document.getElementById('canvas');
	// 	let ctx = elem.getContext('2d')
	// 	const ball = new Ball(ctx, elem, elem.width / 2, elem.height / 2, 9, 9, 10);

	// 	function animate(){
	// 		requestAnimationFrame(animate);
	// 		ctx.clearRect(0,0, elem.width, elem.height);
	// 		ball.update();
	// 	}
	// 	animate();
	// }
    render(){
        return(
            <div className="tsk-loader" id={this.props.id}>
                <div className="loader-container">
                	<div className="bounceball"></div>
                	<p>LOADING .. </p>
                </div>
            </div>
        )
    }
}