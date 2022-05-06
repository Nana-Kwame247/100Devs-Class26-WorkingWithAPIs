//Create a constructor with 4 properties and 3 methods

function PizzaMachine(size, toppings, crust, sauce) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.sauce = sauce;

  this.estimatedDeliveryTime = function () {
    console.log(`calculating`);
  };
  this.burnMouth = function () {
    console.log(`jdjbv;eefvjjd`);
  };
  this.frisbee = function () {
    console.log(`Yyyeeeettttt`);
  };
}

let pizza = new PizzaMachine(
  "large",
  ["spinach", "garlic"],
  "deep dish",
  "white"
);
