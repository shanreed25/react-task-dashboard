/*
split the date string on "-"
convert each piece to a number
name the three numbers year, month, day
create a new Date using year, month minus 1, day
return that date
*/

import type { Task } from "../types";

// builds and returns the Date 2026-10-20T07:00:00.000Z
export  function parseDate(dueDate: string): Date{
    //date.split("-"): splits the date string on "-"
        //'2026-10-20' becomes [ '2026', '10', '20' ]
    //.map(Number): converts each item to a number
        //[ '2026', '10', '20' ] becomes [ 2026, 10, 20 ]
    //[year, month, day]: destructure to year, month, day variables
        //[ 2026, 10, 20 ]: 
        // 2026 is the vaue of year 
        // 10 is the value of month
        // 20 is the value of day
    const [year, month, day] = dueDate.split("-").map(Number);

    //create a new Date using year, month minus 1, day
        //month minus 1 because month is zero-based
        // date numbers for the months start at 0
        // so January is not 1 it is 0 and December is not 12 it is 11
    const indexedMonth = month -1

    const parsedDate = new Date(year, indexedMonth, day)//2026-10-20T07:00:00.000Z

    return parsedDate
}

//format the date to 'Oct 20, 2026'
export function formatDate(dueDate: string): string{
    return parseDate(dueDate).toLocaleDateString('en-US', { dateStyle: 'medium' })//'Oct 20, 2026'
}

//check if due date is before today and that the status is not complete
export function isOverDue(task: Task): boolean{
    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0)//remove time
    const overDue = task.status !== "completed" && 
                    parseDate(task.dueDate) < currentDay

    return overDue;


}