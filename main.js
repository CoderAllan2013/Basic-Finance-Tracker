function revenue() {
    rev1 = document.getElementById('r1').value;
    rev2 = document.getElementById('r2').value;
    rev3 = document.getElementById('r3').value;
    trev = parseInt(rev1) + parseInt(rev2) + parseInt(rev3);
    document.getElementById("total_revenue").innerHTML = "Your total revenue is " + parseInt(trev);
}

function expance() {
    exp1 = document.getElementById('e1').value;
    exp2 = document.getElementById('e2').value;
    exp3 = document.getElementById('e3').value;
    texp = parseInt(exp1) + parseInt(exp2) + parseInt(exp3);
    document.getElementById("total_expance").innerHTML = "Your total expance is " + parseInt(texp);
}

function savings() {
    sav1 = document.getElementById('s1').value;
    sav2 = document.getElementById('s2').value;
    sav3 = document.getElementById('s3').value;
    tsav = parseInt(sav1) + parseInt(sav2) + parseInt(sav3);
    document.getElementById("total_savings").innerHTML = "Your total savings is " + parseInt(tsav);
}