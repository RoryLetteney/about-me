var username = prompt('What is your name? ');
var home = prompt('In which city do you live? ');
var favoriteFood = prompt('What is your favorite food? ');
var favoriteVacSpot = prompt('What is your favorite vacation location? ');
var confirmed = confirm('Hello, ' + username + '. Does everyone from ' + home + ' enjoy eating ' + favoriteFood + ' and vacationing in ' + favoriteVacSpot + '?' );

console.log('What is your name? ', username);
console.log('In which city do you live? ', home);
console.log('What is your favorite food? ', favoriteFood);
console.log('What is your favorite vacation location? ', favoriteVacSpot);


//A CONDITIONAL IS NOT REQUIRED FOR THE LAB, BUT I DON'T SEE MUCH POINT IN USING A confirm()...
// ...WITHOUT CHECKING THE VALUE OF IT
if (!confirmed) {
  alert('Huh, I guess I have a lot to learn about people from ' + home + '!');
} else {
  alert('People from ' + home + ' sound awesome!');
}