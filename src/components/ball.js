class Ball{
	constructor(elem, elemH, x, y, dx, dy, radious){
		this.elemH = elemH;
		this.elem = elem;
		this.x = x;
		this.y = y;
		this.cx = this.x;
		this.cy = this.elemH.height;
		this.dx = dx;
		this.dy = dy;
		this.radious = radious;
	}

	draw(){
		this.elem.beginPath();
		this.elem.arc(this.x , this.y, this.radious, 0, 2 * Math.PI);
		this.elem.fillStyle = "#ff5e3a";
		this.elem.fill()
	}

	update(){
		if( this.y<0 || this.y>this.elemH.height) {
			this.dy=-this.dy;
		};
		this.y += this.dy;
		this.draw()
		console.log(this.radious)
	}
}

export default Ball;