import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class apiservice {

    constructor(private httpclient: HttpClient) {}

    getcomments()
     {
        let url = "https://reqres.in/api/users";
        return this.httpclient.get(url);
    }
}