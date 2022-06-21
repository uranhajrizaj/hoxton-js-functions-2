let  letter=prompt("Enter a letter");

  users.filter((user) => user.name.includes(letter)).map((user) => console.log(`Hi there, ${user.name}!`));