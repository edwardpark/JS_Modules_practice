//wrapped function inside of a functional enclosure

(function(){
    function foo(){
        console.log("function within a enclosure");
    }
    foo();
}());//by wrapping function in parenthesis treats like a free  expression