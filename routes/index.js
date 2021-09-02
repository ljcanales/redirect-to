const express = require('express');
const router = express.Router();
const redirectLinks =  require('../redirect-links.json');


router.get('/:linkName', (req, res) => {
    const { linkName } = req.params;
    const redirection = redirectLinks[linkName]
    return res.writeHead(302, {Location: redirection}).end();
});

module.exports = router;