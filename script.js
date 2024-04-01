               //TASK1:MOVIE TASK
// //a)
// class Movie{
//    constructor(title,studio,rating){
//      this.title = title;
//      this.studio = studio;
//      this.rating = rating;
//    } 
// }
// const obj = new Movie("Vikram","Raaj Kamal Films International","8.3")
//   console.log(obj.title);
//   console.log(obj.studio);
//   console.log(obj.rating);

// //b)
// class NoRateMovie{
//     constructor(title,studio,rating="pg"){
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     } 
//  }
//  const obj1 = new NoRateMovie("Vikram","Raaj Kamal Films International")
//  console.log(obj1.title);
//  console.log(obj1.studio);
//  console.log(obj1.rating);
 
//  //c)
//  class NoPgMovie {
//     constructor(title, studio, rating = "PG") {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
//     getPGTitles() {
//         if (this.rating === "PG") {
//             return this.title;
//         } else {
//             return null;
//         }
//     }
// }
// const nopgobj = new NoPgMovie("Casino Royale", "Eon Productions", "PG13");
// const nopgobj1 = new NoPgMovie("Vikram", "Raaj Kamal Films International");
// const nopgobj2 = new NoPgMovie("Godzilla x Kong", "Legendary Pictures", "6.7");
// const nopgobj3 = new NoPgMovie("Jailer", "Sun Pictures", "7.1");
// const nopgobj4 = new NoPgMovie("Kung Fu Panda", "DreamWorks Animation");
// const movieList = [nopgobj, nopgobj1, nopgobj2, nopgobj3, nopgobj4];
// console.log("Movies without Rating:");
// movieList.forEach(movie => {
//     const pgTitle = movie.getPGTitles();
//     if (pgTitle !== null) {
//         console.log(pgTitle);
//     }
// });
 

//  //d)
//  class GivenMovie{
//    constructor(title,studio,rating){
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   } 
// }
// const casobj = new GivenMovie("Casino Royale","Eon Productions","PG13")
// console.log(casobj.title);
// console.log(casobj.studio);
// console.log(casobj.rating);

               
                 //TASK2:CIRCLE TASK
// class Circle{
//     constructor(radius,color){
//         this.radius=radius;
//         this.color = color;
//     }
//     get Radius(){
//         return this.radius
//     }
//     set Radius(n){
//         this.radius = n;
//     }
//     get Color(){
//         return this.color;
//     }
//     set Color(c){
//         this.color = c
//     }
//     get toString(){
//         return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
//     }
//     get area(){
//         return Math.PI*Math.pow(this.radius,2)
//     }
//     get circumference(){
//         return 2*Math.PI*this.radius
//     }
// }
// let obj = new Circle(1.0,"red") 
// console.log(obj.Color);
// console.log(obj.Radius);
// console.log(obj.toString);
// console.log(obj.area);
// console.log(obj.circumference);
// obj.Radius=3.5
// console.log(obj.Radius);
// obj.Color="green"
// console.log(obj.Color);

                 
                //TASK 3 class to hold all the PERSON details.
// class Person {
//     constructor(names,age,gender,maritalStatus,contact,email){
//         this.names=names;
//         this.age=age;
//         this.gender=gender;
//         this.maritalStatus=maritalStatus;
//         this.contact=contact;
//         this.email=email;
//     }
// }
// const obj=new Person("manoj",20,"male","single",994412684,"manojannadurai2265@gmail.com")
// console.log(obj.names,obj.age,obj.gender,obj.maritalStatus,obj.contact,obj.email);

                 
                  //TASK 4: UBER PRICE
// class UberPriceCalculator {
//     constructor(perKilometerCharge) {
//         this.perKilometerCharge = perKilometerCharge;
//     }

//     calculatePrice(distanceInKm){
//         return distanceInKm * this.perKilometerCharge;
//     }
// }
// const price = new UberPriceCalculator(13).calculatePrice(10);  //13rupees for 10km
// console.log("Uber price:", price);


