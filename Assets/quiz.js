var questions = [ {
    question: "1. Inside which HTML element do we put JavaScript?",
    choices: ["<script>", "<js>", "<JavaScript>", "<scripting>"],
    answer: 1
},
{ question: "2. Where is the correct place to insert JavaScript?",
  choices: ["both the <head> and <body> section", "the <head> section", "the <body> section",
"the <footer> section"],
answer: 1},
{ question: "3. How do you write 'Hello World' in an alert box?",
  choices: ["alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')", 
"msg('Hello World')"],
answer: 3 },
{question:"4. How do you create a function in JavaScript?",
choices: [" function:myFunction()", "function.myFunction()", "function = myFunction()", 
"function myFunction()"],
answer: 4},
{question: "5. How to write an IF statement in JavaScript?",
choices: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"],
answer:3} 
]
function generateQuestions 
( (questions) = document.getElementById("questionsContainer");
if (condition) {
    
    for (let i = 0; i < questions[0].choices.length; i++) {
        // create a new list item element
        const li = document.createElement("li");
        // assign the inner text of that list item the value of the current choice
        li.innerText = questions[0].choices[i];
        // log to see it in your console
        console.log(li);
        // add the newly created list item to the questionsContainer
        questionsContainer.append(li);
        
}
}
)