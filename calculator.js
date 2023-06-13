function Solve(val) {
    var v = document.getElementById("answer");
    v.value += val;
}

function Result() {
    var p = document.getElementById("answer").value;
    var q = eval(p);
    document.getElementById("answer").value = q;
}
function Clear() {
    var inp = document.getElementById("answer");
    inp.value = '';
}
function back() {
var ev = document.getElementById("answer");
ev.value = ev.value.slice(0,-1);
}