//стор для хранения информации об авторизованном пользователе
import { makeAutoObservable } from "mobx";

class LoginStore {

    user =
        {
            email: "",
            password: "",
        }

    isAuthorize = false;

    constructor() {
        makeAutoObservable(this);
    }

    //сеттер установки данных пользователя
    setUserData(email, password) {
        this.user.email = email;
        this.user.password = password;
    }

    //геттер данных пользователя
    get userData() {
        return this.user;
    }

    //сеттер установки флага авторизации
    setUserAuthorize(value) {
        this.isAuthorize = value;
    }

    //геттер флага авторизации
    get authorize() {
        return this.isAuthorize;
    }

}

export default new LoginStore();