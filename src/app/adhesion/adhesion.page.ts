import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import axios from 'axios';
import { ApiService } from '../api.service';

import { DexiService,Produit} from '../dexi.service';

import { fileTrayStackedOutline, flashOff, flask } from 'ionicons/icons';
//import { F } from '@angular/router/router_module.d-6zbCxc1T';

//import { ChartOptions,ChartType } from 'chart.js';


//import {Chart,registerables} from 'chart.js'


interface Operationnel{

  matricule:number

}


@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.page.html',
  styleUrls: ['./adhesion.page.scss'],
  standalone:false
})





export class AdhesionPage implements AfterViewInit{

  @ViewChild('myChart',{static:false}) myChartRef!:ElementRef;

  constructor(private api: ApiService,private route:ActivatedRoute, private router:Router,private dexiAPI:DexiService){


  }

  listAffich:any=['Annuelle','Mensuelle']

  //ngOnInit() {

    //this.route.queryParams.subscribe(rep=>{
      //this.id=rep['id'];
      //this.server=rep['server'];
   // })

  //}

  ngAfterViewInit():void{



  }

  passwordKey:any='home';

  swipeMaqk(){

    this.passwordKey= ! this.passwordKey;

  }

  etat=0;
  data=[];
  data1=[]
  stock=350;

  taux:any=0;
  indice:any=0;

  donnes:any;
  produit:any;
  id:any;
  server:any;
  rep:any;
  etatReq:any;
  prefixProdui:any="";
  listProduiLike:any;
  tab:any;
  tab1:any;
  nomProduit:any="";
  infoProd:any;
  listInfo:any;
  dataProduitDistinct:any;

  prefixRech:any="";

  dataOrdo:any;
  dataOrdoInfo:any;

  foc:any;

  pu:any=0;
  idProd:any="";
  nomProd:any="";
  puProd:any=0;
  qtProd:any="";

  elemRetrait:any=0;
  elemSup:any;
  elemSupInfo:any;
  dataTempon:any;
  couponTempon:any;

  affichNom:any="-";
  affichPu:any="";
  affichExp:any="";
  affichCat:any="";
  affichTraite:any="";
  affichAnti:any="";
  affichPos:any="";
  affichAge:any="";
  affichStock:any="-";
  clientJournal:any="";
  idProdJournal:any="";
  dateJournal:any;
  repRech:any;

  typeMappage:any=0;

  typeAffich:any=""

  public etatmobile=window.innerWidth;

  public dataa :any=["junior","joseph"];

  etatCoupon=0;

  tabProduit='';
  tabl=[]

  i:any=0;
  netPayer:any=0;
  netJournal:any=0;

  dictData:{[key:string]:any}={};

  tabProfoCharger:{id_prod:string,nom:string,nom_client:string,pu:number,qt:number,pt:number}[]=[];


  tableCoupon:{num:number,ID_Produit:string,nom:string,PU:number,Qte:number,PT:number,id_travailleur:string,Nom_client:string}[]=[];
  //tableCoupon:{num:number,id:string,nom:string,puu:number,qte:number,pt:number}[]=[];

  tableCouponInfo:{date_exp:string,categorie:string,traite:string,anti:string,posologie:string,age_utilisation:string,stock_p:string}[]=[];

  tableProduitAJout:{num:number,matricule:string,nom:string,categorie:string,anti:string,traite:string,posologie:string,age_utilisation:string,pu:number,stock:number,stock_p:number,exp:string,idUser:string}[]=[];

  tableCommandeRav:{num:number,id_prod:string,ajout:number,pucdf:number,idTrav:string,impactprix:number,nom:string,pusd:number,exp:string,pt:number}[]=[];


  tabDateAnne:any=['2025','2026','2027','2028','2029','2030'];

  tabDateMois:any=['1','2','3','4','5','6','7','8','9','10','11','12'];

