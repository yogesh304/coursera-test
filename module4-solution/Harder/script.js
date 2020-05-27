/*
Solution of assignment 4:
Expected output:
Hello Rohit
GoodBye John
GoodBye Jeck
GoodBye Jakson
Hello Yogesh
Hello Akash
Hello Lakan
Hello Poonam
Hello Riya
GoodBye Jimmi
*/

(function() {
    var names = ["Rohit", "John", "Jack", "Jakson", "Yogesh", "Akash", "Lakan", "Poonam", "Riya", "Jimmi"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
