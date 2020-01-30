function appendLanguages() {
  $('#langauge-container').empty()
  let languageHTML = `
    <div class="slds-grid">
      <div style="width:100%">
        <div>
          <button id="add-button" onclick="addLanguage()" class="slds-button slds-button_icon slds-col" title="Settings">
            <img src="asset/icons/utility/add_60.png" style="width:50%">
          </button>
        </div>
      </div>
    </div>`
  languages.map((e, i) => {
    if (i === 0) languageHTML = ''
    if (i + 1 === languages.length) {
      languageHTML += `
      <div class="slds-grid" style="margin-top:2em;">
        <div>
          <button style="height: 42%" id="remove-button" onclick="deleteNotification()"
            class="slds-button slds-button_icon slds-col slds-size-1-of-3" title="Settings">
            <img src="asset/icons/utility/delete_60.png" style="width: 50%;">
          </button>
        </div>
        <div style="width:100%">
          <button id="${e.language}" style="width:100%" onclick="showNotification(this.id)" class="slds-button slds-button_neutral slds-col slds-size_2-of-3">
            <a href="javascript:void(0)">${e.language}</a>
          </button>
          <div>
            <button id="add-button" onclick="addLanguage()" class="slds-button slds-button_icon slds-col" title="Settings"
              style="margin-top: 8px">
              <img src="asset/icons/utility/add_60.png" style="width:50%">
            </button>
          </div>
        </div>
      </div>`
    } else {
      languageHTML += `
      <div class="slds-grid" style="margin-top:2em;">
        <div>
          <button style="height: 100%;" id="remove-button" onclick="deleteNotification()"
            class="slds-button slds-button_icon slds-col slds-size-1-of-3" title="Settings">
            <img src="asset/icons/utility/delete_60.png" style="width: 50%;">
          </button>
        </div>
        <div style="width:100%">
          <button id="${e.language}" style="width:100%" onclick="showNotification(this.id)" class="slds-button slds-button_neutral slds-col slds-size_2-of-3">
            <a href="javascript:void(0)">${e.language}</a>
          </button>
        </div>
      </div>`
    }
  })

  $('#langauge-container').append(languageHTML)
  $('#select-element').hide()
}