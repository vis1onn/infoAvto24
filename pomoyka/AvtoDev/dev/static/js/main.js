$(document).ready(function () {
    svg4everybody({});

    (function dropDownMenu($){

        let $search = $(".search");

		$(".main-nav__item--repair").hover(function(){
			$(this).find(".repair-nav-wrapper").toggleClass('is-active');
		});
    	
        $(".mobile-menu").click(function(){
            $(this).toggleClass("is-open");
        })

        $search.click(function(){
            $(this).addClass('search-active');
            $(".main-nav-wrapper").addClass('search-active');
            $(".cancel-wrapper").find(".icon-cancel").addClass('search-active');
            $(".search__input").focus();
        });

       $(".search__input").focus(function(){
            $search.find(".icon-search").addClass('search-active');
        }).blur(function(){
            $search.find(".icon-search").removeClass('search-active');
        })

        $(document).click(function(event){
            let header = $("header");
            let iconCancel = $(".icon-cancel");
            if(!header.is(event.target) && header.has(event.target).length === 0 || iconCancel.is(event.target) || iconCancel.children().is(event.target)){
                $search.removeClass('search-active');
                $(".main-nav-wrapper").removeClass('search-active').addClass('is-animated');
                $(".cancel-wrapper").find(".icon-cancel").removeClass('search-active');
                $(".search__input").val("").blur();
            }
        })

    })(jQuery);

    (function maskInput($){

		$(".advice-form__inpt--tel").mask('(000) 000-00-00');

    })(jQuery);

    (function tabCategories($){
    	$(".categories-nav__item").on("click", function(){
    		$(this).addClass('is-active').siblings().removeClass('is-active')
    		.closest('.container').find(".tab-item").removeClass('is-active').eq($(this).index()).addClass('is-active');
    	});

        setInterval(function(){
            var elemList = $(".categories-nav__item");
            var elemActive = $(".categories-nav__item.is-active");
            let updateClass = (elem) => {
                elem.addClass('is-active').siblings().removeClass('is-active');
            };

            if(elemActive.index() === elemList.eq(3).index()){
                updateClass(elemList.eq(0));
            } else{
                updateClass(elemActive.next());
            }
                elemActive = $(".categories-nav__item.is-active");
                $(".tab-item").removeClass('is-active').eq(elemActive.index()).addClass('is-active');
        }, 10000)
    })(jQuery);

    var originalBGplaypen = $(".main-button").css("background-color"),
                x, y, xy, bgWebKit, bgMoz,
                lightColor = "rgba(255,80,0,0.9)",
                gradientSize = 120;

        $('.main-button').mousemove(function(event) {

            x  = event.pageX - this.offsetLeft;
            y  = event.pageY - this.offsetTop;
            xy = x + " " + y;
               
            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
            bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

            $(this)
                .css({ background: bgWebKit })
                .css({ background: bgMoz });

        }).mouseleave(function() {
            $(this).css({ background: originalBGplaypen });
        });
});