  tabDateJOur:any=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];

  tabDevise=[
    {'devise':"USD"},
    {'devise':"CDF"}
  ]

  tabMotif=[
    {'motif':"Retournement Produit"},
    {'motif':"Sorti d'argent"},
    {'motif':"Rupture Stock"},
    {'motif':"Autres"}
  ];

  dataPropo:any="AAAA-MM-JJ";

        //n0=data['matricule']
        //n1=data['nom']
        //n2=data['categorie']
        //n3=data['anti']
        //n4=data['traite']
        //n5=data['posologie']
        //n6=data['age_utilisation']
        //n7=data['pu']
        //n8=data['stock']
        //n9=data['stock_p']
        //n10=data['idUser']




  typeDeviseRav:any="";
  deviseRav:any="CDF";
  puProPushRav:any=0;

  propoAnneDate:any="";
  moisAnneDate:any="";
  jourAnneDate:any="";

  anneDate:any="";
  moisDate:any="";
  jourDate:any="";

  motifValue:any="";
  montantMotif:any="";
  detailMotif:any="";

  idPharma:any;
  pwd:string="";

  etatActivte:any=false;
  etatConnexion:any=false;

  tabDashBoard:any=[]

  tabDashSssion:any=[]
  tabDashVente:any=[]
  tabDashExpiration:any=[]
  tabDashEpuise:any=[]
  tabDashSituationNormal:any=[]
  tabDashSituationCritique:any=[]

  tabdataProdOP:any=[]
  tabdataProdFictif:any=[]

  etatAbonnement:any=false

  tabDataFacture:any=[]

  tabdataProdOPdetail:any=[]

  version:any=1

  tabDashEpuiseDetail:any=[]

  tabDashExpirationDetail:any=[]

  dataUnitil:any=[]

  bdFille:any=''

  dataTaux:any=[]

  authentfication(){

    this.api.getFacture(this.idPharma).subscribe(data=>{

      this.tabDataFacture=data.data;

    })

    try {

       const data={
        id:this.idPharma,
        pwd:this.pwd
      }

      this.api.authentification(data).subscribe(response=>{

            this.rep=response

            this.dataTaux=response['taux']

            this.dataUnitil=this.rep

            this.bdFille=response['info'][0]['bd']

            this.etatActivte=this.rep.activ;

            this.etatConnexion=this.rep.etat;

            //this.version=this.rep.version;

            this.etatAbonnement=this.rep.facture.jrs;

            this.pwd="";

            if(this.rep.version==this.version){

              if(this.etatConnexion==true){

                if(this.etatActivte==true){

                  if(this.etatAbonnement == 0){

                  setTimeout(()=>{

                    this.lireTauxChange()

                    this.api.getDashBoardServer(this.idPharma).subscribe(data=>{

                      this.tabDashBoard=data;

                      this.tabDashSssion=this.tabDashBoard['session']
                      this.tabDashVente=this.tabDashBoard['vente']
                      this.tabDashExpiration=this.tabDashBoard['expiration']

                      this.tabDashExpirationDetail=this.tabDashBoard['expirationDetail']

                      this.tabDashEpuise=this.tabDashBoard['epuises']

                      this.tabDashEpuiseDetail=this.tabDashBoard['epuisesDetail']


                      this.tabDashSituationNormal=this.tabDashBoard['situationNormal']
                      this.tabDashSituationCritique=this.tabDashBoard['situationCritique']

                      this.tabdataProdOP=this.tabDashBoard['operationnel']

                      this.tabdataProdOPdetail=this.tabDashBoard['operationnelDetail']

                      this.tabdataProdFictif=this.tabDashBoard['fictif']

                    })

                  },50)

                  document.getElementById('divConn')!.style.display="none";
                  document.getElementById('divApp')!.style.display="block";

                  document.getElementById('pageSyntheseAcceuil')!.style.display="block";

                  document.getElementById('pageSetting')!.style.display="none";


                  this.getInfoPeremption()



                }

                //etatAbonnement <=5

                else{



                  setTimeout(()=>{

                    this.lireTauxChange()

                    this.api.getDashBoardServer(this.idPharma).subscribe(data=>{

                      this.tabDashBoard=data;

                      this.tabDashSssion=this.tabDashBoard['session']
                      this.tabDashVente=this.tabDashBoard['vente']
                      this.tabDashExpiration=this.tabDashBoard['expiration']
                      this.tabDashEpuise=this.tabDashBoard['epuises']
                      this.tabDashSituationNormal=this.tabDashBoard['situationNormal']
                      this.tabDashSituationCritique=this.tabDashBoard['situationCritique']

                      this.tabdataProdOP=this.tabDashBoard['operationnel']
                      this.tabdataProdFictif=this.tabDashBoard['fictif']

                    })

                  },50)


                  alert("Ton Abonnement est presque fini, veuillez vous RéAbonner Svp! pour Eviter l'interrumption des services ");

                  document.getElementById('divConn')!.style.display="none";

                  document.getElementById('divFacture')!.style.display="block";


                }

                }
                else{

                  alert(" Votre compte est gélé veuillez consulter le support Technique de la C.T.I !");

                }

              }
              else{

                alert("Mot de passe incorrect");

              }

          }
          else{

            alert("Version ERRONNÉE, veuillez mettre l'application à jour !!");


          }


      })

      //await axios.post('http://'+this.server+'/Pharma/authentification',this.data,{headers:{"Content-Type":"application/json ; charset=UTF-8"}});

   }
   catch(erro){

    alert(erro);

    }
  }

  tabbPromo:any=[];

  getPromo(){

    try{

      this.api.getPromo().subscribe(data=>{

        this.tabbPromo=data.data;

      })

    }
    catch{

    }

  }

  listInfoAchat1:any=[];
  listInfoAchat2:any=[];
  listInfoAchat3:any=[];
  listInfoAchat4:any=[];

  taill:any;

  prefTrav:any;

  chargeDistinctAchatUser(){

    if(this.etatApp==false){

      this.etatApp=true

      this.listInfoAchat1=[];

      this.tabdataAChat=[]

      this.api.chargeAchatTravLIkeLocaltOUS(Number(this.idPharma)).subscribe(data=>{

        this.listInfoAchat1=data.data;

        this.etatApp=false

      })


    }
    else{

      this.msgEncours()

    }


  }

  prefClient:any;

  chargeDistinctAchatClient(){

    document.getElementById('affSimple')!.style.display="block";
    document.getElementById('affGroup')!.style.display="none";

    this.listInfoAchat2=[];

    this.tabdataAChat=[]

    if(this.modeTraitement=="ASynchrone"){

    try{

      if(Number(this.taill)>0){

        this.api.chargeAchatClientLIkeaill(this.idPharma,this.prefClient,Number(this.taill)).subscribe(data=>{
          this.listInfoAchat2=data.data;


        })

      }
      else{

        this.api.chargeAchatClientLIke(Number(this.idPharma),this.prefClient).subscribe(data=>{
          this.listInfoAchat2=data.data;

        })



      }

    }
    catch{
      alert("ERROR !")
    }
  }
  else{

    try{

      if(Number(this.taill)>0){

        this.api.chargeAchatClientLIkeLocalTaill(this.idPharma,this.prefClient,Number(this.taill)).subscribe(data=>{
          this.listInfoAchat2=data.data;


        })

      }
      else{

        this.api.chargeAchatClientLIkeLocal(Number(this.idPharma),this.prefClient).subscribe(data=>{
          this.listInfoAchat2=data.data;

        })



      }

    }
    catch{
      alert("ERROR !")
    }

  }


  }

  prefProduit:any;

  chargeDistinctAchatProduit(){



    this.listInfoAchat3=[];

    this.tabdataAChat=[]

    if(this.modeTraitement=="ASynchrone"){

    try{

      if(Number(this.taill)>0){

        this.api.chargeProduitClientLIkeaill(this.idPharma,this.prefProduit,Number(this.taill)).subscribe(data=>{
          this.listInfoAchat3=data.data;


        })

      }
      else{

        this.api.chargeProduitClientLIke(Number(this.idPharma),this.prefProduit).subscribe(data=>{
          this.listInfoAchat3=data.data;

        })



      }

    }
    catch{
      alert("ERROR !")
    }
  }
  else{

    try{

      if(Number(this.taill)>0){

        this.api.chargeAchatProduitLIkeaillLocal(this.idPharma,this.prefProduit,Number(this.taill)).subscribe(data=>{
          this.listInfoAchat3=data.data;


        })

      }
      else{

        this.api.chargeAchatProduitLIkelLocal(Number(this.idPharma),this.prefProduit).subscribe(data=>{
          this.listInfoAchat3=data.data;

        })



      }

    }
    catch{
      alert("ERROR !")
    }

  }


  }



  chargeDistinctAchatDate(){

    document.getElementById('affSimple')!.style.display="none";
    document.getElementById('affGroup')!.style.display="block";


    this.listInfoAchat4=[];

    this.tabdataAChat=[]

    if(this.modeTraitement=="ASynchrone"){

      try{

        if(Number(this.taill)>0){

          this.api.chargeDateClientLIkeaill(this.idPharma,Number(this.taill)).subscribe(data=>{
            this.listInfoAchat4=data.data;


          })

        }
        else{

          this.api.chargeDateClientLIke(Number(this.idPharma)).subscribe(data=>{
            this.listInfoAchat4=data.data;

          })



        }

      }
      catch{
        alert("ERROR !")
      }
    }

    else{

      try{

        if(Number(this.taill)>0){

          this.api.chargeAchatDATELIkeaillLocal(this.idPharma,Number(this.taill)).subscribe(data=>{
            this.listInfoAchat4=data.data;


          })

        }
        else{

          this.api.chargeAchatdDATELIkelLocal(Number(this.idPharma)).subscribe(data=>{
            this.listInfoAchat4=data.data;

          })



        }

      }
      catch{
        alert("ERROR !")
      }

    }

  }

  hidenMsqBox(){

    document.getElementById('divMsgBox')!.style.display="none";
    document.getElementById('divMsgBox')!.style.height="0px";

  }



  idCommeTracage:string="";
  idProduitTrac:string="";

  tracerProduit(){

    if(this.idCommeTracage !="" && this.idProduitTrac !=""){

      document.getElementById('divMsgBox')!.style.display="block";

      if(this.etatmobile < 600){

        document.getElementById('divMsgBox')!.style.height="140px";


      }
      else{

        document.getElementById('divMsgBox')!.style.height="100px";


      }

  }

  else if(this.idCommeTracage=="" && this.idProduitTrac !=""){

    this.affInfoProduitCommander()

  }
  else if(this.idProduitTrac=="" && this.idCommeTracage!=""){

    this.affInfoCommande()

  }

  }



  idTrav:any="";

  tabdataAChat:{ID_Produit:String,PT:number,Qte:Number,nom:String,PU:Number,Nom_client:String,Dates:String,Dats_id:String,id_travailleur:String}[]=[];

  affichAchatTrav(){


    if(this.etatApp==false){

      this.etatApp=true

      this.tabdataAChat=[];

      this.api.afficheAChattTRVAIdLocal(Number(this.idPharma),this.idTrav).subscribe(data=>{

        this.tabdataAChat=data.data[0];

        this.etatApp=false

      })

    }
    else{

      this.msgEncours()
    }




  }

  nomCClient:any="";

  affichAchatClient(){

    this.tabdataAChat=[];

    if(this.modeTraitement=="ASynchrone"){

    this.api.afficheAChattClient(Number(this.idPharma),this.nomCClient).subscribe(data=>{
      this.tabdataAChat=data.data[0];
    })

  }

  else{

    try{

      if(Number(this.taill)>0){

        this.api.afficheAChattCLIENTLocalTAILL(Number(this.idPharma),this.nomCClient,Number(this.taill)).subscribe(data=>{
          this.tabdataAChat=data.data[0];
        })

      }
      else{

        this.api.afficheAChattCLIENTLocal(Number(this.idPharma),this.nomCClient).subscribe(data=>{
          this.tabdataAChat=data.data[0];
        })

      }

    }
    catch{

    }

  }

  }

  idProduit:any="";

  affichAchatProduit(){

    this.tabdataAChat=[];

    if(this.modeTraitement=="ASynchrone"){

      this.api.afficheAChattProduit(Number(this.idPharma),this.idProduit).subscribe(data=>{
        this.tabdataAChat=data.data[0];
      })

    }
    else{

      try{

        if(Number(this.taill)>0){

          this.api.afficheAChattPRODUITLocalTaille(Number(this.idPharma),this.idProduit,Number(this.taill)).subscribe(data=>{
            this.tabdataAChat=data.data[0];

          })

        }
        else{

          this.api.afficheAChattPRODUITLocal(Number(this.idPharma),this.idProduit).subscribe(data=>{
            this.tabdataAChat=data.data[0];

          })

        }

      }
      catch{

      }

    }
  }

  tabdataAChatMotif:any={}

  tabdataAChatStruct:any=[];

  dateAChat:any="";

  affichAchatDate(){

    this.tabdataAChat=[];

    if(this.modeTraitement=="ASynchrone"){



    this.api.afficheAChattDate(Number(this.idPharma),this.dateAChat).subscribe(data=>{
      this.tabdataAChat=data.data[0];
    })
  }
  else{


    try{

      if(this.taill>0){



        this.api.afficheAChattDateLocalTaill(Number(this.idPharma),this.dateAChat,Number(this.taill)).subscribe(data=>{

          this.tabdataAChatStruct=data.data;

          this.tabdataAChatMotif=data.motif;

        })

      }
      else{

        this.api.afficheAChattDateLocal(Number(this.idPharma),this.dateAChat).subscribe(data=>{

          this.tabdataAChatStruct=data.data;
          this.tabdataAChatMotif=data.motif;

        })

      }

    }
    catch{

    }

  }

  }

  infoProduitTracage:any=[];

  idProduitTracage:any=""

  selectProduitTracage(){

    this.infoProduitTracage=[];

    this.api.chargeDistinctPRODUIT(Number(this.idPharma),this.idProduitTracage).subscribe(data=>{

      this.infoProduitTracage=data.data;

    })


  }

  propoAnne(){

    if(this.moisAnneDate==""){

      this.moisDate="12";
    }
    else{
      this.moisDate=this.moisAnneDate;
    }

    if(this.jourAnneDate==""){
      this.jourDate="30";
    }
    else{
      this.jourDate=this.jourAnneDate;
    }

    this.anneDate=this.propoAnneDate;

    this.dataPropo=this.anneDate+"-"+this.moisDate+"-"+this.jourDate;

  }

  propoMois(){

    if(this.propoAnneDate==""){

      this.anneDate="2026";
    }
    else{
      this.anneDate=this.propoAnneDate;
    }

    if(this.jourAnneDate==""){
      this.jourDate="30";
    }
    else{
      this.jourDate=this.jourAnneDate;
    }

    this.moisDate=this.moisAnneDate;

    this.dataPropo=this.anneDate+"-"+this.moisDate+"-"+this.jourDate;
  }

  propoJour(){

    if(this.propoAnneDate==""){

      this.anneDate="2026";
    }
    else{
      this.anneDate=this.propoAnneDate;
    }

    if(this.moisAnneDate==""){

      this.moisDate="12";
    }
    else{
      this.moisDate=this.moisAnneDate;
    }

    this.jourDate=this.jourAnneDate;

    this.dataPropo=this.anneDate+"-"+this.moisDate+"-"+this.jourDate;

  }

  changeDeviseRav(){

    if(this.typeDeviseRav=="USD"){

        this.deviseRav="USD";

    }
    else{
      this.deviseRav="CDF";
    }


  }

  dataRav:any;

  prixRavcdf:any=0;
  prixRavusd:any=0;
  ppu:any;



  ajoutProduitRav(){

    if(this.taux<=0){

      alert("TAUX not founf");

    }
    else{

      if(this.dataPropo=="AAAA-MM-JJ" || this.prixRavProx<=0 || this.qteRavPro<=0 ){

        alert("saisie erronnee");

      }
      else{

        try{

          if(this.deviseRav=="USD"){

            this.prixRavcdf=this.prixRavProx * this.taux;

            //this.prixRavusd=this.prixRavProx;
            this.prixRavusd=Math.ceil(this.prixRavProx*100)/100

          }
          else{

            this.prixRavcdf=this.prixRavProx;

            this.ppu=this.prixRavProx/this.taux;

            //this.prixRavusd=parseFloat(this.ppu.toFixed(2));

            this.prixRavusd=Math.ceil(this.ppu*100)/100

            //this.puProPushRav=this.prixRavProx/this.taux;

          }

          this.i=this.tableCommandeRav.length +1;

          this.dataRav={

            num:this.i,
            id_prod:this.idRavPro,
            ajout:this.qteRavPro,
            pucdf:parseInt(this.prixRavcdf),
            idTrav:this.id,
            impactprix:1,
            nom:this.nomRavProx,
            pusd:this.prixRavusd,
            pt:parseInt(this.prixRavcdf) * parseInt(this.qteRavPro),
            exp:this.dataPropo

          }

          this.tableCommandeRav.push(this.dataRav);

          alert("Produit Ajouté ! ");

          this.netPayerRav=this.netPayerRav+(this.prixRavcdf * this.qteRavPro);

          this.stockRavPro="";
          this.nomRavProx="";
          this.prixRavProx="";
          this.qteRavPro="";
          this.idRavPro="";
          this.stockRavPro="";

        }
        catch{
          alert("error!!, verifier les donnees saisies");
        }
    }
}

  }

  elemSupRav:any="";

  netPayerRav:any=0;

  indiceRetrait:any=0;

  retireProduitRAv(){

    this.elemSupRav=this.tableCommandeRav[this.indiceRetrait-1];

    this.tableCommandeRav.splice(this.elemSupRav-1,1);

    this.netPayerRav=this.netPayerRav-this.elemSupRav.pt;

    this.i=1;

    this.tableCommandeRav.forEach(item=>{

      item.num=this.i;

      this.i=this.i+1;
    })

    this.dataPropo=this.elemSupRav.exp;
    this.nomRavProx=this.elemSupRav.nom;
    this.prixRavProx=this.elemSupRav.pucdf;
    this.qteRavPro=this.elemSupRav.ajout;
    this.idRavPro=this.elemSupRav.id_prod;
    this.stockRavPro=0;

    alert("Effectué !! ");

  }

  checkerCoupon(){

    this.netPayerRav=0;

    this.tableCommandeRav.forEach(item=>{

      this.netPayerRav=this.netPayerRav+item.pt;
    })

    this.i=1;

    this.tableCommandeRav.forEach(item=>{

      item.num=this.i;

      this.i=this.i+1;

    })

    alert("Effectué !! ");

  }


  validerCOmmandeFacture(){

    this.dictData={};

    this.dictData['nbr']=this.tableCommandeRav.length;

    for(let i=0;i<this.tableCommandeRav.length;i++){

      this.dictData[i]=this.tableCommandeRav[i];

    }

    this.api.createCommandeFacture(this.dictData).subscribe(data=>{
    this.repinfo=data;
    this.etatConn=this.repinfo.etat;

    if(this.etatConn==true){

      alert("Effectué avec succes !");

      this.tableCommandeRav=[];
      this.netPayerRav=0;

    }
    else{
      alert("Error ! une exception a été gerée");
    }

  })

  }

  typeDevise:any="CDF";
  devise:any="CDF";
  puProPush:any;

  changeDevise(){

    if(this.typeDevise=="USD"){

        this.devise="USD";


    }
    else{
      this.devise="CDF";
    }


  }

  dataElementCreate:any=[];
  repdataAJout:any;

  prixUsd:any;
  numAJout:any="";

  saveProdui(){

    if(this.nomAJout=="" || parseInt(this.stockAJout)<=0 || parseInt(this.prixAJout)<=0 || this.dataPropo=="AAAA-MM-JJ"){
      alert("Sasie érronée !!")
    }
    else{


      if(this.devise=="USD"){

      this.prixUsd=this.prixAJout;

      }
      else{

        this.prixUsd=parseInt(this.prixAJout)/this.taux;

      }

      this.prixUsd=Math.ceil(this.prixUsd*100)/100;

      const dataCreate:{[key:string]:any}={

        nom:this.nomAJout,
        categorie:"-",
        anti:"-",
        traite:"-",
        posologie:"-",
        age_utilisation:"-",
        pu:this.prixUsd,
        stock:this.stockAJout,
        stock_p:this.stockAJout,
        exp:this.dataPropo

      }

      this.etatConn=false;

      this.api.createProduit(dataCreate).subscribe(data=>{
        this.repdataAJout=data;
        this.etatConn=data.etat;

        if(this.etatConn==true){

          alert("Effectué !");

          this.numAJout='1';

          this.dataElementCreate=[];
          this.dataElementCreate.push(dataCreate);

          this.nomAJout="";
          this.prixAJout="";
          this.stockAJout="";

        }
        else{

          alert("Error ! une erreur sest produite");

        }

      })

    }

  }

  tabDataModif:{[key:string]:any}={};

  dataUpdate:any[]=[];

  dataElement:any;
  repdataModif:any;
  dataRep:any;
  dataElementUpdate:any=[];

  modifierProduit(){

    try{

      if(this.devise=="USD"){

        this.puProPush=Math.ceil(this.prixMisAJour*100)/100;

      }
      else{

        this.puProPush=Math.ceil((this.prixMisAJour/this.taux)*100)/100;

      }

      const dataElement:{[key:string]:any}={

        id_prod:this.idMisAJour,
        nom:this.nomMisAJour,
        categorie:"-",
        anti:"-",
        traite:"-",
        posologie:"-",
        age_utilisation:"-",
        pu:this.puProPush,
        exp:this.dataPropo

      }

      this.dataElementUpdate=[];

      this.api.updateProduit(dataElement).subscribe(data=>{

        this.repdataModif=data;
        this.dataRep=data.etat;

        if(this.dataRep==true){

          alert("Effctué !");

          this.idMisAJour="";
          this.nomMisAJour="";
          this.prixMisAJour="";

          this.dataElementUpdate.push(dataElement);
        }
        else{

          alert("Echoué ! erreur inattendu !");

        }
      })

    }
    catch{
      alert("error!!, verifier les donnees saisies");
    }

  }

  changeMappage(){
    if(this.typeMappage=="Particulier"){

      this.typeMappage=1;

    }
    else if(this.typeMappage=="Universel"){

      this.typeMappage=0;

    }
  }

  chargerTaux(){
    this.api.getTaux().subscribe(data=>{
      this.data=data;
      this.data1=data.data;
      this.data=this.data1[0];
      this.datanew=this.data[0];

      this.taux=this.datanew['taux'];
    })

  }

  selectDistinctClient(){

    this.dataProduitDistinct=[];

    if(this.typeMappage==1){

      if(this.prefixRech==""){

        this.api.getAchatNowDistinctClientTravId(this.id).subscribe(data=>{
          this.data=data;
          this.data1=data.data;
          this.dataProduitDistinct=this.data1[0]
        })

      }
      else{
        this.api.getAchatNowDistinctClientLikeTravId(this.id,this.prefixRech).subscribe(data=>{
        this.data=data;
        this.data1=data.data;
        this.dataProduitDistinct=this.data1[0]
        })


      }

    }
    else{

      if(this.prefixRech==""){

        this.api.getAchatNowDistinctClient().subscribe(data=>{
          this.data=data;
          this.data1=data.data;
          this.dataProduitDistinct=this.data1[0]
        })

      }
      else{
        this.api.getAchatNowDistinctClientLike(this.prefixRech).subscribe(data=>{
        this.data=data;
        this.data1=data.data;
        this.dataProduitDistinct=this.data1[0]
        })


      }

    }

  }

  selectDistinctProduit(){

    this.dataProduitDistinct=[];

    if(this.typeMappage==1){

      if(this.prefixRech==""){
          this.api.getAchatNowDistinctProduitIdTrav(this.id).subscribe(data=>{
          this.data=data;
          this.data1=data.data;
          this.dataProduitDistinct=this.data1[0]
        })
      }
      else{
          this.api.getAchatNowDistinctProduitLikeIdTrav(this.id,this.prefixRech).subscribe(data=>{
          this.data=data;
          this.data1=data.data;
          this.dataProduitDistinct=this.data1[0]
        })
      }
    }
    else{

      if(this.prefixRech==""){
        this.api.getAchatNowDistinctProduit().subscribe(data=>{
        this.data=data;
        this.data1=data.data;
        this.dataProduitDistinct=this.data1[0]
      })
    }
    else{
        this.api.getAchatNowDistinctProduitLike(this.prefixRech).subscribe(data=>{
        this.data=data;
        this.data1=data.data;
        this.dataProduitDistinct=this.data1[0]
      })
    }

    }

  }

  getDistinctDate(){

    this.dataProduitDistinct=[];

      this.api.getAchatDistinctDateTravId(this.id).subscribe(data=>{
      this.data=data;
      this.data1=data.data;
      this.dataProduitDistinct=this.data1[0]

    })


  }

  nomAJout:any="";
  prixAJout:any=0;
  stockAJout:any=0;
  dateAJout:any="";

  dataAJout:any=[];

  typeDeviseAjout:any="USD";

  puuTempo:any=0;
  puAjoutNew:any=0;

  ajoutPrpduitAjout(){

    try{

      if(this.nomAJout =="" || this.prixAJout <=0 || this.stockAJout<=0 ){

          alert("saisie erronnée! ");
      }
      else{

        if(this.typeDeviseAjout=="USD"){

          this.puAjoutNew=this.prixAJout;

        }
        else{

          this.puuTempo=this.prixAJout/this.taux;

          this.puAjoutNew=parseFloat(this.puuTempo.toFixed(2));
        }

       this.i=this.tableProduitAJout.length +1;

        this.dataAJout={
          num:this.i,
          matricule:String(this.i),
          nom:this.nomAJout,
          categorie:"-",
          anti:"-",
          traite:"-",
          posologie:"-",
          age_utilisation:"-",
          pu:this.puAjoutNew,
          stock:Number(this.stockAJout),
          stock_p:Number(this.stockAJout),
          exp:this.dataPropo,
          idUser:this.id
         }

        this.tableProduitAJout.push(this.dataAJout);

        this.nomAJout="";
        this.prixAJout="";
        this.stockAJout="";

        alert("Produit Ajouté ! ");

      }


    }
    catch{
      alert("error!! ");
    }


  }

  ajourOrdonance(){

    if(this.qtProd > 0 && this.qtProd <= this.listInfo.stock_p){

      this.i=this.tableCoupon.length +1;

      this.netPayer=this.netPayer+(parseInt(this.affichPu)*parseInt(this.qtProd));

      this.dataOrdo={
        num:this.i,
        ID_Produit:this.idProd,//listInfo.matricule,
        nom:this.affichNom,//listInfo.nom,
        PU:parseInt(this.affichPu),//),listInfo.puu),
        Qte:this.qtProd,
        PT:parseInt(this.affichPu)*parseInt(this.qtProd)
      }

      this.tableCoupon.push(this.dataOrdo);

      this.dataOrdoInfo={
        date_exp:this.affichExp,//this.listInfo.date_exp,
        categorie:this.affichCat,//this.listInfo.categorie,
        traite:this.affichTraite,//this.listInfo.traite,
        anti:this.affichAnti,//this.listInfo.anti,
        posologie:this.affichPos,//this.listInfo.posologie,
        age_utilisation:this.affichAge,//this.listInfo.age_utilisation,
        stock_p:this.affichStock //listInfo.stock_p
      }

      this.tableCouponInfo.push(this.dataOrdoInfo);

      this.affichNom="";
      this.affichPu="";
      this.affichExp="";
      this.affichCat="";
      this.affichTraite="";
      this.affichAnti="";
      this.affichPos="";
      this.affichAge="";
      this.affichStock="";
      this.qtProd="";


      //this.tableCoupon=this.couponTempon;

    }
    else{

      alert("Stock Insufisant  ou saisie erronnée! ");

    }

  }

  corrigerCalcul(){

    this.netPayer=0;

    this.tableCoupon.forEach(item=>{

      this.netPayer=this.netPayer+item.PT

    })

    alert("effectué!")
  }
  supprimerCoupon(){
    this.tableCoupon=[];
    this.tableCouponInfo=[];

    this.netPayer=0;
  }

  retirerElement(){

    this.elemSup=this.tableCoupon[this.elemRetrait-1];
    this.elemSupInfo=this.tableCouponInfo[this.elemRetrait-1];


    this.tableCoupon.splice(this.elemRetrait-1,1);
    this.tableCouponInfo.splice(this.elemRetrait-1,1);

    this.netPayer=this.netPayer-this.elemSup.PT;


    // la reoganisation de position

    this.i=1;

    this.tableCoupon.forEach(item=>{

      item.num=this.i;

      this.i=this.i+1;
    })

    this.qtProd=this.elemSup.Qte;
    this.idProd=this.elemSup.ID_Produit;
    this.affichNom=this.elemSup.nom;
    this.affichPu=this.elemSup.PU;

    this.affichExp=this.elemSupInfo.date_exp;
    this.affichCat=this.elemSupInfo.categorie;
    this.affichTraite=this.elemSupInfo.traite;
    this.affichAnti=this.elemSupInfo.anti;
    this.affichPos=this.elemSupInfo.posologie;
    this.affichAge=this.elemSupInfo.age_utilisation;
    this.affichStock=this.elemSupInfo.stock_p;

    alert("Effectué !! ");

  }


  async selectLike(){

    const req=await axios.get('http://'+this.server+'/Pharma/produit/like/'+this.prefixProdui);

    this.rep=req.data;

    this.tab=this.rep['data'];

    this.listProduiLike=this.tab[0];



    this.affichNom="";
    this.affichPu="";
    this.affichExp="";
    this.affichCat="";
    this.affichTraite="";
    this.affichAnti="";
    this.affichPos="";
    this.affichAge="";
    this.affichStock="";

   // this.listProduiLike=this.tab1[0];

  }

  async rechercheProdui(){

    this.api.afficheProduitRech(this.nomProduit).subscribe(data=>{
      this.rep=data;

      this.repRech=this.rep['data'];

      this.tab=this.repRech[0];

      this.listInfo=this.tab[0];

      this.idProd=this.listInfo.matricule;
      this.affichNom=this.listInfo.nom;
      this.affichPu=parseInt(this.listInfo.puu);
      this.affichExp=this.listInfo.date_exp;
      this.affichCat=this.listInfo.categorie;
      this.affichTraite=this.listInfo.traite;
      this.affichAnti=this.listInfo.anti;
      this.affichPos=this.listInfo.posologie;
      this.affichAge=this.listInfo.age_utilisation;
      this.affichStock=this.listInfo.stock_p;


      this.qtProd="";

      this.foc=document.getElementById('textqte');

      if(this.foc){
        this.foc.focus()
      }

    })

  }

  prefixProduiRav:any="";
  idMisAJour:any="";
  listProduiLikeRav:any=[];


  nomMisAJour:any="";
  prixMisAJour:any=0;

  async selectLikeRav(){

    const req=await axios.get('http://'+this.server+'/Pharma/produit/like/'+this.prefixProduiRav);

    this.rep=req.data;

    this.tab=this.rep['data'];

    this.listProduiLikeRav=this.tab[0];


    this.nomMisAJour="";
    this.prixMisAJour=0;
    this.idMisAJour=""


   // this.listProduiLike=this.tab1[0];

  }

  prefixProduiRavProx:any="";
  listProduiLikeRavProx:any=[];

  async selectLikeRavPro(){

    const req=await axios.get('http://'+this.server+'/Pharma/produit/like/'+this.prefixProduiRavProx);

    this.rep=req.data;

    this.tab=this.rep['data'];

    this.listProduiLikeRavProx=this.tab[0];


    this.nomMisAJour="";
    this.prixMisAJour=0;
    this.idMisAJour=""


   // this.listProduiLike=this.tab1[0];

  }

  nomProduitRav:any="";
  listInfoRav:any=[];
  dataExp:any="";

  ann:any="";
  mois:any="";
  jour:any="";

  async rechercheProduiRav(){

    this.api.afficheProduitRech(this.nomProduitRav).subscribe(data=>{
      this.rep=data;

      this.repRech=this.rep['data'];

      this.tab=this.repRech[0];

      this.listInfoRav=this.tab[0];

      this.nomMisAJour=this.listInfoRav.nom;
      this.prixMisAJour=parseInt(this.listInfoRav.puu);
      this.idMisAJour=this.listInfoRav.matricule;
      this.dataExp=this.listInfoRav.date_exp;


    })

  }

  nomProduitRavPro:any="";
  listInfoRavProx:any=[];

  idRavPro:any="";
  prixRavProx:any=0;
  nomRavProx:any="";
  qteRavPro:any=0;
  stockRavPro:any=0;

  rechercheProduiRavPro(){

    this.api.afficheProduitRech(this.nomProduitRavPro).subscribe(data=>{
      this.rep=data;

      this.repRech=this.rep['data'];

      this.tab=this.repRech[0];

      this.listInfoRavProx=this.tab[0];

      this.nomRavProx=this.listInfoRavProx.nom;
      this.prixRavProx=parseInt(this.listInfoRavProx.puu);
      this.idRavPro=this.listInfoRavProx.matricule;
      this.stockRavPro=this.listInfoRavProx.stock_p;

    })

  }



  async deconnexion(){

    document.getElementById('divConn')!.style.display="block";
    document.getElementById('divApp')!.style.display="none";

    //const req=await axios.delete('http://'+this.server+'/Pharma/deconnexion/'+this.id);

    this.api.deconnexion(this.id).subscribe(data=>{
      this.rep=data;

      this.etatReq=this.rep.data;

      this.etatReq=this.etatReq.etat;

      if(this.etatReq==true){

        alert("Bye! à plus tard!!");

        this.router.navigate(['/connexion']);

      }

    })

  }


  async cloturedService(){

    //const req=await axios.delete('http://'+this.server+'/Pharma/sessionClosed/'+this.id);

    this.api.closingDay(this.id).subscribe(data=>{

      this.rep=data;

      this.etatReq=this.rep.data;

      this.etatReq=this.etatReq.etat;

      if(this.etatReq==true){

        alert("Tu viens de cloturer le service du jour avec succes...A demain ! Bye !");

        this.router.navigate(['/connexion']);

      }
    })

  }

  tabClientCharger:any;
  prefixClientProforma:any="";
  ClientProforma:any="";

  async chargerProforma(){

    this.api.chargeProforma(this.prefixClientProforma).subscribe(data=>{

      this.data=data;
      this.data1=data.data;
      this.tabClientCharger=this.data1[0]

    })
  }

  net:any=0;

  async afficheProforma(){

    this.api.afficheProforma(this.ClientProforma).subscribe(data=>{

      this.data=data;
      this.data1=data.data;
      this.tabProfoCharger=this.data1[0]

      this.tableCoupon=[];

      this.i=0;
      this.net=0;

      this.tabProfoCharger.forEach(ligne=>{

        this.net=this.net+ligne.pt;

        const dataProf:any={

          num:this.i+1,
          ID_Produit:ligne.id_prod,
          nom:ligne.nom,
          PU:Math.round(ligne.pu),
          Qte:Math.round(ligne.qt),
          PT:Math.round(ligne.pt),
          id_travailleur:this.id,
          Nom_client:"-"

        }

        this.tableCoupon.push(dataProf);

        this.i=this.i+1;

        this.netPayer=parseInt(this.net);

  })

    })

  }

  nomPriseCharge:any="";
  tabPriseChargeCharger:any=[];

  async chargerPriseCharge(){

    this.api. chargerPriseCharge(this.nomPriseCharge).subscribe(data=>{

      this.data=data;
      this.data1=data.data;
      this.tabPriseChargeCharger=this.data1[0]

    })
  }

  dataProformaPush:{[key:string]:any}={};
  nomClientProforma:any="";

  saveProforma(){

    if(this.tableCoupon.length >0 && this.nomClientProforma !=""){

    this.i=0;

    this.tableCoupon.forEach(item=>{

      const dataK={
        id_prod:item.ID_Produit,
        qt:item.Qte,
        nom_client:this.nomClientProforma
      }

      this.dataProformaPush[this.i]=dataK;

      this.i=this.i+1;

      })

      this.dataProformaPush['nbr']=this.tableCoupon.length;

    this.api.saveProforma(this.dataProformaPush).subscribe(data=>{

      this.data=data;
      this.etatConn=data.etat;

      if(this.etatConn==true){

        alert("Felicitation !! Souche etablie avec succes !");

        this.tableCoupon=[];
        this.netPayer=0;

        this.nomClientProforma="";
      }
      else{

        alert("Error survenue !")

      }

    })
  }
  else{

    alert("data incomplet, veuillez composer correctement le coupon et renseigner le nom du client SVP!!");

  }
  }

  dataPush:{[key:string]:any}={};

  dataPushPresciption:{[key:string]:any}={};

  nomClientAchat:any="";

  nomClientAchatABonne:any="";

  nomClient:any="";

  etatAchat:any=0;

  etatConn2:any=false;

  docteurConsult:any="";

  async valideCouponSimple(){

    this.dataPushPresciption={};
    this.dataPush={};

    this.etatConn=false;
    this.etatConn2=false;

    if(this.etatAchat==0){

      this.nomClient=this.nomClientAchat;

    }
    else{

      this.nomClient=this.nomClientAchatABonne;

    }

    this.i=0;

    this.tableCoupon.forEach(item=>{

    item.Nom_client=this.nomClient;
    item.id_travailleur=this.id;

    this.dataPush[this.i]=item;

    this.i=this.i+1;

    })

    this.dataPush['nbr']=this.tableCoupon.length;

    if(this.etatAchat==0){

      this.api.validateCouponSImple(this.dataPush).subscribe(data=>{

        this.data=data;
        this.etatConn=data.etat;

        if(this.etatConn==true){

          alert("Produit vendu (s) avec succes !");

          this.docteurConsult="";
          this.nomClientAchatABonne="";
          this.nomPriseCharge="";
          this.nomClientAchat="";

          document.getElementById('msgBox')!.style.display="none";

          document.getElementById('divCadreBas')!.style.display="inline-block";
          document.getElementById('divBasFin')!.style.display="inline-block";

          this.tableCoupon=[];
          this.netPayer=0;
        }
        else{

          alert("Error survenue ! veuillez consulter le detail ,NB: consulter le JOURNAL avant de ressayer ")

        }

      })


    }
    else{

        this.api.validateCouponSImple(this.dataPush).subscribe(data=>{

        this.data=data;
        this.etatConn=data.etat;

        if(this.etatConn==true){

          this.tableCoupon.forEach(item=>{

            this.i=0;

            const dataK={

              id_prise:this.nomClient,
              id_achat:item.ID_Produit,
              docteur:this.docteurConsult
            }

            this.dataPushPresciption[this.i]=dataK;

            this.i=this.i+1;

            })

            this.dataPushPresciption['nbr']=this.tableCoupon.length;


          this.api.validatePrescription(this.dataPushPresciption).subscribe(data=>{

            this.data=data;
            this.etatConn2=data.etat;

            if(this.etatConn2==true){

              alert("Produit vendu (s) avec succes !");

              this.tableCoupon=[];
              this.netPayer=0;
            }
            else if(this.etatConn2==false){

              alert("Error !");

              alert("ATTENTION!! les produit sont bien vendu (s) mais le probleme est survenu lors de la sauvegarde du patient");


            }

          })

        }
        else if(this.etatConn==false){

          alert("ERROR! ")

        }
      })

    }

  }

  chargerCouponClient(){

    this.api.validateCouponSImple(this.dataPush).subscribe(data=>{

      this.data=data;
      this.data1=data.data;
      this.tabPriseChargeCharger=this.data1[0]

    })

  }

  async getProduit(){

   try {

      const rep=await axios.get('http://'+this.server+'/Pharma/element');

      this.donnes=rep.data;

      const rep1=await axios.get('http://'+this.server+'Pharma/achat');

      this.produit=rep1.data;

   }
   catch(erro){

    alert(erro);

    console.log('EROOR');
   }

  }

  // AFFICHAGE

  dataAChat:{ID_Produit:string,nom:string,PU:number,Qte:number,PT:number,Nom_client:string,Dates:string,Dats_id:string,id_travailleur:string}[]=[];

  datanew:any=[];

  async afficheAchatClient(){

    this.dataAChat=[];

    if(this.typeMappage==1){

      this.api.afficheAchatNowIdTravClient(this.clientJournal.value,this.id).subscribe(data=>{
      this.data=data;
      this.data1=data.data;
      this.dataAChat=this.data1[0]

      this.netJournal=0

      this.dataAChat.forEach(item=>{

      this.netJournal=this.netJournal+item.PT;

      })

      })
    }
    else{

      this.api.afficheAchatNowClient(this.clientJournal).subscribe(data=>{
      this.datanew=data;
      this.data1=data.data;
      this.dataAChat=this.data1[0];

    })

  }



}

