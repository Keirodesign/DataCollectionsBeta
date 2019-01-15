// to add a URL to the button when any radio button is select //
$('.govuk-button').click(function() {
   if($('#fix-errors').is(':checked')) { location.href='/12-0-0/choose_file_to_upload'; }
	 else if ($('#submit-file').is(':checked')) { location.href='/12-0-0/ilr_data_submitted'; }

   else if(!$('.govuk-radios__item input').is(':checked')) {
     $('#formError').addClass('govuk-form-group--error');
     $('.govuk-error-summary').removeClass('hide');
     $('.govuk-error-message').removeClass('hide');
   }
});

$('.govuk-radios__item input').change(function(){
  $('#formError').removeClass('govuk-form-group--error');
  $('.govuk-error-summary').addClass('hide');
  $('.govuk-error-message').addClass('hide');
});
