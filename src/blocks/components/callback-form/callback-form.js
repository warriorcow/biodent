const callbackForms = document.querySelectorAll('.callback-form');

callbackForms.forEach(form => {
    const submitButton = form.querySelector('.callback-form__submit');
    const nameInput = form.querySelector('[data-input=name]');
    const phoneInput = form.querySelector('[data-input=phone]');
    const policyInput = form.querySelector('[data-input=policy]');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkRequired([nameInput], [phoneInput], policyInput)) {
            submit(form, {
                name: nameInput.value,
                phone: phoneInput.value,
                url: window.location.pathname
            });
        }
    });
});

function checkRequired(inputArr, phoneArr, policyInput) {
    let validInputs = [];
    inputArr.forEach(function(input){
        if (input.classList.contains('required') && input.value.trim() === ''){
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
            validInputs.push(true);
        }
    });

    phoneArr.forEach(function(phone){
        if (phone.classList.contains('required') && phone.value.replace(/[ ()-]/g, '').length !== 12){
            phone.classList.add('invalid');
        } else {
            phone.classList.remove('invalid');
            validInputs.push(true);
        }
    });
    if (policyInput && policyInput.classList.contains('required')) {
        if (!policyInput.checked) {
            policyInput.classList.add('invalid');
        } else {
            policyInput.classList.remove('invalid');
            validInputs.push(true);
        }
    }

    return validInputs.length === inputArr.length + phoneArr.length + (policyInput ? 1 : 0);
}

function submit(formElement, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
    });

    BX.ajax({
        url: "/local/templates/main/ajax/callback.php",
        data: formData,
        method: "POST",
        dataType: "json",
        processData: false,
        preparePost: false,
        onsuccess: function (data) {
            formElement.classList.add('thanks')
        },
        // действия в случаи ошибки
        onfailure: function () {
            console.log("error");
        },
    });
}
