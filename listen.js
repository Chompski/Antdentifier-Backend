const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, function (err) {
    if (err) return console.log(err);
      console.log(`App listening on port ${port}`);
  });