async calculeJounal(){

  this.netJournal=0

  this.dataAChat.forEach(item=>{

    this.netJournal=this.netJournal+item.PT;

  })

}

async afficheAchatDate(){

  this.dataAChat=[];

    this.api.afficheAchatDateTravId(this.id,this.dateJournal).subscribe(data=>{
    this.data=data;
    this.data1=data['data'];
    this.dataAChat=this.data1[0];

    })
}

async afficheAchatIdProduit(){

  this.dataAChat=[];

  if(this.typeMappage==1){

    this.api.afficheAchatNowIdProduitIdTrav(this.idProdJournal,this.id).subscribe(data=>{
    this.data=data;
    this.data1=data.data;
    this.dataAChat=this.data1[0]

    })
  }
  else{

      this.api.afficheAchatNowIdProduit(this.idProdJournal).subscribe(data=>{
      this.data=data;
      this.data1=data.data;
      this.dataAChat=this.data1[0]

      })
  }

}

tabMotifClient:any;

affiMotif(){

  this.api.getMotif(this.id).subscribe(data=>{
    this.data=data;
    this.data1=data.data;
    this.tabMotifClient=this.data1[0]

    })

}

controleMotif(){

  if(this.motifValue=="Retournement Produit"){

    document.getElementById('produitMotif')!.style.display="block";
    document.getElementById('montantMotif')!.style.display="block";
    document.getElementById('detailMotif')!.style.display="block";

    this.infoMotif=" ** Ref Produit "+this.nomProduit;

  }
  else if(this.motifValue=="Sorti d'argent"){

    document.getElementById('produitMotif')!.style.display="none";
    document.getElementById('montantMotif')!.style.display="block";
    document.getElementById('detailMotif')!.style.display="block";

    this.infoMotif="";

  }

  else if(this.motifValue=="Rupture Stock"){

    document.getElementById('produitMotif')!.style.display="block";
    document.getElementById('montantMotif')!.style.display="none";
    document.getElementById('detailMotif')!.style.display="block";

    this.infoMotif=" ** Ref Produit "+this.nomProduit;

    this.montantMotif=0;

  }

  else if(this.motifValue=="Autres"){

    document.getElementById('produitMotif')!.style.display="none";
    document.getElementById('montantMotif')!.style.display="block";
    document.getElementById('detailMotif')!.style.display="block";

    this.infoMotif="";

  }

}

