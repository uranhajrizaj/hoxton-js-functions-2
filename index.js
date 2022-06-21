let  letter=prompt("Enter a letter");
 users.filter((user) => user.name.includes(letter)).map((user) => console.log(`Hi there, ${user.name}!`));
 //   - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.
 let  number=Number(prompt("Enter your id"));
 todos.filter((user) => user.id === number).map((todo) => console.log(`Your todos, ${todo.title}!`));