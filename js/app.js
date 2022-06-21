$(document).ready(function() {

    let screenWidth = $(window).width();

    $(".js-market-slider").owlCarousel({

        items: 3,

        loop: true,

        dots: false,

        nav: true,

        navElement: 'div',

        navText: ['<div class="play-btn"><div class="play-btn__wrap"><div class="play-btn__outer"><div class="play-btn__outer-circle"><img src="./img/style/icons/play_btn_outer.svg" alt=""></div></div><div class="play-btn__inner"><div class="play-btn__inner-circle"><img src="./img/style/icons/play_btn_inner.svg" alt=""></div></div><div class="play-btn__center"><img src="./img/style/icons/play_btn_center.svg" alt=""></div></div></div>','<div class="play-btn"><div class="play-btn__wrap"><div class="play-btn__outer"><div class="play-btn__outer-circle"><img src="./img/style/icons/play_btn_outer.svg" alt=""></div></div><div class="play-btn__inner"><div class="play-btn__inner-circle"><img src="./img/style/icons/play_btn_inner.svg" alt=""></div></div><div class="play-btn__center"><img src="./img/style/icons/play_btn_center.svg" alt=""></div></div></div>'],

        navClass: ['owl-arrow owl-prev', 'owl-arrow owl-next'],

        responsive: {

            0: {

                items: 1,

            },

            1024: {

                items: 2,

            },

            1440: {

                items: 3,

            },

        }

    });



    $(".js-select").styler({});



    $(".js-menu-btn").on("click", function(e) {

        $(this).toggleClass("active");

        $("body").toggleClass("over");

        $(".js-menu").toggleClass("active");

    });



    if(screenWidth < 768) {

        $(".js-will-slide").addClass("owl-carousel");

        $(".js-will-slide").owlCarousel({

            items: 1,

            loop: true,

            dots: false,

            nav: true,

            navElement: 'div',

            navText: ['<div class="play-btn"><div class="play-btn__wrap"><div class="play-btn__outer"><div class="play-btn__outer-circle"><img src="./img/style/icons/play_btn_outer.svg" alt=""></div></div><div class="play-btn__inner"><div class="play-btn__inner-circle"><img src="./img/style/icons/play_btn_inner.svg" alt=""></div></div><div class="play-btn__center"><img src="./img/style/icons/play_btn_center.svg" alt=""></div></div></div>','<div class="play-btn"><div class="play-btn__wrap"><div class="play-btn__outer"><div class="play-btn__outer-circle"><img src="./img/style/icons/play_btn_outer.svg" alt=""></div></div><div class="play-btn__inner"><div class="play-btn__inner-circle"><img src="./img/style/icons/play_btn_inner.svg" alt=""></div></div><div class="play-btn__center"><img src="./img/style/icons/play_btn_center.svg" alt=""></div></div></div>'],

            navClass: ['owl-arrow owl-prev', 'owl-arrow owl-next'],

        });

    }



    AOS.init({

        once: true,

        offset: 520,

    });

});



let roadAnim;

let roads = document.querySelectorAll(".js-road-item");



roads.forEach(function(element){

    element.addEventListener("mouseenter", function( event ) {

        roadAnim = element.dataset.road;

        document.querySelector(".js-road-anim").classList.add(roadAnim);

    });

    element.addEventListener("mouseleave", function( event ) {

        // roadAnim = element.dataset.road;

        document.querySelector(".js-road-anim").classList.remove(roadAnim);

    });

});



let anchors = document.querySelectorAll(".js-anchor");

let anchor;



$(".js-anchor").click(function(e){

    e.preventDefault();

    $(".js-menu-btn").removeClass("active");

    $("body").removeClass("over");

    $(".js-menu").removeClass("active");

    var navTo = $(this).attr("data-target"),

        navElemTop = $(navTo).offset().top;

    $('body,html').animate({scrollTop: navElemTop}, 700);

});