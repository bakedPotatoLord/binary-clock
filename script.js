let c = document.querySelector('canvas')

var ctx= c.getContext('2d')

let now;

cw = 500
ch=500

c.width = cw;
c.height=ch;

display =Array.from(Array(6),x=>x)

function circle(x,y,lit){
	if(lit){
		ctx.fillStyle = 'blue'
	}else{
		ctx.fillStyle = 'grey'
	}
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI);
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,cw,ch)
}
function digitOf(num,digit){
	let parsed = num.toString().split("")
	if(parsed.length == 0 ) parsed.pop('0')
	return parsed[digit]
}


window.onload=()=>{
	
	draw()
	console.log(display)
}


function draw(){
	requestAnimationFrame(draw)
	now = new Date()

	clear()
	//hours
	display[0] = 	digitOf(now.getHours(),0)
	display[1] = 	digitOf(now.getHours(),1)

	//minutes
	display[2] = 	digitOf(now.getMinutes(),0)
	display[3] = 	digitOf(now.getMinutes(),1)

	//seconds
	display[4] = 	digitOf(now.getSeconds(),0)
	display[5] = 	digitOf(now.getSeconds(),1)

	//convert to binary


	for(i in display){
		display[i]= parseInt(display[i]).toString(2).split('')
	}
	

	circle(60,60,digitOf()

	

	
	
}