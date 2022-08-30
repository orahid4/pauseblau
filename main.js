const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('is-open');
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
})


window.addEventListener('scroll', function(event){
    var scroll = this.scrollY;

    console.log(scroll);


    if(scroll > 200 && scroll < 500) {
        document.getElementById('welcome').className = 'newclass';
        document.getElementById('title').className = '';

        

        } else if (scroll > 500 && scroll < 1500 ) {
            document.getElementById('welcome').className = '';
            document.getElementById('title').className = 'newclass';
            document.getElementById('sections').className = ''; 




        } else if (scroll > 1600 && scroll < 2400){
            document.getElementById('title').className = '';
            document.getElementById('sections').className = 'newclass'; 
            document.getElementById('magazin').className = ''; 



        }
         else if (scroll > 2400 && scroll < 3000) {
            document.getElementById('sections').className = ''; 
            document.getElementById('magazin').className = 'newclass'; 
            document.getElementById('h3').className = 'newclass'; 



         }else if (scroll ){

     
        } else {
            document.getElementById('welcome').className = '';
            document.getElementById('title').className = '';
            document.getElementById('sections').className = ''; 

        }
    });







 
