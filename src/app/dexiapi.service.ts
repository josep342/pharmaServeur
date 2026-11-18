import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Table } from 'dexie';



export interface Friend{
  id:number;
  bd:string;
  matriel:string,
  pharmacie:string;

}


export interface InfoAbonne{
  id:number;
  id_phone:number;
  id_tokend:string;
  pwd:string;
  pharmacie:string

}

export interface Client{
  num:number;
  ref:string

}

export interface Coupon{

  num:number;
  id_produit:string;
  detail:string;
  base:string;
  allergique:string;
  detail_1:string;
  prix:number;
  qte:number;

}

@Injectable({
  providedIn: 'root',
})



export class DexiapiService extends Dexie{

  friends!:Table<Friend,number>;

  infoAbonne!:Table<InfoAbonne,number>;

  coupon!:Table<Coupon,number>;

  constructor() {

    super('superPharmaBD');

    this.version(1).stores({

      friends:'id,bd,matriel,pharmacie',

      infoAbonne:'id,id_phone,id_tokend,pwd,pharmacie',

      coupon:'num,id_produit,detail,base,allergique,detail_1,prix,qte'

    })
  }


  async addValCoupon(data:Coupon):Promise<number>{

    return await this.coupon.add(data);

  }

  async getValCoupon():Promise <Coupon[]>{

    return await this.coupon.toArray();

  }

  async clearCoupon(){

    return await this.coupon.clear();

  }

  async addElementAbonne(data:InfoAbonne):Promise<number>{

    return await this.infoAbonne.add(data);

  }

  async deleteElementAbonne(id:number){

    return await this.infoAbonne.delete(id);

  }

  async getElementAbonne():Promise <InfoAbonne[]>{

    return await this.infoAbonne.toArray();

  }


  async addElement(data:Friend):Promise<number>{

    return await this.friends.add(data);

  }

  async addUpdate(id:number,data:Partial<Friend>):Promise<number>{

    return await this.friends.update(id,data);

  }

  async getElement():Promise <Friend[]>{

    return await this.friends.toArray();

  }

  async deleteElement(id:number){

    return await this.friends.delete(id);

  }

  async updateElement(id:number){

    return await this.friends.delete(id);

  }




}
