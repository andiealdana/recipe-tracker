module.exports = (app) => {
  // register endpoint
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello, ${req.body.email} ${req.body.username} ${req.body.password} Thanks for registering! Continue to track your recipes!`
    })
  })
}
