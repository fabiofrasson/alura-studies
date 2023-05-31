export function timeToSeconds(time: string) {
    const [hour = "0", minute = "0", second = "0"] = time.split(":");

    const hourSeconds = Number(hour) * 3600;
    const minuteSeconds = Number(minute) * 60;
    return hourSeconds + minuteSeconds + Number(second);
}
