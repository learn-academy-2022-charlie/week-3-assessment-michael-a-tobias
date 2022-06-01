# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 
  `this` in JavaScript is a method that is used within an object to refer to itself. For example, while working in React, we would often create states as an object with key:value pairs. If we wanted to invoke the key:value pair we would first need to invoke the class using `this`, object, and key value using dot notation.

  Researched answer: 
  `this` is  *keyword*, not a method, that references a value within the object `this` is placed in. If `this` is used outside of an object, it will return a value of undefined.



2. What is React? Why would you use it?

  Your answer:
  React is a framework created by Facebook to make websites that takes user input and dynamically updates the portions of a webpage that respond to the input. That's why whenever you click a like button on Facebook it doesn't refresh the whole page. It also allows web developers to create JavaScript building blocks, called components, that can be reused in a plug-and-play style. I have seen React used to create browser games, food ordering apps, and personal websites. React is popular because of how it instantly responds to user input, and components make it easier for developers to reuse code.

  Researched answer:
  React is an open-source JavaScript library. React is so fast because it will render a virtual DOM and make any necessary changes by updating the virtual DOM. This allows website updates to render nearly instantly and avoids refreshing the whole page. React is popular because it is able to handle large amounts of components, it is well supported and documented, and there is a large community that helps with React problems.


3. Which lifecycle method is required in a React class component?

  Your answer:
  Render is a lifecycle method required in a React class component because it gives the command to push the code to the website.

  Researched answer:
  A React class component lifecycle consists of three phases: mounting, updating, and unmounting. Within these phases there are several lifecycle methods. Render is the *only* required lifecycle method. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer:
  JSX is a programming language that is a mix between HTML and JavaScript. It is used in React to build websites that include JavaScript-like functionality. When I use React I have to remember that between HTML and JSX, JSX requires camelCase for tags whereas HTML does not. If I have trouble implementing JSX I can look at my site's console and troubleshoot what line is giving me issues.

  Researched answer:
  There are several syntactical differences between HTML and JSX: 
  1.) You can only return a single parent element. To return multiple elements, they must be encapsulated using <div></div> or fragments <></>.
  2.) You can implement JS directly within JSX by using curly braces around the JS.
  3.) In JSX it is possible for every tag to self-close, but they would need a / before the > such as <div />.
  4.) HTML `class` and `for` must be written as `className` and `HTMLfor` since they are both JS keywords.
  5.) HTML *attributes*, not *tags*, require camelCase in JSX.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  Yarn is an acronym that stands for Yet Another Resource Negotiator. It's a compiler that allows the use of JSX in React. The files yarn modified in a React application can be found within the repo of the application. While doing test driven development, I would run Jest through yarn to test my code. It's very helpful to quickly understand the blockers I'm having with my code and to create cleaner refactors.

  Researched answer:
  Yarn is an open source package manager built by Facebook. Package managers handle pre-made code so others can build onto it without rewriting everything from scratch. package.json is modified when yarn is run because it is associated with all the project's metadata.




6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
  An anonymous function is a nameless function with no logic inside of it that is written as `() => {}`.
  One use for it is that when used within the `onClick` attribute in JSX, it prevents `onClick` from infinitely activating itself.

  Researched answer:  
  An anonymous function is a function that does not have any name associated with it. It *can* have logic inside of it. For an anonymous function to run it must be assigned a variable and have the variable invoked. Anonymous functions are not hoisted, and the function declaration needs to be before the function call.

  A named function use the keyword `function` and is followed by its name. Named functions are hoisted and can be called before they are declared because they are loaded into the memory at compilation.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:
Rendering components if the current state matches a prescribed condition.

2. Object-oriented programming:
 A programming language type based on the concept of data and functions nested within objects.

3. Ruby:
A general-purpose, open source, interpreted, dynamically-typed, server-side, object oriented scripting language.

4. Ruby blocks:
Anonymous functions that can be passed into methods.

5. Ruby hashes:
A collection of key:value pairs similar to objects in JavaScript