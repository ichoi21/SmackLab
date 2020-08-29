const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;
const path = require("path");
// require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


io.on("connection", socket=>{
  socket.on('message', ({name, message})=>{
    io.emit("message", {name, message});
  });
});

http.listen(4000,()=>{
  console.log("Listening at port 4000");
})
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
