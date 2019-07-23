// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function familyMember(lastName){
  const firstNameOne = "Parents";
  console.log(`${lastName} ${firstNameOne}`);
    
    function familyMemberOne(){
      const firstNameTwo = "Gaby";
      console.log(`${firstNameTwo} ${lastName}`);

        function familyMemberTwo(){
          const firstNameThree = "Juan";
          console.log(`${firstNameThree} ${lastName}`);
        }
        familyMemberTwo();
    }
    familyMemberOne();
}
familyMember("Garcia");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
