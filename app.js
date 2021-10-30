const m2m = require('minutes-to-midnight')
const app = require('express')()
let M = new m2m()
const port = 3026

app.get('/', (req, res) => {
  M.get()
  .then(till => {
    //console.log(till)
    res.send(String(till))
  })
})

app.listen(port, err => {
  console.log('Listening on ' + port)
})
