var year = [];
for (var i = 1900; i <= 2015; i++) {
        year.push(i);
}
var option = "<select>";
for (var j = 0; j < year.length; j++) {
    option += "<option value='" + year[j] + "'>" + year[j] + "</option>";
}
option += "</select><br><br><input type='submit'>";
document.getElementById("newyear").innerHTML = option; 