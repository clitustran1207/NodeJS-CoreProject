exports.getIndex = (req, res) => {
    if(req.session.views){
        req.session.views++;
    } else {
        req.session.views = 1;
        res.send('Refresh Page!')
    }
}