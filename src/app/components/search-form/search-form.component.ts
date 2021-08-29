import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() emitSearch:EventEmitter<string> = new EventEmitter<string>()

  searchTerm!: string;

  constructor() { }

  search() {
    this.emitSearch.emit(this.searchTerm)
    console.log(this.searchTerm)
  }

  ngOnInit(): void{
  }

}
