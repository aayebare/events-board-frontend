import { Injectable } from '@angular/core'
// import { MatSnackBar  } from '@angular/material';

declare let toastr;
@Injectable({
    providedIn: 'root'
  })
export class ToastrService {
    // config = {
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right'
    //   } as MatSnackBarConfig;
      
    // constructor(private snackbar: MatSnackBar){}
    success = (message:string, title?:string) => {
         toastr.success(message, title)
        //  this.snackbar.open(message)
    }

    info = (message: string, title?:string) => {
        toastr.info(message, title)
    }    

    warning = (message:string, title?:string) => {
        toastr.warning(message, title)
    }
    error = (message:string, title?:string) => {
        toastr.error(message, title)
    }  
}