etatConn:any;
repinfo:any;
infoMotif:any="";

saveMotif(){


  try {

    const data={

    nom_motif:this.motifValue,
    detail_motif:this.detailMotif+ this.infoMotif,
    montant:parseInt(this.montantMotif),
    id_trav:this.id
}

   this.api.createMotif(data).subscribe(data=>{
    this.repinfo=data;
    this.etatConn=this.repinfo.etat;

    })

      if(this.etatConn==true){

        alert('Effectué !')

        this.motifValue="";
        this.detailMotif="";
        this.montantMotif=0;

      }
      else{

        alert('Echoué ! veuillez réessayer plus tard');

        }

    this.affiMotif();

}
catch{

  alert("error");

}

}

  changeDescriptionSetting(){

     if(this.typeAffich=="OUI"){
        document.getElementById('descriptionSetting1')!.style.display="block";
        document.getElementById('descriptionSetting2')!.style.display="block";
        document.getElementById('descriptionSetting3')!.style.display="block";

        document.getElementById('descriptionSetting4')!.style.display="block";
        document.getElementById('descriptionSetting5')!.style.display="block";
        document.getElementById('descriptionSetting6')!.style.display="block";
        document.getElementById('descriptionSetting7')!.style.display="block";
        document.getElementById('descriptionSetting8')!.style.display="block";
     }
     else{
      document.getElementById('descriptionSetting1')!.style.display="none";
      document.getElementById('descriptionSetting2')!.style.display="none";
      document.getElementById('descriptionSetting3')!.style.display="none";

      document.getElementById('descriptionSetting4')!.style.display="none";
      document.getElementById('descriptionSetting5')!.style.display="none";
      document.getElementById('descriptionSetting6')!.style.display="none";
      document.getElementById('descriptionSetting7')!.style.display="none";
      document.getElementById('descriptionSetting8')!.style.display="none";
     }

  }

  tirerMenu(){

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";

    document.getElementById('pageSession')!.style.display="none";

    document.getElementById('pageSyntheseAcceuil')!.style.display="none";

    if(this.etat==0){

      document.getElementById('menu1')!.style.display="none";
      document.getElementById('menu3')!.style.display="inline-block";

      document.getElementById('menu3')!.style.width="80%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="100%";


      this.etat=1;
    }
    else {

      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;
    }

  }


  chargePageVente(){

    document.getElementById('pageSyntheseAcceuil')!.style.display="none";
    document.getElementById('cadreVisualiseur')!.style.display="none";

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";

    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="block";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";

      document.getElementById('pageSetting')!.style.display="none";


      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;


    }
    else{
      document.getElementById('pageVente')!.style.display="block";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";

      document.getElementById('pageSetting')!.style.display="none";

    }


  }

  chargePageJournal(){

    document.getElementById('pageSyntheseAcceuil')!.style.display="none";
    document.getElementById('cadreVisualiseur')!.style.display="none";

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";

    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="block";
      document.getElementById('pageMode')!.style.display="none";
      document.getElementById('pageSetting')!.style.display="none";



      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;


  }

  else{

    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="block";
    document.getElementById('pageMode')!.style.display="none";

    document.getElementById('pageSetting')!.style.display="none";


  }

}



  chargePageMode(){

    //this.getAlarnmProduit()

    document.getElementById('pageSyntheseAcceuil')!.style.display="none";
    document.getElementById('cadreVisualiseur')!.style.display="none";

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";

    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="block";

      document.getElementById('pageSetting')!.style.display="none";


      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;
  }
  else{
      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="block";

      document.getElementById('pageSetting')!.style.display="none";

  }
}

serviceAuthVerifGestion:{id:number}[]=[];

etatVerifStock:any=false;

dataTabTaill:any=[];




chargeStock(){


  // this.getInfoPeremption()

  document.getElementById('pageSyntheseAcceuil')!.style.display="none";
  document.getElementById('cadreVisualiseur')!.style.display="none";

  //this.actifCirculant();
  //this.actifDispo();

  this.api.getVusEnsebleStock(this.idPharma).subscribe(data=>{

    this.dataTabTaill=data.data;

  })

  this.etatVerifStock=false;

  document.getElementById('pageAjout')!.style.display="none";
  document.getElementById('pageAMiseAJour')!.style.display="none";
  document.getElementById('pageRavitaillement')!.style.display="none";
  document.getElementById('pageSignaler')!.style.display="none";
  document.getElementById('pageSession')!.style.display="none";

  if(this.etatmobile < 600){

    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="none";
    document.getElementById('pageMode')!.style.display="none";

    document.getElementById('pageSetting')!.style.display="none";


    document.getElementById('menu1')!.style.display="inline-block";
    document.getElementById('menu3')!.style.display="none";

    document.getElementById('menu3')!.style.width="20%";
    document.getElementById('menu3')!.style.height="100%";

    document.getElementById('menu0')!.style.width="100%";
    document.getElementById('menu0')!.style.height="70px";

    this.etat=0;
}
else{
    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="none";
    document.getElementById('pageMode')!.style.display="none";

    document.getElementById('pageSetting')!.style.display="none";

}



this.api.serviceAutorises(this.idPharma).subscribe(data=>{

  this.serviceAuthVerifGestion=data.data;

  this.serviceAuthVerifGestion.forEach(item=>{

    if(item.id==1){

      document.getElementById('cadreAvertissement')!.style.display="none";

    }
    else{

      document.getElementById('cadreAvertissement')!.style.display="block";

    }

  })

})

}

bloqeur:any=true;

traceurPerformance(){

  document.getElementById('pageSyntheseAcceuil')!.style.display="none";
  document.getElementById('cadreVisualiseur')!.style.display="none";

  if(this.bloqeur==true){

    alert('cette fonctionnalité vous sera operationnelle dès que toutes les conditions de Robustesses seront reunies ')

  }
  else{

      this.actifCirculant();

      this.etatVerifStock=false;

      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageRavitaillement')!.style.display="none";
      document.getElementById('pageSignaler')!.style.display="none";
      document.getElementById('pageSession')!.style.display="none";

      if(this.etatmobile < 600){

        document.getElementById('pageVente')!.style.display="none";
        document.getElementById('pageJournal')!.style.display="none";
        document.getElementById('pageMode')!.style.display="none";
        document.getElementById('pageStock')!.style.display="none";
        document.getElementById('pageStockPure')!.style.display="none";
        document.getElementById('pageStockPerformance')!.style.display="block";
        document.getElementById('pageSetting')!.style.display="none";
        document.getElementById('pagePriseCharge')!.style.display="none";

        document.getElementById('menu1')!.style.display="inline-block";
        document.getElementById('menu3')!.style.display="none";

        document.getElementById('menu3')!.style.width="20%";
        document.getElementById('menu3')!.style.height="100%";

        document.getElementById('menu0')!.style.width="100%";
        document.getElementById('menu0')!.style.height="70px";

        this.etat=0;
    }
    else{
        document.getElementById('pageVente')!.style.display="none";
        document.getElementById('pageJournal')!.style.display="none";
        document.getElementById('pageMode')!.style.display="none";
        document.getElementById('pageStock')!.style.display="none";
        document.getElementById('pageStockPure')!.style.display="none";
        document.getElementById('pageStockPerformance')!.style.display="block";
        document.getElementById('pageSetting')!.style.display="none";
        document.getElementById('pagePriseCharge')!.style.display="none";
    }



    this.api.serviceAutorises(this.idPharma).subscribe(data=>{

      this.serviceAuthVerifGestion=data.data;

      this.serviceAuthVerifGestion.forEach(item=>{

        if(item.id==1){

          document.getElementById('cadreAvertissement')!.style.display="none";

        }
        else{

          document.getElementById('cadreAvertissement')!.style.display="block";

        }

      })

    })

}

}



chargerStockPure(){

  document.getElementById('pageSyntheseAcceuil')!.style.display="none";
  document.getElementById('cadreVisualiseur')!.style.display="none";

  this.actifCirculant();

  this.etatVerifStock=false;

  document.getElementById('pageAjout')!.style.display="none";
  document.getElementById('pageAMiseAJour')!.style.display="none";
  document.getElementById('pageRavitaillement')!.style.display="none";
  document.getElementById('pageSignaler')!.style.display="none";
  document.getElementById('pageSession')!.style.display="none";

  if(this.etatmobile < 600){

    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="none";
    document.getElementById('pageMode')!.style.display="none";
    document.getElementById('pageStock')!.style.display="none";
    document.getElementById('pageStockPure')!.style.display="block";
    document.getElementById('pageStockPerformance')!.style.display="none";
    document.getElementById('pageSetting')!.style.display="none";
    document.getElementById('pagePriseCharge')!.style.display="none";

    document.getElementById('menu1')!.style.display="inline-block";
    document.getElementById('menu3')!.style.display="none";

    document.getElementById('menu3')!.style.width="20%";
    document.getElementById('menu3')!.style.height="100%";

    document.getElementById('menu0')!.style.width="100%";
    document.getElementById('menu0')!.style.height="70px";

    this.etat=0;
}
else{
    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="none";
    document.getElementById('pageMode')!.style.display="none";
    document.getElementById('pageStock')!.style.display="none";
    document.getElementById('pageStockPure')!.style.display="block";
    document.getElementById('pageStockPerformance')!.style.display="none";
    document.getElementById('pageSetting')!.style.display="none";
    document.getElementById('pagePriseCharge')!.style.display="none";
}



this.api.serviceAutorises(this.idPharma).subscribe(data=>{

  this.serviceAuthVerifGestion=data.data;

  this.serviceAuthVerifGestion.forEach(item=>{

    if(item.id==1){

      document.getElementById('cadreAvertissement')!.style.display="none";

    }
    else{

      document.getElementById('cadreAvertissement')!.style.display="block";

    }

  })

})

}

etatMafia:any=0;

chargePriseCharge(){

  document.getElementById('pageSyntheseAcceuil')!.style.display="none";
  document.getElementById('cadreVisualiseur')!.style.display="none";

  //if(this.etatMafia==1){

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";

    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";
      document.getElementById('pageStock')!.style.display="none";
      document.getElementById('pageStockPure')!.style.display="none";
      document.getElementById('pageStockPerformance')!.style.display="none";
      document.getElementById('pageSetting')!.style.display="none";

      document.getElementById('pagePriseCharge')!.style.display="block";



      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;
  }
  else{
      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";
      document.getElementById('pageStock')!.style.display="none";
      document.getElementById('pageStockPure')!.style.display="none";
      document.getElementById('pageStockPerformance')!.style.display="none";
      document.getElementById('pageSetting')!.style.display="none";

      document.getElementById('pagePriseCharge')!.style.display="block";
  }

//}

//else{
  //alert("Cette fontionnalité est utilisée que si le compte atteint le PREMIUM !")
