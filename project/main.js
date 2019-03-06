//JavasCript da página Encurte seus links - chr.dc


// faz funcionar o botão
document.querySelector('button').onclick = function() {
	
	//transforma o texto em novo link branco
	document.getElementById("ph").value = "http://chr.dc/xyzxyz";
	document.getElementById("ph").style.color = "white";
	
	//muda o nome do botão
	document.getElementById("fade").innerHTML= "COPIAR";

	//deixa o x/exit visível
	document.getElementById("exit").style.visibility = "visible";

	// copia o novo link
	var copyText = document.getElementById("ph");
	copyText.select();
	document.execCommand("copy");


	//fade in botão

	var el = document.getElementById("fade");

	function fadeIn(el, time) {
  	el.style.opacity = 0;

	var last = +new Date();
	var tick = function() {
	el.style.opacity = +el.style.opacity + (new Date() - last) / time;
	last = +new Date();

	if (+el.style.opacity < 1) {
		(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}
	};

	tick();
	}

	fadeIn(el, 600);


	// fade in input

	var el = document.getElementById("ph");

	function fadeIn(el, time) {
  	el.style.opacity = 0;

	var last = +new Date();
	var tick = function() {
	el.style.opacity = +el.style.opacity + (new Date() - last) / time;
	last = +new Date();

	if (+el.style.opacity < 1) {
		(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}
	};

	tick();
	}

	fadeIn(el, 600);

} 