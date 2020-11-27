import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() { }
}


apiURL= "http://localhost:3000/users";
export class ApiServicesService{
    constructor(private _http: HttpClient){

    }
    getAllUsers(){
        return this._http.get(this.apiURL);
    }

}