///}

}


  chargePageSetting(){



    document.getElementById('pageSyntheseAcceuil')!.style.display="none";
    document.getElementById('cadreVisualiseur')!.style.display="none";



    this.serviceAutoriser();

    this.serviceInterdis();

    this.chargerTaux();



    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";


      document.getElementById('pageSession')!.style.display="none";

      document.getElementById('pageSetting')!.style.display="block"

      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";



      this.etat=0;
  }
  else{



    document.getElementById('pageVente')!.style.display="none";
    document.getElementById('pageJournal')!.style.display="none";



    document.getElementById('pageMode')!.style.display="none";

    document.getElementById('pageSetting')!.style.display="block";

    document.getElementById('pageSession')!.style.display="none";





    //document.getElementById('pageStock')!.style.display="none";
    //document.getElementById('pageStockPure')!.style.display="none";
    //document.getElementById('pageStockPerformance')!.style.display="none";
    //document.getElementById('pagePriseCharge')!.style.display="none";








  }
}

  tireCoupon(){

    document.getElementById('pageSyntheseAcceuil')!.style.display="none";

    if(this.etatCoupon==0){


      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageRavitaillement')!.style.display="none";

     // document.getElementById('divQte')!.style.display="none";



      if(this.etatmobile < 600){

        document.getElementById('divCadreBas')!.style.height="auto";
        document.getElementById('cadre')!.style.height="72px";

      }
      else{

        document.getElementById('divCadreBas')!.style.height="700px";
        document.getElementById('cadre')!.style.height="72px";

      }

      this.etatCoupon=1;
    }
    else{

      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageRavitaillement')!.style.display="none";



      //document.getElementById('divQte')!.style.display="block";

      document.getElementById('divCadreBas')!.style.height="400px";
      document.getElementById('cadre')!.style.height="500px";

      this.etatCoupon=0;

    }

  }


  affichaPageAjout(){

    this.lireConfig();

    document.getElementById('pageAjout')!.style.display="block";
    document.getElementById('pageSetting')!.style.display="none";

    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";

    document.getElementById('pageSession')!.style.display="none";

  }
  affichaPageMiseJour(){
    document.getElementById('pageAMiseAJour')!.style.display="block";
    document.getElementById('pageSetting')!.style.display="none";

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";

    document.getElementById('pageSession')!.style.display="none";


  }
  affichaPageRavitaillement(){

    if(this.etatMafia==1){

      document.getElementById('pageRavitaillement')!.style.display="block";
      document.getElementById('pageSetting')!.style.display="none";

      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageSignaler')!.style.display="none";

      document.getElementById('pageSession')!.style.display="none";

    }
    else{
      alert("Cette fontionnalité est utilisée que si le compte atteint le PREMIUM !")
    }


  }

  affichaPageSiganler(){

    if(this.etatMafia==1){

      document.getElementById('pageSignaler')!.style.display="block";
      document.getElementById('pageSetting')!.style.display="none";

      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageRavitaillement')!.style.display="none";
      document.getElementById('pageSession')!.style.display="none";

      this.nomProduit="";


      this.affiMotif();
    }
    else{
      alert("Cette fontionnalité est utilisée que si le compte atteint le PREMIUM !")
    }
  }

  affichaPageSiession(){

      this.getSession();


      document.getElementById('pageSignaler')!.style.display="none";
      document.getElementById('pageSetting')!.style.display="none";

      document.getElementById('pageAjout')!.style.display="none";
      document.getElementById('pageAMiseAJour')!.style.display="none";
      document.getElementById('pageRavitaillement')!.style.display="none";

      document.getElementById('pageSession')!.style.display="block";

    //this.nomProduit="";

      //this.affiMotif();


  }

  retourSetting(){
    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";



    document.getElementById('pageSetting')!.style.display="block";
  }

  dataControlerValidate:any;
  dataControlTab:any;

  dataEchec:any=[]

  confirmerCoupon(){



    if(this.tableCoupon.length<1){

      alert("Coupon est vide !! tu sais...")

    }
    else{

        this.dataControlerValidate={};

        this.i=0;

        this.tableCoupon.forEach(item=>{

        const dataK={
          id_prod:item.ID_Produit,
          qt:item.Qte
        }

        this.dataControlerValidate[this.i]=dataK;

        this.i=this.i+1;

        })

        this.dataControlerValidate['nbr']=this.tableCoupon.length;

        this.etatConn=false;

        this.dataEchec=[];

      this.api.controleurValidationCoupon(this.dataControlerValidate).subscribe(data=>{

        this.data=data;
        this.dataControlTab=data.data;
        this.dataEchec=this.dataControlTab.echec;

        if(this.dataEchec.length<=0){

          document.getElementById('msgBox')!.style.display="block";
          document.getElementById('divCadreBas')!.style.display="none";
          document.getElementById('divBasFin')!.style.display="none";

        }
        else{

          alert("ERROR! Le controlleur de correspondance a dectécté le changement explicite de données avant leurs cheminements, NB Veuillez revoir leur QUANTITES et ressayer")

          alert(this.dataEchec);
        }

      });



    }



  }

  confirmerCouponAnnuler(){

    document.getElementById('msgBox')!.style.display="none";
    document.getElementById('divCadreBas')!.style.display="inline-block";
    document.getElementById('divBasFin')!.style.display="inline-block";

  }

  confirmerProfo(){

    document.getElementById('msgBoxProfo')!.style.display="block";
    document.getElementById('divCadreBas')!.style.display="none";
    document.getElementById('divBasFin')!.style.display="none";

  }

  proformaCouponAnnuler(){

    document.getElementById('msgBoxProfo')!.style.display="none";
    document.getElementById('divCadreBas')!.style.display="inline-block";
    document.getElementById('divBasFin')!.style.display="inline-block";

  }

  etatChangeClient:any=0;

  changeModeClient(){

    if(this.etatChangeClient==0){


      document.getElementById('divMidClient1Val')!.style.display="none";
      document.getElementById('divMidClient2Val')!.style.display="block";

      this.etatChangeClient=1;

      this.etatAchat=1;

    }
    else{

      document.getElementById('divMidClient1Val')!.style.display="block";
      document.getElementById('divMidClient2Val')!.style.display="none";

      this.etatAchat=0;
      this.etatChangeClient=0
    }
  }

  etatChangeProfo:any=0;

  changeModeProforma(){

    if(this.etatChangeProfo==0){

      document.getElementById('divMidClient1')!.style.display="none";
      document.getElementById('divMidClient2')!.style.display="block";

      document.getElementById('btnPref1')!.style.display="block";
      document.getElementById('btnPref2')!.style.display="none";


      this.etatChangeProfo=1

    }
    else{

      document.getElementById('divMidClient1')!.style.display="block";
      document.getElementById('divMidClient2')!.style.display="none";

      document.getElementById('btnPref1')!.style.display="inline-block";
      document.getElementById('btnPref2')!.style.display="inline-block";
      this.etatChangeProfo=0
    }
  }



  infoUserExterne:any=[];

  infoUserExterneAct:any=[];
  infoUserExterneInact:any=[];

  lireConfig(){

    this.infoUserExterne=[];

    this.infoUserExterneAct=[];

    this.infoUserExterneInact=[];

    this.api.lireConfig(this.idPharma).subscribe(data=>{

      this.infoUserExterne=data.data;

      this.infoUserExterneAct=this.infoUserExterne[0];

      this.infoUserExterneInact=this.infoUserExterne[1];

    })

  }

  idInActifValue:any;

  infoRep:any;

  autorisrAcces(){

    this.infoRep=false

    this.api.autoriserUSer(this.idPharma,this.idInActifValue).subscribe(data=>{
      this.infoRep=data.data;

      if(this.infoRep==true){

        alert("Effectué !")

        this.lireConfig()
      }
      else{

        alert("ERROR !")

      }



    })




  }

  tabSession:any=[];

  userConnecte:any=[];
  userDeconncte:any=[]

  getSession(){

    this.userConnecte=[];
    this.userDeconncte=[]

    this.infoRep=false

    this.api.getSession(this.idPharma).subscribe(data=>{

      this.tabSession=data.data;

      this.userConnecte=this.tabSession[0];

      this.userDeconncte=this.tabSession[1];

    })

  }

  idUserDrstroy:any="";

  repDestroyUser:any=false;

  detruireSession(){

    this.repDestroyUser=false;

    this.api.destroySession(this.idPharma,this.idUserDrstroy).subscribe(data=>{

      this.repDestroyUser=data.data;

      if(this.repDestroyUser==true){

        alert('effectué !!');

      }
      else{
        alert('error !');
      }

      this.getSession()

    })

  }

  netVente:any=0;
  qteVente:any=0;
  taillVente:any=0;

  gains:any=0


  recalculterVente(){

    this.netVente=0;
    this.qteVente=0;
    this.gains=0;
    this.taillVente=this.tabdataAChat.length;

    try{

      this.tabdataAChat.forEach(item=>{

        this.netVente=this.netVente+item.PT;
        this.qteVente=this.qteVente+item.Qte;

        this.gains=Math.round(((Number(this.netVente)/Number(this.qteVente))*this.indice)*Number(this.qteVente))


      })
    }
    catch{

    }

  }

  afficheVenteCombiner(){

    alert("Le mode Combiner tient compte de deux conditions : **Trav et **Date");

    this.tabdataAChat=[];

    try{

      if(Number(this.taill)>0){

        this.api.affAchatCombinerTaille(this.idPharma,this.idTrav,this.dateAChat,Number(this.taill)).subscribe(data=>{

          this.tabdataAChat=data.data[0];

        })


      }
      else{

        this.api.affAchatCombiner(this.idPharma,this.idTrav,this.dateAChat).subscribe(data=>{

          this.tabdataAChat=data.data[0];

        })


      }

    }
    catch{

    }

  }

  idActifValue:any;

  refuserAcces(){

    this.infoRep=false

    this.api.refusUser(this.idPharma,this.idActifValue).subscribe(data=>{
      this.infoRep=data.data;

      if(this.infoRep==true){

        alert("Effectué !")

        this.lireConfig()
      }
      else{

        alert("ERROR !")

      }

    })

  }

  infoTaux:any;

  lireTauxChange(){

    this.api.lireTaux(this.idPharma).subscribe(data=>{
      this.infoTaux=data.data;

      this.infoTaux=this.infoTaux[0]
      this.infoTaux=this.infoTaux[0]

      this.taux=this.infoTaux.taux;
      this.indice= this.infoTaux.indice;

    })

  }

  TracJour2:any;
  TracMois2:any;
  TracAnn2:any;

  TracJour1:any;
  TracMois1:any;
  TracAnn1:any;

  dataTrac1:any;
  dataTrac2:any;

  dataDistincProduit:any=[];

  dataProdTracerDist:any=[];

  dataDistincCOmmande:any=[];

  selectDIstinctProduit(){

    this.dataProdTracerDist=[];

    this.api.selectDistinctProduitTracerT(this.idPharma,this.idProduitTracage).subscribe(data=>{

      this.dataProdTracerDist=data.data[0];

    })


    if(Number(this.TracJour1)>0 && Number(this.TracMois1)>0 && Number(this.TracAnn1)>0){

      if(Number(this.TracJour2)>0 && Number(this.TracMois2)>0 && Number(this.TracAnn2)>0){

        this.dataTrac1=this.TracAnn1 + "-"+this.TracMois1+"-"+this.TracJour1;

        this.dataTrac2=this.TracAnn2 + "-"+this.TracMois2+"-"+this.TracJour2;



    }


    }

  }

  selectDIstinctCommande(){

    if(this.sepTracerProduit=="Oui"){

      if(Number(this.TracJour1)>0 && Number(this.TracMois1)>0 && Number(this.TracAnn1)>0){

        if(Number(this.TracJour2)>0 && Number(this.TracMois2)>0 && Number(this.TracAnn2)>0){

          this.dataTrac1=this.TracAnn1 + "-"+this.TracMois1+"-"+this.TracJour1;

          this.dataTrac2=this.TracAnn2 + "-"+this.TracMois2+"-"+this.TracJour2;



          this.api.selectDistinctOneCommande(this.idPharma,this.dataTrac1,this.dataTrac2).subscribe(data=>{
            this.dataDistincCOmmande=data.data[0];

          })
      }


      }

    }
    else{

      this.api.selectDistinctOneCommandeTOP50(this.idPharma).subscribe(data=>{
        this.dataDistincCOmmande=data.data[0];

      })

    }





  }

  tabIndoComm:any=[];

  affInfoCommande(){

    this.api.affAchatInfoCommande(this.idPharma,this.idCommeTracage).subscribe(data=>{

      this.tabIndoComm=data.data[0];

    })


  }

  sepTracerProduit:any='Non';

  tabInfoProdComm:any=[]

  affInfoProduitCommander(){

    this.tabInfoProdComm=[];

    if(this.sepTracerProduit=="Non"){

      this.api.affAchageInfoProduit(this.idPharma,this.idProduitTrac).subscribe(data=>{

        this.tabInfoProdComm=data.data;

      })

    }
    else{

        if(Number(this.TracJour1)>0 && Number(this.TracMois1)>0 && Number(this.TracAnn1)>0){

          if(Number(this.TracJour2)>0 && Number(this.TracMois2)>0 && Number(this.TracAnn2)>0){

            this.dataTrac1=this.TracAnn1 + "-"+this.TracMois1+"-"+this.TracJour1;

            this.dataTrac2=this.TracAnn2 + "-"+this.TracMois2+"-"+this.TracJour2;

            this.api.affAchageInfoProduitDATE(this.idPharma,this.idProduitTrac,this.dataTrac1,this.dataTrac2).subscribe(data=>{

              this.tabInfoProdComm=data.data;

            })
        }


        }


    }


  }

  AnneDateMotif1:any;
  moisAnneDateMotif1:any;
  jourAnneDateMotif1:any;

  AnneDateMotif2:any;
  moisAnneDateMotif2:any;
  jourAnneDateMotif2:any;

  dataMotif2:any;
  dataMotif1:any;

  idUserMotif:any="";

  selectDIstinctTravMotif(){

    if(Number(this.jourAnneDateMotif1)>0 && Number(this.moisAnneDateMotif1)>0 && Number(this.AnneDateMotif1)>0){

      if(Number(this.jourAnneDateMotif2)>0 && Number(this.moisAnneDateMotif2)>0 && Number(this.AnneDateMotif2)>0){

        this.dataMotif2=this.AnneDateMotif2 + "-"+this.moisAnneDateMotif2+"-"+this.jourAnneDateMotif2;

        this.dataMotif1=this.AnneDateMotif1 + "-"+this.moisAnneDateMotif1+"-"+this.jourAnneDateMotif1;



        this.api.selectDistinctOneCommande(this.idPharma,this.dataTrac1,this.dataTrac2).subscribe(data=>{
          this.dataDistincCOmmande=data.data[0];

        })

        alert(this.dataMotif2)

        alert(this.dataMotif1)
    }

    }

  }



  idMotifSend:any="";

  tabMotifCharger:any=[];

  selectDIstinctMotifSend(){

    if(Number(this.jourAnneDateMotif1)>0 && Number(this.moisAnneDateMotif1)>0 && Number(this.AnneDateMotif1)>0){

      if(Number(this.jourAnneDateMotif2)>0 && Number(this.moisAnneDateMotif2)>0 && Number(this.AnneDateMotif2)>0){

        this.dataMotif1=this.AnneDateMotif1 + "-"+this.moisAnneDateMotif1+"-"+this.jourAnneDateMotif1;

        this.dataMotif2=this.AnneDateMotif2 + "-"+this.moisAnneDateMotif2+"-"+this.jourAnneDateMotif2;

        this.api.selectDistincUserMotif(this.idPharma,this.dataMotif1,this.dataMotif2).subscribe(data=>{

          this.tabMotifCharger=data.data[0];

        })


    }


    }

  }

  tabUserMotif:any=[];
  prefIdUserMotif:any="";

  selectDIstinctMotifUser(){

    if(this.prefIdUserMotif.length>0){

      this.api.selectDistincUserMotifUser(this.idPharma,this.prefIdUserMotif).subscribe(data=>{

        this.tabUserMotif=data.data[0];

      })

    }
    else{

      this.api.selectDistincUserMotifUnivsersell(this.idPharma).subscribe(data=>{

        this.tabUserMotif=data.data[0];

      })

    }


  }

  affichemotifDate(){
    alert('lol')
  }

  tabDateMotif:any=[]

  selectDIstinctMotifDate(){

    try{

        if(Number(this.tailleMotif)>0){

          this.api.selectDistincUserMotifDateTaille(this.idPharma,Number(this.tailleMotif)).subscribe(data=>{

            this.tabDateMotif=data.data[0];

          })

        }
        else{

          this.api.selectDistincUserMotifDate(this.idPharma).subscribe(data=>{

            this.tabDateMotif=data.data[0];

          })

        }

      }
      catch{

      }


  }


  tabdataMotif1:{montant:number,nom_motif:string,detail_motif:string,date_timemotif:string,id_trav:string,date_createServer:string,date_motif:string}[]=[];







  affichMotif(){

    if(Number(this.jourAnneDateMotif1)>0 && Number(this.moisAnneDateMotif1)>0 && Number(this.AnneDateMotif1)>0){

      if(Number(this.jourAnneDateMotif2)>0 && Number(this.moisAnneDateMotif2)>0 && Number(this.AnneDateMotif2)>0){

        this.dataMotif1=this.AnneDateMotif1 + "-"+this.moisAnneDateMotif1+"-"+this.jourAnneDateMotif1;

        this.dataMotif2=this.AnneDateMotif2 + "-"+this.moisAnneDateMotif2+"-"+this.jourAnneDateMotif2;

        this.api.afficheMotif(this.idPharma,this.idMotifSend,this.dataMotif1,this.dataMotif2).subscribe(data=>{

          this.tabdataMotif1=data.data[0];

        })


    }


    }


  }

  tabdataMotif2:any=[];

  affichMotifTrav(){

   // this.api.affUserMotif(this.idPharma,this.idUserMotif,this.dataMotif1,this.dataMotif2).subscribe(data=>{

     // this.tabdataMotif1=data.data[0];

    //})

    try{

      if(Number(this.tailleMotif)>0){

        this.api.afficheDistincUserMotifUserTaille(this.idPharma,this.idUserMotif,Number(this.tailleMotif)).subscribe(data=>{

          this.tabdataMotif1=data.data[0];

        })


      }
      else{

        this.api.afficheDistincUserMotifUser(this.idPharma,this.idUserMotif).subscribe(data=>{

          this.tabdataMotif1=data.data[0];

        })


      }
    }
    catch{

    }


  }

  dateMotif:any=''

  affichMotifTravDates(){

     try{

       if(Number(this.tailleMotif)>0){

         this.api.afficheDistincUserDateUserTaille(this.idPharma,this.dateMotif,Number(this.tailleMotif)).subscribe(data=>{

           this.tabdataMotif1=data.data[0];

         })


       }
       else{

         this.api.afficheDistincDateMotifUser(this.idPharma,this.dateMotif).subscribe(data=>{

           this.tabdataMotif1=data.data[0];

         })


       }
     }
     catch{

     }


   }

   affichMotifTravCombine(){

    try{

      if(Number(this.tailleMotif)>0){

        this.api.selectDistincUserMotifCombinerTaille(this.idPharma,this.idUserMotif,this.dateMotif,Number(this.tailleMotif)).subscribe(data=>{

          this.tabdataMotif1=data.data[0];

        })


      }
      else{

        this.api.selectDistincUserMotifCombiner(this.idPharma,this.idUserMotif,this.dateMotif).subscribe(data=>{

          this.tabdataMotif1=data.data[0];

        })


      }
    }
    catch{

    }


  }

  taillePeremption:number=0;

  tabProduitPeremption:{pu:number,stock_p:number,  matricule:string,nom:string,nbr_jour:number,date_exp:string,date_createServer:string}[]=[];


  affPeremption(){

    if(this.taillePeremption>0){

      this.api.affPeremptionTaille(this.idPharma,this.taillePeremption).subscribe(data=>{

        this.tabProduitPeremption=data.data[0];

      })

    }
    else{

      this.api.affPeremption(this.idPharma).subscribe(data=>{

        this.tabProduitPeremption=data.data[0];

      })

    }

  }

  histo1(){

    document.getElementById('textRepHisto1')!.style.color="rgb(219, 28, 28)";

    document.getElementById('textRepHisto1')!.innerText="Error !"

  }

  bt1Histo:any="Checker";

  repInfoCheckSystem:any={}

  checkerHisto1(){

    if(this.bt1Histo=="Checker"){

      this.bt1Histo="Terminez";

      this.api.checkingSysteme(this.idPharma).subscribe(data=>{

        this.repInfoCheckSystem=data.data;

      })


      document.getElementById('histoHidend1')!.style.display="block";

      document.getElementById('cadreHisto1')!.style.height="auto";

      if(this.repHistoSYsteme==true){

        document.getElementById('textRepHisto1')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto1')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto1')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto1')!.innerText="Error !"

      }



    }
    else{

      document.getElementById('histoHidend1')!.style.display="none";

      document.getElementById('cadreHisto1')!.style.height="300px"


      this.bt1Histo="Checker"

    }

  }

  bt2Histo:any="Checker";

  repInfoCheckProduitFils:any=[];

  repInfoCheckProduit:any={};

  checkerHisto2(){

    if(this.bt2Histo=="Checker"){

      this.bt2Histo="Terminez";

      document.getElementById('histoHidend2')!.style.display="block";

      document.getElementById('cadreHisto2')!.style.height="auto";

      this.api.checkingProduit(this.idPharma).subscribe(data=>{

        this.repInfoCheckProduit=data.data;

        this.repInfoCheckProduitFils=this.repInfoCheckProduit.lastOP

      })



    }
    else{

      document.getElementById('histoHidend2')!.style.display="none";

      document.getElementById('cadreHisto2')!.style.height="300px"


      this.bt2Histo="Checker"

    }

  }

  repInfoCheckAchat:any={};

  repInfoCheckAchatFils:any=[]

  bt3Histo:any="Checker";

  checkerHisto3(){

    if(this.bt3Histo=="Checker"){

      this.bt3Histo="Terminez";

      document.getElementById('histoHidend3')!.style.display="block";

      document.getElementById('cadreHisto3')!.style.height="auto";

      this.api.checkingAchat(this.idPharma).subscribe(data=>{

        this.repInfoCheckAchat=data.data;

        this.repInfoCheckAchatFils=this.repInfoCheckAchat.lastOP;

      })


    }
    else{

      document.getElementById('histoHidend3')!.style.display="none";

      document.getElementById('cadreHisto3')!.style.height="300px"


      this.bt3Histo="Checker"

    }

  }

  repInfoCheckAMotif:any={};

  bt4Histo:any="Checker";

  repInfoCheckAMotifFils:any=[]

  checkerHisto4(){

    if(this.bt4Histo=="Checker"){

      this.bt4Histo="Terminez";



      document.getElementById('histoHidend4')!.style.display="block";

      document.getElementById('cadreHisto4')!.style.height="auto";

      this.api.checkingMotif(this.idPharma).subscribe(data=>{

        this.repInfoCheckAMotif=data.data;

        this.repInfoCheckAMotifFils=this.repInfoCheckAMotif.lastOP;

      })


    }
    else{

      document.getElementById('histoHidend4')!.style.display="none";

      document.getElementById('cadreHisto4')!.style.height="300px"


      this.bt4Histo="Checker"

    }

  }

  bt5Histo:any="Checker";

  repInfoCheckACommande:any={};

  repInfoCheckACommandeFils:any=[]

  checkerHisto5(){

    if(this.bt5Histo=="Checker"){

      this.bt5Histo="Terminez";

      document.getElementById('histoHidend5')!.style.display="block";

      document.getElementById('cadreHisto5')!.style.height="auto";

      this.api.checkingCommande(this.idPharma).subscribe(data=>{

        this.repInfoCheckACommande=data.data;

        this.repInfoCheckACommandeFils=this.repInfoCheckACommande.lastOP;

      })



    }
    else{

      document.getElementById('histoHidend5')!.style.display="none";

      document.getElementById('cadreHisto5')!.style.height="300px"


      this.bt5Histo="Checker"

    }

  }

  repDataAlarme:any=[]

  repDataAlarmeEdit:any=[]

  getAlarnmProduit(){

    if(this.etatApp==false){

      this.etatApp=true

      this.api.getAlertProduit(this.bdFille).subscribe(data=>{

      this.repDataAlarme=data.data

      this.repDataAlarmeEdit =data.data

      alert('Termine')

      this.etatApp=false

    })


    }
    else{

      this.msgEncours()


    }


  }



  // HISTORISATION DES INFORMATIONS SYSTEME

  repHistoSYsteme:any=[];



  historisationSyseme(){

    this.api.historistionSysteme(this.idPharma).subscribe(data=>{

      this.repHistoSYsteme=data.data['infoTraitementSystem'];

      alert('Terminez !!');

      if(this.repHistoSYsteme==true){

        document.getElementById('textRepHisto1')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto1')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto1')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto1')!.innerText="Error !"

      }


    })

  }

  repHistoPoduit:any=[];

  repHistoPoduitEssaie:any=[];

  valableProd:any=[];

  echecProd:any=[];

  historisationProduit(){

    this.api.historistionProduit(this.idPharma).subscribe(data=>{



      this.repHistoPoduit=data.data['infoTraitementProduit'];

      this.valableProd=data.data['produit_New_Valable'];

      this.echecProd=data.data['produit_New_echec'];

      alert('Terminez !!');

      if(this.repHistoPoduit==true){

        document.getElementById('textRepHisto2')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto2')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto2')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto2')!.innerText="Error !"

      }


    })

  }


  repHistoAchat:any=[];

  historisationACHAT(){

    this.api.historistionAchat(this.idPharma).subscribe(data=>{

      this.repHistoAchat=data.data['infoTraitementAchat'];

      alert('Terminez !!');

      if(this.repHistoAchat==true){

        document.getElementById('textRepHisto4')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto4')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto4')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto4')!.innerText="Error !"

      }


    })

  }



  repHistoMotif:any=[];

  historisationMotif(){

    this.api.historistionMotif(this.idPharma).subscribe(data=>{

      alert("Terminez");

      this.repHistoMotif=data.data['infoTraitementMotif'];

      if(this.repHistoMotif==true){

        document.getElementById('textRepHisto3')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto3')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto3')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto3')!.innerText="Error !"

      }


    })

  }

  repHistoComm:any=[];

  historisationCOmm(){

    this.api.historistionComm(this.idPharma).subscribe(data=>{

      this.repHistoComm=data.data['infoTraitementComm'];

      alert('Terminez !!');

      if(this.repHistoComm==true){

        document.getElementById('textRepHisto5')!.style.color="rgb(58, 148, 58)";

        document.getElementById('textRepHisto5')!.innerText="Succefull !"

      }
      else{

        document.getElementById('textRepHisto5')!.style.color="rgb(219, 28, 28)";

        document.getElementById('textRepHisto5')!.innerText="Error !"

      }


    })

  }
  anulSup(){
    document.getElementById('msgFantome2')!.style.display="none";
  }

  anulAnnexer(){
    document.getElementById('msgFantome1')!.style.display="none";
  }

  openAnnexerFnatome(){

    document.getElementById('msgFantome1')!.style.display="block";

  }

  openSupFnatome(){

    document.getElementById('msgFantome2')!.style.display="block";

  }

  repEtatSupFantom:any=false;

  supprimerFantome(){

    this.api.supprimerFichierFantome(this.idPharma).subscribe(data=>{

      this.repEtatSupFantom=data.data;

      if(this.repEtatSupFantom==true){

        alert('Effectué !');

      }
      else{
        alert('ERROR !');
      }
  }

)
  }


  repEtatAnnexerFantom:any=false;

  annexerFantome(){

    this.api.annexerFichierFantome(this.idPharma).subscribe(data=>{

      this.repEtatAnnexerFantom=data.data;

      if(this.repEtatAnnexerFantom==true){

        alert('Effectué !');

      }
      else{
        alert('ERROR !');
      }
  })


}

