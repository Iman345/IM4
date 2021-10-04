
 let myButton = document.getElementById('btnScroll');

 
 window.onscroll = function() {
 
   if(window.pageYOffset >= 400) {
   myButton.style.display = 'block';
   } else {
     myButton.style.display = 'none';
   }
 }

   myButton.addEventListener('click', function(){
     window.scrollTo({
       top:1,
       left:0,
       behavior:"smooth"
     });
   });
   