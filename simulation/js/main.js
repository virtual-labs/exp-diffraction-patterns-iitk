
function restart() {
    if (confirm("You will lose your progress are you sure ?"))
        location.reload();
}

function placeMaterial() {
    document.getElementById("diagram").src = "./images/tem-m.png";
    document.getElementById("placeMat").disabled = true;
    document.getElementById("beamOn").disabled = false;


}

function beamOn() {
    document.getElementById("diagram").src = "./images/tem.gif";
    document.getElementById("placeMat").disabled = true;

    setTimeout(() => {
        document.getElementById("diagram2").src = "./images/1.jpg";
        document.getElementById("diagram3").src = "./images/index.jpg";
        document.getElementById("d2-byline").style.display = "block";


    }, 6000);
    document.getElementById("beamOn").disabled = true;


}
function indexing() {
    document.getElementById("diagram3").style.display = "inline";
    document.getElementById("index-but").disabled = true;
    document.getElementById("d3-byline").style.display = "block";
    // document.getElementById("img-col").innerHTML = " <img id="diagram3" src="./ images / sample.png" style="height: 295px; width: 360px; ">";
}

function GotoSim() {
    if (confirm("You may lose your progress are you sure you want to continue?")) {
        document.getElementById("part-1").style.display = "block";
        document.getElementById("task-1").style.display = "none";
        document.getElementById("task-2").style.display = "none";
        document.getElementById("task-3").style.display = "none";
        document.getElementById("task-4").style.display = "none";
    }
}
function GotoTask_1() {
    if (confirm("You may lose your progress are you sure you want to continue?")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("task-1").style.display = "block";
        document.getElementById("task-2").style.display = "none";
        document.getElementById("task-3").style.display = "none";
        document.getElementById("task-4").style.display = "none";
    }
}
function GotoTask_2() {
    if (confirm("You may lose your progress are you sure you want to continue?")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("task-1").style.display = "none";
        document.getElementById("task-2").style.display = "block";
        document.getElementById("task-3").style.display = "none";
        document.getElementById("task-4").style.display = "none";
    }
}
function GotoTask_3() {
    if (confirm("You may lose your progress are you sure you want to continue?")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("task-3").style.display = "block";
        document.getElementById("task-1").style.display = "none";
        document.getElementById("task-2").style.display = "none";
        document.getElementById("task-4").style.display = "none";
    }
}
function GotoTask_4() {
    if (confirm("You may lose your progress are you sure you want to continue?")) {
        document.getElementById("part-1").style.display = "none";
        document.getElementById("task-4").style.display = "block";
        document.getElementById("task-2").style.display = "none";
        document.getElementById("task-3").style.display = "none";
        document.getElementById("task-1").style.display = "none";
    }
}