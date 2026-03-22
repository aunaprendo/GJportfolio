const personalAndProductInputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="number"]');
	
const complaintBoxes = document.querySelectorAll('input[type="checkbox"]');
const complaintsGroup = document.getElementById("complaints-group");
const otherComplaintBox = document.getElementById("other-complaint");
const otherComplaintTextBox = document.getElementById("complaint-description-container");
const otherComplaintText = document.getElementById("complaint-description");

const solutionRadios = document.querySelectorAll('input[name="solutions"]');
const solutionsGroup = document.getElementById("solutions-group");
const otherSolutionRadio = document.getElementById("other-solution");
const otherSolutionTextBox = document.getElementById("solution-description-container");
const otherSolutionText = document.getElementById("solution-description");

const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");

function toggleField(box, isChecked) {
  box.hidden = !isChecked;
}

otherComplaintBox.addEventListener("change", (e) => {
  toggleField(otherComplaintTextBox, e.target.checked);
});

solutionRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    toggleField(
      otherSolutionTextBox,
      otherSolutionRadio.checked
    );
  });
});

let validationResults = {};

function validationPairs(input) {
		validationResults[input.id] = input.checkValidity();
};

function buttonsClicked(buttonType) {
	let buttonsClicked = {};
	buttonType.forEach(button => {
	  buttonsClicked[button.id] = button.checked;
	});	
	const buttonsConsolidation = Object.values(buttonsClicked).some(b => b===true);
	return buttonsConsolidation;
};

function buttonsValidation(buttonType, buttonGroup, comment, isOtherSelected) {
  validationResults[buttonGroup.id] = buttonsClicked(buttonType);
  changeGroupBorder(buttonType, buttonGroup);

  if (isOtherSelected) {
    validateTextarea(comment);
  } else {
    validationResults[comment.id] = true; 
  }
}
 
function changeBorder(input) {
		input.checkValidity() ? input.style.borderColor = "var( --accent-color-dteal)" :  input.style.borderColor = "var( --accent-color-gold)";
}

personalAndProductInputs.forEach(input => {
		input.addEventListener("change", () => {changeBorder(input)
		});
});	

function validateTextarea(input) {
  const isValid = input.value.trim().length >= 20;
  input.style.borderColor = isValid ? "var( --accent-color-dteal)" : "var( --accent-color-gold)";
  validationResults[input.id] = isValid;
}

otherSolutionText.addEventListener("input", () => {
  validateTextarea(otherSolutionText);
});
		

otherComplaintText.addEventListener("input", () => {
  validateTextarea(otherComplaintText);
});		
		
function changeGroupBorder(buttonType, buttonGroup) {
	buttonsClicked(buttonType) ? buttonGroup.style.borderColor = "var( --accent-color-dteal)" :  buttonGroup.style.borderColor = "var( --accent-color-gold)";
};

complaintBoxes.forEach(input => {
		input.addEventListener("change", () => {
			changeGroupBorder(complaintBoxes, complaintsGroup)
		});
});	

solutionRadios.forEach(input => {
		input.addEventListener("change", () => {
			changeGroupBorder(solutionRadios, solutionsGroup)
		});
});	


function validateForm() {

	personalAndProductInputs.forEach(input => {
	  validationPairs(input);
		changeBorder(input);
	});	
	
	buttonsValidation(
	  complaintBoxes,
	  complaintsGroup,
	  otherComplaintText,
	  otherComplaintBox.checked
	);
	
	buttonsValidation(
	  solutionRadios,
	  solutionsGroup,
	  otherSolutionText,
	  otherSolutionRadio.checked
	);
	
	return validationResults;
};


function isValid(validationResults) {
  return Object.values(validationResults).every(v => v === true);
}

submitBtn.addEventListener("click", () => {
  isValid(validateForm());
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
	isValid(validateForm());
});
