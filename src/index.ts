/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { totalmem } from "os";
import { stringify } from "querystring";
import { isNumberObject } from "util/types";
import { DEFAULT_MAX_VERSION } from "tls";
import { extname } from "path/posix";
import { allowedNodeEnvironmentFlags } from "process";
import { kStringMaxLength } from "buffer";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT)

process.exit(1);
console.log("");
console.log("Desafio 2 !!!!");
console.log("");
 
//R01
const nome1:string = 'Alex Aparecido';
const idade1:number = 30;
const peso1:number = 87;
const altura1:number = 1.88;
const ehDev1:boolean = true;

const nome2:string = 'Hermes Silva';
const idade2:number = 28;
const peso2:number = 78;
const altura2:number = 1.68;
const ehDev2:boolean = true;

const nome3:string = 'Urbano Silva';
const idade3:number = 22;
const peso3:number = 68;
const altura3:number = 1.82;
const ehDev3:Boolean = true;

const Ubuntu1 = 30;
const Ubuntu2 = 28;
const Ubuntu3 = 22;
const total = [Ubuntu1 + Ubuntu2 + Ubuntu3];

console.log('Somando a idade de todos os Ubuntus o tatal é', total);
console.log("");
//R02

if (ehDev1 == true){
    var result1 = 'Sim' 
}
else{
    var result1 = 'Não' 
}
if (ehDev2 == true){
    var result2 = 'Sim' 
}
else{
    var result2 = 'Não' 
}
if (ehDev3 == true){
    var result3 = 'Sim' 
}
else{
    var result3 = 'Não' 
}
console.log(`Nome: ${nome1}, Idade: ${idade1}, Peso: ${peso1}kg, Altura: ${altura1}, É desenvolvedor? ${result1}`);
console.log(`Nome: ${nome2}, Idade: ${idade2}, Peso: ${peso2}Kg, Altura: ${altura2}, É desenvolvedor? ${result2}`);
console.log(`Nome: ${nome3}, Idade: ${idade3}, Peso: ${peso3}Kg, Altura: ${altura3}, É desenvolvedor? ${result3}`);
const Array = [nome1, nome2, nome3];
console.log("");

//R03
var imc1:number = peso1 / (altura1 * altura1);
var imc2:number = peso2 / (altura2 * altura2);
var imc3:number = peso3 / (altura3 * altura3);

console.log(`O Ubuntu1 AParecido tem um IMC: ${imc1.toFixed(2)}`); // ToFixed(...) indica a quantidade de casas decimais, coloque o valor dentro dos pareteses
console.log(`O Ubuntu2 Hermes Silva tem um IMC: ${imc2.toFixed(2)}`);
console.log(`O Ubuntu3 Urbano Silva tem um IMC: ${imc3.toFixed(2)}`);
console.log("");


//R04

const contador = [ehDev1, ehDev2, ehDev3];
var i: number = 0;
contador.forEach((Element) => {
    if(Element == true){
        i = i + 1;
    }
});


const ehDevs = Array; 
const number = [ehDevs];
console.log(`No total são ${i} Devs!`);
console.log("");

//R05

const exibir = [nome1, nome2, nome3]
for (var i = 0; i < 3; i++){
    if(exibir[i].includes('Silva')){ // includes é para que seja verificado apenas uma parte ou area especifica da string
        console.log(`${exibir[i]}, faz parte do grupo de pessoas que tem o sobrenome Silva.`);
    }
}


