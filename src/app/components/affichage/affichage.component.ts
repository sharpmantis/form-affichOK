import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecetteInterface } from '../../modules/shared/interfaces/recette-interface';
import { RecetteService } from '../../modules/shared/services/recette-service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})
export class AffichageComponent implements OnInit {

  private demande:any;
  

  public recettes : RecetteInterface[];
  
  constructor(private recetteService: RecetteService) {
    
  }


  ngOnInit() {
  }

  afficheRecette(){
    this.recetteService.getRecette().subscribe((recettes) => {
      this.recettes=recettes;
      console.log(this.recettes.length + ' recettes en stock');
    }
    )
  };


}


