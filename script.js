let c = document.querySelector('canvas')
let btn = document.querySelector('button')

var ctx= c.getContext('2d')
ctx.textAlign = 'center'
ctx.font = '40px Serif';

let now;

let hintShown = false;

cw=400
ch=300

c.width = cw;
c.height=ch;

let display =Array.from(Array(6),x=>x)
let display2 =Array.from(Array(6),x=>x)

function showHint(){
	hintShown = !(hintShown)
	if(hintShown){
		btn.innerHTML = "Hide Hint"
	}else{
		btn.innerHTML = "Show Hint"
	}
}

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
	let parsed = num.toString().split("")//.reverse()
	if(parsed.length == 1) parsed.push('0')
	return parsed[digit]
}

window.onload=draw()

function draw(){
	requestAnimationFrame(draw)
	now = new Date()
	//now = new Date(1661655753000)
	
	clear()
	
	//hours
	if(now.getHours() < 10){
		display[1] = 	digitOf(now.getHours(),0)
		display[0] = 	digitOf(now.getHours(),1)
	}else{
		display[0] = 	digitOf(now.getHours(),0)
		display[1] = 	digitOf(now.getHours(),1)
	}
	//minutes
	if(now.getMinutes() < 10){
		display[3] = 	digitOf(now.getMinutes(),0)
		display[2] = 	digitOf(now.getMinutes(),1)
	}else{
		display[2] = 	digitOf(now.getMinutes(),0)
		display[3] = 	digitOf(now.getMinutes(),1)
	}
	
	//seconds
	if(now.getSeconds() < 10){
		display[5] = 	digitOf(now.getSeconds(),0)
		display[4] = 	digitOf(now.getSeconds(),1)
	}else{
		display[4] = 	digitOf(now.getSeconds(),0)
		display[5] = 	digitOf(now.getSeconds(),1)
	}


	if(hintShown){
		ctx.fillStyle='white'
		ctx.fillText(display[0],40,270)
		ctx.fillText(display[1],100,270)
		ctx.fillText(display[2],160,270)
		ctx.fillText(display[3],220,270)
		ctx.fillText(display[4],280,270)
		ctx.fillText(display[5],340,270)
	}
	
	//convert to binary
	for(i in display){
		display2[i]= parseInt(display[i]).toString(2).split('').reverse()
		display2[i]= Array.from(display2[i],(v)=>parseInt(v))
	}

	
	//display 0
	circle(40,220,display2[0][0])
	circle(40,160,display2[0][1])
	//display 1
	circle(100,220,display2[1][0])
	circle(100,160,display2[1][1])
	circle(100,100,display2[1][2])
	circle(100,40,display2[1][3])
	//display 2
	circle(160,220,display2[2][0])
	circle(160,160,display2[2][1])
	circle(160,100,display2[2][2])
	//display 3
	circle(220,220,display2[3][0])
	circle(220,160,display2[3][1])
	circle(220,100,display2[3][2])
	circle(220,40,display2[3][3])
	//display 4
	circle(280,220,display2[4][0])
	circle(280,160,display2[4][1])
	circle(280,100,display2[4][2])
	//display 5
	circle(340,220,display2[5][0])
	circle(340,160,display2[5][1])
	circle(340,100,display2[5][2])
	circle(340,40,display2[5][3])	
}