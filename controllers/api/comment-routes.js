const router = require('express').Router();
const { Comment } = require('../../models');


router.get('/', (req, res) => {
    Comment.findAll({

    })
});

router.post('/', (req, res) => {
    Comment.create({

    })
});

router.delete('/', (req, res) => {
    Comment.destroy({
        
    })
});