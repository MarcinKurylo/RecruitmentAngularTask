export class User {
    constructor(public email : string, public username : string, private _token : string, private _tokenExp : Date) {}
    get token (){
        return this._token
    }
}