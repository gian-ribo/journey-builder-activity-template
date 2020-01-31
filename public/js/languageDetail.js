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
    langSelected = $('#select-language').val()
    notifications.push({
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
    notifications = notifications.map(n => {
      if (n.language === langSelected.language) {
        n = {
          ...n,
          title: $('#title').val(),
          text: $('#text').val()
        }
      }

      return n
    })
  }
}