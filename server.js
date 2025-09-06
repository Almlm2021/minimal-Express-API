const app= require("./app");
const port = 3000;

app.use("/api", require("./routes/posts"));


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});


