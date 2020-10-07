import { last } from 'rxjs/operators';

export class UserData {
    id: number;	
    email:string;
    first_name	: string;
    last_name	: string;
    avatar: string;
    
   
       constructor(id?:number, email?:string,  first_name?	: string,
        last_name?	: string,
        avatar?: string ) {    
        this.email=email;
        this.id=id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.avatar=avatar;
     } 
   
       
   
     }
     