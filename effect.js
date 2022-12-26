$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b20,#b30,#b40,#b50,#b60,#b70,#b80,#b90,#b100,#b200').stop();
			$('#b11').animate({top:170, left: vw-170},500); //F
			$('#b22').animate({top:170, left: vw-110},500); //I
			$('#b33').animate({top:170, left: vw-50},500); //T
			$('#b44').animate({top:170, left: vw+10},500); //R
			$('#b55').animate({top:170, left: vw+70},500); //I
			$('#b66').animate({top:170, left: vw+130},500); //A
			$('#b77').animate({top:230, left: vw-200},500); //E
			$('#b88').animate({top:230, left: vw-140},500); //L
			$('#b99').animate({top:230, left: vw-80},500); //L
			$('#b1010').animate({top:230, left: vw-20},500); //I
			$('#b2020').animate({top:230, left: vw+40},500); //A
			$('#b3030').animate({top:230, left: vw+100},500); //N
			$('#b4040').animate({top:230, left: vw+160},500); //A
			$('#b5050').animate({top:290, left: vw-200},500); //G
			$('#b6060').animate({top:290, left: vw-140},500); //A
			$('#b7070').animate({top:290, left: vw-80},500); //Y
			$('#b8080').animate({top:290, left: vw-20},500); //A
			$('#b9090').animate({top:290, left: vw+40},500); //T
			$('#b100100').animate({top:290, left: vw+100},500); //R
			$('#b200200').animate({top:290, left: vw+160},500); //I
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$('.sayangko-1').animate({
									top: 61,
									left: '47%',
									width: '100px'
								},7000);
		$('.sayangko-2').animate({
									top: 61,
									left: '73%',
									width: '100px'
								},5000);
		$('.sayangko-3').animate({
									top: 61,
									left: '21%',
									width: '100px'
								},6000);
		$('.sayangko-4').animate({top:-200},4000);
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b10').animate({left:randleft,bottom:randtop},10000,function(){
			loopTen();
		});
	}
	function loopEleven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b20').animate({left:randleft,bottom:randtop},10000,function(){
			loopEleven();
		});
	}
	function loopTwelve() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b30').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwelve();
		});
	}
	function loopThirten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b40').animate({left:randleft,bottom:randtop},10000,function(){
			loopThirten();
		});
	}
	function loopFouthten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b50').animate({left:randleft,bottom:randtop},10000,function(){
			loopFouthten();
		});
	}
	function loopFiveten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b60').animate({left:randleft,bottom:randtop},10000,function(){
			loopFiveten();
		});
	}
	function loopSixten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b70').animate({left:randleft,bottom:randtop},10000,function(){
			loopSixten();
		});
	}
	function loopSeventen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b80').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeventen();
		});
	}
	function loopeEightten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b90').animate({left:randleft,bottom:randtop},10000,function(){
			loopeEightten();
		});
	}
	function loopNineten() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b100').animate({left:randleft,bottom:randtop},10000,function(){
			loopNineten();
		});
	}
	function loopTwenty() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b200').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwenty();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3,#b5').addClass('balloons-rotate-behaviour-one');// baris 1
		$('#b2,#b4,#b6').addClass('balloons-rotate-behaviour-two'); // baris 1
		$('#b7,#b9,#b20,#b40').addClass('balloons-rotate-behaviour-two'); //baris 2
		$('#b8,#b10,#b30').addClass('balloons-rotate-behaviour-one'); //baris 2
		$('#b50,#b70,#b90,#b200').addClass('balloons-rotate-behaviour-one');// baris 3
		$('#b60,#b80,#b100').addClass('balloons-rotate-behaviour-two'); // baris 3
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		loopTwelve();
		loopThirten();
		loopFouthten();
		loopFiveten();
		loopSixten();
		loopSeventen();
		loopeEightten();
		loopNineten();
		loopTwenty();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b20,#b30,#b40,#b50,#b60,#b70,#b80,#b90,#b100,#b200').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b10').attr('id','b1010')
		$('#b20').attr('id','b2020')
		$('#b30').attr('id','b3030')
		$('#b40').attr('id','b4040')
		$('#b50').attr('id','b5050')
		$('#b60').attr('id','b6060')
		$('#b70').attr('id','b7070')
		$('#b80').attr('id','b8080')
		$('#b90').attr('id','b9090')
		$('#b100').attr('id','b100100')
		$('#b200').attr('id','b200200')
		$('#b11').animate({top:170, left: vw-170},500); //F
		$('#b22').animate({top:170, left: vw-110},500); //I
		$('#b33').animate({top:170, left: vw-50},500); //T
		$('#b44').animate({top:170, left: vw+10},500); //R
		$('#b55').animate({top:170, left: vw+70},500); //I
		$('#b66').animate({top:170, left: vw+130},500); //A
		$('#b77').animate({top:230, left: vw-200},500); //E
		$('#b88').animate({top:230, left: vw-140},500); //L
		$('#b99').animate({top:230, left: vw-80},500); //L
		$('#b1010').animate({top:230, left: vw-20},500); //I
		$('#b2020').animate({top:230, left: vw+40},500); //A
		$('#b3030').animate({top:230, left: vw+100},500); //N
		$('#b4040').animate({top:230, left: vw+160},500); //A
		$('#b5050').animate({top:290, left: vw-200},500); //G
		$('#b6060').animate({top:290, left: vw-140},500); //A
		$('#b7070').animate({top:290, left: vw-80},500); //Y
		$('#b8080').animate({top:290, left: vw-20},500); //A
		$('#b9090').animate({top:290, left: vw+40},500); //T
		$('#b100100').animate({top:290, left: vw+100},500); //R
		$('#b200200').animate({top:290, left: vw+160},500); //I
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');