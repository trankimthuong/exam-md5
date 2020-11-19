import { Book } from './../book';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

const urlCommon = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor( public httpClient: HttpClient) { }

  getData = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = urlCommon;
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteData= (id: number): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = urlCommon + `/${id}`;
            this.httpClient.delete(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    createData= (book : Book): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = urlCommon;
            this.httpClient.post(url, book)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    
    detailData= (id: number): Promise<Object> => {
        return new Promise((resolve, reject) => { 
            let url = urlCommon + `/${id}`;
            this.httpClient.get(url)
                .subscribe(res => {
                 resolve(res);
                }, err => {
                reject(err);
                })
        })
    }
    updateData = (id: number,book: any): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = urlCommon+`/${id}`;
            this.httpClient.put(url, book)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}