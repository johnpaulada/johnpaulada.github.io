/*
    index.html Script
*/

/*
    Determines if array contains element
*/

var cellNum = 36;

function arrayContains(arr, el) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == el)
            return true;
    }
    return false;
}

/*
    Get sum of row given critical information
*/

function getRowSum(selectionArray, colNum) {
    var sum = 0;
    $('tr td:nth-child(' + colNum + ') input').each(
        function (i, e) {
            if (arrayContains(selectionArray, i))
                sum = sum + parseInt(e.value.trim());
        }
    );
    return sum;
}

function checkNoEmpty() {
    var empty = 0;
    $('input').each(
        function(i, e) {
            if (e.value.trim() == "")
                empty++;
        }
    );
    if (empty > 0) {
        printError(empty);
        return false;
    }
    else
        return true;
}

function checkNoNaN() {
    var notNum = 0;
    $('input').each(
        function(i, e) {
            if (isNaN(e.value.trim()))
                notNum++;
        }
    );
    if (notNum > 0) {
        printError(notNum + cellNum);
        return false;
    }
    else
        return true;
}

//Faulty Implementation
function checkCorrectInput() {
    var numXRows = 0, counter = 0;
    var  problemRows = "";
    var tempArray = ["0", "0", "0", "0"];
    $('tr').each(
        function(i, e) {
            counter = 0;
            tempArray = ["0", "0", "0", "0"];
            $(e).children().each(
                function(j, f) {
                    if (j == 1 || j == 3 || j == 5 || j == 7) {
                        tempArray[counter] = f.value;
                        counter = counter + 1;
                    }
                }
            );
            if (!(arrayContains(tempArray, "1") && arrayContains(tempArray, "2") && arrayContains(tempArray, "3") && arrayContains(tempArray, "4"))) {
                problemRows = problemRows + " " + i;
                numXRows++;
            }
        }
    );
    if (numXRows > 0) {
        alert("Check input on " + ((numXRows == 1)?"row":"rows") + problemRows);
        return false;
    }
    else
        return true;
}

function noErrors() {
    var hasErrors = false;
    hasErrors = (!checkNoEmpty())?true:hasErrors;
    hasErrors = (!checkNoNaN())?true:hasErrors;
    /*if (!hasErrors)
        hasErrors = (!checkCorrectInput())?true:hasErrors;*/
    return (hasErrors)?false:true;
}

function printError(errorCode) {
    //Display error
    if (errorCode > 0 && errorCode <= 36)
        alert("You have " + errorCode + " unanswered items.");
    else if (errorCode > 36 && errorCode <= (cellNum*2))
        alert("You have " + (errorCode - cellNum) + " non-number responses.");
}

//Evaluate entries
$('a.submit').click(
    function(e) {
        if (!noErrors())
            return;
        var ce, ro, ac, ae, yAxis, xAxis, learningStyle;
        ce = getRowSum([1, 2, 3, 4, 6, 7], 2);
        ro = getRowSum([0, 2, 5, 6, 7, 8], 4);
        ac = getRowSum([1, 2, 3, 4, 7, 8], 6);
        ae = getRowSum([0, 2, 5, 6, 7, 8], 8);
        yAxis = ac - ce;
        xAxis = ae - ro;
        learningStyle = (xAxis > 0 && yAxis > 0)?"converger":(xAxis < 0 && yAxis < 0)?"diverger":(yAxis > 0 && xAxis < 0)?"assimilator":"accomodator";
        $('#infoContainer').slideDown('slow');
        $("#" + learningStyle).fadeIn('slow',
            function() {
                $.scrollTo('#infoContainer', 3000);
            }
        );
    }
);

//Information Container Click Event
$('#infoContainer').click(
    function() {
        $('#infoContainer').fadeOut('slow',
            function() {
                $('#infoContainer div').hide();
                $.scrollTo('#form-container', 3000);
            }
        );
    }
);