//VOlume if a cylinder function

class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    calculateVolume() {
      const pi = Math.PI;
      return (pi * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
  }
  
  const myCylinder = new Cylinder(3, 5); // Replace with your own values
  const volume = myCylinder.calculateVolume();
  console.log(`Volume of the cylinder: ${volume}`);
