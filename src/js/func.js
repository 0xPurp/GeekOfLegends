import{hero1,hero2,hero3,chronos,sauron,lilith} from './game.js';

let randomBoss = () => {
    let randomNumber = Math.round(Math.random() * (3 - 1) + 1);
    if (randomNumber == 1) {
        return sauron;
    } else if (randomNumber == 2) {
        return chronos;
    } else {
        return lilith;
    }
}
let pvTot = 1000;
let paTot = 600;

let startGame = (boss) => {

    alert(`Bonjour jeune aventurier ! Aujourd'hui tu vas devoir affronter ${boss.nom} ! Pour cela tu as le droit à 3 héros, donne leurs des noms `);

    hero1.nom = prompt(`Le nom du premier héro (Le guerrier) :`);
    hero2.nom = prompt(`Le nom du second héro (Le mage):`);
    hero3.nom = prompt(`Le nom du troisième héro (L'archer):`);
    
    alert(`Parfait ! Vous avez droit à ${pvTot} pv et ${paTot} pa à distribuer à tes héros, choisis soigneusement comment les attribuer !`);

// Attribution des Points de vie

    do {
        
        if (pvTot > 0) {
            let i = 0
            do {
                let pv1 = prompt(`Combien de PV souhaitez voulez vous donner à ${hero1.nom} ? (${pvTot} PV disponibles)`);
                if (pv1 <= pvTot) {
                hero1.pv = pv1;
                pvTot -= pv1;
                i++
                }
            } while (i == 0);
        }

        if (pvTot > 0) {
            let i = 0
            do {
                let pv2 = prompt(`Combien de pv souhaitez vous accorder à ${hero2.nom} ? (${pvTot} pv disponibles)`);
                if (pv2 <= pvTot) {
                hero2.pv = pv2;                                        
                pvTot -= pv2;
                i++
                }
            } while (i == 0);
        }
        
        if (pvTot > 0) {
            let i = 0
            do {
                let pv3 = prompt(`Combien de pv souhaitez vous accorder à ${hero3.nom} ? (${pvTot} pv disponibles)`);
                if (pv3 <= pvTot) {
                hero3.pv = pv3;
                pvTot -= pv3;
                i++
                }
            } while (i == 0);
        }
        
    } while (pvTot > 0);
    

// Attribution des Points d'actions.

    do {
        
        if (paTot > 0) {
            let i = 0
            do {
                let pa1 = prompt(`Combien de pa souhaitez vous accorder à ${hero1.nom} ? (${paTot} pa disponibles)`);
                if (pa1 <= paTot) {
                hero1.pa = pa1;
                paTot -= pa1;
                i++
                }
            } while (i == 0);
        }

        if (paTot > 0) {
            let i = 0
            do {
                let pa2 = prompt(`Combien de pa souhaitez vous accorder à ${hero2.nom} ? (${paTot} pa disponibles)`);
                if (pa2 <= paTot) {
                hero2.pa = pa2;
                paTot -= pa2;
                i++
                }
            } while (i == 0);
        }
        
        if (paTot > 0) {
            let i = 0
            do {
                let pa3 = prompt(`Combien de pa souhaitez vous accorder à ${hero3.nom} ? (${paTot} pa disponibles)`);
                if (pa3 <= paTot) {
                hero3.pa = pa3;
                paTot -= pa3;
                i++
                }
            } while (i == 0);
        }
        
    } while (paTot > 0);

    let posture1 = "";
    do {
        posture1 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero1.nom} ? :`).toLowerCase().trim();
        switch (posture1) {
            case "attaque":
                hero1.attaque();
                break;
            case "defense":
                hero1.defense();
                break;
        }

    } while (posture1 != "attaque" && posture1 != "defense" && posture1 != "normale" );

    let posture2 = "";
    do {
        posture2 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero2.nom} ? :`).toLowerCase().trim();
        switch (posture2) {
            case "attaque":
                hero2.attaque();
                break;
            case "defense":
                hero2.defense();
                break;
        }

    } while (posture2 != "attaque" && posture2 != "defense" && posture2 != "normale" );

    let posture3 = "";
    do {
        posture3 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero3.nom} ? :`).toLowerCase().trim();
        switch (posture3) {
            case "attaque":
                hero3.attaque();
                break;
            case "defense":
                hero3.defense();
                break;
        }

    } while (posture3 != "attaque" && posture3 != "defense" && posture3 != "normale" );
    alert(`${hero1.nom} : ${hero1.pv}pv et ${hero1.pa}pa`);
    alert(`${hero2.nom} : ${hero2.pv}pv et ${hero2.pa}pa`);
    alert(`${hero3.nom} : ${hero3.pv}pv et ${hero3.pa}pa`);

    console.log(hero1,hero2,hero3);
    console.log(boss);
}

let attGuerrier = (boss) => {
    let nvxpa = hero1.pa * 1.25;
    if (hero1.etat == "vivant") {
        if (hero1.rage < 4) {
            hero1.rage = hero1.rage + 1;
            boss.pv -= hero1.pa;
            alert(`${hero1.nom} attaque ${boss.nom} : -${hero1.pa} pv.`);
        } else {
            hero1.rage = 0
            boss.pv -= nvxpa;
            alert(`${hero1.nom} est enragé, il attaque ${boss.nom} : -${nvxpa} pv.`);
        }
    }
}

let attMage = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero2.mana > 1) {
            boss.pv -= hero2.pa;
            hero2.mana -= 2;
            alert(`${hero2.nom} attaque ${boss.nom} : -${hero2.pa} pv.`)
        } else {
            hero2.mana = 7;
            alert(`${hero2.nom} prend son temps pour récupérer du mana : pas d'attaque.`);
        }
    }
}

let attArcher = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero3.fleches > 1) {
            hero3.fleches -= 2;
            hero3.fleches += 1;
            boss.pv -= hero3.pa;
            alert(`${hero3.nom} attaque ${boss.nom} : -${hero3.pa} pv.`)
        } else {
            hero3.fleches += 6;
            alert(`${hero3.nom} attend de recevoir de nouvelles flèches : pas d'attaque.`);
        }
    }
}

let checkForLose = (boss) => {
    if (hero1.etat == "mort" && hero2.etat == "mort" && hero3.etat == "mort") {
        alert(`Vous avez perdu ... ${boss.nom} était trop fort pour vous.`);
        return true;
    }
}



let attBoss = (boss, champions) => {
    
    let randomHero = Math.round(Math.random() * ((champions.length-1) - 1) + 1);

        champions[randomHero].pv -= boss.pa;
        alert(`${boss.nom} attaque ${champions[randomHero].nom} : -${boss.pa} pv.`);
        if (champions[randomHero] <= 0) {
            champions[randomHero] = "mort"
            champions.forEach(element => {
                if (element.nom.includes(champions[randomHero].nom)) {
                    champions.splice(element);
                }
            });
            alert(`${champions[randomHero]} est mort !`);
        }
}



let combat = (boss) => {
    let pvBoss = boss.pv;
    let champions = [hero1,hero2,hero3];
    champions.forEach(element => {
        if (element.posture == "defense") {
            champions.push(element);
        }    
    });
    do {
        attGuerrier(boss);
        attMage(boss);
        attArcher(boss);
        attBoss(boss,champions);
    } while (boss.pv > pvBoss / 5 && !checkForLose(boss));
    console.log(boss,hero1,hero2,hero3);
}

export{startGame,randomBoss,combat};


