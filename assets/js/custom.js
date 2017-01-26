/****************************
*	 Nuron Beatbox v.1.1	*
*	=====================   *
*	   Created by 			*
*	  Safayat Jamil			*
*							*
*  http://fb.me/saf.jammed	*
*							*
*Created Under MIT lisence  *
*      Open for all			*
*****************************/


//library for the keys
var keyData={
	space:{
		color : "purple", //defines the color 
		sound : new Howl({ //new howler.js pattern
		src: [" ./assets/sounds/bubbles.mp3"] //the source of music file
		})
	},
	b:{
		color : "green",
		sound : new Howl({
		src: [" ./assets/sounds/clay.mp3"]
		})
	},
	c:{
		color : "yellow",
		sound : new Howl({
			src: [" ./assets/sounds/confetti.mp3"]
			})
	},
	d:{
		color : "blue",
		sound : new Howl({
			src: [" ./assets/sounds/corona.mp3"]
			})
	},
	e:{
		color : "lime",
		sound : new Howl({
			src: [" ./assets/sounds/dotted-spiral.mp3"]
			})
	},
	f:{
		color : "snow",
		sound : new Howl({
			src: [" ./assets/sounds/flash-1.mp3"]
			})
	},
	g:{
		color : "red",
		sound : new Howl({
			src: ["./assets/sounds/flash-2.mp3"]
			})
	},
	h:{
		color : "azure",
		sound : new Howl({
			src: [" ./assets/sounds/flash-3.mp3"]
			})
	},
	i:{
		color : "beige",
		sound : new Howl({
			src: [" ./assets/sounds/glimmer.mp3"]
			})
	},
	j:{
		color : "bisque",
		sound : new Howl({
			src: [" ./assets/sounds/moon.mp3"]
			})
	},
	k:{
		color : "#24DDA5",
		sound : new Howl({
			src: [" ./assets/sounds/pinwheel.mp3"]
			})
	},
	l:{
		color : "blueviolet",
		sound : new Howl({
			src: [" ./assets/sounds/piston-1.mp3"]
			})
	},
	m:{
		color : "yellow",
		sound : new Howl({
			src: [" ./assets/sounds/piston-2.mp3"]
			})
	},
	n:{
		color : "brown",
		sound : new Howl({
			src: [" ./assets/sounds/piston-3.mp3"]
			})
	},
	o:{
		color : "burlywood",
		sound : new Howl({
			src: [" ./assets/sounds/confetti.mp3"]
			})
	},
	p:{
		color : "cadetblue",
		sound : new Howl({
			src: [" ./assets/sounds/prism-1.mp3"]
			})
	},
	q:{
		color : "chocolate",
		sound : new Howl({
			src: [" ./assets/sounds/prism-2.mp3"]
			})
	},
	a:{
		color : "coral",
		sound : new Howl({
			src: [" ./assets/sounds/prism-3.mp3"]
			})
	},
	r:{
		color : "crimson",
		sound : new Howl({
			src: [" ./assets/sounds/splits.mp3"]
			})
	},
	s:{
		color : "cyan",
		sound : new Howl({
			src: [" ./assets/sounds/squiggle.mp3"]
			})
	},
	t:{
		color : "darkblue",
		sound : new Howl({
			src: [" ./assets/sounds/strike.mp3"]
			})
	},
	u:{
		color : "darkcyan",
		sound : new Howl({
			src: [" ./assets/sounds/wipe.mp3"]
			})
	},
	v:{
		color : "darkturquoise",
		sound : new Howl({
			src: [" ./assets/sounds/zig-zag.mp3"]
			})
	},
	w:{
		color : "violet",
		sound : new Howl({
			src: [" ./assets/sounds/suspension.mp3"]
			})
	},
	x:{
		color : "deeppink",
		sound : new Howl({
			src: [" ./assets/sounds/timer.mp3"]
			})
	},
	y:{
		color : "dodgerblue",
		sound : new Howl({
			src: [" ./assets/sounds/ufo.mp3"]
			})
	},
	z:{
		color : "firebrick",
		sound : new Howl({
			src: [" ./assets/sounds/veil.mp3"]
			})
	},
	0:{
		color : "forestgreen",
		sound : new Howl({
			src: [" ./assets/sounds/wipe.mp3"]
			})
	},
	1:{
		color : "fuchsia",
		sound : new Howl({
			src: [" ./assets/sounds/extr163.mp3"]
			})
	},
	2:{
		color : "gold",
		sound : new Howl({
			src: [" ./assets/sounds/extr162.mp3"]
			})
	},
	3:{
		color : "indianred",
		sound : new Howl({
			src: [" ./assets/sounds/extr161.mp3"]
			})
	},
	4:{
		color : "indigo",
		sound : new Howl({
			src: [" ./assets/sounds/extr1.mp3"]
			})
	},
	5:{
		color : "purple",
		sound : new Howl({
			src: [" ./assets/sounds/extr11.mp3"]
			})
	},
	6:{
		color : "royalblue",
		sound : new Howl({
			src: [" ./assets/sounds/extr12.mp3"]
			})
	},
	7:{
		color : "tomato",
		sound : new Howl({
			src: [" ./assets/sounds/extr13.mp3"]
			})
	},
	8:{
		color : "thistle",
		sound : new Howl({
			src: [" ./assets/sounds/extr14.mp3"]
			})
	},
	9:{
		color : "springgreen",
		sound : new Howl({
			src: [" ./assets/sounds/extr15.mp3"]
			})
	},

};
//this array contains all the circles
var circles=[];

//event listener for keydown
function onKeyDown(event) {
	//if key is pressed key

	if(keyData[event.key]){

		var maxPoint = new Point(view.size.width, view.size.height); //view.size.* gets width and height of the window
		var randomPoint = Point.random(); //geneates a random point for the circle to appear
		var point = maxPoint * randomPoint; //This sets the point limited to the window height and width
		var newCircle = new Path.Circle(point,500); // draws the circle, 500 is the initial Radius
		newCircle.fillColor= keyData[event.key].color; //gets the color from the keyData
		keyData[event.key].sound.play();	// Plays the sound from keyData
		circles.push(newCircle); //adds the circle to the array

	}
	


	
}

//animation of the circles
function onFrame(event){
	for(var i =0; i< circles.length; i++){
		//changes color per frame
		circles[i].fillColor.hue+=1;
		//scales the circle to null
		circles[i].scale(.9);
	}
	
}


//clears the ram every 2 mins
/*setInterval(function(){
	circles.length=0;
	
},120);*/



console.log("Created By Safayat Jamil Sifat \n http://facebook.com/saf.jammed\n \n Created with Paper.js and Howler.js \n sound: neuronal synchrony from github");













