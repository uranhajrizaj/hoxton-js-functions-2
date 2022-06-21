let  letter=prompt("Enter a letter");
 let nameofUsers =users.filter((user) => user.name.toLowerCase().includes(letter.toLowerCase()));
 let i=0;
 let intervalId=setInterval(() => {
    let user=nameofUsers[i];
    if(user){
    console.log(`Hi ${user.name}`);
    i++;}
    else{
        clearInterval(intervalId);
    }
 } , 2000);
 
 //   - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.
 let  number=Number(prompt("Enter your id"));
 todos.filter(todo=>todo.userId===number && todo.completed===true).forEach(todo=>console.log(todo.title));