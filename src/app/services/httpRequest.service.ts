import {Injectable} from '@angular/core';
import {Http , Response , Headers , URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpRequestService
{

constructor(private http: Http)
{

}

getAsynData(url)
{
return this.http.get(url)
.map((response : Response) =>
response.json()
).catch(this.handleError);
}


private handleError (error: Response | any)
{

let errMsg : string;
if(error instanceof Response)
{
  const body = error.json() || '';
  const err = body.error || JSON.stringify(body);
  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
}
else
{
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}

}
