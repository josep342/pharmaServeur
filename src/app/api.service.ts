import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  server:any='https://api-serverpharma.cti-congo.com';

  //server:any="http://127.0.0.1:5555";

  urlPharma:any="https://api-pharma.cti-congo.com";

  //urlPharma:any="http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

    this.create();

  }

  data:any;

  data1:any;

  taux:any=0;

  etatServer:any=false;

  testerServer(serv:any){

    this.http.get<any>(serv+'/Pharma/taux').subscribe(data=>{
      this.data=data.data;
      this.data1=this.data[0];
      this.data1=this.data1[0];

      this.taux=this.data1.taux;

      })

      if(this.taux>0){

        this.etatServer=true;

        this.server=serv;

      }
      else{

        this.etatServer=false

      }

      return this.etatServer
      //,this.server;

  }

  destroySession(idPharma:any,idUser:any){

    return this.http.get<any>(this.server+'/Pharma/DestroySession/'+idPharma+'/'+idUser)


  }

  createSCPO(data:any){

    return this.http.get<any>(this.server+'/Pharma/getSession/'+data)


  }

  getSession(idPharma:any){

    return this.http.get<any>(this.server+'/Pharma/getSession/'+idPharma)

  }

  getPromo(){

    return this.http.get<any>(this.server+'/Pharma/getInfoPublicite/')

  }


  lireConfig(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/lireConfiguration/'+idPharm)

  }

  autoriserUSer(idPharm:any,user:any){

    return this.http.get<any>(this.server+'/Pharma/autorisationUser/'+idPharm+'/'+user)

  }

  refusUser(idPharm:any,user:any){

    return this.http.get<any>(this.server+'/Pharma/refusUser/'+idPharm+'/'+user)

  }

  // ECHCKING D HISTORISATION EFFECTUE

  checkingSysteme(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/checkingHistoSysteme/'+idPharm)

  }

  checkingProduit(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/checkingHistoProduit/'+idPharm)

  }

  checkingAchat(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/checkingHistoAchat/'+idPharm)

  }

  checkingMotif(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/checkingHistoMotif/'+idPharm)

  }

  checkingCommande(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/checkingHistoCommande/'+idPharm)

  }

  //HISTOTISATIOND  DES ENREGISTEMENTS SYSTEME

  historistionSysteme(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/historisationInofSysteme/'+idPharm)

  }

  historistionProduit(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/historisationInfoProduit/'+idPharm)

  }

  historistionMotif(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/historisationInfoMotif/'+idPharm)

  }

  historistionAchat(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/historisationInfoAchat/'+idPharm)

  }

  historistionComm(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/historisationInfoCommande/'+idPharm)

  }

  // select distinct Motif

  selectDistincUserMotif(idPharm:any,dateBas:any,dateHaut:any){

    return this.http.get<any>(this.server+'/Pharma/chargeDistinctMotifSend/'+idPharm+'/'+dateBas+'/'+dateHaut)

  }

  selectDistincUserMotifUser(idPharm:any,user:any){

    return this.http.get<any>(this.server+'/Pharma/chargeDistinctMotifUser/'+idPharm+'/'+user)

  }

  selectDistincUserMotifUnivsersell(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/chargeDistinctMotifUserUniversel/'+idPharm)

  }


  selectDistincUserMotifDateTaille(idPharm:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/chargeDistinctMotifDateSendTaille/'+idPharm+'/'+taill)

  }

  selectDistincUserMotifDate(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/chargeDistinctMotifDateSend/'+idPharm)

  }

  selectDistincUserMotifCombiner(idPharm:any,user:any,dates:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifCombiner/'+idPharm+'/'+user+'/'+dates)

  }

  selectDistincUserMotifCombinerTaille(idPharm:any,user:any,dates:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifCombinerTaill/'+idPharm+'/'+user+'/'+dates+'/'+taill)

  }








  afficheDistincUserMotifUser(idPharm:any,user:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifUser/'+idPharm+'/'+user)

  }

  afficheDistincUserMotifUserTaille(idPharm:any,user:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifUserTaill/'+idPharm+'/'+user+'/'+taill)

  }


  afficheDistincDateMotifUser(idPharm:any,dates:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifDate/'+idPharm+'/'+dates)

  }

  afficheDistincUserDateUserTaille(idPharm:any,dates:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/afficheDistinctMotifDateTaill/'+idPharm+'/'+dates+'/'+taill)

  }




  // AFICHE PEREMPTION

  affPeremption(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/produit/pharmaId/expiration/'+idPharm)

  }

  affPeremptionTaille(idPharm:any,taille:any){

    return this.http.get<any>(this.server+'/Pharma/produit/pharmaId/expirationTaille/'+idPharm+'/'+taille)

  }


  // AFFICHE MOTIF



  affUserMotif(idPharm:any,user:any,dateBas:any,dateHaut:any){

    return this.http.get<any>(this.server+'/Pharma/affichMotifSendUser/'+idPharm+'/'+user+'/'+dateBas+'/'+dateHaut)

  }

  affUserMotifGen(idPharm:any,taille:any){

    return this.http.get<any>(this.server+'/Pharma/affichMotifTaille/'+idPharm+'/'+taille)

  }

  afficheMotif(idPharm:any,motif:any,dateBas:any,dateHaut:any){

    return this.http.get<any>(this.server+'/Pharma/affichMotifSend/'+idPharm+'/'+motif+'/'+dateBas+'/'+dateHaut)

  }

  // LE COMMCECEMENT  DES INFORMATIONS LKIES DE LA LANJUÔEALKDATKP

  selectDistinctProduitTracerT(id_pharma:any,idProd:any){

    return this.http.get<any>(this.server+'/Pharma/selectDistinctProduitTracer/'+id_pharma+'/'+idProd)

  }

  selectDistinctOneCommande(id_pharma:any,dateBas:any,dateHaut:any){

    return this.http.get<any>(this.server+'/Pharma/selectDistinctCommand/'+id_pharma+'/'+dateBas+'/'+dateHaut)
  }

  selectDistinctOneCommandeTOP50(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/selectDistinctCommandTop50/'+id_pharma)
  }

  // AFFIHE ES INFORAMTIONS LIEES A LA commandeFacture

  affAchageInfoProduit(idPharm:any,idProd:any){

    return this.http.get<any>(this.server+'/Pharma/select/produitTracerNew/'+idPharm+'/'+idProd)


  }

  affAchageInfoProduitDATE(idPharm:any,idProd:any,date1:any,date2:any){

    return this.http.get<any>(this.server+'/Pharma/select/produitTracerNewDate/'+idPharm+'/'+idProd+'/'+date1+'/'+date2)

  }

  affAchatInfoCommande(idPharm:any,idProd:any){

    return this.http.get<any>(this.server+'/Pharma/afficheCommandeFait/'+idPharm+'/'+idProd)

  }


  affAchatCombiner(idPharm:any,user:any,datte:any){

    const data={

      idPharma:idPharm,
      id_trav:user,
      ddate:datte

    }

    return this.http.post<any>(this.server+'/Pharma/achatTravIdDate',data)

  }

  affAchatCombinerTaille(idPharm:any,user:any,datte:any,taill:any){

    const data={

      idPharma:idPharm,
      id_trav:user,
      ddate:datte,
      taill:taill

    }

    return this.http.post<any>(this.server+'/Pharma/achatTravIdDateTaille',data)

  }


  // le chargement de inforoamtions like

  chargeAchatTravLIke(idPharm:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/AchatuserDistinct/'+idPharm+'/'+prefix)

  }

  chargeAchatTravLIkeLocaltOUS(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/AchatuserDistinctLocaltOUS/'+idPharm)

  }


  chargeAchatTravLIkeLocal(idPharm:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/AchatuserDistinctLocal/'+idPharm+'/'+prefix)

  }

  chargeAchatClientLIke(idPharm:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/AchatclientDistinct/'+idPharm+'/'+prefix)

  }



  chargeAchatClientLIkeLocal(idPharm:any,prefix:any){


    return this.http.get<any>(this.server+'/Pharma/AchatclientDistinctLocal/'+idPharm+'/'+prefix)

  }

  chargeAchatClientLIkeLocalTaill(idPharm:any,prefix:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/AchatclientDistinctLocalTaill/'+idPharm+'/'+prefix+'/'+taill)

  }



  chargeProduitClientLIke(idPharm:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/AchatproduitDistinct/'+idPharm+'/'+prefix)

  }

  chargeDateClientLIke(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/AchatDateDistinct/'+idPharm)

  }

  chargeDistinctPRODUIT(idPharm:any,produit:any){

    return this.http.get<any>(this.server+'/Pharma/selectProduitDinstinct/'+idPharm+'/'+produit)

  }

  // LE CHARGEMENT DE DONNE VOLUES BUA D SEAPARATEUR



  chargeAchatTravLIkeTaill(idPharm:any,prefix:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/AchatuserDistinctTaille/'+idPharm+'/'+prefix+'/'+taill)

  }

  chargeAchatTravLIkeTaillLocal(idPharm:any,prefix:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/AchatuserDistinctLocalTaill/'+idPharm+'/'+prefix+'/'+taill)

  }

  chargeAchatClientLIkeaill(idPharm:any,prefix:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/AchatclientDistinctTaille/'+idPharm+'/'+prefix+'/'+taill)

  }



  chargeAchatProduitLIkeaillLocal(idPharm:any,prefix:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/AchatProduitDistinctLocalTaille/'+idPharm+'/'+prefix+'/'+taill)

  }

  chargeAchatProduitLIkelLocal(idPharm:any,prefix:any){


    return this.http.get<any>(this.server+'/Pharma/AchatProduitDistinctLocale/'+idPharm+'/'+prefix)

  }



  chargeAchatDATELIkeaillLocal(idPharm:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/AchatDateDistinctLocalTaille/'+idPharm+'/'+taill)

  }

  chargeAchatdDATELIkelLocal(idPharm:any){


    return this.http.get<any>(this.server+'/Pharma/AchatDAteDistinctLocale/'+idPharm)

  }




  chargeAchatClientLIkeaillLocal(idPharm:any,prefix:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/AchatclientDistinctTaille/'+idPharm+'/'+prefix+'/'+taill)

  }

  chargeProduitClientLIkeaill(idPharm:any,prefix:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/AchatproduitDistinctTaille/'+idPharm+'/'+prefix+'/'+taill)

  }



  chargeDateClientLIkeaill(idPharm:any,taill:any){

    return this.http.get<any>(this.server+'/Pharma/AchatDateDistinctTaille/'+idPharm+'/'+taill)

  }
  // FIN DE LDUY CHAGREMENT DE DONNNES VIA LA TAILLE

  // L AFFICHAGE DES,INFORMATIONS  CONCERNANT LES ACHAT LA PHARMACIE

  afficheAChattTrav(idPharm:any,trav:any){

    return this.http.get<any>(this.server+'/Pharma/achatTravId/'+idPharm+'/'+trav)

  }

  afficheAChattClient(idPharm:any,client:any){

    return this.http.get<any>(this.server+'/Pharma/achatClient/'+idPharm+'/'+client)

  }



  afficheAChattProduit(idPharm:any,produit:any){

    return this.http.get<any>(this.server+'/Pharma/achatId_Produit/'+idPharm+'/'+produit)

  }

  afficheAChattDate(idPharm:any,datte:any){

    return this.http.get<any>(this.server+'/Pharma/achatDate/'+idPharm+'/'+datte)

  }

  afficheAChattDateLocal(idPharm:any,datte:any){


    return this.http.get<any>(this.server+'/Pharma/achatDateLocal/'+idPharm+'/'+datte)

  }

  afficheAChattDateLocalTaill(idPharm:any,datte:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/achatDateLocalTaille/'+idPharm+'/'+datte+'/'+taill)

  }


  afficheAChattPRODUITLocal(idPharm:any,idprod:any){


    return this.http.get<any>(this.server+'/Pharma/achatPRODUITLocal/'+idPharm+'/'+idprod)

  }

  afficheAChattPRODUITLocalTaille(idPharm:any,idprod:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/achatPRODUITLocalTaille/'+idPharm+'/'+idprod+'/'+taill)

  }

  afficheAChattCLIENTLocal(idPharm:any,client:any){


    return this.http.get<any>(this.server+'/Pharma/achatCLIENTLocal/'+idPharm+'/'+client)

  }

  afficheAChattCLIENTLocalTAILL(idPharm:any,client:any,tail:any){


    return this.http.get<any>(this.server+'/Pharma/achatCLIENTLocalTaille/'+idPharm+'/'+client+'/'+tail)

  }

  afficheAChattTRVAIdLocal(idPharm:any,travId:any){


    return this.http.get<any>(this.server+'/Pharma/achatTRAVIdLocal/'+idPharm+'/'+travId)

  }

  afficheAChattTRVAIdLocalTaille(idPharm:any,travId:any,taill:any){


    return this.http.get<any>(this.server+'/Pharma/achatTRAVIdLocalTaille/'+idPharm+'/'+travId+'/'+taill)

  }

  //FIN D AFFICHAGE DES INFORMATIONS



  lireTaux(idPharm:any){

    return this.http.get<any>(this.server+'/Pharma/taux/'+idPharm)

  }

  getAchat(){

    return this.http.get<any>(this.server+'/Pharma/achat')
  }

  async create(){

    //await this.storage.create();

  }

  async clearBd(){

    //await this.storage.clear();

  }

  async saveAdressServer(key:string,value:any){

    //await this.storage.set(key,{key:value});

  }
  async get(key:string){

    //let data = await this.storage.get(key);

    //return JSON.stringify(data);

  }

  async getTousKey(){

    //return await this.storage.keys();

  }



  getAchatNowDistinctClient():Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowClientCharger');

  }

  getAchatNowDistinctClientTravId(travId:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowClientChargerTravId/'+travId);


  }

  getAchatNowDistinctProduit():Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowProduitCharger');

  }

  getAchatNowDistinctProduitIdTrav(idTrav:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowProduitChargerIdTrav/'+idTrav);

  }

  getAchatDistinctDate():Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowDateCharger');

  }

  getAchatDistinctDateTravId(idTrav:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowDateChargerIdTrav/'+idTrav);


  }

  getAchatNowDistinctClientLike(prefix:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowClientChargerLike/'+prefix);

  }

  getAchatNowDistinctClientLikeTravId(travId:any,prefix:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowClientChargerLikeTravId/'+travId+'/'+prefix);

  }

  getAchatNowDistinctProduitLike(prefix:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowProduitChargerLike/'+prefix);

  }

  getAchatNowDistinctProduitLikeIdTrav(idTrav:any,prefix:any):Observable<any>{

    return this.http.get<any>(this.server+'/Pharma/achatNowProduitChargerLikeIdTrav/'+ idTrav +'/'+prefix);

  }
  afficheGetProduit(produit:any){

    return this.http.get<any>(this.server+'/Pharma/produit/'+ produit);

  }

  getProduitLike(prefix:any){

    return this.http.get<any>(this.server+'/Pharma/produit/like/'+ prefix);

  }

  //AFFICHAGE

  afficheAchatNowIdProduit(produit:any){

    return this.http.get<any>(this.server+'/Pharma/achatNowProduit/'+produit)

  }

  afficheAchatNowIdProduitIdTrav(produit:any,id_trav:any){

    return this.http.get<any>(this.server+'/Pharma/achatNowProduitTravId/'+produit+'/'+id_trav)

  }

  afficheAchatNowTravId(id_trav:any){

    return this.http.get<any>(this.server+'/Pharma/achatNowTravId/'+id_trav)

  }


  afficheAchatDateTravId(id_trav:any,ddate:any){

    return this.http.get<any>(this.server+'/Pharma/achatTravIdDate/'+id_trav+'/'+ddate)

  }

  afficheAchatNowClient(client:any){

    return this.http.get<any>(this.server+'/Pharma/achatNowClient/'+client)
  }

  afficheAchatNowIdTravClient(client:any,idTrav:any){

    return this.http.get<any>(this.server+'/Pharma/achatNowClientTravId/'+client+'/'+idTrav)
  }

  afficheProduitRech(produit:any){

    return this.http.get<any>(this.server+'/Pharma/produit/'+produit)

  }

  authentification(data:any){

    return this.http.post<any>(this.server+'/Pharma/authentification',data)

  }

  createMotif(data:any){

    return this.http.post<any>(this.server+'/Pharma/motif/create/',data)

  }

  createCommandeFacture(data:any){

    return this.http.post<any>(this.server+'/Pharma/commandeFacture/createBroadCast',data)

  }

  deconnexion(idTrav:any){

    return this.http.delete<any>(this.server+'/Pharma/deconnexion/'+idTrav)

  }

  closingDay(idTrav:any){

    return this.http.delete<any>(this.server+'/Pharma/sessionClosed/'+idTrav)


  }

  getTaux(){

    return this.http.get<any>(this.server+'/Pharma/taux');


  }

  getMotif(idTrav:any){

    return this.http.get<any>(this.server+'/Pharma/motif/'+idTrav);

  }

  updateProduit(data:any){

    return this.http.post<any>(this.server+'/Pharma/produit/update/',data);

  }

  createProduit(data:any){

    return this.http.post<any>(this.server+'/Pharma/produit/create/',data);

  }

  chargeProforma(prefix:any){

    return this.http.get<any>(this.server+'/Pharma/preforma/like/'+prefix);

  }

  afficheProforma(prefix:any){

    return this.http.get<any>(this.server+'/Pharma/preforma/'+prefix);

  }

  chargerPriseCharge(client:any){

    return this.http.get<any>(this.server+'/Pharma/prisecharge/like/'+client);

  }

  validateCouponSImple(data:any){

    return this.http.post<any>(this.server+'/Pharma/achat/createBroadCast',data);

  }

  validatePrescription(data:any){

    return this.http.post<any>(this.server+'/Pharma/prescription/createBroadCast',data);

  }

  saveProforma(data:any){

    return this.http.post<any>(this.server+'/Pharma/preforma/createBroadCast',data);

  }

  controleurValidationCoupon(data:any){

    return this.http.post<any>(this.server+'/Pharma/controlleurCoupon',data);

  }

  annexerFichierFantome(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/annexerFicherFantome/'+id_pharma);

  }

  supprimerFichierFantome(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/supprimerFicherFantome/'+id_pharma);

  }


  serviceAutorises(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/serviceAutorise/select/'+id_pharma);

  }

  serviceNonAutorises(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/serviceNonAutorise/select/'+id_pharma);

  }

  autoriserService(id_pharma:any,idService:any){

    return this.http.get<any>(this.server+'/Pharma/autoriserService/'+id_pharma+'/'+idService);

  }

  interdireService(id_pharma:any,idService:any){

    return this.http.get<any>(this.server+'/Pharma/interdireService/'+id_pharma+'/'+idService);

  }

  situationInfo(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/situation/infoSynthese/'+id_pharma);

  }


  situationNormal(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/situation/normale/'+id_pharma);

  }

  situationCritique(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/situation/critique/'+id_pharma);

  }

  actifProduitDispo(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/actifProduitDispo/'+id_pharma);

  }

  actifProduiCirculant(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/actifProduitCirculant/'+id_pharma);

  }

  actifDispo(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/actifDispo/'+id_pharma);

  }

  actifCirculant(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/actifCirculant/'+id_pharma);

  }

  chargeLikePrise(id_pharma:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/prisechargeLike/'+id_pharma +'/' +prefix);

  }

  affichePrise(id_pharma:any,gmail:any){

    return this.http.get<any>(this.server+'/Pharma/prisechargeAffiche/'+id_pharma+'/'+gmail);

  }
  verifAccessABonne(id_pharma:any,gmail:any){

    return this.http.get<any>(this.server+'/Pharma/vetiAccesABonne/'+id_pharma+'/'+gmail);

  }

  autootiserAccessABonne(data:any){

    return this.http.post<any>(this.server+'/Pharma/accessAbones/Create/',data);

  }

  refuserAccessABonne(data:any){

    return this.http.post<any>(this.server+'/Pharma/accessAbones/autorizerFalse/',data);

  }

  getSessionAbonneId(id_pharma:any,gmail:any){

    return this.http.get<any>(this.server+'/Pharma/selectSessionAbonnes/'+id_pharma+'/'+gmail);

  }

  getVusEnsebleStock(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/produit/vusEnsemble/'+id_pharma);

  }

  getProduitOperationnel(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/produitOperationel/'+id_pharma);

  }

  getProduitEpuiser(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/produitEpuiser/'+id_pharma);

  }

  getProduitFictif(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/produitFictif/'+id_pharma);

  }

  deleteProduitFictif(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/deleteFictifProduit/'+id_pharma);

  }

  getDashBoardServer(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashBoardUser/'+id_pharma);

  }






  generateFileExpire(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileExpire/'+id_pharma);

  }


  generateFileRupture(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileRupture/'+id_pharma);

  }

  generateFileProd_OP(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileProduitOP/'+id_pharma);

  }

  generateFileFictif(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileProduitFictif/'+id_pharma);

  }

  generateFileProd_SituationNormal(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileProduitSituationNormale/'+id_pharma);

  }

  generateFileProd_SituationCritique(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/generateFileProduitSituationCritique/'+id_pharma);

  }

  getFacture(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/getFacture/'+id_pharma);

  }

  getPaiement(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/paiement/'+id_pharma);

  }

  getDashPROD(id_pharma:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashOP/'+id_pharma+'/'+prefix);

  }

  getDashPRODRcine(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashOP/'+id_pharma);

  }

  getDashEXP(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashEXP/'+id_pharma);

  }

  getDashEXPLIKE(id_pharma:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashEXP/'+id_pharma +'/'+prefix);

  }

  getDashRUPTURE(id_pharma:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashRUPT/'+id_pharma );

  }

  getDashRUPTURELIKE(id_pharma:any,prefix:any){

    return this.http.get<any>(this.server+'/Pharma/getInfoDashRUPT/'+id_pharma+ '/'+ prefix );

  }

  createPaiement(data:any){

    return this.http.post<any>(this.server+'/Pharma/paiement/create/',data);

  }


  detroyProduitAll(data:any){

    return this.http.post<any>(this.server+'/Pharma/deleteProduit',data);

  }


  getProduitLIkeALl(bd:any,prefix:any){

    return this.http.get<any>(this.urlPharma+'/Pharma/produit/likeAll/'+ bd + '/'+prefix);

  }

  getProduitLIkeALlVerificateur(bd:any,prefix:any){

    return this.http.get<any>(this.urlPharma+'/Pharma/produit/likeAllVerificateur/'+ bd + '/'+prefix);

  }

  createProduitSMART(data:any){

    return this.http.post<any>(this.urlPharma+'/Pharma/produit/createSmart',data);

  }

  updateProduitSMART(data:any){

    return this.http.post<any>(this.urlPharma+'/Pharma/produit/updateSmart',data);

  }

  getAlertProduit(bd:any){

    return this.http.get<any>(this.urlPharma+'/Pharma/getAlarmeProduit/'+ bd);

  }

  viderStockerProduit(id_pharma:any,refProduit:any){

    return this.http.get<any>(this.server+'/Pharma/viderStock/'+id_pharma + '/'+refProduit);

  }

  updateStockProduit(data:any){

    return this.http.post<any>(this.server+'/Pharma/validateCommande/update',data);

  }

  exportqtionEWxcel(data:any){

    return this.http.post<any>(this.server+'/Pharma/createCommandeExcel',data);

  }

  getBenDate(id_pharma:any,dates:any){

    return this.http.get<any>(this.server+'/Pharma/achatDateLocalBENEFICE/'+id_pharma + '/'+dates);

  }











}



//205



