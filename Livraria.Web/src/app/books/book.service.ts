import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Book = {
  id?: string;
  titulo: string;
  autor: string;
  genero: string;
  ano: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly BASE_URL = '/api/book';
  private http = inject(HttpClient)

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}/getAll`);
  }

  get(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.BASE_URL}/${id}`);
  }

  save(book: Book): Observable<Book> {
    if (!book.id) return this.insert(book);
    return this.update(book);
  }

  insert(book: Book): Observable<Book> {
    return this.http.post<Book>(this.BASE_URL, book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(this.BASE_URL, book);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
