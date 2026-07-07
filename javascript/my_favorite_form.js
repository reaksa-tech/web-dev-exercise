document.addEventListener("DOMContentLoaded", function(){
    const titleInput = document.getElementById("title");
    const form = document.getElementById("kdramaForm");
    const titleError = document.getElementById("titleError");
    const typeBottons = document.getElementsByName("type");
    const typeError = document.getElementById("typeError");
    const dateError = document.getElementById("dateError");
    const dateInput = document.getElementById("date");
    const genreError = document.getElementById("genreError");
    const genreInput = document.getElementById("genre");
    const summaryError = document.getElementById("summaryError");
    const summaryInput = document.getElementById("summary");
    const quantityError = document.getElementById("quantityError");
    const quantityInput = document.getElementById("quantity");


    function validateTitle(){
        // alert("validate title");

        if(titleInput.value.trim() === ""){ //trim()... delete spaces
            titleError.textContent = "Title is required.";
            return false;
        }

        const value = titleInput.value.trim();
        if(value.length > 50){
            titleError.textContent = "No more than 50 characters allowed.";
            return false;
        }
    
        titleError.textContent = "";
        return true;
    }

    
    function validateDate(){
        if(!dateInput.validity.valid){
            dateError.textContent = "invalid date.";
            return false;
        }
        const value = dateInput.value.trim();
        if(value === ""){
            dateError.textContent = "Date is required.";
            return false;
        }

        dateError.textContent = "";
        return true;
    }
    dateInput.addEventListener("blur", validateDate);
   


    titleInput.addEventListener("blur", validateTitle); // blur = lose focus

   

    // adding envent detection of radio buttons.
    typeBottons.forEach(radioButton => {
        radioButton.addEventListener('blur', validateType);
    });

    function validateType(){
        let checkedType = document.querySelector('input[name="type"]:checked');
        if(checkedType === null){
            typeError.textContent = "Type is required.";
            return false;
        }else{
            typeError.textContent = "";
            return true;
        }
    }


    function validateGenre(){
        if(genreInput.value === ""){
            genreError.textContent = "Genre is required.";
            return false;
        }
        else{
            genreError.textContent = "";
            return true;
        }
    }
    genreInput.addEventListener("blur", validateGenre);


    function validateSummary(){
        if(summaryInput.value.trim() === ""){
            summaryError.textContent = "Summary is required.";
            return false;
        }else{
            summaryError.textContent = "";
            return true;
        }
    }
    summaryInput.addEventListener("blur", validateSummary);

    function validateQuantity(){
        if(quantityInput.value.trim() === ""){
            quantityError.textContent = "Rating is required.";
            return false;
        }else{
            quantityError.textContent = "";
            return true;
        }
    }
    quantityInput.addEventListener("blur", validateQuantity);

    form.addEventListener("submit", function(event){
        // validateTitle();
        // event.preventDefault(); // stop sending data to web browser or stop submit.

        // const isValid = validateTitle();
        // if(!isValid){
        //     event.preventDefault(); 
        // }

        let isValid = validateTitle();
        isValid = validateDate() && isValid;
        isValid = validateType() && isValid;
        isValid = validateGenre() && isValid;
        isValid = validateSummary() && isValid;
        isValid = validateQuantity() && isValid;

        if(!isValid){
            event.preventDefault();  //stop submit.
        }
    });

    form.addEventListener("reset", function(event){
        titleError.textContent = "";
        dateError.textContent = "";
        typeError.textContent = "";
        genreError.textContent = "";
        summaryError.textContent = "";
        quantityError.textContent = "";
    });

});