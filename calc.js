let ele = document.getElementById("butt");
ele.addEventListener("click", calculate);
ele.addEventListener("click", draw);

function calculate(){
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;
	let st = 1;
	let sc = 16;
	let w = document.getElementById("width").value;
	let h = document.getElementById("height").value;

	if(w > 0 && w <= 24){ a = a + 1;}
	if(w > 24 && w <= 48){ a = a + 2;}
	if(w > 48 && w <= 96){ a = a + 3;}
	if(w > 96 && w <= 120){ b = b + 3;}
	if(w > 120 && w <= 144){ c = c + 3;}
	if(w > 144 && w <= 168){ d = d + 3;}
	if(w > 168 && w <= 192){ e = e + 3;}
	
	if(w > 192){
		if(w % 192 == 0){ 
			let x = w / 192;
			x = x * 3;
			e = e + x;
		} else {
			let x = Math.floor(w / 192);
			let k = 192 * x;
			let y = w - k;
			x = x * 3;
			e = e + x;
			if(y > 0 && y <= 24){ a = a + 1;}
			if(y > 24 && y <= 48){ a = a + 2;}
			if(y > 48 && y <= 96){ a = a + 3;}
			if(y > 96 && y <= 120){ b = b + 3;}
			if(y > 120 && y <= 144){ c = c + 3;}
			if(y > 144 && y <= 168){ d = d + 3;}
			if(y > 168 && y <= 192){ e = e + 3;}
		}
	}

	if(w % 16 == 0){ let m = w / 16; st = st + m;}
	else { let m = Math.floor(w / 16); st = st + m + 1;}
	
	if(h > 0 && h <= 24){ let j = Math.ceil(st / 4); a = a + j;}
	if(h > 24 && h <= 48){ let j = Math.ceil(st / 2); a = a + j;}
	if(h > 48 && h <= 96){ a = a + st;}
	if(h > 96 && h <= 120){ b = b + st;}
	if(h > 120 && h <= 144){ c = c + st;}
	if(h > 144 && h <= 168){ d = d + st;}
	if(h > 168 && h <= 192){ e = e + st;}
	
	if(h > 192){
		st = st + 1;
		if(h % 192 == 0){ 
			let z = h / 192;
			let ct = z * st;
			e = e + ct;
		} else { 
			let z = Math.floor(h / 192);
			let nt = 192 * z;
			let ht = h - nt;
			e = e + st;
			if(ht > 0 && ht <= 24){ a = a + Math.ceil(st / 4);}
			if(ht > 24 && ht <= 48){ a = a + Math.ceil(st / 2);}
			if(ht > 48 && ht <= 96){ a = a + st;}
			if(ht > 96 && ht <= 120){ b = b + st;}
			if(ht > 120 && ht <= 144){ c = c + st;}
			if(ht > 144 && ht <= 168){ d = d + st;}
			if(ht > 168 && ht <= 192){ e = e + st;}
		}
	}

	if(w > 15){
		if(w % 16 == 0){
			for(let bb = 1; bb <= w; bb = bb + 16){
				sc = sc + 8;
			}
		} else {
			for(let cc = 1; cc <= w; cc = cc + 16){
				sc = sc + 8;
			} sc = sc - 4;
		}
	}
	
	box = document.getElementById("box");
        box.innerHTML = "Screws: &nbsp; &nbsp; &nbsp; &nbsp;" + sc + "<br />" 
		+ "8 ft 2X4: &nbsp; &nbsp; &nbsp; &nbsp;" + a + "<br />"
		+ "10 ft 2X4: &nbsp; &nbsp; &nbsp;" + b + "<br />"
		+ "12 ft 2X4: &nbsp; &nbsp; &nbsp;" + c + "<br />"
		+ "14 ft 2X4: &nbsp; &nbsp; &nbsp;" + d + "<br />"
		+ "16 ft 2X4: &nbsp; &nbsp; &nbsp;" + e;

	if(h > 92 && w > 40){
		let spac = document.createElement("div");
		box.appendChild(spac);
		spac.innerHTML = " &nbsp; ";
	
		let doo = document.createElement("div");
		box.appendChild(doo);
		doo.id = "buttb";
		doo.innerHTML = "Add Door";
		let elet = document.getElementById("buttb");
		elet.addEventListener("click", door);
		elet.addEventListener("click", drawDoor);

	}
	
	function door(){
		a = a + 4;
		sc = sc + 12;
		box = document.getElementById("box");
		box.innerHTML = "Screws: &nbsp; &nbsp; &nbsp; &nbsp;" + sc + "<br />" 
			+ "8 ft 2X4: &nbsp; &nbsp; &nbsp; &nbsp;" + a + "<br />"
			+ "10 ft 2X4: &nbsp; &nbsp; &nbsp;" + b + "<br />"
			+ "12 ft 2X4: &nbsp; &nbsp; &nbsp;" + c + "<br />"
			+ "14 ft 2X4: &nbsp; &nbsp; &nbsp;" + d + "<br />"
			+ "16 ft 2X4: &nbsp; &nbsp; &nbsp;" + e;
		
		let spac = document.createElement("div");
		box.appendChild(spac);
		spac.innerHTML = " &nbsp; ";

		let dood = document.createElement("div");
		box.appendChild(dood);
		dood.id = "arro";
		dood.innerHTML = "Move door with <br /> arrow keys.";	
	}
	
	let xb = 235;
	let xc = 245;
	let xd = 315;
	let xe = 395;
	let xf = 455;
	let xg = 465;
	let ill = document.getElementById("framebp");
	ill.addEventListener("keydown", move);

	function move(e){
		if(event.key === "ArrowRight"){
			xb = xb + 10;
			xc = xc + 10;
			xd = xd + 10;
			xe = xe + 10;
			xf = xf + 10;
			xg = xg + 10;
		}
		if(event.key === "ArrowLeft"){
			xb = xb - 10;
			xc = xc - 10;
			xd = xd - 10;
			xe = xe - 10;
			xf = xf - 10;
			xg = xg - 10;
		}

		drawDoor();
	}
	
	function drawDoor(){
		draw();

		let caho = h * 5 + 10;
		let cah = h * 5 - 400;
		let caw = w * 5;
		let xps = 500;

		let ctx = document.getElementById("framebp").getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(xb, 65, 230, caho);
		ctx.strokeRect(xb, 65, 230, caho);
		
	//left
	
		ctx.strokeRect(xb, 65, 10, caho);
		
	//right
	
		ctx.strokeRect(xf, 65, 10, caho);
		
	//middle
		ctx.strokeRect(xd, 65, 10, cah - 65 );
		ctx.strokeRect(xe, 65, 10, cah - 65 );
		
	//topbar
		ctx.strokeRect(xc, cah, 210, 30);
		

	}	
	box.style.padding = "50px";
}

