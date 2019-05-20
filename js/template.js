


//Preloader


	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	}) 

	
	
	
//Home Background Video	
	
		jQuery(function(){

            jQuery(".player").mb_YTPlayer();
		});
	
	
//Home fit screen	
	
	
	/*global $:false */
	$(function(){"use strict";
		$('.home-top').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('.home-top').css({'height':($(window).height())+'px'});
		});
		Royal_Preloader.config({
			mode:        'scale_text',
			text:        'christopher africa',
			text_colour: '#f8f8f8',
			background:  '#051827'
		});
	});


//Navigation		

			var currentIndex = 0;
			var currentId = "home";
			$(document).ready(function() {
				$("#nav").ferroMenu({
					position 	: "left-top",
					delay 		: 50,
					rotation 	: 720,
					radius      : 140,
					margin		: 20
				});
			});
			
			var colors = {
					"home" : {
						"background" : "",
						"index" : 0
					},
					"about" : {
						"background" : "",
						"index" : 1
					},
					"services" : {
						"background" : "",
						"index" : 2
					},
					"folio" : {
						"background" : "",
						"index" : 3
					},
					"contact" : {
						"background" : "",
						"index" : 4
					}
					
			};
			
			function goTo(id){
				var obj = eval("colors."+id);
				
				$("body").css("background",obj.background);
				$("#ferromenu-controller,#nav li a").css("color",obj.background);
				if(obj.index > currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : -100,
						opacity : 0,
						zIndex : 0
					},600);
					
					$("#"+currentId).removeClass("active");
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : 400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}else if(obj.index < currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : 100,
						opacity : 0,
						zIndex : 0
					},600);
					$("#"+currentId).removeClass("active");
					
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : -400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}
				currentIndex = obj.index;
				currentId = id;
				
			}	
	
//Home text rotator	
	
$(".rotator > div:gt(0)").hide();
setInterval(function() { 
  $('.rotator > div:first')
	.fadeOut(0)
	.next()
	.fadeIn(1000)
    .end()
    .appendTo('.rotator');
},  3000);
	


	
	
	
//Colorbox single project pop-up

$(document).ready(function(){
$(".iframe").colorbox({iframe:true, width:"100%", height:"100%"});	
});

$(".group1").colorbox({rel:'group1'});		
	
	


//Portfolio filter	

	

jQuery(document).ready(function () { 
	(function ($) { 
	
	
		var container = $('.all-works');
		
		
		function getNumbColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1500) {
				columnNumb = 3;
			} else if (winWidth > 1200) {
				columnNumb = 3;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 600) {
				columnNumb = 1;
			} else if (winWidth > 300) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}
		
		
		function setColumnWidth() { 
			var winWidth = $(window).width(), 
				columnNumb = getNumbColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);

		}
		
		$('#portfolio-filter #filter a').click(function () { 
			var selector = $(this).attr('data-filter');
			
			$(this).parent().parent().find('a').removeClass('current');
			$(this).addClass('current');
			
			container.isotope( { 
				filter : selector 
			});
			
			setTimeout(function () { 
				reArrangeProjects();
			}, 300);
			
			
			return false;
		});
		
		function reArrangeProjects() { 
			setColumnWidth();
			container.isotope('reLayout');
		}
		
		
		container.imagesLoaded(function () { 
			setColumnWidth();
			
			
			container.isotope( { 
				itemSelector : '.one-work', 
				layoutMode : 'masonry', 
				resizable : false 
			} );
		} );
		
		
	
		
	
		$(window).on('debouncedresize', function () { 
			reArrangeProjects();
			
		} );
		
	
	} )(jQuery);
} );


/* DebouncedResize Function */
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;
		
		
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};
				
				
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}
				
				
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);			
	




	
//Google map	
	
/*global $:false */
    var map;
    $(document).ready(function(){"use strict";
      map = new GMaps({
    disableDefaultUI: true,
    scrollwheel: false,
				el: '#map',
        lat: -26.007498,
        lng: 28.118128
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay"></div>',
        verticalAlign: 'center',
        horizontalAlign: 'center'
      });
        var styles = [  
  {
    "elementType": "labels.icon",
    "stylers": [
      { "weight": 0.3 },
      { "saturation": -100 },
      { "lightness": 25 },
      { "visibility": "off" }
    ]
  },{
    "stylers": [
      { "hue": "#3498db" },
      { "lightness": 39 }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "simplified" }
    ]
  }
        ];
        
        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style");	  
    });		
	
	
	
//Sliders	
	
	$(document).ready(function(){
		$('.slider1').bxSlider({
			adaptiveHeight: true,
			touchEnabled: true,
			pager: false,
			controls: true,
			auto: false,
			slideMargin: 1
		});
	});	
	
	$(document).ready(function(){
		$('.slider2').bxSlider({
			adaptiveHeight: true,
			touchEnabled: true,
			pager: false,
			controls: true,
			auto: true,
			slideMargin: 1
		});
	});	




	
//Responsive video	
	
  $(document).ready(function(){
    $(".media").fitVids();
  });		
	
  var canvas = document.getElementById('nokey'),
  can_w = parseInt(canvas.getAttribute('width')),
  can_h = window.innerHeight,
  ctx = canvas.getContext('2d');

// console.log(typeof can_w);

var ball = {
	 x: 0,
	 y: 0,
	 vx: 0,
	 vy: 0,
	 r: 0,
	 alpha: 1,
	 phase: 0
  },
  ball_color = {
	  r: 255,
	  g: 255,
	  b: 255
  },
  R = 2,
  balls = [],
  alpha_f = 0.03,
  alpha_phase = 0,
   
