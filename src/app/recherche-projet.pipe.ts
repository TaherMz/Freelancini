import { Pipe, PipeTransform } from '@angular/core';
import {Projets} from './classe/projet';

@Pipe({
  name: 'rechercheProjet'
})
export class RechercheProjetPipe implements PipeTransform {

  transform(projets: Projets[], searchTerm: string): Projets[] {
    if (!projets || !searchTerm) {
      return projets;
    }
    return projets.filter(projet =>
      projet.titre.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
