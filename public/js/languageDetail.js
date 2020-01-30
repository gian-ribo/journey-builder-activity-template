function toggleNotification(condition) {
  $('#title').prop("disabled", condition)
  $('#text').prop("disabled", condition)
}

function editNotification() {
  $('#editNotification').hide()
  $('#saveNotification').show()

  toggleNotification(false)
}

function saveNotification() {
  $('#editNotification').show()
  $('#saveNotification').hide()

  toggleNotification(true)
  if (!langSelected) {
    languages.push({
      language: $('#select-language').val(),
      title: $('#title').val(),
      text: $('#text').val()
    })

    $('#select-element').hide()
    aviableLangs = aviableLangs.filter(e => e !== $('#select-language').val())

    appendLanguages()
    if (aviableLangs.length > 0) {
      $('#add-button').show()
    } else {
      $('#add-button').hide()
    }
  } else {
    languages = languages.map(e => {
      if (e.language === langSelected.language) {
        e = {
          ...e,
          title: $('#title').val(),
          text: $('#text').val()
        }
      }

      return e
    })
  }
}