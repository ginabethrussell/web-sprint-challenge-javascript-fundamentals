// 1. Copy and paste your prototype in here and refactor into class syntax.

    // function CuboidMaker(length, width, height){
    //     this.length = length;
    //     this.width = width;
    //     this.height = height;
    // }

    //   CuboidMaker.prototype.volume = function() {
    //     return this.length * this.width * this.height;
    //   }

    //   CuboidMaker.prototype.surfaceArea = function() {
    //     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    //   }

    //   const cuboid = new CuboidMaker(4,5,5);
    
// I named the class version 2 so to not conflict with the prototype code
class CuboidMaker2{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMaker2(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(edge){
        super(edge, edge, edge);
        this.edge = edge;
    }
    volume(){
        return this.edge * this.edge * this.edge;
    }
    surfaceArea(){
        return 6 * (this.edge * this.edge);
    }
}
const cube = new CubeMaker(5);

console.log(cube.volume()); //125
console.log(cube.surfaceArea()); //150

// cube still has the properties of length, width, and height inherited from parent
// cube also has a unique property edge and new formulas for volume and surface area

console.log(cube.edge);
console.log(cube.length);
console.log(cube.width);
console.log(cube.height);