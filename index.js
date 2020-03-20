const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//heroku links
// https://mysterious-meadow-04344.herokuapp.com/ -identifies the name of your application to heroku
// https://git.heroku.com/mysterious-meadow-04344.git - deployment target. git repo that we can push our locak server to