function draw(){
	let wid = document.getElementById("width").value;
	let hei = document.getElementById("height").value;
	let calch = hei * 5;
	let calcw = wid * 5;

	let ctx = document.getElementById("framebp").getContext("2d");
	ctx.lineWidth = 3;
	ctx.font = "20px Helvetica";
	
	//backcolor
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 1500, 1400);

	//plates
	ctx.strokeRect(225, 55, calcw + 10, 10);	
	ctx.strokeRect(225, calch + 65, calcw + 10, 10);
	
	if(wid > 0 && wid < 16){
		ctx.strokeRect(225, 65, 10, calch);
		ctx.strokeRect(calcw + 215, 65, 10, calch);
	}

	if(wid > 15){
		if(wid % 16 == 0){
			for(let i = 0; i <= wid; i = i + 16){
				let scal = i * 5;
				ctx.strokeRect(scal + 225, 65, 10, calch);
			}
		} else {
			for(let g = 0; g <= wid; g = g + 16){
				let sgal = g * 5;
				ctx.strokeRect(sgal + 225, 65, 10, calch);
			}
			ctx.strokeRect(calcw + 225, 65, 10, calch);
		}
			
	}
	if(hei > 48){
		let neh = calch / 2;
		neh = neh + 15;
		
		if(wid % 16 == 0){
			for(let k = 0; k <= wid - 1; k = k + 32){
				let scalk = k * 5;
				ctx.strokeRect(scalk + 235, neh, 70, 10);
			}
			for(let j = 16; j <= wid - 1; j = j + 32){
				let scalj = j * 5;
				ctx.strokeRect(scalj + 235, neh + 25, 70, 10);
			}
		} else {
			for(let k = 0; k <= wid - 17; k = k + 32){
				let scalk = k * 5;
				ctx.strokeRect(scalk + 235, neh, 70, 10);
			}
			for(let j = 16; j <= wid - 17; j = j + 32){
				let scalj = j * 5;
				ctx.strokeRect(scalj + 235, neh + 25, 70, 10);
			}
		}
	}

	let calcht = calch + 75;
	let calcwt = calcw + 240;
	let ncalc = calcwt * .8;
	let heitt = hei - 3;
	
	ctx.fillStyle = "black";
	ctx.beginPath();

	ctx.moveTo(165, 55);
	ctx.lineTo(140, 55);
	ctx.lineTo(140, calcht);
	ctx.lineTo(165, calcht);

	ctx.moveTo(140, calcht / 2);
	ctx.lineTo(115, calcht / 2);
	ctx.fillText(hei + " inches", 10, calcht / 2);

	ctx.moveTo(225, calcht + 50);
	ctx.lineTo(225, calcht + 75);
	ctx.lineTo(calcwt, calcht + 75);
	ctx.lineTo(calcwt, calcht + 50);

	ctx.moveTo(ncalc, calcht + 75);
	ctx.lineTo(ncalc, calcht + 100);
	ctx.fillText(wid + " inches", ncalc - 15, calch + 205);
	
	if(wid > 16){
		ctx.moveTo(225, calcht + 100);
		ctx.lineTo(225, calcht + 125);
		ctx.lineTo(305, calcht + 125);
		ctx.lineTo(305, calcht + 100);

		ctx.moveTo(265, calcht + 125);
		ctx.lineTo(265, calcht + 150);
		ctx.fillText("16 inches", 245, calcht + 175);
	}
	
	ctx.moveTo(190, 65);
	ctx.lineTo(165, 65);
	ctx.lineTo(165, calcht - 10);
	ctx.lineTo(190, calcht - 10);

	ctx.moveTo(165, calcht * .7);
	ctx.lineTo(115, calcht * .7);
	ctx.fillText(heitt + " inches", 10, calcht * .7);
	ctx.stroke();
}
