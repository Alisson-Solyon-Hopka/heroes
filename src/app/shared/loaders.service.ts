import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadersService {

  constructor(private loaderService: NgxSpinnerService) { }

  public iniciarLoader(){
    this.loaderService.show();
  }

  public finalizarLoader(){
    this.loaderService.hide();
  }
}
