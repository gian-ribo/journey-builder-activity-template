function addLanguage() {
  langSelected = null
  picklistLang = ''

  $('#select-language').empty()
  aviableLangs.map(e => {
    $('#select-language').append(`<option value="${e}">${e}</option>`)
  })

  $('#select-element').show()
  $('#add-button').hide()

  $('#placeholder-notification').hide()
  $('#notification').show()
  $('#title').val('').prop("disabled", false)
  $('#text').val('').prop("disabled", false)
  $('#saveNotification').show()
  $('#editNotification').hide()
}

function showNotification(id) {
  $('#select-element').hide()
  if (aviableLangs.length > 0) $('#add-button').show()
  $('#placeholder-notification').hide()
  $('#notification').show()

  langSelected = notifications.find(n => n.language === id)

  $('#title').val(langSelected.title).prop("disabled", true)
  $('#text').val(langSelected.text).prop("disabled", true)
  $('#saveNotification').hide()
  $('#editNotification').show()
}

function hideNotification() {
  $('#placeholder-notification').show()
  $('#notification').hide()
}

function deleteNotification(id) {
  langSelected = ''

  let langToDelete = id.split('-')[1]
  notifications = notifications.filter(n => n.language !== langToDelete)
  aviableLangs.push(langToDelete)

  appendLanguages()
  hideNotification()
  $('#add-button').show()
}