// Line
  link_line_width = 0.8,
  dis_limit = 260,
  add_mouse_point = true,
  mouse_in = false,
  mouse_ball = {
	 x: 0,
	 y: 0,
	 vx: 0,
	 vy: 0,
	 r: 0,
	 type: 'mouse'
  };

// Random speed
function getRandomSpeed(pos){
   var  min = -1,
	  max = 1;
   switch(pos){
	   case 'top':
		   return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
		   break;
	   case 'right':
		   return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
		   break;
	   case 'bottom':
		   return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
		   break;
	   case 'left':
		   return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
		   break;
	   default:
		   return;
		   break;
   }
}
function randomArrayItem(arr){
   return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max){
   return Math.random()*(max - min) + min;
}
console.log(randomNumFrom(0, 10));
// Random Ball
function getRandomBall(){
   var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
   switch(pos){
	   case 'top':
		   return {
			   x: randomSidePos(can_w),
			   y: -R,
			   vx: getRandomSpeed('top')[0],
			   vy: getRandomSpeed('top')[1],
			   r: R,
			   alpha: 1,
			   phase: randomNumFrom(0, 10)
		   }
		   break;
	   case 'right':
		   return {
			   x: can_w + R,
			   y: randomSidePos(can_h),
			   vx: getRandomSpeed('right')[0],
			   vy: getRandomSpeed('right')[1],
			   r: R,
			   alpha: 1,
			   phase: randomNumFrom(0, 10)
		   }
		   break;
	   case 'bottom':
		   return {
			   x: randomSidePos(can_w),
			   y: can_h + R,
			   vx: getRandomSpeed('bottom')[0],
			   vy: getRandomSpeed('bottom')[1],
			   r: R,
			   alpha: 1,
			   phase: randomNumFrom(0, 10)
		   }
		   break;
	   case 'left':
		   return {
			   x: -R,
			   y: randomSidePos(can_h),
			   vx: getRandomSpeed('left')[0],
			   vy: getRandomSpeed('left')[1],
			   r: R,
			   alpha: 1,
			   phase: randomNumFrom(0, 10)
		   }
		   break;
   }
}
function randomSidePos(length){
   return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls(){
   Array.prototype.forEach.call(balls, function(b){
	  if(!b.hasOwnProperty('type')){
		  ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
		  ctx.beginPath();
		  ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
		  ctx.closePath();
		  ctx.fill();
	  }
   });
}

// Update balls
function updateBalls(){
   var new_balls = [];
   Array.prototype.forEach.call(balls, function(b){
	   b.x += b.vx;
	   b.y += b.vy;
	   
	   if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
		  new_balls.push(b);
	   }
	   
	   // alpha change
	   b.phase += alpha_f;
	   b.alpha = Math.abs(Math.cos(b.phase));
	   // console.log(b.alpha);
   });
   
   balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf(){
   
}

// Draw lines
function renderLines(){
   var fraction, alpha;
   for (var i = 0; i < balls.length; i++) {
	   for (var j = i + 1; j < balls.length; j++) {
		  
		  fraction = getDisOf(balls[i], balls[j]) / dis_limit;
		   
		  if(fraction < 1){
			  alpha = (1 - fraction).toString();

			  ctx.strokeStyle = 'rgba(150,150,150,'+alpha+')';
			  ctx.lineWidth = link_line_width;
			  
			  ctx.beginPath();
			  ctx.moveTo(balls[i].x, balls[i].y);
			  ctx.lineTo(balls[j].x, balls[j].y);
			  ctx.stroke();
			  ctx.closePath();
		  }
	   }
   }
}

// calculate distance between two points
function getDisOf(b1, b2){
   var  delta_x = Math.abs(b1.x - b2.x),
	  delta_y = Math.abs(b1.y - b2.y);
   
   return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
}

// add balls if there a little balls
function addBallIfy(){
   if(balls.length < 20){
	   balls.push(getRandomBall());
   }
}

// Render
function render(){
   ctx.clearRect(0, 0, can_w, can_h);
   
   renderBalls();
   
   renderLines();
   
   updateBalls();
   
   addBallIfy();
   
   window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num){
   for(var i = 1; i <= num; i++){
	   balls.push({
		   x: randomSidePos(can_w),
		   y: randomSidePos(can_h),
		   vx: getRandomSpeed('top')[0],
		   vy: getRandomSpeed('top')[1],
		   r: R,
		   alpha: 1,
		   phase: randomNumFrom(0, 10)
	   });
   }
}
// Init Canvas
function initCanvas(){
   canvas.setAttribute('width', window.innerWidth);
   canvas.setAttribute('height', window.innerHeight);
   
   can_w = parseInt(canvas.getAttribute('width'));
   can_h = parseInt(canvas.getAttribute('height'));
}
window.addEventListener('resize', function(e){
   console.log('Window Resize...');
   initCanvas();
});

function goMovie(){
   initCanvas();
   initBalls(30);
   window.requestAnimationFrame(render);
}
goMovie();

// Mouse effect
canvas.addEventListener('mouseenter', function(){
   console.log('mouseenter');
   mouse_in = true;
   balls.push(mouse_ball);
});
canvas.addEventListener('mouseleave', function(){
   console.log('mouseleave');
   mouse_in = false;
   var new_balls = [];
   Array.prototype.forEach.call(balls, function(b){
	   if(!b.hasOwnProperty('type')){
		   new_balls.push(b);
	   }
   });
   balls = new_balls.slice(0);
});
canvas.addEventListener('mousemove', function(e){
   var e = e || window.event;
   mouse_ball.x = e.pageX;
   mouse_ball.y = e.pageY;
   // console.log(mouse_ball);
});

var fixmeTop = $('.nokey').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'static'
        });
    }

});