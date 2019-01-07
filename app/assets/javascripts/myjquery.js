$('.govuk-button').click(function() {
   if($('#fix-errors').is(':checked')) { location.href='/12-0-0/choose_file_to_upload'; }
	 else if ($('#submit-file').is(':checked')) { location.href='/12-0-0/ilr_data_submitted'; }
});
