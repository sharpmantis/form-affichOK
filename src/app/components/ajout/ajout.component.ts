import { Component, OnInit, Type } from '@angular/core';
import * as moment from 'moment';
import { RecetteInterface } from '../../../modules/shared/interfaces/recette-interface';
import { Ingredient }  from '../../../modules/shared/interfaces/ingredient';
import { Types }  from '../../../modules/shared/interfaces/types';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {RecetteService} from '../../../modules/shared/services/recette-service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {

    /**
   * @var recetteForm: FormGroup prise en charge du formulaire par Reactive forms
   */
  public recetteForm: FormGroup;

    /**
    * Définit un objet recette  
    */

   private recetteAjoutee: RecetteInterface;

  constructor( private formBuilder: FormBuilder, private recetteService:RecetteService) {

    // Un objet de type RecetteInterface vide !
    this.recetteAjoutee = {
      type: null,
      title : '',
      prepa : null,
      cuisson : null,
      ingredients: [],
      instructions: '',
      personne : null,
    };

   }

  ngOnInit() {

  this.recetteForm=this.formBuilder.group(
    {
     //types: [this.recetteAjoutee.type],
     title: [this.recetteAjoutee.title],
     prepa: [moment(this.recetteAjoutee.prepa).format('HH:mm')],
     cuisson: [moment(this.recetteAjoutee.cuisson).format('HH:mm')],
     //repos: [moment(this.recetteAjoutee.repos).format('HH:mm')],
     //ingredients: [this.recetteAjoutee.ingredients],
     instructions: [this.recetteAjoutee.instructions],
     personne: [this.recetteAjoutee.personne]

    }
  )
  }

  public newRecette() :void {
    // Appeler le service avec l'objet issu du formulaire
      const _recette: RecetteInterface = this.recetteForm.value;
     
      this.recetteService.addRecette(_recette);
     
     
    
  }

}
