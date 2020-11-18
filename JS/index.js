$(document).ready(function(){
    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyAdd");
        }else{
            $(".sticky").removeClass("stickyAdd");
        }
    })
    let typed = new Typed(".element", {
        strings: ["Alamin Mir", "A Student", "A Programmer", "A Web Developer"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    })
    // progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
          let p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute('style', 'width:80%;transition:1s all');
    p[1].setAttribute('style', 'width:70%;transition:1.5s all');
    p[2].setAttribute('style', 'width:75%;transition:1.7s all');
    p[3].setAttribute('style', 'width:60%;transition:2s all');
    p[04].setAttribute('style', 'width:50%;transition:2.3s all');
        }
        ,offset:'90%'
      })

    

})