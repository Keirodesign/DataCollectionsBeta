const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// --------------------------  Iteration 9-1-5  -------------------------------------------------------------- 

// Add your routes here - above the module.exports line
router.get('/9-1-5/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
  	res.redirect('esf_choose_file_to_upload')
  } else {
  	res.render('9-1-5/choose_file_to_upload')
  } 
})

router.get('/9-1-5/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-1-5/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
  	res.render('9-1-5/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

// --------------------------  Iteration 9-2-0  -------------------------------------------------------------- 

// Add your routes here - above the module.exports line
router.get('/9-2-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
  	res.redirect('esf_choose_file_to_upload')
  } else {
  	res.render('9-2-0/choose_file_to_upload')
  } 
})

router.get('/9-2-0/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-2-0/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
  	res.render('9-2-0/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

// --------------------------  Iteration 9-2-5  -------------------------------------------------------------- 

router.get('/9-2-5/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
  	res.redirect('esf_choose_file_to_upload')
  } else {
  	res.render('9-2-5/choose_file_to_upload')
  } 
})

router.get('/9-2-5/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-2-5/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
  	res.render('9-2-5/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})


module.exports = router
