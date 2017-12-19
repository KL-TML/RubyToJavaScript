// // apples = 14
// puts apples

// puts "I have #{apples} apples."

var apples = 14
console.log(apples)
console.log('I have '+ apples + ' apples.')

console.log();
console.log();
console.log("----------")

// IN RUBY

// In JS
var materials = ['wood', 'metal', 'stone'];
var words = {};
words.elephant = 'The worlds largest land mammal.';
words.school = 'A place of learning.';
words.icecream = 'A delicious milk-based dessert.';
console.log(words)

console.log("----------")


// RUBY
// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end

var num = 16
if (num > 10) {
  console.log(+ num + ' is greater than 10.');
} else if (num = 10) {
  console.log(+ num + ' is exactly 10.');
} else {
  console.log(+ num + ' must be less than 10.');
}

console.log("----------")

// IN RUBY
// 10.times do
//   puts "Doing the same thing over and over."
// end

for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.")
}

console.log("----------")

// RUBY
// base = 5
// 20.times do |num|
//   puts num + base
// end

var base = 5
for (var i = 0; i < 20; i++) {
  console.log(base+i)
}

console.log("----------")

// total = 0
// 100.times do |num|
//   total += num
// end
// puts total


var total = 0
for (var i = 0; i < 100; i++) {
  console.log(base+i)
}

console.log("----------")

// RUBY!!!!!
// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end


// IN JS

var height = 3
for (height; height < 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster")
  }
  else{
    console.log("You are too short to ride this rollercoster.");
  }
}

console.log("----------")

// In RUBY
// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end

//In JS
var containers = ['purse', 'wallet', 'backback']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

console.log("----------")

//IN RUBY

// def hello_world
//   puts "Hello world!"
// end

var hello_world = "Hello World!"
console.log(hello_world);

console.log("----------")

// In RUBY

var num1 = 5
var num2 = 7
function add(){
  return num1 + num2;
}
console.log(add())
