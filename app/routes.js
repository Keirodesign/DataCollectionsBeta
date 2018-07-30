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
  	res.redirect('esf_choose_file_to_upload')
  } else {
  	res.render('9-1-0/choose_file_to_upload')
  } 
})

router.get('/9-1-0/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-1-0/your_files_uploading', { 'uploadingFile': 'ESF-file-submission-Marj-2018.csv', 'continueTo': './esf_data_submitted.html' })
  } else {
  	res.render('9-1-0/your_files_uploading', { 'uploadingFile': 'ILR-file-submission-March-2018.xml', 'continueTo': './theres_a_problem.html' })
  }
})

module.exports = router
