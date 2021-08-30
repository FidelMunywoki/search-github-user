import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<string>()

  userName!: string;

  constructor() { }

  search() {
    this.emitSearch.emit(this.userName)
    
  }

  ngOnInit(): void{
  }

}
