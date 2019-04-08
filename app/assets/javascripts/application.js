/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


//Prototype hacks

//Quick JS go back - users need to be able to go back to previous page

function goBack() {
    window.history.back();
}


$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});

$('.no-thank-you').click(function(){
  $('.feedback-wrapper').hide();
});


$('#continue').click(function() {

   if($('#what-to-submit-1').is(':checked')) { location.href='choose_period'; }
   if($('#what-to-submit-2').is(':checked')) { location.href='eas_choose_file_to_upload'; }
	 if($('#what-to-submit-3').is(':checked')) { location.href='choose_esf'; }
   else if($('#what-to-submit-4').is(':checked')) { location.href='return-period'; }

});
