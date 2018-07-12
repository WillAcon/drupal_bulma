/**
 * @file
 * Bulma scripts for theme.
 */
(function ($) {
  'use strict';

  Drupal.behaviors.drupal_bulma = {
    attach: function (context) {
        //OPEN MODAL
         $(".para-modal .open-modal").click(function(){
            $(this).parent(this).find('.modal').addClass('is-active');
         });
         $(".para-modal .modal-background").click(function(){
            $(".modal").removeClass('is-active');
         });
         $(".para-modal .modal-close").click(function(){
            $(".modal").removeClass('is-active');
         });
         //END OPEN MODAL

         
    }
  };

})(jQuery);
