import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../characters-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ret;
  list: any = [];

  constructor(private character: CharactersApiService, private router: Router) { }

  ngOnInit() {
    this.character.getCaracters().subscribe(characters => {
      this.ret = characters
      this.list = this.ret.data.results
      console.log(this.list);      
    })
  }

  onDescription(caracter) {
    this.router.navigate(['/lista', caracter.id]);
  }
}
