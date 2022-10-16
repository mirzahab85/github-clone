import { Icondata } from './icon-data';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class IconServices {
    constructor(private _iconReg : MatIconRegistry, private _domSanitizer : DomSanitizer) {
      Icondata.forEach(e=>{
        this._iconReg.addSvgIcon(e.name, this._domSanitizer.bypassSecurityTrustResourceUrl(e.url));
      })
    }
}
