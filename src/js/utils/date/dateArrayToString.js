export default (dateArray, separator = '-') => dateArray
    .map(n => String(n).padStart(2, '0'))
    .join(separator);