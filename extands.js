class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instracture extends TeamMember{
    // name;
    designation = 'web course Instractor'
    team = 'web team'
    // location; 
    constructor(name, location){
        // this.name = name;
        // this.location = location;
        super(name, location);
    }
    startSupportSession(time){
        console.log(`strat the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create a quiz for module 22`)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}
        //another part
class Developer extends TeamMember{
    // name;
    designation = 'web course Instractor'
    team = 'web team'
    tech;
    // location; 
    constructor(name, location, tech){
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the feature ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}        


//provide resume section

class JobPlacement extends TeamMember{
    // name;
    designation = 'Job placement Comandos'
    team = 'JOB PLACEMENT'
    region;
    // location; 
    constructor(name, location, region){
        // this.name = name;
        // this.location = location;
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`please develop the feature ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}   


const alia = new Developer('alia Bah', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();





const bipasha = new JobPlacement('bipasha', 'kolkata', 'india');
console.log(bipasha);













// const ammir = new Instracture('ammir', 'dhaka');
// console.log(ammir);
// ammir.startSupportSession('9.00');



// const solaiman = new Instracture('solaiman', 'sylhet');
// ammir.createQuiz('12.00');
// console.log(solaiman);



// const abc = new Instracture('def', 'sylhet');
// ammir.createQuiz('12.00');
// console.log(abc);