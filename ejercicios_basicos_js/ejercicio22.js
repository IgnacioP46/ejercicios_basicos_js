const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let replacedFoodSchedule = [];

for (let food of foodSchedule) {
    if (!food.isVegan) {
      let replaced = false;
      for (let fruit of fruits) {
        if (!replaced && !replacedFoodSchedule.includes(fruit)) {
          replacedFoodSchedule.push(fruit);
          replaced = true;
        }
      }
    } else {
      replacedFoodSchedule.push(food.name);
    }
  }
  
  console.log(replacedFoodSchedule);//[ 'Heura', 'Strawberry', 'Tofu', 'Banana', 'Rice', 'Pasta' ]