import { Injectable } from '@angular/core';

interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user

    constructor() {
    }

    setUser(user: user) {
        this.user = user
    }

    clearUser() {
        this.user = null;
        this.user.uid = null;
    }


    getUID() {
        return this.user.uid;
    }

    getUsername() {
        return this.user.username;
    }
}