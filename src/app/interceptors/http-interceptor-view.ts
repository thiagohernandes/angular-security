import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpInterceptorView implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            debugger;
            console.log(" ******** Interceptando... ******** ");
            const authReq = req.clone({ headers: req.headers.set("meuValor", "TesteThiago")});
            console.log(" ******** Enviando o request com novo valor no HEADER ********");
            
            if(localStorage.getItem('meu-token')){
                req = req.clone({
                    setHeaders: {
                        Authorization: `${localStorage.getItem('meu-token')}`
                    }
                });
            } else{
                return Observable.throw("******** Não foi possível realizar a requisição! ********");
            }

            return next.handle(authReq)
                .catch((error, caught) => {
                        console.log("******** Ocorreu erro ao interceptar! ********");
                        console.log(error);
                        return Observable.throw(error);
                }) as any;
    }
}
