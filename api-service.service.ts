import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
    providedIn: 'root'
})


apiURL= "http://localhost:3000/users";
export class ApiServicesService{
    constructor(private _http: HttpClient){

    }
    getAllUsers(){
        return this._http.get(this.apiURL);
    }

}