jQuery(document).ready(function($) {

    var App = {

        initPlugins: function() {

            // Panel snap
            var options = {
                directionThreshold: 50,
                slideSpeed: 200
            };
            $('body').panelSnap(options);

            // masonry
            var containerContent = document.querySelector('.item-list');
            var columnWidthValue = 30;
            // function setColumnWidth() {
            //     if ($(window).width() >= 1200) {
            //         columnWidthValue = 30;
            //     } else {
            //         columnWidthValue = 0;
            //     }
            //     console.log(columnWidthValue);
            // }
            // setColumnWidth();
            var msnryContent = new Masonry(containerContent, {
                columnWidth: columnWidthValue,
                itemSelector: '.item'
            });
            // $(window).resize(function() {
            //     setColumnWidth();
            //     msnryContent.reloadItems();
            // });
        },

        pos: function() {
            // Set bubbles vertical pos
            $('.bubble-container').css('top', $(window).height()/2 - 20 + 'px');
        },

        bubbleOpacity: function(){
            if($(window).scrollTop() <= 2){
                $('.bubble').css('opacity','0.5');
                $('#bubble1, .bubble-container').css('opacity','1');
            }
            if($(window).scrollTop() >= $(window).height()-2 && $(window).scrollTop() <= $(window).height()+2){
                $('.bubble').css('opacity','0.5');
                $('#bubble2, .bubble-container').css('opacity','1');
            }
            if($(window).scrollTop() >= $(window).height()*2-2 && $(window).scrollTop() <= $(window).height()*2+2){
                $('.bubble').css('opacity','0.5');
                $('#bubble3, .bubble-container').css('opacity','1');
            }
            if($(window).scrollTop() >= $(window).height()*3){
                $('.bubble, .bubble-container').css('opacity','0');
            }
        },

        events: function() {

            // Resize events
            $(window).resize(function() {
                App.pos();
            });

            // Scroll events
            $(window).scroll(function(){
                App.bubbleOpacity();
            });

            // Slide on click
            $('#bubble1').click(function(){
                $('html, body').animate({scrollTop:0}, 300);
            });
            $('#bubble2').click(function(){
                $('html, body').animate({scrollTop:$(window).height()}, 300);
            });
            $('#bubble3').click(function(){
                $('html, body').animate({scrollTop:$(window).height()*2}, 300);
            });
        },

        init: function() {
            this.initPlugins();
            this.pos();
            this.bubbleOpacity();
            this.events();
        }

    };

    App.init();

});
