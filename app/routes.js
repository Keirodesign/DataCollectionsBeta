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

// --------------------------  Iteration 9-3-0  --------------------------------------------------------------

router.get('/9-3-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
    res.render('9-3-0/choose_file_to_upload')
  }
})

router.get('/9-3-0/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-0/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-0/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

// --------------------------  Iteration 9-3-1  --------------------------------------------------------------

router.get('/9-3-1/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-1/choose_file_to_upload')
      }
  }
})

router.get('/9-3-1/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-1/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-1/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

// --------------------------  Iteration 9-3-2  --------------------------------------------------------------

router.get('/9-3-2/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-2/choose_file_to_upload')
      }
  }
})

router.get('/9-3-2/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-2/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-2/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-2/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-2/eas_month_view', { 'monthselected': easmonthselected})
})

// --------------------------  Iteration 9-3-3  --------------------------------------------------------------

router.get('/9-3-3/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-3/choose_file_to_upload')
      }
  }
})

router.get('/9-3-3/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-3/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-3/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-3/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-3/eas_month_view', { 'monthselected': easmonthselected})
})
// --------------------------  Iteration 9-3-4  --------------------------------------------------------------

router.get('/9-3-4/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-4/choose_file_to_upload')
      }
  }
})

router.get('/9-3-4/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-4/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-4/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-4/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-4/eas_month_view', { 'monthselected': easmonthselected})
})


// --------------------------  Iteration 9-3-5  --------------------------------------------------------------

router.get('/9-3-5/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-5/choose_file_to_upload')
      }
  }
})

router.get('/9-3-5/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-5/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-5/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-5/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-5/eas_month_view', { 'monthselected': easmonthselected})
})


// --------------------------  Iteration 9-3-6  --------------------------------------------------------------

router.get('/9-3-6/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-6/choose_file_to_upload')
      }
  }
})

router.get('/9-3-6/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-6/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-6/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-6/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-6/eas_month_view', { 'monthselected': easmonthselected})
})

// --------------------------  Iteration 9-3-7  --------------------------------------------------------------

router.get('/9-3-7/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('manage_your_eas')
      } else {
        res.render('9-3-7/choose_file_to_upload')
      }
  }
})

router.get('/9-3-7/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('9-3-7/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  } else {
    res.render('9-3-7/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
})

router.get('/9-3-7/eas_month_view', function (req, res) {
  var easmonthselected = req.query.easmonthselected
  res.render('9-3-7/eas_month_view', { 'monthselected': easmonthselected})
})

// --------------------------  Iteration 9-3-8  --------------------------------------------------------------

router.get('/9-3-8/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('9-3-8/choose_file_to_upload')
      }
  }
})




// --------------------------  Iteration KitKat-9-4-0  --------------------------------------------------------------

router.get('/KitKat-9-4-0/choose_file_to_upload', function (req, res) {
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
        res.render('KitKat-9-4-0/choose_file_to_upload')
      }
  }
    }
})

router.get('/KitKat-9-4-0/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('KitKat-9-4-0/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  }
    else {
    if (whattosubmit === 'eas') {
    res.render('KitKat-9-4-0/your_files_uploading', { 'uploadingFile': 'EAS-12345678-8976-20180806-151209.CSV', 'continueTo': './theres_a_problem_eas.html' })
  } else {
    res.render('KitKat-9-4-0/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
    }
})

// --------------------------  Iteration KitKat-9-4-1  --------------------------------------------------------------

router.get('/KitKat-9-4-1/choose_file_to_upload', function (req, res) {
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
        res.render('KitKat-9-4-1/choose_file_to_upload')
      }
  }
    }
})

router.get('/KitKat-9-4-1/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('KitKat-9-4-1/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  }
    else {
    if (whattosubmit === 'eas') {
    res.render('KitKat-9-4-1/your_files_uploading', { 'uploadingFile': 'EAS-12345678-8976-20180806-151209.CSV', 'continueTo': './theres_a_problem_eas.html' })
  } else {
    res.render('KitKat-9-4-1/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
    }
})

// --------------------------  Iteration KitKat-9-4-2  --------------------------------------------------------------

router.get('/KitKat-9-4-2/choose_file_to_upload', function (req, res) {
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
        res.render('KitKat-9-4-2/choose_file_to_upload')
      }
  }
    }
})

router.get('/KitKat-9-4-2/your_files_uploading', function (req, res) {
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'esf') {
    res.render('KitKat-9-4-2/your_files_uploading', { 'uploadingFile': 'SUPPDATA-12345678-ESF-8976-20180806-151209.CSV', 'continueTo': './esf_data_submitted.html' })
  }
    else {
    if (whattosubmit === 'eas') {
    res.render('KitKat-9-4-2/your_files_uploading', { 'uploadingFile': 'EAS-12345678-8976-20180806-151209.CSV', 'continueTo': './theres_a_problem_eas.html' })
  } else {
    res.render('KitKat-9-4-2/your_files_uploading', { 'uploadingFile': 'ILR-12345678-1819-20180806-151209-02.XML', 'continueTo': './theres_a_problem.html' })
  }
    }
})

// --------------------------  Iteration Caramac 10-0-0  --------------------------------------------------------------

router.get('/10-0-0/choose_period', function (req, res) {
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
        res.render('10-0-0/choose_period')
      }
  }
    }
})

// --------------------------  Iteration 11-0-0  --------------------------------------------------------------

router.get('/11-0-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('return-period')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('11-0-0/choose_file_to_upload')
      }
  }
    }
})

// --------------------------  Iteration 11-1-0  --------------------------------------------------------------

router.get('/11-1-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('return-period')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('11-1-0/choose_file_to_upload')
      }
  }
    }
})

// --------------------------  Iteration 11-2-0  --------------------------------------------------------------

router.get('/11-2-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('return-period')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('11-2-0/choose_file_to_upload')
      }
  }
    }
})

// --------------------------  Iteration 11-3-0  --------------------------------------------------------------

router.get('/11-3-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('return-period')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('11-2-0/choose_file_to_upload')
      }
  }
    }
})

// --------------------------  Iteration 12-0-0  --------------------------------------------------------------

router.get('/12-0-0/choose_file_to_upload', function (req, res) {
  // Get the answer from the query string (eg. ?whattosubmit=ilr)
  var whattosubmit = req.query.whattosubmit
  if (whattosubmit === 'reports') {
        res.redirect('return-period')
      }
    else {
  if (whattosubmit === 'esf') {
    res.redirect('esf_choose_file_to_upload')
  } else {
      if (whattosubmit === 'eas') {
        res.redirect('eas_choose_file_to_upload')
      } else {
        res.render('12-0-0/choose_file_to_upload')
      }
  }
    }
});









module.exports = router
