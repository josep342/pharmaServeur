import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: false
})
export class MarketPage implements OnInit {

  constructor(private api: ApiService) {}

  message: string="effectué";

    idResto:any=''

    id_resto:any="202010"

    varSepa:any="junior"

    scponom:any=''
    scpopostnom:any=''
    scpoprenom:any=''

    scposexe:any='M'
    scpoNaiss:any=''
    scpoLieu:any=''
    scpoNatio:any=''

    scpoCivil:any=''
    scpoProfession:any=''
    scpoFonction:any=''

    scpoInstitution:any=''
    scpoAdress:any=''
    scpoWatsapp:any=''
    scpoGmail:any=''
    scpoSpec:any=''


    tabSexe:any=['F','M']

    rep:any=[]

    etatCreat:any=false

    intervalId:any;

   ngOnInit() {


      this.demarrer()


    }

  createSCPO(){


    //postnom:this.scpopostnom,
    //prenom:this.scpoprenom,
    //lieu:this.scpoLieu,
    //dates:this.scpoNaiss,
    //natio:this.scpoNatio,
    //civil:this.scpoCivil,
    //profession:this.scpoProfession,
    //fonction:this.scpoFonction,
    //institution:this.scpoInstitution,
    //adress:this.scpoAdress,



    const data={

      nom:this.scponom,
      sexe:this.scposexe,
      tel:this.scpoWatsapp,
      gmail:this.scpoGmail,
      spec:this.scpoSpec

    }


     this.api.createSCPO(data).subscribe(data=>{

      this.rep=data;

      if(data.data==true){

        this.etatCreat=data.data

        alert('Effectué ')

        this.scponom=""
        this.scpoWatsapp=""
        this.scpoGmail=""
        this.scposexe=""
        this.scpoSpec=""


      //   this.scpoNaiss=""
      //   this.scpoLieu=""
       //  this.scpoNatio=""

       //  this.scpoCivil=""
      //   this.scpoProfession=""
      //   this.scpoFonction=""

      //   this.scpoInstitution=""
      //   this.scpoAdress=""
      //  this.scpoWatsapp=""
      //   this.scpoGmail=""
       //  this.scpoSpec=""

       }

       else{

        alert('ERROR ')

        alert(' NOTA : remplissez correctement les zones  ')

       }


      })


  }


  openAccueil(id:string){

    document.getElementById('cadreContenuGlob')!.style.display="block";
    document.getElementById('divLogin')!.style.display="none";

    const element=document.getElementById(id)

    if(element){

      element.scrollIntoView({
        behavior:'smooth',
        block:'start'
      })
    }

  }

  etatGlobMenu:any=true


  async openMenuShow(){

      if(this.etatGlobMenu==true){


        document.getElementById('menuNav')!.style.display="none";
        document.getElementById('cadreSCannage')!.style.display="none";
        document.getElementById('cadreSCannageGlob')!.style.display="none";
        document.getElementById('cadreAuth')!.style.display="none";

        document.getElementById('cadreSCannageGlob')!.style.display="none";
        document.getElementById('cadreSCannage')!.style.display="none";


        //document.getElementById('cadreSCannageGlobSUPRA')!.style.display="block";

        document.getElementById('cadreTab')!.style.display="block";




      }
      else{




        document.getElementById('menuNav')!.style.display="block";
        document.getElementById('cadreSCannage')!.style.display="none";
        document.getElementById('cadreSCannageGlob')!.style.display="block";

        document.getElementById('cadreAuth')!.style.display="none";

        document.getElementById('teteTOP')!.style.display="block";


        document.getElementById('cadreSCannageGlob')!.style.display="none";
        document.getElementById('cadreSCannage')!.style.display="none";


        document.getElementById('btm1')!.style.color="red";
        document.getElementById('btm2')!.style.color="white";
        document.getElementById('btm3')!.style.color="white";

        document.getElementById('cadreText')!.style.display="none";
        document.getElementById('cadreSCannage')!.style.display="none";
        document.getElementById('cadreSCannageGlob')!.style.display="none";
        document.getElementById('cadreAffichInfo')!.style.display="none";
        document.getElementById('cadreControle')!.style.display="none";
        document.getElementById('cadreControleCommande')!.style.display="none";
        document.getElementById('cadreMenue')!.style.display="none";

        document.getElementById('btnTerminer')!.style.display="none";

        document.getElementById('cadreSetting')!.style.display="none";

        document.getElementById('cadreFactureCredit')!.style.display="none";

        document.getElementById('tClient1')!.style.display="none";

        document.getElementById('cadreContenuGlob')!.style.display="none";

        document.getElementById('cadreContenuGlob')!.style.display="block";




        document.getElementById('cadreMenuVente')!.style.display="block";
        document.getElementById('cadreDashABONNE')!.style.display="block";
        document.getElementById('tClientMask1')!.style.display="block";

        document.getElementById('cadreTab')!.style.display="none";




      }


    }

