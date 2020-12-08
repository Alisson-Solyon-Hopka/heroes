import { CharactersApiService } from './../characters-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})

export class DescricaoComponent implements OnInit {

  public offDescription = true;

  public descriptionId;
  searchResult;
  listDescription: any = []

  constructor(private route: ActivatedRoute, private caracter: CharactersApiService) {

    this.descriptionId = parseInt(this.route.snapshot.paramMap.get('id'))

  }

  ngOnInit(): void {
    this.caracter.getCaracter(this.descriptionId).subscribe(caracter => {
      this.searchResult = caracter
      this.listDescription = this.searchResult.data.results[0]
      console.log(this.listDescription.comics);
      console.log(this.listDescription.events);
      console.log(this.listDescription.stories);
    })
  }
}
