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
    

      

