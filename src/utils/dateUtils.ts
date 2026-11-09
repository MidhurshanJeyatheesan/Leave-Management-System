export const calculateLeaveDays = (
    start: string,
    end: string
): number => {
    if (!start || !end) return 0;

    const startDate = new Date(`${start}T00:00:00`);
    const endDate = new Date(`${end}T00:00:00`);

    const difference = endDate.getTime() - startDate.getTime();

    return Math.floor(difference / (1000 * 3600 * 24)) + 1;
};