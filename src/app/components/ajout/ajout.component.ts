import { Component, OnInit, Type } from '@angular/core';
import * as moment from 'moment';
import { RecetteInterface } from 'src/app/modules/shared/interfaces/recette-interface';
import { Ingredient }  from 'src/app/modules/shared/interfaces/ingredient';
import { Types }  from 'src/app/modules/shared/interfaces/types';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import {RecetteService} from 'src/app/modules/shared/services/recette-service';

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
      //type: null,
      title : '',
      prepa : null,
      cuisson : null,
      //ingredients: [],
      instructions: '',
      personne : null,
    };

   }

  ngOnInit() {

  this.recetteForm=this.formBuilder.group(
    {
     //types: [this.recetteAjoutee.type],
     title: [this.recetteAjoutee.title],
     prepa: [this.recetteAjoutee.prepa],
     cuisson: [this.recetteAjoutee.cuisson],
     //repos: [moment(this.recetteAjoutee.repos).format('HH:mm')],
     //ingredients: [this.recetteAjoutee.ingredients],
     instructions: [this.recetteAjoutee.instructions],
     personne: [this.recetteAjoutee.personne]
    }
  )
  }

  public newRecette() :void {
    // Appeler le service avec l'objet issu du formulaire
      const Recette: RecetteInterface = this.recetteForm.value;
     
      this.recetteService.addRecette(Recette);
     
     
    
  }

}
