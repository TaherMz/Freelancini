import { Pipe, PipeTransform } from '@angular/core';
import { Freelancers } from '../freelancer';

@Pipe({
  name: 'freelancerFilter'
})
export class freelancerFilterPipe implements PipeTransform {

  transform( freelancers: Freelancers[],searchTerm:String ): Freelancers[] {

    if(!freelancers || !searchTerm){
      return freelancers;
    }

    return freelancers.filter(freelancers=>freelancers.nom_prenom.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1);
  }
}
