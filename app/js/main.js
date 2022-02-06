$(function name(params) {

    $('.filter-selects__sort').styler();
    // $('.filter-selects__sort').on('click', function () {
    //     $('.icon-ok').toggleClass('active');
    // });

    // const modalWindow = document.querySelector('.jq-selectbox__trigger-arrowr');
    // const buttonModal = document.querySelector('.jq-selectbox__select');
    // /*addEventListenerпрослушиватель событий по нажатию левой кнопкой мышы*/
    // buttonModal.addEventListener('click', () => {
    //     modalWindow.classList.add('active'); /*добовляем класс*/
    // });

    // Функция очистки класса
    // setTimeout(function () {
    //     $('input, select,filter-selects__sort').styler();
    // }, 100)

    // setTimeout(function () {
    //     $('filter-selects__sort').styler();
    // }, 100)

    // if (typeof WebFont != 'undefined') {
    //     WebFontConfig = {
    //         custom: {
    //             families: ['Montserrat']
    //         },
    //         active: function () {
    //             $('select, :checkbox, :radio').trigger('refresh');
    //         }
    //     };
    //     WebFont.load(WebFontConfig);
    // }



    // $('select,catalog-category__input').styler();



    // function cleanSelect(select) {
    //     return $(select).removeClass('icon-ok').removeClass('icon-error')
    // }

    // function formSelect() {

    //     var select = cleanSelect('.select-events');
    //     select.addClass(select.val() == '1' ? 'icon-ok' : 'icon-error');

    //     select.css({
    //         height: 'auto',
    //         overflow: 'hidden',
    //         zIndex: '40000'
    //     });

    //     select.on('mouseleave', function () {
    //         this.size = 1;
    //         cleanSelect(this).addClass($(this).val() == '1' ? 'icon-ok' : 'icon-error');
    //     });

    //     select.on('mouseover', function () {
    //         cleanSelect(this);
    //         this.size = $(this).find('option').length;
    //     });
    // }



    // После загрузки DOM - получаем список

    // $(function () {

    //     formSelect();

    // });



    /*	$(".menu a").on("click", function (event) {
    	    event.preventDefault();
    	    var id = $(this).attr('href'),
    	        top = $(id).offset().top;
    	    $('body,html').animate({
    	        scrollTop: top
    	    }, 1500);
    	});

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


});

// (function () {
//     if (typeof WebFont != 'undefined') {
//         WebFontConfig = {
//             custom: {
//                 families: ['Montserrat']
//             },
//             active: function () {
//                 $('select, :checkbox, :radio').trigger('refresh');
//             }
//         };
//         WebFont.load(WebFontConfig);
//     }
// })();