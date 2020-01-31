let aviableLangs = ['english', 'russian', 'italian']
let notifications = []
let langSelected = ''

$(function () {
  console.log(localStorage.getItem('deName'))

  let de = localStorage.getItem('deName')

  if(de) $("#save").hide()
  else $("#edit").hide()
  $('#data-extension').val(de ? localStorage.getItem('deName') : '')
  $("#data-extension").prop("disabled", de)
  $('#select-element').hide()
  $('#notification').hide()
  $('#placeholder-notification').show()

  appendLanguages()

  aviableLangs = aviableLangs.filter(e => !notifications.some(n => e === n.language))
})

async function handleClick() {
  const title = document.getElementById("title").value
  const text = document.getElementById("text").value
  console.log('title: ', title)
  console.log('text: ', text)
  console.log('QUIIIII')
  const res = await fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      text: text
    })
  })

  console.log(res)
}

function saveDeName() {
  if($("#data-extension").val()) {
    localStorage.setItem('deName', $('#data-extension').val())
    $("#data-extension").prop("disabled", true)
    $("#save").hide()
    $("#edit").show()
  }
}

function editDeName() {
  $("#data-extension").prop("disabled", false)
  $("#save").show()
  $("#edit").hide()
}

(() => {
  const config = { baseUrl: 'js' }
  const dependencies = ['customActivity']

  require(config, dependencies)
})()