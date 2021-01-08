function check1() {
    var arr1 = [0, -1, -1, 1, 1, -1, 1, 2, 0, 0, 1, 1, -1, -1, 1, -1, -2, 0, 0, -2, -2, 2, 0,
        -2, 2, 2, -2, 2, 3, -1, 1, 3, 1, -1, 2, 2, -2, 0, 2, -2, -2, 2, -2, -3, 1, -1, -3, -1,
        1, -3, -3, 3, -1, -3, 3, 1, -3, 3, 3, -3, 3, 3, 3, -3, 1, 3, -3, -1, 3, -3, -3, 3, -3];
    for (var i = 1; i <= 72; i++) {
        document.getElementById("t-" + i).classList.remove('red');
        document.getElementById("t-" + i).classList.remove('green');
    }
    for (var i = 1; i <= 72; i++) {
        var input = document.getElementById("t-" + i).value;
        if (arr1[i] != input)
            document.getElementById("t-" + i).classList.add('red');
        if (arr1[i] == input)
            document.getElementById("t-" + i).classList.add('green');
    }

}
function check2() {
    for (var i = 1; i <= 54; i++) {
        document.getElementById("two-" + i).classList.remove('red');
        document.getElementById("two-" + i).classList.remove('green');
    }
    var arr1 = [0, 0, -2, 2, 2, -2, 0, 2, 0, -2, 0, 2, -2, -2, 2, 0,
        -2, 0, 2, 0, -4, 4, 2, -4, 2, 4, -4, 0, 4, -2, -2, 4, 0, -4,
        2, 2, -4, 0, 4, -4, -2, 4, -2, -4, 4, 0, -4, 2, 2, -4, 0, 4, -2, -2, 4];

    for (var i = 1; i <= 54; i++) {
        var input = document.getElementById("two-" + i).value;
        if (arr1[i] != input)
            document.getElementById("two-" + i).classList.add('red');
        if (arr1[i] == input)
            document.getElementById("two-" + i).classList.add('green');
    }

}
function check3() {

    for (var i = 1; i <= 54; i++) {
        document.getElementById("three-" + i).classList.remove('red');
        document.getElementById("three-" + i).classList.remove('green');
    }
    var arr1 = [0, 0, -1, 1, 1, -1, 0, 1, 0, -1, 0, 1, -1, -1, 1, 0, -1, 0, 1,
        0, -2, 2, 1, -2, 1, 2, -2, 0, 2, -1, -1, 2, 0, -2, 1, 1, -2, 0, 2, -2, -1,
        2, -1, -2, 2, 0, -2, 1, 1, -2, 0, 2, -1, -1, 2];

    for (var i = 1; i <= 54; i++) {
        var input = document.getElementById("three-" + i).value;
        if (arr1[i] != input)
            document.getElementById("three-" + i).classList.add('red');
        if (arr1[i] == input)
            document.getElementById("three-" + i).classList.add('green');
    }

}
function check4() {
    for (var i = 1; i <= 42; i++) {
        document.getElementById("four-" + i).classList.remove('red');
        document.getElementById("four-" + i).classList.remove('green');
    }
    var arr1 = [0, -2, -1, 1, 0, -1, 1, 2, -1, 1, 2, 0, 0, 2, 1, -1, 0,
        1, -1, -2, 1, -1, -2, 0, 0, -2, -2, 2, 0, -2, 2, 2, -2, 2, 2,
        2, -2, 0, 2, -2, -2, 2, -2];

    for (var i = 1; i <= 42; i++) {
        var input = document.getElementById("four-" + i).value;
        if (arr1[i] != input)
            document.getElementById("four-" + i).classList.add('red');
        if (arr1[i] == input)
            document.getElementById("four-" + i).classList.add('green');

    }

}
function show1() {
    document.getElementById("img-ans-1").style.display = "block";
}
function show2() {
    document.getElementById("img-ans-2").style.display = "block";
}
function show3() {
    document.getElementById("img-ans-3").style.display = "block";
}
function show4() {
    document.getElementById("img-ans-4").style.display = "block";
}
