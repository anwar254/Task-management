import React from 'react';
import Ball from './ball'

export default class Loader extends React.Component{
	componentDidMount(){
		const elem = document.getElementById('canvas');
		let ctx = elem.getContext('2d')
		const ball = new Ball(ctx, elem, 100, 20, 3, 3, 10);

		function animate(){
			requestAnimationFrame(animate);
			ctx.clearRect(0,0, elem.width, elem.height);
			ball.update();
		}
		animate();
	}
    render(){
        return(
            <div className="tsk-loader">
                <div className="loader-container">
                	<canvas id="canvas"/>
                </div>
            </div>
        )
    }
}