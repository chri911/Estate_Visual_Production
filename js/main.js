$(function(){
  

    var options = {
        offset: 100
      }
    var header = new Headhesive('.header-top', options);
    
  
    vid = document.getElementById('v0'); 
 
    vid.addEventListener('mouseenter', function() {
      vid.play();
    });
    
    vid.addEventListener('mouseleave', function() {
      vid.pause();
    });
    
  
  
  
  });