    openAuth(){

    document.getElementById('cadreContenuGlob')!.style.display="none";

    document.getElementById('divLogin')!.style.display="block";



  }

  closeOpenAuth(){

    document.getElementById('cadreContenuGlob')!.style.display="block";
    document.getElementById('divLogin')!.style.display="none";


  }

  tabCivil:any=['Marie','Celibataire']

  tabSexee:any=['Homme','Femme']


  tabSpecial:any=['Master Professionnel en Psycho-Oncologie',' Master Professionnel en Accompagnement Spirituel en Oncologie','Master Professionnel en Travail Social en Oncologie Spécialisations','Assistance Sociale en Oncologie','Santé Mentale en Oncologie','Soins Infirmiers Oncologiques','Aide-Soignant en Oncologie','Pédagogie Hospitalière et École à l Hôpital en Oncologie','Médecine de Famille en Oncologie','Gestion de la Douleur et Soins de Support en Oncologie Soins Palliatifs','Nutrition Oncologique','Réadaptation et Kinésithérapie en Oncologie','Pharmacie Oncologique','Oncosexologie','Navigation des Patients en Oncologie','Coordination des Parcours de Soins en Oncologie','Recherche Clinique en Oncologie','Éthique et Humanisation des Soins en Oncologie','Prévention, Dépistage et Éducation Thérapeutique en Oncologie','Accompagnement des Survivants du Cancer et Réinsertion Sociale']


   validateCoupon(){


  }




  masque:any=false


  openMENU(){


  }



  compteur=0

    i:any=0

    compt:any=0

    titre1:any='Pourquoi SCPO  en Rdc'
    titre2:any="Formation & Intégration Professionelle"
    titre3:any='+243 823382732'

    demarrer(){

      this.intervalId=setInterval(()=>{

        this.compteur++

        this.i++

        if(this.i>50){

          this.compt++

          this.i=0

          if(this.compt<1){

            document.getElementById('cadrePointeurCircle1')!.style.backgroundColor="rgb(90, 27, 141)"
            document.getElementById('cadrePointeurCircle2')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle3')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle4')!.style.backgroundColor="rgb(89, 84, 90)";

            document.getElementById('cadreScrollSynth')!.style.backgroundImage="url('/assets/images/robe.jpeg')";

            this.titre1='ROBE TURQUI'
            this.titre2="Robe en Polliestere, usage sortie, fete et vacances"
            this.titre3='12 USD'

            document.getElementById('titreAfficheBlue')!.style.color="white"



          }
          else if(this.compt<2){

            document.getElementById('cadrePointeurCircle1')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle2')!.style.backgroundColor="rgb(90, 27, 141)"
            document.getElementById('cadrePointeurCircle3')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle4')!.style.backgroundColor="rgb(89, 84, 90)";

            document.getElementById('cadreScrollSynth')!.style.backgroundImage="url('/assets/images/sac.jpg')";


            this.titre1='SAC ERMEST'
            this.titre2="Sac en Polliestere, usage sortie, fete et vacances"
            this.titre3='15 USD'

            document.getElementById('titreAfficheBlue')!.style.color="rgb(90, 27, 141)"


          }
          else if(this.compt<3){

            document.getElementById('cadrePointeurCircle1')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle2')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle3')!.style.backgroundColor="rgb(90, 27, 141)"
            document.getElementById('cadrePointeurCircle4')!.style.backgroundColor="rgb(89, 84, 90)";

            document.getElementById('cadreScrollSynth')!.style.backgroundImage="url('/assets/images/robe2.jpeg')";

            this.titre1='ROBE GUCCI'
            this.titre2="Sac en Polliestere, usage sortie, fete et vacances"
            this.titre3='20 USD'

            document.getElementById('titreAfficheBlue')!.style.color="white"

          }
          else if(this.compt<4){

            document.getElementById('cadrePointeurCircle1')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle2')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle3')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle4')!.style.backgroundColor="rgb(90, 27, 141)"

            document.getElementById('cadreScrollSynth')!.style.backgroundImage="url('/assets/images/batimesnt.jpeg')";

            this.titre1='ROBE ERMEST'
            this.titre2="Sac en COTON, usage sortie, fete et vacances et Show"
            this.titre3='30 USD'

            document.getElementById('titreAfficheBlue')!.style.color="white"

          }

          else{

            this.compt=0

            document.getElementById('cadrePointeurCircle1')!.style.backgroundColor="rgb(90, 27, 141)"
            document.getElementById('cadrePointeurCircle2')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle3')!.style.backgroundColor="rgb(89, 84, 90)";
            document.getElementById('cadrePointeurCircle4')!.style.backgroundColor="rgb(89, 84, 90)";



            document.getElementById('cadreScrollSynth')!.style.backgroundImage="url('/assets/images/sac3.jpeg')";


           this.titre1='sac ERMEST'
            this.titre2="Sac en COTON, usage Princesse, fete et animation "
            this.titre3='50 USD'

            document.getElementById('titreAfficheBlue')!.style.color="white"


          }


        }



      },100)
    }

}
