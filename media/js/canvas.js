
addEventListener('load', initiate);
var canvas;
var arr=[[100,100,250,250],[200,200,250,250],[300,300,250,250]];
var x = 680, y = 500, max = 683, min = 330, right = 921, a=520, b=400, x1=780, y1=340;
var img=new Image(); img.src='media/img/box.png';
var imgs=new Image(); imgs.src='media/img/shrimp.png';
var cross=[]

function initiate(){
	var elem=document.getElementById('canvas');
	canvas=elem.getContext('2d');
	//obstacle_one(250,550);
	//obstacle_two(700,450);
	for (var i=0;
		i<arr.length;
		i++)
	draw();
    draw2();
    shrimp();
	addEventListener ('mousemove', animation);
}

//function obstacle_one(x,y) {
	//var img=new Image();
	//img.src="media/img/box.png";
	//canvas.drawImage(img,x,y);
//}
//function obstacle_two(x,y) {
	//var img=new Image();
	//img.src="media/img/box-2.png";
	//canvas.drawImage(img,x,y);
//}
//function obstacle(x,y,w,h) {
    //canvas.fillStyle='#99753d';
	//canvas.strokeStyle='#99753d';
	//canvas.fillRect(x, y, w, h);
	//canvas.beginPath();
	//canvas.closePath();
//}


function animation (e) {
	console.log('animation');
	canvas.clearRect (0,0,921,683);
	//obstacle_one(250,550);
	//obstacle_two(700,450);
	//for (var i=0;
		//i<arr.length;
		//i++)
	//{
		//obstacle(arr[i][0], arr[i][1], arr[i][2])
	//}
	bear (e);
	animation_move (e);
	
}

function animation_move (e) {
	var img=new Image();
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var width=cross[0]+70;
	var height=cross[1]+50;
	var left=e.offsetLeft;
	var top=e.offsetTop;

	if (xmouse > right-80) {
	    xmouse= right-80
	}
	if (ymouse < min) {
		ymouse=min
	};
	if (ymouse > max-30){
		ymouse=max-30
	}
	img.src="media/img/salmon.png";
	canvas.drawImage(img,xmouse,ymouse);
	console.log(cross);
	canvas.beginPath();
	//canvas.arc(xmouse,ymouse,10,0,Math.PI*2,false);
	canvas.fill();
	if ((xmouse > cross[0]&&xmouse < width)||(ymouse>cross[1]&&ymouse<height)){
				alert('cross')
			}
			else {
				console.log('no cross')
			} 		
}

function bear (e) {
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var xeyel=427;
	var yeyel=99;
	var ang=Math.atan2(ymouse - yeyel, xmouse-xeyel);
	var x=xeyel + Math.round(Math.cos(ang)*4);
	var y=yeyel + Math.round(Math.sin(ang)*4);
	console.log(x);
	var img=new Image();
	img.src="media/img/bear.png";
	canvas.drawImage(img,370,60);
	canvas.beginPath();
	canvas.arc(xeyel,yeyel,9,0,Math.PI*2, false);
	canvas.moveTo(xeyel+70,yeyel);
	canvas.arc(xeyel+28,yeyel,9,0,Math.PI*2, false);
	canvas.fillStyle="white";
	canvas.fill();
	canvas.strokeStyle="gray";
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(x+10,y);
	canvas.arc(x,y,4,0,Math.PI*2, false);
	canvas.moveTo(x+60,y);
	canvas.arc(x+28,y,4,0,Math.PI*2, false)
	canvas.fillStyle="black";
	canvas.fill();
}

//function test (){
	//canvas.font="bold 28px verdana,sans serif";
	//canvas.textAlign="start";
	//canvas.fillStyle="#ff748c";
	//canvas.fillText("losos.io",30,40);
	//var text="losos.io";
	//var size=canvas.measureText(text);
	//canvas.fillText(text,100,124);
	//canvas.strokeRect(100,100,size.width,24);
	//canvas.shadowColor="#F2F2F2";
	//canvas.shadowOffsetX=4;
	//canvas.shadowOffsetY=5;
	//canvas.shadowBlur=5;
	//canvas.restore();
//}

function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {
			canvas.clearRect (x, y, 128, 128);			
			canvas.drawImage(img, x, y);
			canvas.beginPath();
            x += -1.5;
           	requestAnimationFrame(draw);
			if (x < -100 ) {
				x = 680; y=selfRandom(350, 683); 
			}			
		}

function draw2() {
			console.log('draw2');
			canvas.clearRect (a, b, 128, 128);		
			canvas.drawImage(img, a, b);
			canvas.beginPath();
            a += -2.2;
            requestAnimationFrame(draw2);
			if (a < -100 ) {
				a = 680; b=selfRandom(350, 683); 
			}			
		}

function shrimp() {
			console.log('shrimp');
			canvas.clearRect (x1, y1, 79, 59);		
			canvas.drawImage(imgs, x1, y1);
			canvas.beginPath();
            x1 += -1.7;
           	requestAnimationFrame(shrimp);
			if (x1 < -100 ) {
				x1 = 680; y1=selfRandom(350, 683);
			}
			cross[0]=x1;
			cross[1]=y1;

			
		}

//узнать позицию препятствий