const usersFriendsStorage = require("../usersFriends.json");
const allUsersStorage = require("../allUsers.json");
const newsStorage = require("../news.json");
const usersNews = require("../usersNews.json");

findIndex = function(id, storage) {
    for (let i = 0; i < storage.length; i++) {
        if (storage[i]._id === id)
            return i
    }
    return -1;
}

function toDate(data) {
    const string = data.split('.');
    let date = string[2];
    date += '-';
    date += string[1];
    date += '-';
    date += string[0];
    return date;
}

function sortData(first, second) {
    const dateComparison = toDate(second.date).localeCompare(toDate(first.date));
    if (dateComparison !== 0) {
        return dateComparison;
    }
    return second.time.localeCompare(first.time);
}

const sortDate = (first, second) =>
    toDate(second.date) - toDate(first.date);

const sortTime = (first, second) =>
    second.time.localeCompare(first.time);


exports.getUsersFriends = function(id) {
    console.log(id);
    const viewUserIndex = findIndex(id, usersFriendsStorage);
    const friendsIDs = usersFriendsStorage[viewUserIndex].friendsID;
    const friends = [];
    for (let i = 0; i < friendsIDs.length; i++) {
        const currentUserIndex = findIndex(friendsIDs[i], allUsersStorage);
        friends.push(allUsersStorage[currentUserIndex]);
    }
    return friends;
}

exports.getUsersNews = function(id) {
    const viewUserIndex = findIndex(id, usersFriendsStorage);
    const friendsIDs = usersFriendsStorage[viewUserIndex].friendsID;
    const friendsNews = [];
    for (let i = 0; i < friendsIDs.length; i++) {
        const currentUserIndexAll = findIndex(friendsIDs[i], allUsersStorage);
        const currentUserIndexNews = findIndex(friendsIDs[i], usersNews);
        const friendsNewsIds = usersNews[currentUserIndexNews].newsID;
        for (let j = 0; j < friendsNewsIds.length; j++) {
            const currentNewsIndex = findIndex(friendsNewsIds[j], newsStorage);
            const newsTable = {
                "FIO": allUsersStorage[currentUserIndexAll].FIO,
                ...newsStorage[currentNewsIndex]
            };
            friendsNews.push(newsTable);
        }
    }
    friendsNews.sort(sortData);
    return (friendsNews);
}

