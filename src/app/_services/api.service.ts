import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Widget } from '../_models';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({ providedIn: 'root' })
export class APIService {    

    constructor(private http: HttpClient, private route: ActivatedRoute){

    }

    get_widgets(placement, max_items, page_size) {

        let queryURL = `${environment.API_URL}/widgetplacement?placement=${placement}&max_items=${max_items}&page_size=${page_size}`
        
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        let optionsH = {
            headers:headers
        };
        return this.http.get( queryURL, optionsH ).map((res: Widget[]) => res);
    }
}