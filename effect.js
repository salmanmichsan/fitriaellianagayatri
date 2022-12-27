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
		// setTimeout(function() {
		// 	$('.petasan').fireworks();
		// });
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');

		//img atas tengah				
		$('.sayangko-1').animate({
			top: 55,
			left: '40%',
			width: '100px',
			zIndex:0,
		},7000);

		var audiostart = $('.recordstart1')[0];
		
		$('.start1').delay(4000).animate({
			top: '34%',
			left: '9%',
		},6000);
		setTimeout(function(){ 
			audiostart.play();
		},8000);
		$('.start2').delay(9000).animate({
			top: '38%',
			left: '9%',
		},5000);

		$('.start3').delay(13000).animate({
			top: '42%',
			left: '9%',
		},5000);


		

		$(this).fadeOut('slow').delay(18000).promise().done(function(){
			$('#play').fadeIn('slow');
			// audio.stop();
		});
		
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
		$('#canvas').fadeIn('fast');
		
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$('.sayangko-1').addClass('image-rotate-behaviour-three');
		$('.sayangko-2,.sayangko-9').addClass('image-rotate-behaviour-one');
		$('.sayangko-3').addClass('image-rotate-behaviour-two');
		

		
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
		$('.sayangko-1').animate({
			top: 20,
		},6000);

		// $('.sayangko-2').animate({
		// 	left: '74%',
    	// 	top: 580,
		// 	width: 100,
		// 	zIndex: 0,
		// },6000);

		// $('.sayangko-3').animate({
		// 	left: '5%',
    	// 	top: 580,
		// 	width: 100,
		// 	zIndex: 0,
		// },6000);
		

		
		// $('.sayangko-1') // baris 1;
	});

	function loopS2() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-2').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS2();
		});
	}

	function loopS3() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-3').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS3();
		});
	}

	function loopS4() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-4').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS4();
		});
	}

	function loopS5() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-5').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS5();
		});
	}

	function loopS6() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-6').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS6();
		});
	}

	function loopS7() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-7').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS7();
		});
	}

	function loopS8() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-8').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS8();
		});
	}

	function loopS9() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-9').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS9();
		});
	}

	function loopS10() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-10').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS10();
		});
	}

	function loopS11() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-11').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS11();
		});
	}

	function loopS12() {
		var randleft = 300*Math.random();
		var randtop = 600*Math.random();
		$('.sayangko-12').animate({left:randleft,top:randtop,width:'50px',borderRadius:'50px'},10000,function(){
			loopS12();
		});
	}

	function loopOne() {
		var randleft = 300*Math.random();
		var randtop = 300*Math.random();
		$('#b1').animate({left:randleft,top:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 300*Math.random();
		var randtop = 300*Math.random();
		$('#b2').animate({left:randleft,top:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,top:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,top:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,top:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,top:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,top:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,top:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,top:randtop},10000,function(){
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b10').animate({left:randleft,top:randtop},10000,function(){
			loopTen();
		});
	}
	function loopEleven() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b20').animate({left:randleft,top:randtop},10000,function(){
			loopEleven();
		});
	}
	function loopTwelve() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b30').animate({left:randleft,top:randtop},10000,function(){
			loopTwelve();
		});
	}
	function loopThirten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b40').animate({left:randleft,top:randtop},10000,function(){
			loopThirten();
		});
	}
	function loopFouthten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b50').animate({left:randleft,top:randtop},10000,function(){
			loopFouthten();
		});
	}
	function loopFiveten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b60').animate({left:randleft,top:randtop},10000,function(){
			loopFiveten();
		});
	}
	function loopSixten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b70').animate({left:randleft,top:randtop},10000,function(){
			loopSixten();
		});
	}
	function loopSeventen() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b80').animate({left:randleft,top:randtop},10000,function(){
			loopSeventen();
		});
	}
	function loopeEightten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b90').animate({left:randleft,top:randtop},10000,function(){
			loopeEightten();
		});
	}
	function loopNineten() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b100').animate({left:randleft,top:randtop},10000,function(){
			loopNineten();
		});
	}
	function loopTwenty() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b200').animate({left:randleft,top:randtop},10000,function(){
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
		
		loopS2();
		loopS3();
		loopS4();
		loopS5();
		loopS6();
		loopS7();
		loopS8();
		loopS9();
		loopS10();
		loopS11();
		loopS12();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
			
		});
	});	

	$('#cake_fadein').click(function(){
		$('.sayangko-2,.sayangko-3,.sayangko-4,.sayangko-5,.sayangko-6,.sayangko-7,.sayangko-8,.sayangko-9,.sayangko-10,.sayangko-11,.sayangko-12').stop();
		$('.cake').fadeIn('slow');
		$('.sayangko-5').animate({
			left: '39%',
			top: 459,
			width: 100,
			zIndex: 22,
		},2000);

		$('.sayangko-4').animate({
			left: '-1%',
    		top: 717,
			width: 100,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-2').animate({
			left: '80%',
    		top: 478,
			width: 100,
			zIndex: 1,
			borderRadius:0
		},6000);

		$('.sayangko-3').animate({
			left: '14%',
    		top: 585,
			width: 90,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-6').animate({
			left: '79%',
    		top: 311,
			width: 100,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-7').animate({
			left: '65%',
    		top: 350,
			width: 100,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-8').animate({
			left: '79%',
    		top: 718,
			width: 100,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-9').animate({
			left: '39%',
    		top: 712,
			width: 100,
			zIndex: 0,
		},6000);

		$('.sayangko-10').animate({
			left: '11%',
    		top: 419,
			width: 80,
			zIndex: 1,
			borderRadius:0
		},6000);

		$('.sayangko-11').animate({
			left: '-5%',
    		top: 399,
			width: 83,
			zIndex: 0,
			borderRadius:0
		},6000);

		$('.sayangko-12').animate({
			left: '19%',
    		top: 348,
			width: 100,
			zIndex: 0,
			borderRadius:0
		},6000);
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
		$('#b11').animate({top:170, left: vw-170},5000); //F
		$('#b22').animate({top:170, left: vw-110},5000); //I
		$('#b33').animate({top:170, left: vw-50},5000); //T
		$('#b44').animate({top:170, left: vw+10},5000); //R
		$('#b55').animate({top:170, left: vw+70},5000); //I
		$('#b66').animate({top:170, left: vw+130},5000); //A
		$('#b77').animate({top:230, left: vw-200},5000); //E
		$('#b88').animate({top:230, left: vw-140},5000); //L
		$('#b99').animate({top:230, left: vw-80},5000); //L
		$('#b1010').animate({top:230, left: vw-20},5000); //I
		$('#b2020').animate({top:230, left: vw+40},5000); //A
		$('#b3030').animate({top:230, left: vw+100},5000); //N
		$('#b4040').animate({top:230, left: vw+160},5000); //A
		$('#b5050').animate({top:290, left: vw-200},5000); //G
		$('#b6060').animate({top:290, left: vw-140},5000); //A
		$('#b7070').animate({top:290, left: vw-80},5000); //Y
		$('#b8080').animate({top:290, left: vw-20},5000); //A
		$('#b9090').animate({top:290, left: vw+40},5000); //T
		$('#b100100').animate({top:290, left: vw+100},5000); //R
		$('#b200200').animate({top:290, left: vw+160},5000); //I
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);

		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake,.sayangko-2,.sayangko-3,.sayangko-4,.sayangko-5,.sayangko-6,.sayangko-7,.sayangko-8,.sayangko-9,.sayangko-10,.sayangko-11,.sayangko-12').fadeOut(3000).promise().done(function(){
			$('.message').fadeIn('slow');
			$('.image').fadeIn('slow');
		});
		
		var i =1;
		
		function msgLoop (i=1) {
			$("p:nth-child("+i+"),.i"+i+"").fadeOut(2000).delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+"),.i"+i+"").fadeIn(2000).delay(1000);
			console.log("#i"+i);
			if(i==28){
				$("p:nth-child(27),#i27").fadeOut(2000).promise().done(function () {
					$('.cake').fadeIn(2000);
					$('.sayangko-5').fadeIn({
						left: '39%',
						top: 459,
						width: 100,
						zIndex: 22,
					},2000);
			
					$('.sayangko-4').fadeIn({
						left: '-1%',
						top: 717,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-2').fadeIn({
						left: '80%',
						top: 478,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-3').fadeIn({
						left: '14%',
						top: 585,
						width: 90,
						zIndex: 0,
					},6000);
			
					$('.sayangko-6').fadeIn({
						left: '79%',
						top: 311,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-7').fadeIn({
						left: '65%',
						top: 350,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-8').fadeIn({
						left: '79%',
						top: 718,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-9').fadeIn({
						left: '39%',
						top: 712,
						width: 100,
						zIndex: 0,
					},6000);
			
					$('.sayangko-10').fadeIn({
						left: '11%',
						top: 419,
						width: 80,
						zIndex: 1,
					},6000);
			
					$('.sayangko-11').fadeIn({
						left: '-5%',
						top: 399,
						width: 83,
						zIndex: 0,
					},6000);
			
					$('.sayangko-12').fadeIn({
						left: '19%',
						top: 348,
						width: 100,
						zIndex: 0,
					},6000);
					
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