class User {
    static idClass = 0;
    _id;
    
    constructor(name, email, password) {
        this._id = User.idClass++;
        this._name = name;
        this._email = email;
        this._password = password;
        this._friendsIds = [];
        this._followersIds = [];
    }

    get id() {
        return this._id;
    }
    
    get name() {    
        return this._name;
    }
    
    get email() {
        return this._email;
    }
    
    get friendsIds() {
        return this._friendsIds;
    }
    
    get followersIds() {
        return this._followersIds;
    }
    
    get qtdFriends() {
        return this._friendsIds.length;
    }
    
    get qtdFollowers() {
        return this._followersIds.length;
    }
    
    addFriend(usuarioId) {
        this._friendsIds.push(usuarioId);
    }
    
    addFollower(usuarioId) {
        this._followersIds.push(usuarioId);
    }
    
    removeFriend(usuarioId) {
        this._friendsIds = this._friends.filter(friendId => friendId !== usuarioId);
    }
    
    removeFollower(usuarioId) {
        this._followersIds = this._followersIds.filter(followerId => followerId !== usuarioId);
    }
    
    changeEmail(newEmail) {
        this._email = newEmail;
    }
    
    chanfePassword(newPassword) {
        this._password = newPassword;
    }
    
    login(email, password) {
        return this._email === email && this._password === password;
    }
    

    isfollowedByUser(userId) {
        return this._followersIds.includes(userId);
    }

}

module.exports = User;
