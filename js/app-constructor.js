$(document).ready(function() {
    // Begin your document ready application code here
    
    //setup the message printer 
    var printer = new myApplication.messagePrinter();
    
    printer.printAsyncMessage("This is a simple message");
    
});