// Get the input field and all button elements
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = ""; // Initialize an empty string to hold the input

// Convert NodeList to array and iterate through each button
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                // Evaluate the string and display the result
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any evaluation errors
                input.value = "Error";
            }
        } else if (e.target.innerHTML === 'AC') {
            // Clear the input string
            string = "";
            input.value = string;
        }else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         else {
            // Append the clicked button's text to the string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
