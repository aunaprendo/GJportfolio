const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();

}



// swap elements at i and j without mutating the original
const copy = array.slice();
copy[i] = copy.splice(j, 1, copy[i])[0];
Here is an example:

Example Code
const originalArray = [12, 97, 68, 55];
const copyArray = originalArray.slice();
copyArray[1] = copyArray.splice(3, 1, copyArray[1])[0];
console.log(copyArray); // [12, 55, 68, 97]
The technique, applied in the third line, works as follows:

splice(3, 1, copyArray[1]) removes the element at index 3 (55)
It inserts the element from copyArray[1] (97) into index 3
splice() returns [55], an array containing the removed element
[0] extracts 55 from that array
That value (55) is assigned back to copyArray[1], completing the swap
Use this technique with the updatedCrew array to swap the astronauts at fromIndex and toIndex.