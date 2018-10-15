const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


// --------------------------  Iteration Caramac 10-0-0  -------------------------------------------------------------- 

router.get('/10-0-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('reports')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('10-0-0/choose_file_to_upload')
      }
  }
    }
})

module.exports = router
