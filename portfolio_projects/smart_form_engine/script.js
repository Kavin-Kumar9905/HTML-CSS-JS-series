const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");


// Config
const fields = [
  {
    type:"text",
    label:"Name",
    id:"name",
    required:true
  },
  {
    type:"email",
    label:"Email",
    id:"email",
    required:true
  },
  {
    type:"password",
    label:"Password",
    id:"password",
    required:true,
    minLength:6
  }
];


// Generate Form
function generateForm(){

  fields.forEach(function(field){

    const wrapper = document.createElement("div");
    wrapper.classList.add("field");

    const label = document.createElement("label");
    label.textContent = field.label;

    const input = document.createElement("input");
    input.type = field.type;
    input.id = field.id;

    const error = document.createElement("div");
    error.classList.add("error");
    error.id = field.id + "-error";

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(error);

    form.appendChild(wrapper);

  });

}


generateForm();


// Validate
function validate(){

  let valid = true;

  fields.forEach(function(field){

    const input = document.getElementById(field.id);
    const error = document.getElementById(field.id + "-error");

    error.textContent = "";

    // Required
    if(field.required && input.value.trim() === ""){

      error.textContent = `${field.label} is required`;
      valid = false;

    }

    // Min length
    if(field.minLength){

      if(input.value.length < field.minLength){

        error.textContent =
          `${field.label} must be at least ${field.minLength} characters`;

        valid = false;
      }

    }

  });

  return valid;

}


// Submit
submitBtn.addEventListener("click", function(){

  if(!validate()) return;

  const data = {};

  fields.forEach(function(field){

    const input = document.getElementById(field.id);

    data[field.id] = input.value;

  });

  output.innerHTML = `
    <h3>Form Data</h3>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;

});