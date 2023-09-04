console.log("Prince!!");

class princeForm{
  setError(inType, error) {
    // let element = document.getElementById(inType);
    document.getElementsByClassName(inType)[0].innerText = error;
    console.log(document.getElementsByClassName(inType))
  }
  
  validateForm() {
    let returnVal = true;
  
    // Validating Name
    let name = document.forms.myForm.name.value;
    if (name.length == 0) {
      this.setError("name", "*Length of name is too short!");
      returnVal = false;
    }
  
    // Validating Email
    let email = document.forms.myForm.email.value;
    if (email.length == 0) {
      this.setError("email", "*Email can not be blank!!");
      returnVal = false;
    }
  
    // Validating Password
    let password = document.forms.myForm.password.value;
    if (password.length < 8) {
      this.setError("password", "*Please enter a valid password!!");
      returnVal = false;
    }
  
    // Validating Phone
    let phone = document.forms.myForm.phone.value;
    if (phone.length != 10) {
      this.setError("phone", "*Check your Phone number!!");
      returnVal = false;
    }
  
    // Validating Gender Input
    let checkMale = document.getElementById("male");
    let checkFemale = document.getElementById("female");
    if (checkMale.checked != true && checkFemale.checked != true) {
      this.setError("gender", "*Please select your Gender!");
      returnVal = false;
    }
  
    // Validating Subject
    let checkMaths = document.getElementById("maths");
    let checkScience = document.getElementById("science");
    let checkEnglish = document.getElementById("english");
    if (
      checkMaths.checked != true &&
      checkScience.checked != true &&
      checkEnglish.checked != true
    ) {
      this.setError("subject", "*Select atleast one subject!!");
      returnVal = false;
    }
  
    // Validating File Upload
    let checkFiles = document.getElementById("fileselect");
    if (checkFiles.files.length == 0) {
      this.setError("upload", "*Please upload the required file!!");
      returnVal = false;
    }
  
    return returnVal;

  }
}

let princeObj = new princeForm();


// Show data in JSON & Array format
let form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let myFormData = new FormData(e.target);
  console.log(myFormData);

  // Object.fromEntries() method can be used to retrieve all the form fields from the FormData object.
  let formDataObj = Object.fromEntries(myFormData);
  // let formDataObj = Object.fromEntries(myFormData.entries());

  // Here, we can get all the selected data into an array using the getAll() method on the FormData object.
  formDataObj.subject = myFormData.getAll("subject");

  formDataObj.upload = formDataObj.upload.name;

  console.log(formDataObj);

  let output = document.querySelector(".output-json");

  // Problem in understanding the use of null and 2 here.
  //Got it - JSON.stringify(value, replacer, space)
  output.innerText = JSON.stringify(formDataObj, null, 2);



  //For arrays format
  let formDataArr = [];
  let nameArr = document.getElementById('name').value;
  let mailArr = document.getElementById('email').value;
  let passArr = document.getElementById('password').value;
  let ageArr = document.getElementById('age').value;
  let phoneArr = document.getElementById('phone').value;
  let selectedGender = document.querySelector('input[name = gender]:checked').value;
  let selectedFile = document.getElementById('fileselect').value;
  let selectedCountry = document.getElementById('country').value;
  let descArr = document.getElementById('description').value;


  formDataArr.push(nameArr, mailArr, passArr, ageArr, phoneArr, selectedGender, formDataObj.subject, selectedFile, selectedCountry, descArr);
  console.log(formDataArr);

  let outputArr = document.querySelector(".output-array");

  outputArr.innerText = JSON.stringify(formDataArr, null, 2);
  // console.log(outputArr);
  

});
