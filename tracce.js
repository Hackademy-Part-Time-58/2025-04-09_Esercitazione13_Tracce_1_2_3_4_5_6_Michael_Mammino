// Traccia 1 Extra


// Per un negozio di abbigliamento, scrivere un programma che dato un importo da pagare:

// applichi uno sconto del 20% se l'importo speso è superiore a 100 euro
// altrimenti niente
// Stampare l'importo finale da pagare.

var price = 130;
var discount = 20;

var dicountedPrice = price-price*discount/100

if(price >= 100) {
    console.log('sconto del 20% applicato, devi pagare ' + dicountedPrice)
} else {
    console.log('sconto non applicabile devi pagare ' + price)
}

// Traccia 2 Extra


// La password corretta per l'accesso ad un sistema informatico è HackerinoPaperino99!

// Chiedere all'utente in input l'inserimento della password (tramite prompt) e stampare:

// Benvenuto Admin se la password è corretta
// Password Errata se la password non è corretta

var password;
password = prompt ('inserire password')

if(password == 'HackerinoPaperino99!') {
    console.log('Benvenuto Admin')
} else {
    console.log('Pasword Errata')
}

// Traccia 3


// Scrivi un programma che richieda in input (input simulato oppure con prompt):

// il numero totale di gatti
// il numero dei gatti presenti in ogni fila
// e restituisca in output:

// il numero di file risultanti
// indicare il numero di gatti mancanti per completare una nuova fila
// ad esempio:

// input: gatti: 44, gatti in ogni fila: 6
// output: ci sono 7 file di gatti e ne mancano 4 per una nuova fila

var cats;
var row;

cats = prompt ('inserisci il numero di gatti');
row = prompt ('inserisci il numero di gatti per fila');

var catsRow = Math.floor(cats/row)
// var catsMiss = row-(cats-row*catsRow)
var catsMiss = row-(cats%row)

console.log('ci sono ' + catsRow + ' file di gatti ne mancano ' + catsMiss + ' per una nuova fila')

// Traccia 4


// Scrivi un programma che dato un numero intero compreso tra 1 e 7 visualizzi il corrispondente giorno della settimana sapendo che:

// 1 = lunedì
// 2 = martedì
// 3 = mercoledì
// ...
// 7 = domenica
// Esempio:

// Input: numero = 6
// Output: "Sabato"
// Un altro esempio:

// Input: numero = 10
// Output: "Errore! Giorno della settimana non valido!"

var day = prompt ('scrivi un numero per il giorno della settimana')

switch(day) {
    case '1':
    console.log('lunedi');
    break;
    case '2':
    console.log('martedi');
    break;
    case '3':
    console.log('mercoledi');
    break;
    case '4':
    console.log('giovedi');
    break;
    case '5':
    console.log('venerdi');
    break;
    case '6':
    console.log('sabato');
    break;
    case '7':
    console.log('domenica');
    break;
    default: // in tutti gli altri casi NON considerati
    console.log("Errore! Giorno della settimana non valido!");
}

// Traccia 5


// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// v < 18: insufficiente
// 18 <= v < 21: sufficiente
// 21 <= v < 24: buono
// 24 <= v < 27: distinto
// 27 <= v <= 29: ottimo
// v = 30: eccellente
// ad esempio:

// Input: v = 29
// Output: Ottimo

var v=15

if(v < 18) {
    console.log('insufficiente');
} else if(v < 21) {console.log('sufficiente');
} else if(v < 24) {console.log('buono');
} else if(v < 27) {console.log('distinto');
} else if(v <=29) {console.log('ottimo');
} else if(v = 30) {console.log('eccellente')
}

// Traccia 6

                            
// Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:

// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”

var temperature = prompt ('inserisci la temperatura')

if(temperature < -10) {
    console.log('copriti…ancora ti raffreddi');
} else if(temperature < 0) {console.log('non e’ tanto il freddo quanto l’umidità’');
} else if(temperature < 20) {console.log('non ci sono piu’ le mezze stagioni');
} else if(temperature < 30) {console.log('mi dia una peroni sudata');
} else if(temperature >= 30) {console.log('lu mare, lu sole, lu ientu');
}