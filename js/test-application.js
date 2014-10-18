//setup a simple namespace to put the app on.

var myApplication = {
    messagePrinter : {}
};

/**
 *basic application for sinon testing
 */
(function() {
    /**
     * this is just a simple app that adds some text to the dom with a variety of
     * different methods.
     */
    var MessagePrinter = function() {
        // Base object for this demo.  
    };
    
    /**
     * This is the common method to add a message to the dom
     *
     * @param $message is the txt added to the dom
     */
    MessagePrinter.prototype.printMessage = function(message) {
        // Added to the body simply so we can see that it is working.
        $('body').append(message + "<br>");
    };
    
    /**
     * this method accepts a number and converts it to a string.
     *
     * @param $someNumber is the number to be converted to a string.
     */
    MessagePrinter.prototype.getNumberAsString = function(someNumber) {
        var numberPassedInAsString = someNumber.toString();
        return numberPassedInAsString;
    };
    
    /**
     * This method accepts a number and a message. The two are combined into
     * a string and added to the dom with printMessage
     *
     * @param $message is the message to add
     * @param $numberToAdd is the number that will be concatenated on the string.
     */
    MessagePrinter.prototype.printMessageWithNumber = function(message, numberToAdd) {
        var numString = this.getNumberAsString(numberToAdd);
        var messageToPrint = message + " " + numString;
        this.printMessage(messageToPrint); 
    };
    
    /**
     * For the purposes of stubbing and spying an async method,
     * this returns some info after 3 seconds
     *
     * @param $message is a string to add to the dom after the timeout.
     */
    MessagePrinter.prototype.longAsyncCall = function(message) {
        var asyncMessage = $.Deferred();
        setTimeout(function() {
            asyncMessage.resolve(message);
        }, 3000);
        return asyncMessage;
    };
    
    /**
     * this method accepts a message and calls longAsync call passing along the message
     * when its done, the message is added to the dom.
     *
     * 
     */
    MessagePrinter.prototype.printAsyncMessage = function(message) {
        var asyncMessage = this.longAsyncCall(message);
        var that = this
        asyncMessage.done(function(data){
            that.printMessage(data)
        });
    };
    
    //add the application to the window.myApplication namespace.
    myApplication.messagePrinter = MessagePrinter;
    
})()