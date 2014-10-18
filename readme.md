# Demonstration and Evaluation of Sinon.JS and Qunit.
**[View The Demo](http://www.briankapke.com/Sinon-Demo)**
##Overview
The following project demonstrates some basic mocking and unit testing inside of a JavaScript application.  It is more or less
designed to be a reference for setting up future projects.  See below for details and assertions.

##[QUnit](http://qunitjs.com)
Provides a well documented and evolved javascript unit testing frame work.

###deepEqual()
A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
###equal()
A non-strict comparison, roughly equivalent to JUnit's assertEquals.
###expect()
Specify how many assertions are expected to run within a test.
###notDeepEqual()
An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
###notEqual()
A non-strict comparison, checking for inequality.
###notPropEqual()
A strict comparison of an object's own properties, checking for inequality.
###notStrictEqual()
A strict comparison, checking for inequality.
###ok()
A boolean check, equivalent to CommonJS's assert.ok() and JUnit's assertTrue(). Passes if the first argument is truthy.
###propEqual()
A strict type and value comparison of an object's own properties.
###push()
Report the result of a custom assertion
###strictEqual()
A strict type and value comparison.
###throws()
Test if a callback throws an exception, and optionally compare the thrown error.

##[SinonJS](http://sinonjs.org)
Provides powerful tools for mocking function calls, returns and simplifying unit testing for JavaScript.