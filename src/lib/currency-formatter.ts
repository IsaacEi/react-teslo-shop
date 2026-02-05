export const currencyFormatter = (amount: number, locale: string = 'es-ES', currency: string = 'EUR'): string => {
    return amount.toLocaleString(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    });
}