tabInfoSyncho:any=['Synchrone','ASynchrone'];

modeTraitement:any="Synchrone";

//modeTraitement:any="ASynchrone";

dataServiceAutoriser:any=[];

serviceAutoriser(){

  this.api.serviceAutorises(this.idPharma).subscribe(data=>{

    this.dataServiceAutoriser=data.data;

})

}

dataServiceInterdis:any=[];

serviceInterdis(){

  this.api.serviceNonAutorises(this.idPharma).subscribe(data=>{

    this.dataServiceInterdis=data.data;

})

}

idServiceAut:any='';
idServiceNonAut:any='';

autoriserService(){

  this.serviceInterdis()

  this.serviceAutoriser()

  this.api.autoriserService(this.idPharma,this.idServiceNonAut).subscribe(data=>{

    this.rep=data.data;

    if(this.rep==true){

      alert('effectué !')

      this.serviceInterdis()

      this.serviceAutoriser()

    }

})

}

interdireService(){

  this.api.interdireService(this.idPharma,this.idServiceAut).subscribe(data=>{

    this.rep=data.data;

    if(this.rep==true){

      alert('effectué !')

      this.serviceInterdis()

      this.serviceAutoriser()

    }

})

}

tabSituationNormale:any=[];
infoTabSituationNormale:any={};

situationNomale(){

  this.api.situationNormal(this.idPharma).subscribe(data=>{

    this.tabSituationNormale=data.data[0];

    this.infoTabSituationNormale=data.data[1];

})

}


tabSituationCritique:any=[];
infoTabSituationCritique:any={};

situationCritique(){

  this.api.situationCritique(this.idPharma).subscribe(data=>{

    this.tabSituationCritique=data.data[0];

    this.infoTabSituationCritique=data.data[1];

})

}

tabCH_A:any=[]

actifDispoCH_A(){

  this.api.actifProduitDispo(this.idPharma).subscribe(data=>{

    this.tabCH_A=data.data;

})

}

tabCH_APassif:any=[]

actifDispoCH_APassif(){

  this.api.actifProduiCirculant(this.idPharma).subscribe(data=>{

    this.tabCH_APassif=data.data;

})

}

tabActifDispo:any=[]

actifDispo(){

  this.api.actifDispo(this.idPharma).subscribe(data=>{

    this.taux=data.data.taux[0].taux;

    this.tabActifDispo=data.data.infoDispo[1];

    this.tabActifCirculant=data.data.infoGen[2];

})

}


tabActifCirculant:any=[]

tabActifDispoo:any=[]
tabActifGenn:any=[]

dataReup:any=[]

tabDateInfoSituation:any=[]

tabProdCritique:any=[]
tabProdNormale:any=[]

actifCirculant(){

  this.api.actifCirculant(this.idPharma).subscribe(data=>{

    this.tabActifCirculant=data.data;

    this.tabActifDispoo=this.tabActifCirculant['infoDispo']

    this.tabActifGenn=this.tabActifCirculant['infoGen']

    //this.dataReup=data.data[1]

    this.taux=this.tabActifCirculant['taux'][0].taux;
})


this.api.situationInfo(this.idPharma).subscribe(data=>{

  this.tabDateInfoSituation=data.data;

  this.tabProdCritique=this.tabDateInfoSituation['critique']

  this.tabProdNormale=this.tabDateInfoSituation['normale']

})

}

actualiserSituationNormal(){

  this.situationNomale();

}

actualiserSituationCritique(){

  this.situationCritique();

}

actualiserActifCirculant(){

  this.actifDispoCH_APassif();

}

actualiserDispo(){

  this.actifDispoCH_A();

}

tailleOP:any=''
valOP:any=''

tailleFict:any=''
tailleEP:any=''

actualiserDiagramme(){

  this.actifCirculant();

  this.api.getVusEnsebleStock(this.idPharma).subscribe(data=>{

    this.dataTabTaill=data.data;

    this.tailleOP=this.dataTabTaill[0][0].tailleOp;

    this.tailleEP=this.dataTabTaill[1][0].tailleEP;
    this.tailleFict=this.dataTabTaill[2][0].tailleFict;

    this.valOP=this.dataTabTaill[4][0].valOp;



  })

  alert('Actualisation terminée')


}

closAvertissement(){

  document.getElementById('cadreAvertissement')!.style.display="none";

}

listOuiNon:any=['Oui','Non'];


sepaDating:any="Non";

gmailValue:any='';

tabDataPrise:any=[];


dataAccesVerif:{active:number}[]=[];


decisionAcces:any='Donner Acces'

dataTabSession:any=[];

verrifDating(){

  if(this.sepaDating=="Oui"){

    //alert('dating true');

  }
  else{

    this.dataTabSession=[];

    this.api.affichePrise(this.idPharma,this.gmailValue).subscribe(data=>{

      this.tabDataPrise=data.data[0];

      this.tabdataLikePrisePrescription=data.data[1];

  })

  this.api.verifAccessABonne(this.idPharma,this.gmailValue).subscribe(data=>{

    this.decisionAcces='Donner Acces'

    this.dataAccesVerif=[];

    this.dataAccesVerif=data.data;

    this.dataAccesVerif.forEach(item=>{

      if(item.active==1){

        this.decisionAcces='Refuser Acces'

      }
      else{

         this.decisionAcces='Donner Acces'

      }

    })

  })

  this.api.getSessionAbonneId(this.idPharma,this.gmailValue).subscribe(data=>{

    this.dataTabSession=data.data;

  })

  }

}

