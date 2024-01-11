function register() {
    let name = $("#fullname").val();
    let username = $("#username").val();
    let email = $("#email").val();
    let dob = $("#dob").val();
    let gender = $("#gender-radio-container input:radio[name=gender]:checked").val();
    let address = $("#address").val();
    let state = $("#state select:selected").val();
    let city = $("#city select:selected").val();
    let pincode = $("#pincode").val();

    let checkboxes = document.querySelectorAll('#hobbies-check-container input[type=checkbox]:checked');
    let hobbies = [];

    for(var i = 0; i < checkboxes.length; i++) {
        hobbies.push(checkboxes[i].value);
    }
    let password = $("#password").val();

    let userData= {
        name: name,
        username: username,
        email: email,
        dob: dob,
        gender: gender,
        address: address,
        state: state,
        city: city,
        pincode: pincode,
        hobbies: hobbies,
        password: password
    }

    console.log(JSON.stringify(userData));
    displayData(userData);
}

function displayData(userData) {
    alert("Inside displayData()");

    $.ajax({
        type: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts', // Using JSONPlaceholder for testing
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: function(response) {
            // Redirect to a new page and display the response
            window.location.href = 'user-data.html?data=' + JSON.stringify(response);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}