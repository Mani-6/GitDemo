import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any = [];
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.fetch();

  }

  fetch(){
    this.service.fetch().subscribe(
      (data: any) => {
        this.books = data.books;
        console.log(this.books);
      },
      (err) => console.log(err)
    );
  }

}
