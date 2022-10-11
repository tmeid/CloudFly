    // slide slick
    $(document).ready(function(){
        $('.slide').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            
        });
    });


    let btn = document.querySelector('.close-btn');
        // mobile menu
        nav = document.querySelector('.mobile-menu');
        hamburger = document.querySelector('.hamburger-btn'),
        arrowDownBtns = document.querySelectorAll('.mobile-menu .arrow-down'),
        mask = document.querySelector('.mask');

        // click the hamburger btn to opern mobile menu
        hamburger.addEventListener('click', function(event){
            event.stopPropagation();
            nav.style.left = '0';
            mask.style.display = 'block';
            // lock body
            window.document.body.classList.add("fixed-position");
            
        });


        nav.addEventListener('click', function(event){
            event.stopPropagation();
            btn.onclick = function(){
                nav.style.left = '-120%';
                mask.style.display = 'none';
                window.document.body.classList.remove('fixed-position');
            }
            
        });

        document.body.addEventListener('click', function(){
            if(nav.style.left = '0'){
                nav.style.left = '-120%';
                mask.style.display = 'none';
                window.document.body.classList.remove('fixed-position');
            }     
        });

        // toggle arrow down
        arrowDownBtns.forEach(btn => {
            let liEle = btn.parentNode.parentNode;
            liEle.addEventListener('click', function(){
                let subUl = btn.parentNode.nextElementSibling;
                subUl.classList.toggle('toggle-open');
                btn.classList.toggle('toggle-rotate');
            })
        });

