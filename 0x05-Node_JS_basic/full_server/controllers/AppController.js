class AppController {
    static getHomepage(req, res) {
        res.send('Hello Holberton School!');
        res.status(200);
        res.end();
    }
}