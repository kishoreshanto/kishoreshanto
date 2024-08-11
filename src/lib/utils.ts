export function isValidDate(dateString: string): boolean {
    const regex = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{1,2})(st|nd|rd|th),\s\d{4}$/;
    return regex.test(dateString);
}

export function getLocalTimeFromUTCOffset(utcOffset: number): { local_time: string, GMT: string } {
    /**
     * Get the current time in the local timezone
     * @param utcOffset - The offset from UTC
     * @returns - An array containing the 24-hour time and GMT value
     */
    const now = new Date();
    const utc = new Date(
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
    const new_date = new Date(utc.getTime() + offsetMilliseconds);

    return {
        local_time: new_date.toString().split(' ')[4].split(':').slice(0, 2).join(':'),
        GMT: new_date.toString().split(' ')[5]
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