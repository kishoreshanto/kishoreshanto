export function isValidDate(dateString: string): boolean {
    const regex = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{1,2})(st|nd|rd|th),\s\d{4}$/;
    return regex.test(dateString);
}

function makeGMTString(GMT: number): string {
    let GMTString: string = 'GMT';
    if (GMT >= 0) GMTString = GMTString + "+";
    else GMTString = GMTString + "-";

    // Add the hours, add a 0 if it's a single digit
    if (Math.abs(GMT) < 10) GMTString = GMTString + "0";

    // Add the hours, if it has a decimal, round it
    const d: number = Math.floor(Math.abs(GMT));
    const f: number = Math.abs(GMT) - d;
    GMTString = GMTString + d;

    // Add semicolon
    GMTString = GMTString + ":";

    // Add the minutes
    const min: number = (f * 60);

    // Add a 0 if it's a single digit
    if (min < 10) GMTString = GMTString + "0";
    GMTString = GMTString + min;

    return GMTString;
}

export function getLocalTimeFromUTCOffset(utcOffset: number): { local_time: string, GMT: string } {
    /**
     * Get the current time in the local timezone
     * @param utcOffset - The offset from UTC
     * @returns - An array containing the 24-hour time and GMT value
     */
    const now: Date = new Date();
    const utc: Date = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
    );

    // Convert the offset to milliseconds and apply it
    const offsetMilliseconds = utcOffset * 60 * 60 * 1000;

    // Apply the offset to get the local time
    const new_date: Date = new Date(utc.getTime() + offsetMilliseconds);

    return {
        local_time: new_date.toString().split(' ')[4].split(':').slice(0, 2).join(':'),
        GMT: makeGMTString(utcOffset)
    }
}

export function parseDate(dateString: string)
    : { prefix: string, date: string, month: string, year: string } | undefined {
    /**
     * Parse a date string in the format "Month day, year" and return a Date object
     * @param dateString - The date string to parse
     * @returns - An object containing the prefix, date, month, and year
     */
    if (!isValidDate(dateString)) {
        return undefined;
    }

    const string_array: string[] = dateString.split(',');
    const a1: string = string_array[0]
    const year: string = string_array[1];
    const month: string = a1.split(" ")[0]
    const date: string = a1.split(" ")[1].slice(0, -2)
    const prefix: string = a1.split(" ")[1].slice(-2)

    return {prefix, date, month, year}
}