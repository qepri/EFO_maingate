// Love is the law, love under will
   
var hydra = new Hydra({
    detectAudio: false
  });

 window.addEventListener("resize", evt => {
   hydra.setResolution(window.innerWidth, window.innerHeight);
 });

// kordac uxmat * enter the vritual - https:kordac.qepri.xyz
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 
voronoi(350, 0.15)
 	.modulateScale(osc(8)
 		.rotate(Math.sin(time)), .25)
 	.thresh(.8)
 	.modulateRotate(osc(7), .4)
 	.thresh(.7)
 	.diff(src(o0)
 		.scale(1.28))
 	.modulateScale(osc(3.203)
 		.modulateRotate(o0, .74))
 	.diff(src(o0)
 		.rotate([-.012, .01, -.002, 0.352])
 		.scrollY(0, [-1 / 199800, 0].fast(0.506)))
 	.brightness([-.02, -.17].smooth()
 		.fast(.5))
 	.out();

 // hydra.js is made by olivia.jack.xyz

