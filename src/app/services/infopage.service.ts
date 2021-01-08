import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  constructor( private firestore: AngularFirestore ) {
  }
  one(id: any){
    return this.firestore.collection('sales').doc(id).snapshotChanges();
  }

  // Obtiene un elemento de la bd
  public getElement(nameAgency: string) {
    return this.firestore.collection('sales').doc(nameAgency).snapshotChanges();
  }
  // Obtiene todos los gatos
  public getJson() {
    return this.firestore.collection('sales').snapshotChanges();
  }

}
