module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('tweetlist', {})
  })
  app.get('/addtweet', (req, res) => {
    res.render('addtweet', {})
  })
  app.get('/login', (req, res) => {
    res.render('login', {})
  })
  app.get('/signup', (req, res) => {
    res.render('signup', {})
  })
}
