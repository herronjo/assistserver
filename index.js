var http = require("http");
var url = require("url");

var server = http.createServer(function(request, response) {
    var params = url.parse(request.url,true).query;
    var text = params.text;
    if (text != null) {
    var keys = text.split(" ");
    //console.log(keys);
    //console.log(text);
    if (text == "") {
        response.write("You could say something, you know...");
        response.end();
    } else if (text == "Hi" || text == "hi" || text == "Hello" || text == "hello" || text == "Hi." || text == "hi." || text == "Hello." || text == "hello.") {
        response.write("Hello!");
        response.end();
    } else if (text == "yo" || text == "Yo" || text == "yo." || text == "Yo.") {
        response.write("Yo, waddap my boi?");
        response.end();
    } else if (text == "What's nine plus ten" || text == "what's nine plus ten" || text == "Whats nine plus ten" || text == "whats nine plus ten") {
        response.write("21");
        response.end();
    } else if (keys[0] == "Why" || keys[0] == "why" && keys[1] == "does" && keys[2] == "your" && keys[3] == "voice") {
        response.write("Why doesn't yours? Huh punk?");
        response.end();
    } else if (keys[0] == "what's" || keys[0] == "whats") {
        if (keys[2] == "plus" || keys[2] == "+") {
            response.write(String(Number(keys[1])+Number(keys[3])));
            response.end();
        } else if (keys[2] == "minus" || keys[2] == "-") {
            response.write(String(Number(keys[1])-Number(keys[3])));
            response.end();
        } else if (keys[2] == "divided" && keys[3] == "by") {
            response.write(String(Number(keys[1])/Number(keys[4])));
            response.end();
        } else if (keys[2] == "/") {
            response.write(String(Number(keys[1])/Number(keys[3])));
            response.end();
        } else if (keys[2] == "times" || keys[2] == "*" || keys[2] == "x") {
            response.write(String(Number(keys[1])*Number(keys[3])));
            response.end();
        } else {
            response.write("Sorry, I don't understand. Ask something else.");
            response.end();
        }
    } else if (keys[1] == "cream" && keys[0] != "dour" && keys[0] != "Dour") {
        response.write("Don't you mean... DOUR CREAM?");
        response.end();
    } else if (keys[0] == "Dour" || keys[0] == "dour" && keys[1] == "cream") {
        response.write("WOOT!!!!!!!!!!!");
        response.end();
    } else if (keys[0] == "search" || keys[0] == "Search" || keys[0] == "What" && keys[1] == "is" || keys[0] == "what" && keys[1] == "is") {
        response.write("Work in progress...");
        response.end();
    } else if (keys[0] == "demo" && keys[1] == "mode") {
        response.write("Why hello there, whoever I have the pleasure of meeting! I don't have a name yet, so I'll skip the intro. I'm a small, work in progress assistant that has high potential, since I use dynamic content from the Internet and main server to achieve my tasks. That means a lot can be done, but not everything can. Luckily, there's a solution to that, but I won't spoil it! As of right now, I can do basic math operations, speech recognision, and a few pieces of commentary. And just a note, I was written in a few hours yesterday. It's been a pleasure meeting you, but I've got some tasks to run! In the meantime, feel free to ask me to do anything! Bye!");
        response.end();
    } else if (keys[0] == "what" && keys[1] == "can" && keys[2] == "you" && keys[3] == "do" || keys[0] == "what" && keys[1] == "can" && keys[2] == "you" && keys[3] == "do?") { 
        response.write("Basic math functions, and some commentary right now.\n");
        response.write("Commands:\n");
        response.write("Math (plus, minus, multiply, divide)\n");
        response.write("Why does your voice sound like...\n");
        response.write("Hi (or any variation, yo, etc.)\n");
        response.write("What's nine plus ten?");
        response.end();
    } else {
        response.write("Sorry, I don't know how to help you.");
        response.end();
    }
    } else {
        response.write("You are not authorized.");
        response.end();
    }
});

console.log("Started...");
server.listen(8000);
