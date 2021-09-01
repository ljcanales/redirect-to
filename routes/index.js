const express = require('express');
const router = express.Router();
const redirectLinks =  require('../redirect-links.json');


router.get('/:linkName', (req, res) => {
    const { linkName } = req.params;
    return res.redirect(redirectLinks[linkName]);
});
router.get('/', (req, res) => {
    return res.send("Hello World");
});

module.exports = router;