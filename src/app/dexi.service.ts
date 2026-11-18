import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Table } from 'dexie';

export interface Produit{

  num?:number;
  matricule:string;
  nom:string;
  categorie:string;
  anti:string;
  traite:string;
  posologie:string;
  age_utilisation:string;
  pu:number;
  stock:number;
  stock_p:number;
  prix:number;
  benefice:number;
  qteBcommande:number;
  qteBalert:number;


}

@Injectable({
  providedIn: 'root',
})
export class DexiService extends Dexie{

  produit!:Table<Produit,number>;


    constructor() {

      super('pharmaServer');

      this.version(1).stores({

        produit:'++num,matricule,nom,categorie,anti,traite,posologie,age_utilisation,pu,stock,stock_p,prix,benefice,qteBcommande,qteBalert'

      })
    }


    async addCommande(data:Produit[]):Promise<number>{

      return await this.produit.bulkAdd(data);

    }

    async getCommande():Promise <Produit[]>{

      return await this.produit.toArray();


    }

    async clear(){

      return await this.produit.clear();


    }

}
