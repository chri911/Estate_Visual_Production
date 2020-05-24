$(function(){
  

    var options = {
        offset: 100
      }
    var header = new Headhesive('.header-top', options);
    
  
    let videos = document.getElementsByClassName("portfolio__item");
for (let video of videos) {
    video.addEventListener('mouseenter', function() {
        video.play();
    });
    video.addEventListener('mouseleave', function() {
        video.pause();
    });
}

  
  
  
  });