let c = document.querySelector('canvas')

var ctx= c.getContext('2d')

let now;

cw = 500
ch=500

c.width = cw;
c.height=ch;

let display =Array.from(Array(6),x=>x)
let display2 =Array.from(Array(6),x=>x)

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
	if(parsed.length == 1) parsed.pop('0')
	if(parsed[digit] == undefined) return '0'
	return parsed[digit]
}

window.onload=draw()

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

	console.log(display)
	
	//convert to binary
	for(i in display){
		display2[i]= parseInt(display[i]).toString(2).split('').reverse()
		display2[i]= Array.from(display2[i],(v)=>parseInt(v))
	}

	//console.log(display2)

	/*
	
	//display 0
	circle(40,400,display2[0][0])
	circle(40,340,display2[0][1])
	//display 1
	circle(100,400,display2[1][0])
	circle(100,340,display2[1][1])
	circle(100,280,display2[1][2])
	circle(100,220,display2[1][3])
	//display 2
	circle(160,400,display2[2][0])
	circle(160,340,display2[2][1])
	circle(160,280,display2[2][2])
	//display 3
	circle(220,400,display2[3][0])
	circle(220,340,display2[3][1])
	circle(220,280,display2[3][2])
	circle(220,220,display2[3][3])
	//display 4
	circle(280,400,display2[4][0])
	circle(280,340,display2[4][1])
	circle(280,280,display2[4][2])
	//display 5
	circle(340,400,display2[5][0])
	circle(340,340,display2[5][1])
	circle(340,280,display2[5][2])
	circle(340,220,display2[5][3])

	*/
}