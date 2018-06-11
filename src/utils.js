export const getFormattedTime = (time) => {
    if (typeof time === "string") {
        time = new Date(time);
    }
    const fixZero = (value) => value < 10 ? "0" + value : value;
    return time.getHours() + ":" + fixZero(time.getMinutes());
};