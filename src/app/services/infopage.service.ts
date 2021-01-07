import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  constructor( private firestore: AngularFirestore ) {
  }


  // Obtiene un elemento de la bd
  public getElement(documentId: string) {
    return this.firestore.collection('sales').doc(documentId).snapshotChanges();
  }
  // Obtiene todos los gatos
  public getJson() {
    return this.firestore.collection('sales').snapshotChanges();
  }

}
