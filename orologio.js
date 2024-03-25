let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth*0.9;
canvas.height = window.innerHeight*0.9;

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(canvas.width/2,canvas.height/2, 200, 0, 2 * Math.PI);
    ctx.stroke();
    
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    let date = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    let stringaData = date + "/" + month + "/" + year + " " + hours +":"+ minutes +":"+ seconds;
    
    document.getElementById("time").innerHTML = stringaData;
    
    
    let centerx = canvas.width/2; 
    let centery = canvas.height/2
    let r1 = 150
    let r2 = 100
    let r3 = 50
    let theta1 = -Math.PI/2+seconds/60*2*Math.PI
    let theta2 = -Math.PI/2+minutes/60*2*Math.PI
    let theta3 = -Math.PI/2+hours%12*2*Math.PI
    
    function pointOnCircle(centerx, centery, r, t){
        return {
            x: (centerx + r*Math.cos(t)),
            y: (centery + r*Math.sin(t))
        }
    }
    
    function drawLine(centerx, centery, point, color = "black"){
        ctx.strokeStyle  = color;
        ctx.beginPath()
        ctx.moveTo(centerx, centery);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        ctx.strokeStyle  = "black";
    }
    
    for(let i = 0; i<12; i++){
        let point = pointOnCircle(centerx, centery, 170, i/12*2*Math.PI)
        console.log("point")
        drawLine(point.x, point.y+10, point);
    }
    
    drawLine(centerx, centery, pointOnCircle(centerx, centery, r1, theta1), "green");
    drawLine(centerx, centery, pointOnCircle(centerx, centery, r2, theta2), "blue" );
    drawLine(centerx, centery, pointOnCircle(centerx, centery, r3, theta3), "red");

    
}, 1000)

