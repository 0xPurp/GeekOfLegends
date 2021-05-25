import{startGame,randomBoss,combat} from './func.js'


let boss = randomBoss();

startGame(boss);
combat(boss);