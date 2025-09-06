/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Ada";
const age = 28;
const studyField = "Quantum Mechanics";
// Shorthand properties: key matches variable name
const participant = { name, age, studyField };

console.log(participant);
// {name: 'Ada', age: 28, studyField: 'Quantum Mechanics'}
/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantWithMethod = {
    // copy prior fields
    name,
    age,
    studyField,

    // Shorthand method definition
    displayInfo() {
        console.log(`Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
    }
};
participantWithMethod.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const participantWithArrow = {
    name,
    age,
    studyField,

    // Arrow as a method on purpose, to observe behavior
    displayInfo: () => {
        // In an arrow, `this` is captured from the surrounding scope
        console.log(`Arrow this.name is:`, this && this.name); // usually undefined in 
        console.group(`Participant: ${name}, Age: ${age}, Field: ${studyField}`);
    }
};
participantWithArrow.displayInfo();
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*
 * Observations:
 * TODO: Explain here.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propName, propvalue) {
    // 1) copy the original object
    // 2) set a dynamic key using computed property names
    return { ...obj, [propName]: propvalue };
}
const updated = updateParticipantInfo(participantWithMethod, "studyField", "Astrobiology");
console.log("original:", participantWithMethod.studyField);
console.log("updated:", updated.studyField); // Astrobiology