import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from 'src/app/model/postdata';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<PostData[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getPost(id: string) {
    return this.http.get<PostData>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
