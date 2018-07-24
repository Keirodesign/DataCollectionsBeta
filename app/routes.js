const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
router.get('/9-1-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit

  if (whattosubmit === 'esf') {
    // Redirect to the relevant page
    res.redirect('/9-1-0/choose_file_to_upload_ESFA')
  } else {
    // If any other value (or is missing) render the page requested
   	res.render('9-1-0/choose_file_to_upload')
  }
})

module.exports = router
