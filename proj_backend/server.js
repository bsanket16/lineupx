import app from './app';

const port = process.env.PORT || 7000

//server
app.listen(port, () => {
    console.log(`App running at ${port}`)
})