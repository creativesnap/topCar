
$(function () {

    /* Navbar Search Icon (When Click) */
    $(".search-icon").click(function () {
        $(".search-icon input").css("display", "block")
        $(".search-icon svg").css({
            "position": "absolute",
            "transform": "translate(50% , -50%)",
            "color": "A2A1A1"
        })
    });


    /* Navbar Fixed When Scroll */
    $(window).scroll(function () {
        if($(window).scrollTop() > 20) {
            $(".custom-navbar").removeClass("light-nav")
            // 
        }else {
            $(".custom-navbar").addClass("light-nav")
        }
    });



    /* Fliter Slide Up When  Click */
    $(".filter-title").click(function() {

        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
            $(this).find(".icon").html(`<i class="fas fa-minus"></i>`)
            // $(this).find("svg , i").removeClass("fa-minus")
            
        }else {
            $(this).find(".icon").html(`<i class="fas fa-plus"></i>`)
            
        }
    })
})




/* Swiper */

const swiper = new Swiper('.header-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    effect: "fade",

    autoplay: {
        delay: 1800,
    },
});
const swiper2 = new Swiper('.swiper-brand', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 1000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    slidesPerView: 6,
    spaceBetween: 30,

    breakpoints: {
        0 : {
            slidesPerView: 2,
          spaceBetween: 10,
        } ,
        350: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },

});
const swiper3 = new Swiper('.rental_car_swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 1000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },


    slidesPerView: 1,
    spaceBetween: 0,

  

});
const swiper4 = new Swiper('.rental_car_swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 1000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },


    slidesPerView: 3,
    spaceBetween: 0,

    breakpoints: {
        0 : {
            slidesPerView: 1,
          spaceBetween: 10,
        } ,
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },

});





