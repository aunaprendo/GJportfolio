const cargoOne = { 
	containerId: 1, 
	destination: "Santa Cruz", 
	weight: 304, 
	unit: "kg",
	hazmat: false};
	
const cargoTwo = { 
	containerId: 2, 
	destination: "Salinas", 
	weight: 101, 
	unit: "lb", 
	hazmat: true };

const cargoThree = 	{ 
	containerId: 3, 
	destination: "Santa Cruz", 
	weight: 304, 
	unit: "lb", 
	hazmat: false };
	
const cargoFour = 	{ 
	containerId: 3.50};
	
function normalizeUnits(manifest) {
  let revisedManifest = { ...manifest };
	if (revisedManifest.unit === "lb") {
		revisedManifest.weight = revisedManifest.weight * .45;
		revisedManifest.unit = "kg"
	}
	return revisedManifest;
}
console.log(normalizeUnits(cargoThree));


function validateManifest(manifest) {
	let revisedManifest = { ...manifest };
	
	if (revisedManifest.hasOwnProperty("containerId")) {
		Number.isInteger(revisedManifest.containerId) === true &&
		revisedManifest.containerId > 0 
			? delete revisedManifest.containerId 
			: revisedManifest.containerId = "Invalid";
	} else {
		revisedManifest.containerId = "Missing";
	};
	
	if (revisedManifest.hasOwnProperty("destination")) {
		typeof revisedManifest.destination === "string" && revisedManifest.destination.trim() !==  ""
			? delete revisedManifest.destination 
			: revisedManifest.destination = "Invalid";
	} else {
		revisedManifest.destination = "Missing";
	};
	
	if (revisedManifest.hasOwnProperty("weight")) {
		revisedManifest.weight > 0 
			? delete revisedManifest.weight 
			: revisedManifest.weight = "Invalid";
	} else {
		revisedManifest.weight = "Missing";
	};
	
	if (revisedManifest.hasOwnProperty("unit")) {
		revisedManifest.unit ===  "kg" || revisedManifest.unit === "lb"
			? delete revisedManifest.unit 
			: revisedManifest.unit = "Invalid";
	} else {
		revisedManifest.unit = "Missing";
	};	
	
	if (revisedManifest.hasOwnProperty("hazmat")) {
		typeof revisedManifest.hazmat === "boolean"
			? delete revisedManifest.hazmat 
			: revisedManifest.hazmat = "Invalid";
	} else {
		revisedManifest.hazmat = "Missing";
	};
	
return revisedManifest;
};
console.log(validateManifest(cargoFour));


function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
		const editedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${editedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}
console.log(processManifest(cargoTwo));




// cleaned up version below




const validationRules = {
  containerId: value => Number.isInteger(value) && value > 0,
  destination: value => typeof value === "string" && value.trim() !== "",
  weight: value => typeof value === "number" && value > 0,
  unit: value => value === "kg" || value === "lb",
  hazmat: value => typeof value === "boolean"
};

function validateManifest(manifest) {
  const errors = {};
  for (const key in validationRules) {
    if (!(key in manifest)) {
      errors[key] = "Missing";
    } else if (!validationRules[key](manifest[key])) {
      errors[key] = "Invalid";
    }
  }
  return errors;
}