prefiGmail:any=''

tabdataLikePrise:any=[];

tabdataLikePrisePrescription:any=[];

chargerLikePrise(){

  this.api.chargeLikePrise(this.idPharma,this.prefiGmail).subscribe(data=>{

    this.tabdataLikePrise=data.data;

})

}

repOp:any=false;

dictDataDend:any={};

dataTabGlob:any=[];

gestionnaireAcces(){

  const dataDend={
    id_pharma:Number(this.idPharma),
    id_abonne:this.gmailValue
  }

  this.dataTabGlob=[]

  this.dataTabGlob.push(dataDend)

  this.dictDataDend={};

  this.dictDataDend['data']=this.dataTabGlob;

  if(this.decisionAcces.toLowerCase()=='refuser acces'){

    this.repOp=false;

    this.api.refuserAccessABonne(this.dictDataDend).subscribe(data=>{

      this.repOp=data.data.update;

      if(this.repOp==true){

        alert('Effectué')

      }
      else{

        alert('arror')

      }

  })

  }
  else if(this.decisionAcces.toLowerCase()=='donner acces'){

    this.repOp=false;

    this.api.autootiserAccessABonne(this.dictDataDend).subscribe(data=>{

      this.repOp=data.data.create;

      if(this.repOp==true){

        alert('Effectué')

      }
      else{

        alert('arror')

      }

  })

  }

  else{

    alert('vide vide ')

  }

}

dataRepProd1:any=[]
dataRepTail1:any=[]

actualiserProduitOperationel(){

  this.api.getProduitOperationnel(this.idPharma).subscribe(data=>{

    this.dataRepProd1=data.data[0];

    this.dataRepTail1=data.data[1]

    this.tailleOP=data.data[1][0].taille

  })

  alert('Actualisation terminée ! ')
}


dataRepProd2:any=[]
dataRepTail2:any=[]

actualiserProduitEpuiser(){

  this.api.getProduitEpuiser(this.idPharma).subscribe(data=>{

    this.dataRepProd2=data.data[0];

    this.dataRepTail2=data.data[1]

    this.tailleEP=data.data[1][0].taille

  })

  alert('Actualisation terminée ! ')

}

dataRepProd3:any=[]
dataRepTail3:any=[]

actualiserProduitFictif(){

  this.api.getProduitFictif(this.idPharma).subscribe(data=>{

    this.dataRepProd3=data.data[0];

    this.dataRepTail3=data.data[1]

    this.tailleFict=data.data[1][0].taille

  })

  alert('Actualisation terminée !')

}

tailleMotif:any="";

afficheTailleMotif(){

  this.api.affUserMotifGen(this.idPharma,this.tailleMotif).subscribe(data=>{

    this.tabdataMotif1=data.data[0];

  })

}

verifDeleteFictif(){

  document.getElementById('divPOP')!.style.display="block";

}

fermerPOP(){

  document.getElementById('divPOP')!.style.display="none";

}

validatDeliteFictif(){

  this.api.deleteProduitFictif(this.idPharma).subscribe(data=>{

    try{

      if(data.etat=true){

        document.getElementById('divPOP')!.style.display="none";

        alert('Effectué !')

        this.actualiserDiagramme()

      }
      else{

        alert('demande a échoué !')

      }

    }
    catch{

      alert('ERROR !')

    }


  })



}

tailleTabMotif:any=0;
netTabMotif:any=0;

calculeMotifSend(){

  this.tailleTabMotif=0
  this.netTabMotif=0

  this.tabdataMotif1.forEach(item=>{

    this.netTabMotif=this.netTabMotif+Number(item.montant);

    this.tailleTabMotif=this.tailleTabMotif+1;

  })


}


tailleTabPeremption:any=0;
netTabPeremption:any=0;

calculePeremptionSend(){

  this.tailleTabPeremption=0
  this.netTabPeremption=0

  this.tabProduitPeremption.forEach(item=>{

    this.netTabPeremption=this.netTabPeremption+(Number(item.pu)*Number(item.stock_p));

    this.tailleTabPeremption=this.tailleTabPeremption+1;

  })


}

urlFileGenerate:any=''

geneteFileExcel(typeFile:any){


  if(typeFile=='expire'){

      this.api.generateFileExpire(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })

  }
  else if(typeFile=='rupture'){


    this.api.generateFileRupture(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })


  }
  else if(typeFile=='prodOperationnel'){


    this.api.generateFileProd_OP(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })



  }
  else if(typeFile=='prodFictif'){


    this.api.generateFileFictif(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })



  }
  else if(typeFile=='situationNormale'){

    this.api.generateFileProd_SituationNormal(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })


  }
  else if(typeFile=='situationCritique'){

    this.api.generateFileProd_SituationCritique(this.idPharma).subscribe(data=>{

      setTimeout(()=>{

        if(this.urlFileGenerate=data.etat.createFile==true){

          this.urlFileGenerate=data.etat.urlFile;

          alert(' File généré avec succes !! Veuillez desormais télécharger');

        }
        else{

          alert(' ERROR !! operation a échoué');

        }


      },100)

    })



  }


}

telechargerFileExcel(){

  window.open(this.api.server + this.urlFileGenerate,'_blank')


}

refFac:any=0

dataRefFac:any=[]

openPaiement(ref:any){

  this.dataRefFac=ref

  document.getElementById('divFacture')!.style.display="none";
  document.getElementById('divPaiement')!.style.display="block";


  this.api.getPaiement(this.idPharma).subscribe(data=>{

    this.dataPaiement=data.data;

  })


}

closePaiement(){

  alert('Vous avez encore une echéance didiée pour te mettre en ordre avant l heure')

  document.getElementById('divFacture')!.style.display="none";

  document.getElementById('divConn')!.style.display="none";
  document.getElementById('divApp')!.style.display="block";

  document.getElementById('pageSyntheseAcceuil')!.style.display="block";

  document.getElementById('pageSetting')!.style.display="none";


}

repPaiement:any

telPay:any=''

transfererPay(){


  const data={

    id_pharma:this.idPharma,
    id_facture:this.dataRefFac.id_facture,
    mobileMoney:this.telPay,
    montant:this.dataRefFac.montant,
    motif:this.dataRefFac.commentaire,
    mois:this.dataRefFac.mois

}

  this.api.createPaiement(data).subscribe(data=>{

    this.repPaiement=data;

    if(this.repPaiement.create==true){

      alert('Demande de paiement envoyée avec succes, de ce fait, Veuilez taper le code sur telephone avant 2 min pour la confirmation')

      this.api.getPaiement(this.idPharma).subscribe(data=>{

        this.dataPaiement=data.data;

      })


    }
    else {

      alert('ERROR !')
    }

  })




}



dataVerif:any=[]



dataPaiement:any=[]

actualiserPay(){

  this.api.getPaiement(this.idPharma).subscribe(data=>{

    this.dataPaiement=data.data;

  })

}

dataExpGen:any=[]

getInfoPeremption(){

  if(this.etatApp==false){

      this.etatApp=true

      this.api.getDashEXP(this.idPharma).subscribe(data=>{

      this.dataExpGen=data;

      this.etatApp=false

      alert('ternmine')

    })



  }
  else{

    this.msgEncours()


  }





}

masqueCritiqye:any=false

idRef:any=1

visualiseur(ref:any){

   this.idRef=ref

  document.getElementById('pageSyntheseAcceuil')!.style.display="none";
  document.getElementById('cadreVisualiseur')!.style.display="block";

}

closeVisualiseur(){

  document.getElementById('pageSyntheseAcceuil')!.style.display="block";
  document.getElementById('cadreVisualiseur')!.style.display="none";


}

actualizerProduit(){

  this.api.getDashBoardServer(this.idPharma).subscribe(data=>{

    this.tabDashBoard=data;

    this.tabDashSssion=this.tabDashBoard['session']
    this.tabDashVente=this.tabDashBoard['vente']
    this.tabDashExpiration=this.tabDashBoard['expiration']

    this.tabDashExpirationDetail=this.tabDashBoard['expirationDetail']

    this.tabDashEpuise=this.tabDashBoard['epuises']

    this.tabDashEpuiseDetail=this.tabDashBoard['epuisesDetail']


    this.tabDashSituationNormal=this.tabDashBoard['situationNormal']
    this.tabDashSituationCritique=this.tabDashBoard['situationCritique']

    this.tabdataProdOP=this.tabDashBoard['operationnel']

    this.tabdataProdOPdetail=this.tabDashBoard['operationnelDetail']

    this.tabdataProdFictif=this.tabDashBoard['fictif']

  })

}

actualiserUpdate(){

  if(this.etatApp==false){

    this.etatApp=true

    if(this.prefixFilter.length >  0 ){

      this.api.getDashPROD(this.idPharma,this.prefixFilter).subscribe(data=>{

      this.tabdataProdOP=data[1]

      this.tabdataProdOPdetail=data[2]

      alert('Chargement termine')

       this.etatApp=false

    })


    }
    else{

      this.api.getDashPRODRcine(this.idPharma).subscribe(data=>{

      this.tabdataProdOP=data[1]

      this.tabdataProdOPdetail=data[2]

      alert('termine')

      this.etatApp=false

    })



    }



  }
  else{

    this.msgEncours()
  }


}

prefixFilter:any=''

actualizerPRODGen(){

  if(this.etatApp==false){

    this.etatApp=true

    if(this.idRef==3){

    if(this.prefixFilter.length >  0 ){

      this.api.getDashPROD(this.idPharma,this.prefixFilter).subscribe(data=>{

      this.tabdataProdOP=data[1]

      this.tabdataProdOPdetail=data[2]

      alert('termine')

      this.etatApp=false

    })


    }
    else{

      this.api.getDashPRODRcine(this.idPharma).subscribe(data=>{

      this.tabdataProdOP=data[1]

      this.tabdataProdOPdetail=data[2]

      alert('termine')

      this.etatApp=false

    })



    }



  }
  else if(this.idRef==2){

      if(this.prefixFilter.length >  0 ){

        this.api.getDashRUPTURELIKE(this.idPharma,this.prefixFilter).subscribe(data=>{

        this.tabDashEpuise=data[0]

        this.tabDashEpuiseDetail=data[1]

        alert('termine')

        this.etatApp=false

    })

      }
      else{

      this.api.getDashRUPTURE(this.idPharma).subscribe(data=>{

        this.tabDashEpuise=data[0]

        this.tabDashEpuiseDetail=data[1]

        alert('termine')

        this.etatApp=false



    })

  }


  }
  else if(this.idRef==1){

     if(this.prefixFilter.length >  0 ){

      this.api.getDashEXPLIKE(this.idPharma,this.prefixFilter).subscribe(data=>{

        this.tabDashExpiration=data[0]

        this.tabDashExpirationDetail=data[1]

        alert('termine')

        this.etatApp=false

    })


      }
      else{

      this.api.getDashEXP(this.idPharma).subscribe(data=>{

        this.tabDashExpiration=data[0]

        this.tabDashExpirationDetail=data[1]

        alert('termine')

        this.etatApp=false

    })

  }


  }


  }
  else{

    this.msgEncours()

  }




}


openDahBoard(){

    this.api.getDashBoardServer(this.idPharma).subscribe(data=>{

    this.tabDashBoard=data;

    this.tabDashSssion=this.tabDashBoard['session']
    this.tabDashVente=this.tabDashBoard['vente']

    this.tabDashExpiration=this.tabDashBoard['expiration']

    this.tabDashExpirationDetail=this.tabDashBoard['expirationDetail']

    this.tabDashEpuise=this.tabDashBoard['epuises']

    this.tabDashEpuiseDetail=this.tabDashBoard['epuisesDetail']


    this.tabDashSituationNormal=this.tabDashBoard['situationNormal']
    this.tabDashSituationCritique=this.tabDashBoard['situationCritique']

    this.tabdataProdOP=this.tabDashBoard['operationnel']

    this.tabdataProdOPdetail=this.tabDashBoard['operationnelDetail']

    this.tabdataProdFictif=this.tabDashBoard['fictif']

  })





    document.getElementById('pageSyntheseAcceuil')!.style.display="block";
    document.getElementById('cadreVisualiseur')!.style.display="none";

  //if(this.etatMafia==1){

    document.getElementById('pageAjout')!.style.display="none";
    document.getElementById('pageAMiseAJour')!.style.display="none";
    document.getElementById('pageRavitaillement')!.style.display="none";
    document.getElementById('pageSignaler')!.style.display="none";
    document.getElementById('pageSession')!.style.display="none";

    if(this.etatmobile < 600){

      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";

      document.getElementById('pageSetting')!.style.display="none";





      document.getElementById('menu1')!.style.display="inline-block";
      document.getElementById('menu3')!.style.display="none";

      document.getElementById('menu3')!.style.width="20%";
      document.getElementById('menu3')!.style.height="100%";

      document.getElementById('menu0')!.style.width="100%";
      document.getElementById('menu0')!.style.height="70px";

      this.etat=0;
  }
  else{
      document.getElementById('pageVente')!.style.display="none";
      document.getElementById('pageJournal')!.style.display="none";
      document.getElementById('pageMode')!.style.display="none";

      document.getElementById('pageSetting')!.style.display="none";


  }



}


dataDeletePreproRupture:any=[]

readPositionRupture(refProduit:any){

  if(this.dataDeletePreproRupture.some((p:Operationnel)=>p.matricule===refProduit.matricule)){

    alert('DeSelectionne ')

    this.dataDeletePreproRupture=this.dataDeletePreproRupture.filter((p:Operationnel)=>p.matricule !==refProduit.matricule)

  }
  else{

    alert('Selectionne ')

    this.dataDeletePreproRupture.push(refProduit)


  }


}

dataDeletePrepro:any=[]

