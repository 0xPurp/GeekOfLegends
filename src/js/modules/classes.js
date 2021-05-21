class Boss{
    constructor(nom,pv,pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
}

class Hero{
    constructor(nom,pv,pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.etat = "vivant"
        this.defense = () => {
            this.pv = this.pv * 2.5;
            this.pa = this.pa * 0.5;
            this.posture = "Défense";
        }
        this.attaque = () => {
            this.pv = this.pv * 0.75;
            this.pa = this.pa * 1.4;
            this.posture = "Attaque";
        }
    }
}

