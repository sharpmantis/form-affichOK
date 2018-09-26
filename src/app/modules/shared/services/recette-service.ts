import { Injectable } from '@angular/core';
import { RecetteInterface } from '../interfaces/recette-interface';
import { Constants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  //définit un sujet observable de type RecetteInterface
  private recetteSubject: Subject<RecetteInterface> = new Subject<RecetteInterface>();

/**
   * Injection de dépendance HttpClient
   * @param _api: HTTPClient transport vers le Backend
   */

  constructor(private _api: HttpClient) { }


  public addRecette(Recette: RecetteInterface){
    this._api.post<any> (
      Constants._API_ROOT,
      Recette
    ).subscribe(() => {
      console.log('well done !');
    })
  };

  
/** 
  public getRecette(id: number = null): Observable<RecetteInterface[]> {

  }  
  */
}
