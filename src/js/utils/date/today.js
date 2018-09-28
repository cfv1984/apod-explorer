export default () => {
    const now = new Date();

    return [String(now.getFullYear()), String(now.getMonth()).padStart(2, '0'), String(now.getDate()).padStart(2, '0')];
}