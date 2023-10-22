const express = require("express");
const {getUsersFriends, getUsersNews} = require("./routesFunction");
const router = express.Router();

router.get('/',(req, res) => {
    res.render('startPage');
});

router.get('/admin',(req, res) => {
    const allUsersStorage = require("../allUsers.json");
    res.render('usersPage', {users: allUsersStorage});
});

router.get('/admin/chats', (req, res) => {
    const id = req.body;
    const respo = getUsersFriends(id);
    console.log(respo);
    res.json;
})

router.get('/admin/friends/:id',(req, res) => {
    const id = parseInt(req.params.id);
    res.render('usersFriends', {users: getUsersFriends(id)});
});

router.get('/admin/news/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    res.render('usersNews', { usersNews: getUsersNews(id)})
});

// router.get('/admin/chats/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     res.render('usersChats', {users: getUsersFriends(id)});
// })

module.exports = router;