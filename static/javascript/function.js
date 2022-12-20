
let male = document.querySelector(".male")
let female = document.querySelector(".female")
let both = document.querySelector(".both")

let gender = both.value

configure_gender(gender)

male.onclick = function() {
    gender = male.value;
    configure_gender(gender)
}
female.onclick = function() {
    gender = female.value;
    configure_gender(gender)
}
both.onclick = function() {
    gender = both.value;
    configure_gender(gender)
}

function print() {
    console.log(value);
}

let l = document.querySelector("tbody");
let query = document.querySelector(".q");
let submit = document.querySelector(".submit");
submit.onclick = function() {
    $.get("/search?q=" + query.value + "&gender=" + gender, function(data) {
        l.innerHTML = ""
        for (name in data) {
            l.innerHTML+= "<tr><td>" + data[name][0] + "</td><td>" + data[name][1] + "</td></tr>";
        }
    })
}

function configure_gender(gender){
    x = [both, female, male]
    gen = parseInt(gender)

    for (index in x){
        if (index == gen) {
            console.log(index)
            x[index].style.backgroundColor = "#ADE792";
            continue;
        }
        x[index].style.backgroundColor = "orange";
    }
}