readPosition(refProduit:any){

  if(this.dataDeletePrepro.some((p:Operationnel)=>p.matricule===refProduit.matricule)){

    alert('DeSelectionne ')

    document.getElementById('cadremsgDelete')!.style.display="none";

    this.dataDeletePrepro=this.dataDeletePrepro.filter((p:Operationnel)=>p.matricule !==refProduit.matricule)

  }
  else{

    alert('Selectionne ')

    this.dataDeletePrepro.push(refProduit)

    document.getElementById('cadremsgDelete')!.style.display="block";


  }


}
  dataValueUpdate:any={}

  idUpdate:any=''

  readPositionUpdate(refProduit:any){

    this.dataValueUpdate=refProduit

    this.commGen=refProduit.qteBcommande
    this.alertGen=refProduit.qteBalert
    this.benGen=refProduit.benefice
    this.expGen=refProduit.date_exp
    this.stockGen=refProduit.stock_p
    this.prixGen=refProduit.prix
    this.momGen=refProduit.nom


    this.idUpdate=refProduit.matricule

    document.getElementById('cadreUpdateProduit')!.style.display="block";

}

  repDelProd:any=''

  deleteProduitAll(){

    const data={

        data:this.dataDeletePrepro,

        refPharma:this.idPharma

    }

      this.api.detroyProduitAll(data).subscribe(data=>{

      this.repDelProd=data;

      if(this.repDelProd.data==true){

        alert("effectue")

        this.dataDeletePrepro=[]

        this.actualizerProduit()


      }


      })


  }

  deleteProduitAllEXP(){

    if(this.etatApp==false){

      this.etatApp=true

      const data={

        data:this.refexpValu,

        refPharma:this.idPharma

    }

      this.api.detroyProduitAll(data).subscribe(data=>{

      this.repDelProd=data;

      if(this.repDelProd.data==true){

        alert("effectue")

        this.etatApp=false

        this.getInfoPeremption()


      }
      else{

        this.etatApp=false

        alert("ERROR")

      }


      })


    }
    else{

      this.msgEncours()

    }


  }


  deleteProduitAllRevision(){

    const data={

        data:this.dataDeletePrepro,

        refPharma:this.idPharma

    }



      this.api.detroyProduitAll(data).subscribe(data=>{

      this.repDelProd=data;

      if(this.repDelProd.data==true){

        alert("effectue")

        this.actualizerProduit()


      }


      })


  }


  openRevision1(){

    document.getElementById('pageMis1')!.style.display="block";
    document.getElementById('pageMis2')!.style.display="none";
    document.getElementById('pageMis3')!.style.display="none";


  }

  openRevision2(){

    document.getElementById('pageMis1')!.style.display="none";
    document.getElementById('pageMis2')!.style.display="block";
    document.getElementById('pageMis3')!.style.display="none";


  }

  openRevision3(){

    document.getElementById('pageMis1')!.style.display="none";
    document.getElementById('pageMis2')!.style.display="none";
    document.getElementById('pageMis3')!.style.display="block";


  }


  openRevision2REC(){


    document.getElementById('pageMis2Rec')!.style.display="block";
    document.getElementById('pageMis31Rec')!.style.display="none";

    //this.getAlarnmProduit()


  }

  openRevision3rREC(){


    document.getElementById('pageMis2Rec')!.style.display="none";
    document.getElementById('pageMis31Rec')!.style.display="block";




  }

  commGen:any=''
  alertGen:any=''
  benGen:any=''
  expGen:any=''
  stockGen:any=''
  prixGen:any=''
  momGen:any=''

  dataPushSmart:any={}

  repSmart:any=[]

  dataReturnSave:any=[]

  etatApp:any=false


  createProduitSmart(){

    if(this.etatApp==false){

      this.etatApp=true

        if(this.etatVar==true){


          const data1={

              nom:this.momGen,
              categorie:'',
              anti:'',
              traite:'',
              posologie:'',
              age_utilisation:'',
              pu:Number(this.prixGen) / Number(this.dataTaux[0].taux),
              stock:Number(this.stockGen),
              stock_p:Number(this.stockGen),

            }


            const data2={

              benefice:Number(this.benGen),
              qteBcommande:Number(this.commGen),
              qteBalert:Number(this.alertGen),
              date_exp:this.expGen

            }

            this.dataPushSmart['data1']=data1
            this.dataPushSmart['data2']=data2
            this.dataPushSmart['bd']=this.bdFille



            this.api.createProduitSMART(this.dataPushSmart).subscribe(data=>{

              this.repSmart=data;

              if(data.etat==true){

                alert(' Effectue')

                this.commGen=''
                this.alertGen=''
                this.benGen=''
                //this.expGen=''
                this.stockGen=''
                this.prixGen=''
                this.momGen=''


                this.dataReturnSave=data.valable

                this.etatApp=false

              }
              else{

                alert(' ERROR ')

                this.etatApp=false


              }

            })


        }
        else{

          this.api.getProduitLIkeALlVerificateur(this.bdFille,this.momGen).subscribe(data=>{

          this.dataVerif=data.data;

          if(this.dataVerif.length >0 ){

            alert('Les semblables ont ete detecte  ... si c est un nouveau produit, veuillez sur SAUVER QUANT MEME ')

            this.etatApp=false

          }

          else{

            const data1={

              nom:this.momGen,
              categorie:'',
              anti:'',
              traite:'',
              posologie:'',
              age_utilisation:'',
              pu:Number(this.prixGen) / Number(this.dataTaux[0].taux),
              stock:Number(this.stockGen),
              stock_p:Number(this.stockGen),

            }


            const data2={

              benefice:Number(this.benGen),
              qteBcommande:Number(this.commGen),
              qteBalert:Number(this.alertGen),
              date_exp:this.expGen

            }

            this.dataPushSmart['data1']=data1
            this.dataPushSmart['data2']=data2
            this.dataPushSmart['bd']=this.bdFille



            this.api.createProduitSMART(this.dataPushSmart).subscribe(data=>{

              this.repSmart=data;

              if(data.etat==true){

                alert(' Effectue')

                this.commGen=''
                this.alertGen=''
                this.benGen=''
                //this.expGen=''
                this.stockGen=''
                this.prixGen=''
                this.momGen=''


                this.dataReturnSave=data.valable

                this.etatApp=false

              }
              else{

                alert(' ERROR ')

                this.etatApp=false


              }

            })



          }

        })


        }





    }
    else{

      this.msgEncours()

    }




  }

  msgEncours(){

    alert('Traitement encrous ... veuillez patienter ')

  }

  createProduitForcer(){

    if(this.etatApp==false){

      this.etatApp=true

      const data1={

            nom:this.momGen,
            categorie:'',
            anti:'',
            traite:'',
            posologie:'',
            age_utilisation:'',
            pu:Number(this.prixGen) / Number(this.dataTaux[0].taux),
            stock:Number(this.stockGen),
            stock_p:Number(this.stockGen),

          }


          const data2={

            benefice:Number(this.benGen),
            qteBcommande:Number(this.commGen),
            qteBalert:Number(this.alertGen),
            date_exp:this.expGen

          }

          this.dataPushSmart['data1']=data1
          this.dataPushSmart['data2']=data2
          this.dataPushSmart['bd']=this.bdFille



          this.api.createProduitSMART(this.dataPushSmart).subscribe(data=>{

            this.repSmart=data;

            if(data.etat==true){

              alert(' Effectue')

              this.commGen=''
              this.alertGen=''
              this.benGen=''
              //this.expGen=''
              this.stockGen=''
              this.prixGen=''
              this.momGen=''


              this.dataReturnSave=data.valable

              this.etatApp=false

            }
            else{

              alert(' ERROR ')

              this.etatApp=false


            }

          })



    }
    else{

      this.msgEncours()

    }
  }


  updqteProduitSMart(){

    if(this.etatApp==false){

      this.etatApp=true

      const data1={

            nom:this.momGen,
            categorie:'',
            anti:'',
            traite:'',
            posologie:'',
            age_utilisation:'',
            pu:Number(this.prixGen) / Number(this.dataTaux[0].taux),
            stock:Number(this.stockGen),
            stock_p:Number(this.stockGen),

          }


          const data2={

            benefice:Number(this.benGen),
            qteBcommande:Number(this.commGen),
            qteBalert:Number(this.alertGen),
            date_exp:this.expGen

          }

          this.dataPushSmart['data1']=data1
          this.dataPushSmart['data2']=data2
          this.dataPushSmart['bd']=this.bdFille

          this.dataPushSmart['refProduit']=this.idUpdate

          this.api.updateProduitSMART(this.dataPushSmart).subscribe(data=>{

            this.repSmart=data;

            if(data.etat==true){

              alert(' Effectue')

              this.commGen=''
              this.alertGen=''
              this.benGen=''
              //this.expGen=''
              this.stockGen=''
              this.prixGen=''
              this.momGen=''


              this.dataReturnSave=data.valable


              this.actualiserUpdate()

              this.etatApp=false

            }
            else{

              alert(' ERROR ')

              this.etatApp=false


            }

          })



    }
    else{

      this.msgEncours()

    }
  }


clearSelect1(){

  this.dataDeletePrepro=[]

}

etatVar:any=true

messqgeVerifiteyur(){

  if(this.etatVar==true){

    alert('VAR active,  Cette fonctionnqlite permet de detecter le nom proche de produit afin d eviter les doublons ')

    document.getElementById('cadreVer1')!.style.width="80%";
    document.getElementById('cadreVer2')!.style.width="20%";

    document.getElementById('cadreVer1')!.style.display="inline-block";
    document.getElementById('cadreVer2')!.style.display="inline-block";

    document.getElementById('cadreVer1')!.style.overflow="auto";
    document.getElementById('cadreVer2')!.style.overflow="auto";




    this.etatVar=false


  }
  else{

    alert('Verficateur desactive avec succes ')

    document.getElementById('cadreVer1')!.style.width="100%";
    document.getElementById('cadreVer2')!.style.width="0%";

    document.getElementById('cadreVer1')!.style.display="block";
    document.getElementById('cadreVer2')!.style.display="none";

    this.etatVar=true



  }



}

closeAUTORav(){

  document.getElementById('cadreRavAUTO')!.style.display="none";

  document.getElementById('titreUpdate')!.style.display="none";


}

refDelete:any=''

readPositionDelete(refData:any){

  this.refDelete=refData.matricule

  document.getElementById('cadremsgDelete')!.style.display="block";



}

closeDeleProd(){

  document.getElementById('cadremsgDelete')!.style.display="none";

}

refexpValu:any=[]

idRefVider:any=''

openValEXP(refEXPa:any){

  this.refexpValu=[]

  this.idRefVider=refEXPa.matricule

  this.refexpValu.push(refEXPa)

  document.getElementById('cadreMsgEXP')!.style.display="block";



}


viderStockProd(){

  if(this.etatApp==false){

    this.etatApp=true

    this.api.viderStockerProduit(this.idPharma,this.idRefVider).subscribe(data=>{

    if(data.data==true){

          alert(' Effectue ')

          this.etatApp=false

          this.getInfoPeremption()



        }
        else{

          alert(' ERROR ')

          this.etatApp=false


        }

    })


  }

  else{

    this.msgEncours()
  }



}



dataReqAUTOA:any={}

valReqAUTO(data:any){

  this.dataReqAUTOA=data

  document.getElementById('cadreRavAUTO')!.style.display="block";

  document.getElementById('titreUpdate')!.style.display="block";

  this.prixUpdate=this.dataReqAUTOA.prixACHAT

  const dattes=String(this.dataReqAUTOA.date_exp).split('-')

  this.annExp=dattes[0]
  this.moiExp=Number(dattes[1])

}

qteManuel:any=''

editerManuel(){

  if(Number(this.moiExp) <10){

    this.moiExp='0'+String(Number(this.moiExp))

  }

  const dataNez=this.annExp + '-'+this.moiExp + '-30'

  if(Number(this.qteManuel)>0){

    this.repDataAlarmeEdit=this.repDataAlarmeEdit.filter((p:Operationnel)=>p.matricule !==this.dataReqAUTOA.matricule)

    const dataValue = {

    matricule:this.dataReqAUTOA.matricule,
    nom:this.dataReqAUTOA.nom,
    prixACHAT:this.prixUpdate,
    stock_p:this.dataReqAUTOA.stock_p,
    date_exp:dataNez,
    benefice:this.dataReqAUTOA.benefice,
    qteBalert:this.dataReqAUTOA.qteBalert,
    qteBcommande:this.qteManuel,
    pu: this.prixUpdate / Number(this.dataTaux[0].taux)

  }

  this.repDataAlarmeEdit.push(dataValue)

  alert('Effectue ')

  this.qteManuel=''

  }
  else{

    alert('ERROR ')


  }


}

valideComm(lot:any){

  if(Number(this.moiExp) <10){

    this.moiExp='0'+ String(Number(this.moiExp))

  }

  const dataNez=this.annExp + '-'+this.moiExp + '-27'

  const dataValue = {

    matricule:this.dataReqAUTOA.matricule,
    nom:this.dataReqAUTOA.nom,
    prixACHAT:this.prixUpdate,
    stock_p:this.dataReqAUTOA.stock_p,
    benefice:this.dataReqAUTOA.benefice,
    date_exp:dataNez,
    qteBalert:this.dataReqAUTOA.qteBalert,
    qteBcommande:this.dataReqAUTOA.qteBcommande * lot,

    pu: this.prixUpdate / Number(this.dataTaux[0].taux)

  }

  this.repDataAlarmeEdit=this.repDataAlarmeEdit.filter((p:Operationnel)=>p.matricule !==this.dataReqAUTOA.matricule)

  this.repDataAlarmeEdit.push(dataValue)

  alert('Effectue ')

}

supprimerElemenEDIT(){


  this.repDataAlarmeEdit=this.repDataAlarmeEdit.filter((p:Operationnel)=>p.matricule !==this.dataReqAUTOA.matricule)


  alert('Effectue ')

}

supprimerTous(){

  this.repDataAlarmeEdit=[]

  alert('Effectue ')

}


// dataFront:{matricule:string,nom:string,categorie:string,anti:string,traite:string,posologie:string,age_utilisation:string,pu:number,stock:number,stock_p:number,prix:number,benefice:number,qteBcommande:number,qteBalert:number}[]=[];

dataFront:Produit[]=[];

repFront:any=[]

async createLocalCommande(){

  this.dexiAPI.clear()

  this.repFront=this.dexiAPI.addCommande(this.repDataAlarmeEdit);

  alert('Brouillon Effectue ')

  this.dataFront=await this.dexiAPI.getCommande()

}


async getLocalCommande(){

  this.dataFront=await this.dexiAPI.getCommande()

  this.repDataAlarmeEdit=this.dataFront

  alert('Chargement termine')

}

updateProduit(){

  if(this.etatApp==false){

    this.etatApp=true

      const dataValue = {

        refPharma:this.idPharma,
        data:this.repDataAlarmeEdit,

      }

      this.api.updateStockProduit(dataValue).subscribe(data=>{

        if(data.data==true){

          alert('Effectue')

          this.repDataAlarmeEdit=[]

          this.dexiAPI.clear()

          this.etatApp=false

        }
        else{

          alert('ERROR')

          this.etatApp=false

        }



    })

  }
  else{

    this.msgEncours()

  }


}

repExport:any=[]

exportationExcel(){

  const data={

    data:this.repDataAlarmeEdit ,

    idPharma:this.idPharma

  }

this.api.exportqtionEWxcel(data).subscribe(data=>{

  this.repExport=data

  if(data.createFile==true){

    alert('Exportation EXCEL reussie ')

  }
  else{

    alert('ERROR')

  }

})

}

telechargerFileExcelCommade(){

  window.open(this.api.server + this.repExport.urlFile,'_blank')


}


annExp:any=2026

moiExp:any=12


annPLus(){

  this.annExp=Number(this.annExp)+1


}

annMoin(){

  if(this.annExp > 1){

    this.annExp=Number(this.annExp) - 1

  }


}

moisMoin(){

  if(this.moiExp >1){

    this.moiExp=Number(this.moiExp) - 1

  }


}

moisPlus(){

   if(this.moiExp < 12){

      this.moiExp=Number(this.moiExp) + 1

   }


}



prixUpdate:any=''


// Number(this.dataTaux[0].taux)


affichBeneficeDate(){

   this.api.afficheAChattDateLocal(Number(this.idPharma),this.dateAChat).subscribe(data=>{

      this.tabdataAChatStruct=data.data;
      this.tabdataAChatMotif=data.motif;

    })



}

dataBen:any=[]

getBenDate(){

   this.api.getBenDate(Number(this.idPharma),this.dateAChat).subscribe(data=>{

      this.dataBen=data.data[0];

      alert('Termine')

    })



}







}









