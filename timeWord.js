function timeWord(time){
    // returns midnight and noon exceptions
    if (time == "00:00"){
        return "midnight";
    }
    if (time == "12:00"){
        return "noon";
    }

    // establish final time array for future join
    const timeWord = [];

    // split hour and minutes
    const timeArr = time.split(":");    

    // obtain hour string
    switch(timeArr[0]){
        case "00":
        case "12":
            timeWord.push("twelve");
            break;
        case "01":
        case "13":
            timeWord.push("one");
            break;
        case "02":
        case "14":
            timeWord.push("two");
            break;
        case "03":
        case "15":
            timeWord.push("three");
            break;
        case "04":
        case "16":
            timeWord.push("four");
            break;
        case "05":
        case "17":
            timeWord.push("five");
            break;
        case "06":
        case "18":
            timeWord.push("six");
            break;
        case "07":
        case "19":
            timeWord.push("seven");
            break;
        case "08":
        case "20":
            timeWord.push("eight");
            break;
        case "09":
        case "21":
            timeWord.push("nine");
            break;
        case "10":
        case "22":
            timeWord.push("ten");
            break;
        case "11":
        case "23":
            timeWord.push("eleven");
            break;
    }

    // obtain minute string
    if (timeArr[1] == "00"){
        timeWord.push("o'clock");
    } else {
        if (timeArr[1][0] == "1"){
            switch(timeArr[1]){
                case "10":
                    timeWord.push("ten");
                    break;
                case "11":
                    timeWord.push("eleven");
                    break;
                case "12":
                    timeWord.push("twelve");
                    break;
                case "13":
                    timeWord.push("thirteen");
                    break;
                case "14":
                    timeWord.push("fourteen");
                    break;
                case "15":
                    timeWord.push("fifteen");
                    break;
                case "16":
                    timeWord.push("sixteen");
                    break;
                case "17":
                    timeWord.push("seventeen");
                    break;
                case "18":
                    timeWord.push("eighteen");
                    break;
                case "19":
                    timeWord.push("nineteen");
                    break;
            }
        } else {
            switch(timeArr[1][0]){
                case "0":
                    timeWord.push("oh");
                    break;
                case "2":
                    timeWord.push("twenty");
                    break;
                case "3":
                    timeWord.push("thirty");
                    break;
                case "4":
                    timeWord.push("fourty");
                    break;
                case "5":
                    timeWord.push("fifty");
                    break;
            }
            switch(timeArr[1][1]){
                case "0":
                    break;
                case "1":
                    timeWord.push("one");
                    break;
                case "2":
                    timeWord.push("two");
                    break;
                case "3":
                    timeWord.push("three");
                    break;
                case "4":
                    timeWord.push("four");
                    break;
                case "5":
                    timeWord.push("five");
                    break;
                case "6":
                    timeWord.push("six");
                    break;
                case "7":
                    timeWord.push("seven");
                    break;
                case "8":
                    timeWord.push("eight");
                    break;
                case "9":
                    timeWord.push("nine");
                    break;
            }
        }
    }

    // obtain am/pm
    if (parseInt(timeArr[0]) > 11){
        timeWord.push("pm");
    } else {
        timeWord.push("am");
    }

    // joins final time array into string
    return timeWord.join(" ");
}

module.exports = { timeWord };