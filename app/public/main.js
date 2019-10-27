$(document).ready(function() {
  /**
  * Alerts
  */
  setTimeout(function() {
    var alert = document.querySelector('.alert');
    
    if (alert)
    alert.className += ' alert-hidden';
   }, 3000);
    
    
    //   /**
    //    * MDE Editor
    //    */
    //   $('.mde').each(function() {
    //     var simplemde = new SimpleMDE({
    //       element: this,
    //       spellChecker: false,
    //       status: false,
    //     });
    //     // simplemde.render();
    //   });
    
    //   /**
    //    * Modals
    //    */
    //   $('[data-modal-open]').click(function(event) {
    //     event.preventDefault();
    
    //     $($(this).data('modal-open')).addClass('active');
    //   });
    
    //   $('[data-modal-close]').click(function(event) {
    //     event.preventDefault();
    
    //     $($(this).data('modal-close')).removeClass('active');
    //   });
    
    //   $(document).keydown(function(e) {
    //     e = e || window.event;
    //     if (e.keyCode == 27) {
    //       $('.modal').removeClass('active');
    //     }
    //   });
    // });
    
    /**
     *  @Animação Formulário
    */ 
    
    const btnForm = document.querySelector(".btn-form");
    const form = document.querySelector("form");
    btnForm.addEventListener("click", event => {
      event.preventDefault();
    });
    form.addEventListener("animationstart", event => {
      if (event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden";
      }
    });
    form.addEventListener("animationend", event => {
      if (event.animationName === "down") {
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
      }
    });
    
    /**
    * @Animação do Menu
    */
    
    var $els = $('.menu a, .menu header');
    var count = $els.length;
    var grouplength = Math.ceil(count / 3);
    var groupNumber = 0;
    var i = 1;
    $('.menu').css('--count', count + '');
    $els.each(function (j) {
      if (i > grouplength) {
        groupNumber++;
        i = 1;
      }
      $(this).attr('data-group', groupNumber);
      i++;
    });
    
    $('.menu footer button').on('click', function (e) {
      e.preventDefault();
      $els.each(function (j) {
        $(this).css('--top', $(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in', j * .1 + 's');
        $(this).css('--delay-out', (count - j) * .1 + 's');
      });
      $('.menu').toggleClass('closed');
      e.stopPropagation();
    });
    
    // run animation once at beginning for demo
    setTimeout(function () {
      $('.menu footer button').click();
      setTimeout(function () {
        $('.menu footer button').click();
      }, (count * 100) + 500);
    }, 1000);
