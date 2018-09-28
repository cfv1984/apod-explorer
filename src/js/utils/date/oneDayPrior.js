export default (dateArray) => {
    const [year, month, day] = dateArray;
    const cursor             = new Date();

    cursor.setFullYear(Number(year));
    cursor.setMonth(Number(month));
    cursor.setDate(Number(day));
    cursor.setDate(cursor.getDate() - 1);

    return [
        String(cursor.getFullYear()),
        String(cursor.getMonth()).padStart(2, '0'),
        String(cursor.getDate()).padStart(2, '0')
    ];
}