import { Ingredient } from "./ingredient";
import { Time } from "@angular/common";
import { Types } from "./types";

export interface RecetteInterface {
    /* @var (optional)id: number
    * identifiant de la recette, mis ne optionnel car au départ par d'identifiant, apparaît à la sauvegarde dans la BD.
    */
   id?: number;

   /* Type de la recette
    */
   type: Types;

   /* Titre du Todo
    * @var String
    */
   title: String;
   /*Durée de préparation
    * @var Time prepa
    * 
    */
       prepa: Time;

   /* Durée de cuisson
    * @var Time cuisson
    * 
    */
   cuisson?: Time;

   /* Durée de repos de la recette
    * @var Time repos
    */
   repos?: Time;

    /* Durée totale de la recette, calculée dans le formulaire de saisie
    * @var Time total
    */
  /* total: Time;

   Tableau d'éléments d'interface IngredientInterface
    */
   ingredients?: Array<Ingredient>;

   /**
    * Instructions
    */
   instructions: String;


//Le nombre de personnes
   personne: number;
}
