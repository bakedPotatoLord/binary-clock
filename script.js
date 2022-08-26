let canvas = document.querySelector('canvas')

var ctx= canvas.getContext('2d')


let now;

function circle(x,y,lit){
	if(lit){
		ctx.fillStyle = 'lightblue'
	}else{
		ctx.fillStyle = 'grey'
	}
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI);
	ctx.fill();
}


canvas.width = 500;
canvas.height=500;


window.onload=()=>{
	ctx.fillRect(10,10,50,50)
	draw()
}


function draw(){
	requestAnimationFrame(draw)
	now = new Date()

	
	
}