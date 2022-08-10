import dayjs from 'dayjs'

export function formatPrice(value, digits) {
    if (!value && value !== 0) {
        return '-';
    }
    return parseFloat(value).toFixed(digits);
}

export function formatDate(value, format = 'YYYY-MM-DD') {
    if (!value && value !== 0) {
        return '-';
    }
    return dayjs(value).format(format)
}