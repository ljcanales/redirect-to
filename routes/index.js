const express = require('express');
const router = express.Router();
const redirectLinks =  require('../redirect-links.json');


router.get('/:linkName', (req, res) => {
    const { linkName } = req.params;
    return res.redirect(redirectLinks[linkName]);
});

module.exports = router;