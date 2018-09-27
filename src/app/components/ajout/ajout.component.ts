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
      titre : '',
      temps_preparation : null,
      temps_cuisson : null,
      //ingredients: [],
      instructions: '',
      nb_personnes : null,
    };

   }

  ngOnInit() {

  this.recetteForm=this.formBuilder.group(
    {
     //types: [this.recetteAjoutee.type],
     title: [this.recetteAjoutee.titre],
     temps_preparation: [this.recetteAjoutee.temps_preparation],
     temps_cuisson: [this.recetteAjoutee.temps_cuisson],
     //repos: [moment(this.recetteAjoutee.repos).format('HH:mm')],
     //ingredients: [this.recetteAjoutee.ingredients],
     instructions: [this.recetteAjoutee.instructions],
     nb_personnes: [this.recetteAjoutee.nb_personnes]
    }
  )
  }

  

  public newRecette() :void {
    // Appeler le service avec l'objet issu du formulaire
      const Recette: RecetteInterface = this.recetteForm.value;     
      this.recetteService.addRecette(Recette);
  }
}