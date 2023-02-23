class Instracture {
    name;
    designation = 'web course Instractor'
    team = 'web team'
    location; constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`strat the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create a quiz for module 22`)
    }
}

const ammir = new Instracture('ammir', 'dhaka');
console.log(ammir);
ammir.startSupportSession('9.00');



const solaiman = new Instracture('solaiman', 'sylhet');
ammir.createQuiz('12.00');
console.log(solaiman);



const abc = new Instracture('def', 'sylhet');
ammir.createQuiz('12.00');
console.log(abc);