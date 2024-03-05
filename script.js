const field = [
  {
    id: 1,
    subfields: [
      {
        id: 1,
      },
    ],
  },
];

const fieldContainer = document.getElementById("field-section-group");
const addFieldGroup = document.getElementById("addFieldGroup");
const removeFieldGroup = document.getElementById("removeFieldGroup");

function addField(e) {
  e.preventDefault();
  const fieldSection = document.createElement("div");
  const inputField = document.createElement("INPUT");
  const fieldGroup = document.createElement("div");
  const buttonGroup = document.createElement("div");
  const addBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  fieldSection.classList.add("field-section");
  fieldGroup.classList.add("field-group");
  buttonGroup.classList.add("button-group");

  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "kri...");

  addBtn.className = "btn";
  removeBtn.className = "btn";
  addBtn.textContent = "+";
  removeBtn.textContent = "x";

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const subInputField = document.createElement("INPUT");
    subInputField.setAttribute("type", "text");
    subInputField.setAttribute("placeholder", "ksa...");
    fieldGroup.appendChild(subInputField);
  });

  removeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const lastChild = fieldGroup.lastChild;
    if (lastChild && lastChild.nodeType === 1) {
      fieldGroup.removeChild(lastChild);
    }
  });

  buttonGroup.appendChild(addBtn);
  buttonGroup.appendChild(removeBtn);
  fieldSection.appendChild(inputField);
  fieldSection.appendChild(fieldGroup);
  fieldSection.appendChild(buttonGroup);
  {
    /* <div class="field-section">
              <input type="text" placeholder="kri..." />
              <div class="field-group">
                ${field.subfields
                  .map(
                    (subfield) => `<input type="text" placeholder="ksa..." />`
                  )
                  .join("")}
              </div>
              <div class="button-group">
                <button class="btn">+</button>
                <button class="btn">x</button>
              </div>
            </div> */
  }
  fieldContainer.appendChild(fieldSection);
}
function removeField(e) {
  e.preventDefault();
  const lastChild = fieldContainer.lastChild;
  if (lastChild && lastChild.nodeType === 1) {
    fieldContainer.removeChild(lastChild);
  }
}

addFieldGroup.addEventListener("click", addField);
removeFieldGroup.addEventListener("click", removeField);
