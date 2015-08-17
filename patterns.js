var awesomeNewModule = (function(){ 
  var exports = {
    foo: 5,
    bar: 10
  };
  
  exports.helloMars = function() {
    console.log("Hello Mars!");
  };
  
  exports.goodbye = function() {
    console.log("Goodbye!");
  };
  
  return exports
  
}());

// //wrapped function inside of a functional enclosure

// !function(){
//     function foo(){
//         console.log("function within a enclosure");
//     }
//     foo();
// }();//by wrapping function in parenthesis treats like a free  expression