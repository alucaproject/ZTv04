// *** document/window.ready() ***
$(document).ready(function(){

    // Fade in when page is ready.
    $("body").fadeIn( "slow" );

    // Fade Navbar color in when scrolling down.
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 50) {
            $('.bg-transparent').addClass('bg-dark');
            $('.bg-transparent').removeClass('bg-transparent');
        } else {
            $('.bg-dark').addClass('bg-transparent');
            $('.bg-dark').removeClass('bg-dark');
        }
    });

    // Active Navbar Button - Adds 'active' class to the navbar <li>
    $('.navbar li a').click(function(e){
        var $this = $(this);
        if(!$this.hasClass('active')){
            $('.active').removeClass('active');
            $this.addClass('active');
            // Hides navbar collapse when menu item clicked.
            $('.navbar-collapse').collapse('hide');
        }
    // e.preventDefault();
    });

    // Scroll Effect - Scrolls smoothly to the anchored <section> tag.
    $(function() {
        $('a[href*=\\#]').click(function(e) {
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 55}, 1000, 'linear');
            e.preventDefault();
        });
    });

    // Resize Cover height to video width
    var $videoCover = $('.videoCover');
    var $cover = $('.cover');
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var cssBreakPoint = 768;

    // Function Adjusts the Cover size
    // resize Cover height to video width
    function adjustCover( viewportX ) {
        if( viewportX > cssBreakPoint ){
            if( $videoCover.height() > viewportHeight ){
                $cover.css('height', "90vh" );
            }else{
                $cover.css('height', $videoCover.height() + "px" );
            }
        }else{
            $cover.css('height', "90vh" );
        }
    }

    // Adjust cover size when website loads.
    adjustCover( viewportWidth );
    // Asjust cover size when window is resized.
    $(window).resize(function(){
        var coverWidth = parseInt($cover.css('width'));
        adjustCover( coverWidth );
    });

}); // end $(document).ready
