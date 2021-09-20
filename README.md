**Home Work**

1.)What is web api - it makes some complex code in easy way
web api is an intermediate between JS(high level lang) & low level lang(C,C++).
__________________________________________________________________________________
2.)Diff between var and let 
'var' has a global scope. it can be defined under window obj.
let is block scope {}.
let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(window.a); // undefined
console.log(window.b); // 'world'
var a = 'hello';
var a = 'world'; // No problem, 'hello' is replaced.
let b = 'hello';
let b = 'world'; // SyntaxError: Identifier 'b' has already been declared
__________________________________________________________________________________
3.)Temporal dead zone / variable hoisting
[[[What is the Temporal Dead Zone (TDZ) in JavaScript_]]]
TDZ - access a let or const before it gets declared it will through a reference error.
variable hoisting - JS engine will parse and execute our code in 2 steps a.) Parsing of the code into an Abstract Syntax Tree/executable byte code b.)Run time execution. Step 1 is where hoisting happens, and this is done by the JS engine. It essentially will move all your variable declarations to the top of their scope.
So an example would be:
console.log(hoistedVariable); // undefined
var hoistedVariable = 1;
To be clear, these variables aren't physically moving in the code. But, the result would be functionally identical to the below:
var hoistedVariable;
console.log(hoistedVariable); // undefined
counter = 1;
Just to prove let and const also hoist, here's an example:

{
    // Both the below variables will be hoisted to the top of their scope!
	console.log(typeof nonsenseThatDoesntExist); // Prints undefined
	console.log(typeof name); // Throws an error, cannot access 'name' before initialization
	let name = "Kealan";
}
__________________________________________________________________________________
4.)Splice & slice
__________________________________________________________________________________
5.)Shallo copy and deep copy[[[Understanding Deep and Shallow Copy in Javascript _ by Manjula Dube _ Medium.html]]]disable wifi while loading this .html page.
Shallo copy:employeeDetailsOriginal & employeeDetailsDuplicate are pointing same reference object in memory
var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!

Deep copy:employeeDetailsOriginal & employeeDetailsDuplicate are pointing different reference object in memory
var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
var employeeDetailsDuplicate = functionname(employeeDetailsOriginal) // do copy that object into another function private scope.
Another way: u can use JSON.parser & stringify method = >var new_obj = JSON.parse(JSON.stringify(org_object));
__________________________________________________________________________________
6.)What Js library & framework
The key difference between JavaScript libraries and frameworks is that libraries consist of functions that an application can call to perform a task, while a framework defines how a developer designs an application. In other words, the framework calls on the application code, rather than the other way around
__________________________________________________________________________________
7.)Why react fast
It uses Virtual DOM that makes the app fast. ... Therefore, the idea of Virtual DOM helps allows ReactJS to know when exactly to re-render or when to ignore some specific pieces of DOM because it can detect when the data has changed. A UI that reacts promptly is crucial in enhancing the user experience.
__________________________________________________________________________________
8.)What is virtual DOM & what is reconciliation 
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. ... They may also be considered a part of “virtual DOM” implementation in React.
__________________________________________________________________________________
9.)Features of react is one way data flow
It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In essence, this means child components are not able to update the data that is coming from the parent component. In React, data coming from a parent is called props.
__________________________________________________________________________________
10.)Diff bw npm and npx
Npm is a tool that use to install packages. Npx is a tool that use to execute packages. Packages used by npm are installed globally you have to care about pollution for the long term. Packages used by npx are not installed globally so you have to carefree for the pollution for the long term
__________________________________________________________________________________
11.)Diff bw put,patch and merge

If we want to change the first name then we send a PUT request for Update

{ "first": "Michael", "last": "Angelo" }
Here, although we are only changing the first name, with PUT request we have to send both parameters first and last. In other words, it is mandatory to send all values again, the full payload.

When we send a PATCH request, however, we only send the data which we want to update. In other words, we only send the first name to update, no need to send the last name.

For this reason, PATCH request requires less bandwidth.
patch-merge are same
__________________________________________________________________________________
12.)REST API 
[[Node.js - RESTful API - Tutorialspoint]]
__________________________________________________________________________________
[Handson done in "sample-code"]
13.)debounce 
14.)UseEffect, with emp [] ,with state value dep,
15.)how to pass obj in useState
16.)wat is ref [The Complete Guide to useRef() and Refs in React]
17.)Context API, useContext
-contextAPI : Used to maintaining the state values in one place for large project/applications. so that we can use the state values anywhere in the project/applications.
__________________________________________________________________________________
18.)Export .xl by clicking on table [Handson done in "createtable_using_api"]
__________________________________________________________________________________
-Render Props : it accepts func as arguments and it returns u the react element. 

19.)Route Params [Handson done in "react-route-handson"]
20.)Redirect To - am not getting that how to use this in code. - PENDING
__________________________________________________________________________________
21.)Pure component [What are Pure Components in React _ by Mayank Gupta _ TechnoFunnel _ Medium]
	PureComponent - output not depends on global variable its only depnds on local variables.
22.)React.memo [Handson done in "react-app"][Use React.memo() wisely] 
Explanation given by Aadesh [Handson done in StudentDemoRepo]
__________________________________________________________________________________
23.)HOC : HOC is component which takes a component as input Attached additional func to it and returns a new component.
__________________________________________________________________________________
24.)[Redux]Definitions:
Redux: predictable state container for Js applications
Its is derived from flux architechture
Redux : has 1 store for project/applications
flux: jas 2 stores for project/applications
Redux has 4 Components
1.)store - stores the state values in one place
2.)action - is an object which has property type.
3.)reducer - is pureComponent. has two parameters.1.)state 2.)action
	-Based on action it changes states and gives u the new states
	pureComponent - which is not depends on global variable(depends only on local variable) to return output
4.)middleware - interset the actions and attaches additional functionally to it.
Action Creator : is a function which returns an action.
Redux-thunk : is a function which returns an actionCreator.(or) return (function)Action Creator from an ActionCreator
__________________________________________________________________________________
25.)Nested Route [given by Aadesh] 
<BrowserRouter>

  <Route path="/" component={Frontpage} exact />
  <Route path="/home" component={HomePage} />
  <Route path="/about" component={AboutPage} />

  <Route
    path="/admin"
    render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={Backend} exact />
        <Route path={`${url}/home`} component={Dashboard} />
        <Route path={`${url}/users`} component={UserPage} />
      </>
    )}
  />

</BrowserRouter>



**Env SetUp**


Create new project folder in react:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
=> npx create-react-app appname_in_lowercaseletter

Route:
~~~~~~
=> npm install react-route-dom

To install all dependancies
=> npm install react-route-dom --save

Bootstrap :
~~~~~~~~~~~
To install bootstrap:
=> npm install bootstrap

To install react-bootstrap:
=> npm install react-bootstrap bootstrap

Add bootstrap to react:
1.run commnad in cmd
==> npm install bootstrap --save

2.after install add this to index.js
==> import 'bootstrap/dist/css/bootstrap.min.css';

Export .xl in react [How to Export Data to Excel in ReactJS]
~~~~~~~~~~~~~~~~~~~
=>npm install --save react-html-table-to-excel

Redux:
~~~~~~
=> npm install redux react-redux

Redux thunk:
~~~~~~~~~~~~  - to make a connection between actionCreators.[actionCreator - is a function which return an object with property called "type"]
=> npm install redux-thunk
