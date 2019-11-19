
<h1 align="center">Hacker News Clone 👩🏿‍💻I</h1>
<img align="right" src="https://img.shields.io/badge/Made%20with-Tears%20%F0%9F%98%AD%20-blue?style=for-the-badge&logo=appveyor"/>
<img align="left" src="https://img.shields.io/badge/Developed%20by-jffrydsr%20👩🏿‍💻-red?style=for-the-badge&logo=appveyor"/>
<img src="https://img.shields.io/badge/Developed%20by-ryankayne%20%F0%9F%91%A8%F0%9F%8F%BF%E2%80%8D%F0%9F%92%BB-red?style=for-the-badge&logo=appveyor"/>
<img align="right" src="https://img.shields.io/badge/Version-Hillary--Black--24-black?style=for-the-badge&logo=appveyor">
<img src="https://img.shields.io/badge/Build-Passing-green?style=for-the-badge&logo=appveyor"/>


<h3 align="center"></h3>

# Usage 
## Directory Tree 🌳 
```bash
├───public
│   ├───css
│   │   └───libs
│   ├───imgs
│   │   └───icons
│   ├───js
│   │   └───libs
│   │       └───fa
│   └───_less
│      
└───src
│           
└───package.json 
│           
└───README.md
```

## For our fellow developers 🧙🏿‍ 
1. ```clone``` our repo to your favorite directory
2. ```install``` a LESS compiler to your IDE to edit the styles 🎨, or just modify rendered ```.css``` file
3. ```js/libs/fa``` & ```less/libs/fa``` contain [FontAwesome]("https://fontawesome.com") libraries for various icon links.

<span id="changelog">

# Changelog

## Versioning 
> in the style of Google's semantic _and tasty 🤤_ Android OS © versioning. 
```[name_of_celebrity] [color] [day_date]```

## Record
* ```[Hilary-Black-24]: CURRENT BUILD --passing ✅ ```
* ```[Kanye-Green-23]: ```
* ```[Brad-Pink-22]: ```
* ```[Sandra-Orange-21]:```
* ```[Trump-White-20]:```

# Minimum Viable Project 
## CSS Fundamentals
* ✔ | CSS FlexBox, Boxmodel
* ✔ | Responsive design at 500px, 800px, 1000px
* ✔ | Responsive Units forr sizing ```rem, em, %```
* ✔ | **No horizontal scrollbars!**

## Code Conventions
* ✔ | student's code is easy to read
* ✔ | student's have used different less files for different portions of the site and they have imported them successful into the index.less file.
```bash
   └───_less
         └─── components
         └─── footer 
         └─── form 
         └─── global 
         └─── marketing-page
         └─── mixins
         └─── navigation 
         └─── reset
         └─── variables
         └─── components
         └─── banner
         └─── animations
```
        
* ✔ | student uses mixins and variables.
* ✔ | student has used escaping for media queries: 

> ```less
> @phone: ~"(min-width: 500px)";
> @tablet: ~"(min-width: 800px)";
> @desktop: ~"(min-width: 1200px)"; 

* ✔ | student writes DRY code and as 
* ✔ | student used reusable parametric mixins w/ parameter names that make sense
* ✔ | student passes the tests for JavaScript V functions.

## JavaScript Pop Lesson! 🤓
* **Hoisting**:
>the quirk in JavaScript that allows ```var``` to be declared, _after_ it's initialized 

```javascript
name = alert("What's your Nomen❓");
console.log(name);
// le hoist 
var name;
```

* **.forEach**:
>Array method that encapsulates the ```for``` loop operator as a class method and applies a function object to each member. 

```javascript
let dwarves = ["sleepy", "creepy", "funny", "dizzy", "drunk", "gay"];
dwarves.forEach(function(dwarf) { 
      console.log(`${ dwarf } is crawling out the backdoor again 😩`)
});
```
<!-- //Be Creative
// Now that you are familiar with .forEach(), .map(), .filter(), and .reduce().  I want you to think of potential problems you could solve given the data set and the bakery theme.  Try to create and then solve 3 unique problems using one or many of the array methods  forEach, map and reduce.

// Problem 1

// Problem 2

// Problem 3

// review questions - check for understanding
// In your own words - define hoisting
// In your own words - define an anonymous function
// In your own words - what is a closure
// In your own words - what is a callback?
// In your own words - define function level scope
// In your own words - define map and what it is doing
// in your own words - define reduce and what it is doing
// in your own words - define for each and what it is doing
-->
# Authors
## The Enigmatic ```(Jffry (Dsr))``` | UI/UX Developer 
<img height="100px" width="100px" src="assets/imgs/team/Jeffrey.png"/>

# Technologies Used 
* [FontAwesome - Icon Pack]("https://fontawesome.com")

# Acknowledments

# Licensing 
**This project is under the MIT License ☔**<br>
© Hacker News Clone, 2019