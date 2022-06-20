    var elem = document.getElementById('awards_slider');
    if(elem.addEventListener){
      if('onwheel' in document){
        elem.addEventListener("wheel", onWheel);
      }else if('onmousewheel' in document){
        elem.addEventListener("mousewheel", onWheel);
      }else{
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    }else{
      elem.attachEvent("onmousewheel", onWheel);
    };
    function onWheel(e) {
      e = e || window.event;
      var delta = e.deltaY || e.detail || e.wheelDelta;
      if (e.deltaY > 0) {
        $('.awards_slider').trigger('next.owl.carousel');
         } else {
        $('.awards_slider').trigger('prev.owl.carousel');
        };
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };