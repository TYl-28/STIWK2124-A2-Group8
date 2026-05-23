import { Component } from '@angular/core';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'STIWK2124-A2-Group8';
}