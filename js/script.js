$(document).ready(function(){
    
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 10000,
        fade: true,
        speed: 2000
        });
    $('.slider_second').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: false,
            autoplaySpeed: 10000,
       
            fade: true,
            speed: 2000
            });
    $('.slider_foto').slick({
                arrows: false,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 1000,
                infinite: false,
            
               
             
                responsive:[
                    {
                        breakpoint: 1590,
                        settings: {
                            slidesToShow:3
                        }
                    },
                    {
                        breakpoint: 1215,
                        settings: {
                            slidesToShow:2
                        }
                    
                    },
                    {
                        breakpoint: 825,
                        settings: {
                            slidesToShow:1
                        }
                    
                    }
                       
                ]
              
           
                });
    
});
