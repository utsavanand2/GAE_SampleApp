const http = require('http')

const port = process.env.PORT || 80

http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello From App Engine")

}).listen(port, () => {
    console.log(`Listening on port ${port}`)
})