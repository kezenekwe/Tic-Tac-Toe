//get elements
let boxes = document.querySelectorAll(".grid-item");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

boxes.forEach(function (box) {
    box.addEventListener("click", function(e) {
        if (e.currentTarget.classList.contains("one")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (two.innerHTML == "X" && three.innerHTML == "X") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (four.innerHTML == "X" && seven.innerHTML == "X") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (five.innerHTML == "X" && nine.innerHTML == "X") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (two.innerHTML == "O" && three.innerHTML == "O") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (four.innerHTML == "O" && seven.innerHTML == "O") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (five.innerHTML == "O" && nine.innerHTML == "O") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("two")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (one.innerHTML == "X" && three.innerHTML == "X") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (five.innerHTML == "X" && eight.innerHTML == "X") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (one.innerHTML == "O" && three.innerHTML == "O") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (five.innerHTML == "O" && eight.innerHTML == "O") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("three")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (one.innerHTML == "X" && two.innerHTML == "X") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (five.innerHTML == "X" && seven.innerHTML == "X") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (six.innerHTML == "X" && nine.innerHTML == "X") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (one.innerHTML == "O" && two.innerHTML == "O") {
                        one.classList.add("gg");
                        two.classList.add("gg");
                        three.classList.add("gg");
                    }
                    if (five.innerHTML == "O" && seven.innerHTML == "O") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (six.innerHTML == "O" && nine.innerHTML == "O") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("four")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (one.innerHTML == "X" && seven.innerHTML == "X") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (five.innerHTML == "X" && six.innerHTML == "X") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (one.innerHTML == "O" && seven.innerHTML == "O") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (five.innerHTML == "O" && six.innerHTML == "O") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("five")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (two.innerHTML == "X" && eight.innerHTML == "X") {
                        two.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                    if (four.innerHTML == "X" && six.innerHTML == "X") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                    if (one.innerHTML == "X" && nine.innerHTML == "X") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (three.innerHTML == "X" && seven.innerHTML == "X") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (two.innerHTML == "O" && eight.innerHTML == "O") {
                        two.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                    if (four.innerHTML == "O" && six.innerHTML == "O") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                    if (one.innerHTML == "O" && nine.innerHTML == "O") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (three.innerHTML == "O" && seven.innerHTML == "O") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("six")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (three.innerHTML == "X" && nine.innerHTML == "X") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (four.innerHTML == "X" && five.innerHTML == "X") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (three.innerHTML == "O" && nine.innerHTML == "O") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (four.innerHTML == "O" && five.innerHTML == "O") {
                        four.classList.add("gg");
                        five.classList.add("gg");
                        six.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("seven")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (one.innerHTML == "X" && four.innerHTML == "X") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (three.innerHTML == "X" && five.innerHTML == "X") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (eight.innerHTML == "X" && nine.innerHTML == "X") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (one.innerHTML == "O" && four.innerHTML == "O") {
                        one.classList.add("gg");
                        four.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (three.innerHTML == "O" && five.innerHTML == "O") {
                        three.classList.add("gg");
                        five.classList.add("gg");
                        seven.classList.add("gg");
                    }
                    if (eight.innerHTML == "O" && nine.innerHTML == "O") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("eight")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (seven.innerHTML == "X" && nine.innerHTML == "X") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (two.innerHTML == "X" && five.innerHTML == "X") {
                        two.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (seven.innerHTML == "O" && nine.innerHTML == "O") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (two.innerHTML == "O" && five.innerHTML == "O") {
                        two.classList.add("gg");
                        five.classList.add("gg");
                        eight.classList.add("gg");
                    }
                }
            }
        }
        if (e.currentTarget.classList.contains("nine")) {
            let userInput = prompt("Please enter either X or O");
            if (userInput == "X" || userInput == "x") {
                if (e.currentTarget.innerHTML == "O") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML = "O";
                }
                else {
                    e.currentTarget.innerHTML = "X";
                    if (three.innerHTML == "X" && six.innerHTML == "X") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (one.innerHTML == "X" && five.innerHTML == "X") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (seven.innerHTML == "X" && eight.innerHTML == "X") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
            if (userInput == "O" || userInput =="o") {
                if (e.currentTarget.innerHTML == "X") {
                    alert("Square already taken. Please pick another square.");
                    e.currentTarget.innerHTML == "X";
                } else {
                    e.currentTarget.innerHTML = "O";
                    if (three.innerHTML == "O" && six.innerHTML == "O") {
                        three.classList.add("gg");
                        six.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (one.innerHTML == "O" && five.innerHTML == "O") {
                        one.classList.add("gg");
                        five.classList.add("gg");
                        nine.classList.add("gg");
                    }
                    if (seven.innerHTML == "O" && eight.innerHTML == "O") {
                        seven.classList.add("gg");
                        eight.classList.add("gg");
                        nine.classList.add("gg");
                    }
                }
            }
        }
    });
});
