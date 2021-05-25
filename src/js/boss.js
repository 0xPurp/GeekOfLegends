let randomHero = 0;
    
    if (hero1.etat == "vivant" && hero2.etat == "vivant" && hero3.etat == "vivant") {
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
    } else if(hero1.etat == "vivant" && hero2.etat == "vivant" && hero3.etat == "mort"){
        randomHero = Math.round(Math.random() * (2 - 1) + 1);
    }  else if(hero1.etat == "mort" && hero2.etat == "vivant" && hero3.etat == "vivant"){
        randomHero = Math.round(Math.random() * (3 - 2) + 2);
    } else if(hero1.etat == "vivant" && hero2.etat == "mort" && hero3.etat == "vivant"){
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
        if (randomHero == 2) {
            randomHero++;
        }
    } else if(hero1.etat == "vivant" && hero2.etat == "mort" && hero3.etat == "mort"){
        randomHero = 1;
    } else if(hero1.etat == "mort" && hero2.etat == "vivant" && hero3.etat == "mort"){
        randomHero = 2;
    } else if(hero1.etat == "mort" && hero2.etat == "mort" && hero3.etat == "vivant"){
        randomHero = 3;
    }

    if (randomHero == 1) {
        hero1.pv -= boss.pa;
        alert(`${boss.nom} attaque ${hero1.nom} : -${boss.pa} PV !`);
        if (hero1.pv <= 0) {
            hero1.etat = "mort"
            alert(`${hero1.nom} est mort !`);
        }
    } else if (randomHero == 2) {
        hero2.pv -= boss.pa;
        alert(`${boss.nom} attaque ${hero2.nom} : -${boss.pa} PV !`);
        if (hero2.pv <= 0) {
            hero2.etat = "mort"
            alert(`${hero2.nom} est mort !`);
        }
    } else if(randomHero == 3){
        hero3.pv -= boss.pa;
        alert(`${boss.nom} attaque ${hero3.nom} : -${boss.pa} PV !`);
        if (hero3.pv <= 0) {
            hero3.etat = "mort"
            alert(`${hero3.nom} est mort !`);
        }
    }
    checkForLose(boss);













    