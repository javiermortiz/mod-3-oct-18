window.addEventListener("DOMContentLoaded", (event) => {
  const licenseForm = document.getElementById("drivers-license-form");
  const licenseCardFields = document.querySelectorAll(".license__info");
  const submitButton = document.querySelector(".form__submit");

  // ** Phase 1B: Update license with event delegation and event.target ** 
  licenseForm.addEventListener("input", (event) => {
    // iterate over the license card fields and match their ids to
    // event.target.id
    licenseCardFields.forEach((field) => {
      
      
      if (field.id.includes(event.target.id)) {
      // check to see if the event.target.id is 'donor-status' as you need to
      // handle the input of the checkbox differently    
        if (event.target.id === 'donor-status') {
          let licenseStatus = document.getElementById('card-donor-status');
          // Here we set the innerHTML to 'Donor' or 'Not-Donor' based on the
          // attribute of checked being added to the event.target using a
          // ternary operator
          licenseStatus.innerHTML = event.target.checked ? 'Donor' : 'Non-Donor';
        } else {
          // Otherwise we just set the innerHTML of the License field to the
          // same text as the input field (for all other fields except for the
          // checkbox)
          field.innerHTML = event.target.value;
        }
      };
    });
  });

  // ** Phase 2: Add focus and blur events to form inputs **
  licenseForm.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "lightgreen";
  }, true);
  // change back to initial state on blur
  licenseForm.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "";
  }, true);

  // ** Phase 3: Check that license numbers match **
  licenseForm.addEventListener("submit", (event) => {
    // get the values of the license number field and confirm field
    const licenseNumber = document.getElementById('license-num').value;
    const licenseNumberConfirm = document.getElementById('license-num-confirm').value;
    // if the values are not equal, alert the user otherwise, submit the form
    if (licenseNumber !== licenseNumberConfirm) {
      // prevent the default submission behavior
      event.preventDefault();
      alert("License numbers must match!");
    } else {
      alert("The form was submitted!");
     updateClickCount();
    };
  });

   // ** Phase 4: Update submit button click count **
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitButton.innerHTML = `${event.detail}`;
  });
 
  //Bonus Drag and Drop solution code
let partsContainer = document.getElementById('body-parts-container');
	partsContainer.addEventListener('dragstart', handleDragStart);

	let photo = document.getElementById('license-photo');
	photo.addEventListener('drop', handleDrop);
	photo.addEventListener('dragenter', handleDragEnter);
	photo.addEventListener('dragleave', handleDragLeave);
	photo.addEventListener('dragover', handleDragOver);

	let partsList = document.getElementById('card-body-parts-list');

	function handleDragStart(e) {
		e.target.classList.add('is-being-dragged');
		e.dataTransfer.setData('text/plain', e.target.name);
		e.dataTransfer.dropEffect = 'move';
	}

	function handleDragEnter(e) {
		// Needed so that the "drop" event will fire.
		e.preventDefault();
		e.target.classList.add('is-active-drop-zone');
	}

	function handleDragLeave(e) {
		e.target.classList.remove('is-active-drop-zone');
	}

	function handleDragOver(e) {
		// Needed so that the "drop" event will fire.
		e.preventDefault();
	}

	function handleDrop(e) {
		const name = e.dataTransfer.getData('text/plain');
		const draggedElement = document.getElementsByName(name)[0];
		draggedElement.draggable = false;
		const newPart = document.createElement('li');
		newPart.innerText = name;
		partsList.appendChild(newPart);
		handleDragLeave(e);
		draggedElement.classList.remove('is-being-dragged');
		draggedElement.classList.add('was-added');
	}

});