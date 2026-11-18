import { Component } from '@angular/core';

interface ProductInfo {
  label: string;
  value: string;
  tone: 'primary' | 'success' | 'warning' | 'accent' | 'danger';
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
  standalone: false
})
export class ProduitPage {
  produit = {
    nom: 'Paracétamol 500mg',
    stock1: 124,
    stock2: 67,
    stock3: 32,
    prix: '1 800 FC',
    achat: '1 200 FC',
    exp: '2027-12-15',
    benefice: '600 FC',
    categorie: 'Antalgique',
    fournisseur: 'PharmaPlus RDC',
    etat: 'Disponible',
    lot: 'LOT-PA-208'
  };

  infosProduit: ProductInfo[] = [
    { label: 'Nom du produit', value: this.produit.nom, tone: 'primary' },
    { label: 'Stock 1', value: `${this.produit.stock1} unités`, tone: 'success' },
    { label: 'Stock 2', value: `${this.produit.stock2} unités`, tone: 'success' },
    { label: 'Stock 3', value: `${this.produit.stock3} unités`, tone: 'warning' },
    { label: 'Prix de vente', value: this.produit.prix, tone: 'primary' },
    { label: 'Prix d’achat', value: this.produit.achat, tone: 'accent' },
    { label: 'Date d’expiration', value: this.produit.exp, tone: 'danger' },
    { label: 'Bénéfice', value: this.produit.benefice, tone: 'success' },
    { label: 'Catégorie', value: this.produit.categorie, tone: 'accent' },
    { label: 'Fournisseur', value: this.produit.fournisseur, tone: 'primary' }
  ];
}
