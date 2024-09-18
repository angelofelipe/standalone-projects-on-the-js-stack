class Instagram {
    static _instance = null;
    _users = [];
    
    constructor() {
        this._users = [];
    }

    getInstance() {
        if (!Instagram._instance) {
            Instagram._instance = new Instagram();
        }
        return Instagram._instance;
    }

    get users() {
        return this._users;
    }

    addUser(user) {
        this._users.push(user);
    }

    removeUser(user) {
        this._users = this._users.filter(u => u !== user);
    }

    getUserById(id) {
        return this._users.find(user => user.id === id);
    }

    getUserByEmail(email) {
        return this._users.find(user => user.email === email);
    }

    followUser(followerId, followedId) {
        const follower = this.getUserById(followerId);
        const followed = this.getUserById(followedId);
        followed.addFollower(follower.id);
    }

    isfollowedByUser(userId, followedId) {
        const followed = this.getUserById(followedId);

    }

}

module.exports = Instagram;