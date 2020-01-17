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
      text : text
    })
  })

  console.log(res)
}


(() => {
  const config = { baseUrl: 'js' };
  const dependencies = ['customActivity'];

  require(config, dependencies)
})();