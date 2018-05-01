// call to api
fetch('http://localhost:3000/api/tweets')
.then(res => {
  res.json().then(data => {
    data.forEach(tweet => {
      document.querySelector('#tweets-container').appendChild(`<div>${tweet.text}</div>`)
    })
  })
})
// mete resultados en tweets-container
