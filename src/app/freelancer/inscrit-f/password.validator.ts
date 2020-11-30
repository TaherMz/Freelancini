import { AbstractControl, FormControl } from "@angular/forms";


export function PasswordValidation(control:FormControl):{[Key:string]:boolean}|null{
const password=control.get('password');
const confirme_password=control.get('confirme_password');
if(password.pristine||confirme_password.pristine)
{
    return null;
}
return  password && confirme_password && password.value != confirme_password.value ?
{'misMatch':true}:
null;

}

