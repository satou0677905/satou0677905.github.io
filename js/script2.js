//new LuminousGallery(document.querySelectorAll(".grid-gallary"));
new LuminousGallery(document.querySelectorAll('.grid-gallary'),{},{
  caption:function(trigger){
    return trigger.querySelector('img').getAttribute('alt');
  }
});

AOS.init({duration:2500});
