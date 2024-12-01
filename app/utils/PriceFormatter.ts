type RegionCode = 'en-US' | 'en-GB' | 'fr-FR' | 'de-DE' | 'es-ES' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'zh-CN' | 'zh-TW';
type RegionCurrency = 'USD' | 'GBP' | 'EUR' | 'JPY' | 'CNY' | 'KRW';
type RegionCurrencyMap = {
    [key in RegionCode]: RegionCurrency;
}

const PriceFormatter = (price: number, regionCode: RegionCode = 'en-GB'): string => {

    const regionCurrencyMap: RegionCurrencyMap = {
        'en-US': 'USD',
        'en-GB': 'GBP',
        'fr-FR': 'EUR',
        'de-DE': 'EUR',
        'es-ES': 'EUR',
        'it-IT': 'EUR',
        'ja-JP': 'JPY',
        'ko-KR': 'KRW',
        'zh-CN': 'CNY',
        'zh-TW': 'CNY',
    };

    const formattedPrice = Number(price).toLocaleString(regionCode, {
        style: 'currency',
        currency: regionCurrencyMap[regionCode],
    });

    console.log('Formatted price:', formattedPrice);
    return formattedPrice;
}

export default PriceFormatter;