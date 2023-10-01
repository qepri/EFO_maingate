// Love is the law, love under will
   
var hydra = new Hydra({
    detectAudio: false
  });

 window.addEventListener("resize", evt => {
   hydra.setResolution(window.innerWidth, window.innerHeight);
 });

// kordac uxmat * enter the vritual - https://kordac.qepri.xyz

 osc(32, 0.03, 1.7)
   .mult(osc(15, 0.001, 0).rotate(1.78)).blend(o0, 0.94)
   .modulateScale(osc(10, 0),-0.03)
   .rotate(() => Math.PI * mouse.y /270)
   .scale(0.8, () => (1.05 + 0.1 * Math.sin(0.5*time)))
   .kaleid().out(o0)

// hydra.js is made by olivia.jack.xyz