class Animal{
    constructor(familyName,breedName){
  this.familyName=familyName;
  this.breedName=breedName;
}
}

class Cat extends Animal{
    constructor(familyName){
        super(familyName);
        this.familyName=familyName;
      } 
      sayFamilyName(){
        return this.familyName
    }
    sayBreedName(){
        return this.breedName } }
let cat = new Cat();
cat.familyName = 'Carnivora';
cat.breedName = 'Persian';
console.log(cat.sayFamilyName());
console.log(cat.sayBreedName());