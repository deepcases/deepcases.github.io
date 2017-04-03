(function() {
    'use strict';

    let go_top = document.getElementsByClassName('go_top')[0],
        utils = {
            goTop: function() {
                window.scrollTo(0, 0);
            },
            getRandomIntInclusive: function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        },
        last_speed = 0,
        binary = '1 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 0 0 0 0 1 0 1 1 0 0 0 0 1 1 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 0 0 0 0 1 0 1 1 0 0 0 0 1 1 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 0 0 0 0 1 0 1 1 0 0 0 0 1 1 1 0 1 0 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 0 0 0 0 1 0 1 1 0 0 0 0 1 ',
        background = document.querySelector('.screen_1 .background');

    //Events

    go_top.addEventListener('click', () => utils.goTop());


    window.addEventListener("scroll", () => {
        if (window.scrollY >= 800) {
            go_top.style.visibility = 'visible';
            go_top.style.opacity = 1;
        } else {
            go_top.style.visibility = 'hidden';
            go_top.style.opacity = 0;
        }
    });

    for (let i = 0; i <= 35; i++) {
        let element = document.createElement('div'),
            speed = 0;

        do {
            speed = utils.getRandomIntInclusive(1, 6);
        } while (speed === last_speed)

        element.className = 'speed_' + speed;
        last_speed = speed;
        element.textContent = binary;
        element.setAttribute('data-allowcss3support', 'false');
        background.appendChild(element);
    }

    $('.speed_1').marquee({
        startVisible: true,
        gap: 0,
        duplicated: true,
        duration: 20000
    });

    $('.speed_2').marquee({
        startVisible: true,
        gap: 0,
        duplicated: true,
        direction: 'right',
        duration: 25000
    });

    $('.speed_3').marquee({
        startVisible: true,
        gap: 0,
        duplicated: true,
        duration: 50000
    });

    $('.speed_4').marquee({
        startVisible: true,
        gap: 0,
        duplicated: true,
        duration: 30000
    });

    $('.speed_5').marquee({
        startVisible: true,
        gap: 0,
        direction: "right",
        duplicated: true,
        duration: 17500
    });

    $('.speed_6').marquee({
        startVisible: true,
        gap: 0,
        duplicated: true,
        duration: 35000
    });
    
      document.getElementsByClassName('submit')[0].addEventListener('click', function(){
          var name = document.getElementsByClassName('name_input')[0].value,
              email = document.getElementsByClassName('email_input')[0].value;
          
          emailjs.init(" user_6pcrZEYlzy6a4T6lfVOf9");
          
          emailjs.send("gmail","empty_example_tamplate",{
              name: name, 
              email: email
          });
      });

})();
