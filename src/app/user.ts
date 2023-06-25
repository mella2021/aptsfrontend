import { Directive } from "@angular/core";
import { Validator } from "@angular/forms";
@Directive({

})

export class User {
    id!: number;
    username!: string;
    email!:string;
    phone!:string;
    password!:string;

}
