
export default {
    getUser,
    signUp,
    addMove,
}

var gUsers = _createUsers()
const loggedInUser = getUser()


function _createUsers() {
    var users = loadFromStorage('users')
    if (!users) {
        users = [
            {
                _id: _makeId(),
                name: "Shuki",
                coins: 100,
                moves: []
            },
            {
                _id: _makeId(),
                name: "Shula Mualem",
                coins: 100,
                moves: []
            },
            {
                _id: _makeId(),
                name: "Zigmond",
                coins: 100,
                moves: []
            },
            {
                _id: _makeId(),
                name: "Mulu Mendi",
                coins: 100,
                moves: []
            }
        ]
        saveToStorage('users', users)
        gUsers = users
    }
    return gUsers
}


function addMove(contact, amount) {
    if (loggedInUser.coins < amount) return alert('not enough BTC\'s in your bank m8')
    loggedInUser.moves.unshift({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    })
    loggedInUser.coins -= amount
    saveToStorage('loggedInUser', loggedInUser)
    return Promise.resolve(loggedInUser)
}

function getUser() {
    var loggedInUser = loadFromStorage('loggedInUser')
    if (!loggedInUser) {
        loggedInUser = gUsers[3]
        saveToStorage('loggedInUser', loggedInUser)
    }
    return loggedInUser
}

function signUp(name) {
    gUsers.push({
        _id: _makeId(),
        name,
        coins: 100,
        moves: []
    })
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}
