//problem 1
// const odd = [1, 3, 5, 7, 9];
// const even = odd.map(x => x+1);
// console.log(even);

//problem 2

// const arr = [33, 50, 79, 78, 101, 30];
// const disivale = arr.filter(x => x % 10 === 0);
// console.log(disivale);


//problem 3
// const arr = [33, 50, 79, 78, 101, 30];
// const disivale = arr.find(x => x % 10 === 0);
// console.log(disivale);


//problem 4

// const numbers = [1, 9, 17, 22];
// const total = numbers.reduce((x , y) => x + y, 0);
// console.log(total);


//problem 5

// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22}
// ];


// const add = people.reduce((x , y) => x + y.age,0);   //cause y recived new value
// console.log(add);


//problem 6

// const student = {
//     name: 'friedie',
//     age: 26
// };
// console.log(student.age);


//problem 7

// let data = {
//     location: [
//         {
//             city: 'ctg'
//         }
//     ]
// };
// console.log(data.location[0].city);







// const username = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }

//   console.log(username.company.name);



// const obj = { foo: 1 };
// obj.bar = 2;
// console.log(obj)

// function min(nums){ 
//     return Math.min(nums) 
//   }
//   console.log(min( [1,3,2 ]))


// const cube=x=> x*x*x; 
// console.log(cube(2))

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log({x, y, z});


// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);


// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// const value = friends.find(x => x.length === 5);
// console.log(value);

// const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'};
// const {price} = product;
// console.log({price});











            // here is practiceday problem solve
            //problem 1

// let data = {
//     Sophia: {
//     id: 33,
//     study: [
//     {
//     primary:
//     [
//     { school_name: "ABC primary school" },
//     { location: "Peters burg" }
//     ]
//     },
//     {
//     secondary:
//     [
//     { school_name: "ABC secondary school"
    
//     },
    
//     { location: "St Lorence" }
//     ]
//     },
//     ]
//     }
//     };
      
// const value = data['Sophia']['study'][1]['secondary'][1]['location'];    
// console.log(value);
    


//problem 2

// let data =
// [
// {
// "pHeroCourses": {
// "course-x": "web development"
// }
// },
// {
// "pHeroCourses": {
// "course-y": "phitron"
// }
// },
// {
// "pHeroCourses": {
// "course-z": "acc"
// }
// },
// {
// "pHeroCourses": {
// "course-xyz": "level-2"
// },
// "locationField": {
// "en-US": {
// "lat": 19.28563,
// "lon": 72.8691
// }
// }
// }
// ];

// const getData = data[3]["pHeroCourses"]["course-xyz"];
// console.log(getData);

// const getData = data[3]["locationField"]["en-US"]["lon"];
// console.log(getData);




//problem 3


// let activities = {
//     activity1 : [
//     {
//     name : "listen on spotify",
//     song_list: {

//         song_1 : "abc",
//         song_2 : "bcd"
        
//         },
//         id : 1
//         },
//         {
//         name : "listen music through bot",
        
//         song_list: {
//         song_1 : "wxy",
//         song_2 : "xyz"
        
//         },
//         id : 2
//         }
//         ]
//         };

// // const getValue = activities['activity1'][0]['song_list']['song_1'];
// // console.log(getValue);       

// const getValue = activities['activity1'][1]['song_list']['song_2'];
// console.log(getValue);      



//problem 4


// let students = {
//     2222: {
    
//     name: "Jack",
//     section: "C",
//     class: "IX",
//     address: {
    
//     "building no": 12,
//     "street" : "St. Jonson",
//     "city" : "Petersburg",
//     "country" : "UK"
//     }
    
//     },
//     3333: {
    
//     name: "Herry",
//     section: "D",
//     class : "X",
//     address: {"building no" : 85,
//     "street" : "DC road",
//     "city" : "Kachukhet",
//     "country" : "Bangladesh"
//     }
    
//     }
//     };


    // const getName = students['2222']['address']["city"];
    // console.log(getName);


// const getName = students['3333']['name'];
// console.log(getName);



//problem 5


// let instructor = {
//     name: "Jhankar Mahbub",
//     entrepreneur: true,
//     additionalData: {
//     writer: true,
//     favoriteHobbies: ["travelling", "Coding"],
//     books: ["programming er bolod to boss", "programming er coddogosti"],
//     moreDetails: {
//     favoriteBasketballTeam: "XYZ",
//     isYoungest: true,
//     hometown: {
//     city: "ABC",
//     state: "VW",
//     },
//     countriesLivedIn: ["Bangladesh", "New York"]
//     }
//     }
//     };

    // const getBook = instructor['additionalData']['books'][1];
    // console.log(getBook);

    // const getBook = instructor['additionalData']['moreDetails']['hometown']['state'];
    // console.log(getBook);

    // const getBook = instructor['additionalData']['moreDetails']['countriesLivedIn'][0];
    // console.log(getBook);



    //problem 6

    // const studentData = [

    //     {
    //     class: 10,
    //     details: [
    //     {
    //     studentId: '1',
    //     gradingDetails: [{ grade: 'A' }]
    //     },
    //     {
    //     studentId: '2',
    //     gradingDetails: [{ grade: 'B' }]
    //     }
    //     ]
    //     },
    //     {
    //     class: 11,
    //     details: [
    //     {
    //     studentId: 3,
    //     gradingDetails: [{ grade: 'B' }]
    //     },
    //     {
    //     studentId: 4,
    //     gradingDetails: [{ grade: 'D' }]
    //     }
    //     ]
    //     },
    //     ]

        // const getBd = studentData[0]['details'][1]['gradingDetails'][0]['grade'];
        // console.log(getBd);

        // const getBd = studentData[1]['details'][1]['gradingDetails'][0]['grade'];
        // console.log(getBd);



        //problem 7

        // let data = {
        //     data:
            
        //     [
        //     {
        //     bookId: 1,
        //     bookDetails: {name: "habluder adda",
        //     category: "XYZ",
        //     price: "20$",
        //     },
        //     bookCategory: "Basic",
        //     },
        //     {
        //     bookId: 2,
        //     bookDetails: {
        //     name: "gobluder adda",
        //     category: "ABC",
        //     price: "40$",
        //     },
        //     bookCategory: "Beginner",
        //     }
        //     ]
        //     };


            // const hablu = data['data'][0]['bookDetails']['name'];
            // console.log(hablu);

            // const hablu = data['data'][1]['bookCategory'];
            // console.log(hablu);