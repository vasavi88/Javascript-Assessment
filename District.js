var stateByCategory = {
    A: ["Anantapur", "Chittor",
         "Kadapa","kurnool"],
    B: ["Hyderabad", "Karimnagar",
        "Khammam", "Sangareddy", "Nizamabad"],
    C: ["Salem", "Vellore", "Chennai"]
}
function list(a) {
    if (a.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var options = "";//we are creating options variable name and intializing empty string
        for (x in stateByCategory[a]) {//for loop operation is performing statebycategory
            options =options+ "<option>" + stateByCategory[a][x] + "</option>";
            // In second dropdown we are taking each value by using stateByCategory[a][x]
            // here a is  value and x gives  realated values of a by using for loop
        }
        //we are connecting second drop down using categoryid which is present statesanddis.html
        document.getElementById("category").innerHTML = options;
    }
}

