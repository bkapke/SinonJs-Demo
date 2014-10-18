/**
 * Here we can write some tests and assertions.
 */

// setup the static mocks obj
var staticMocks = null;

var printer;

// Begin the module.
module("Message Printer", {
    setup: function() {
		//Setup here as needed
		printer = new myApplication.messagePrinter();
		staticMocks = sinon.sandbox.create();
          
	},
	teardown : function () {
		staticMocks.restore();
		staticMocks = null;
	}
});

//create an instance of the printer

	
test("Print Simple Message stub longAsyncCall", function() {
    /*
     * printer is an object with the method printSimpleMessage
     * it accepts a string and returns that same string;
     * 
     */
    var printMessageSpy = sinon.stub(printer, "longAsyncCall").returns($.Deferred().resolve("Some little message"));
    
    printer.printAsyncMessage("Some little message");
    printer.printAsyncMessage("Some other little message");
	
	ok(printMessageSpy.calledWith("Some little message"), "The method was called once with the message 'Some little message' ");
	ok(printMessageSpy.calledWith("Some other little message"), "The method was called once with the message 'Some other little message' ");	
    ok(printMessageSpy.calledOnce === false, "this was only called once");
    
});

test("Print Simple Message spy longAsyncCall", function() {
	var printMessageSpy = sinon.spy(printer, "longAsyncCall");
	
	printer.printAsyncMessage("Some little async message");
	
	ok(printMessageSpy.calledOnce, "The method was only called once");
	ok(printMessageSpy.calledWith("Some little async message"), "The method returned the expected message");
	ok(1 === 1, "The method was called once with the message 'Some little message' ");
    
});

test("print message with number", function() {
	
	var someNum = 1234567;
		stringNum = "1234567",
		someMessage = "My message with the following Number",
		expectedMessage = "My message with the following Number 1234567",
		messageSpy = sinon.spy(printer, "printMessage"),
		//messageStub = sinon.stub(printer, "printMessage").returns("Some Message"),
		numberSpy = sinon.spy(printer, "getNumberAsString"),
		printer.printMessageWithNumber(someMessage, someNum);
	
	ok(messageSpy.calledWith(expectedMessage), "The expected message was generated");
	ok(numberSpy.calledWith(someNum), "the expected number " + someNum + " was passed in.");
	ok(numberSpy.returned(stringNum), "The number was returned as a string");
});

