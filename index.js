/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    const records = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };

    return records;
}
function createEmployeeRecords(array) {
    const employeeRecords = [];
  
    array.forEach(function(arr) {
      const record = createEmployeeRecord(arr);
      employeeRecords.push(record);
    });
  
    return employeeRecords;
  }
  function createTimeInEvent(dateStamp){
    const stringHour = dateStamp.slice(11)
    const numberHour = Number(stringHour)
    const employeeRecordTime = {
        type: "TimeIn",
        hour: numberHour,
        date: `${dateStamp.slice(0, 10)}`
    };
    this.timeInEvents.push(employeeRecordTime)
    return this
}

function createTimeOutEvent(dateStamp){
    const stringHour = dateStamp.slice(11)
    const numberHour = Number(stringHour)
    const employeeRecordTime = {
        type: "TimeOut",
        hour: numberHour,
        date: `${dateStamp.slice(0, 10)}`
    };
    this.timeOutEvents.push(employeeRecordTime)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    const hoursWorked = Math.abs((timeIn.hour - timeOut.hour)/100)
    return hoursWorked
}

function wagesEarnedOnDate(date){ 
    const wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wage
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    for(let i = 0; i < srcArray.length; i++){
        if(srcArray[i].firstName === firstName){
            return srcArray[i]
        }else{
            return undefined
        }
    }
}

function calculatePayroll(employeeRecord){
    let total = 0;
    for(let i = 0; i < employeeRecord.length; i++){
        total += allWagesFor.call(employeeRecord[i])
    }
    return total;
}

