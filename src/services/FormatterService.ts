export const FormatterService = {
    monetaryValue(price: number): string {
        return price.toLocaleString(
            'pt-BR', 
            { 
                minimumFractionDigits: 2, 
                style: 'currency', 
                currency: 'BRL' 
            }
        );
    },
    limitText(text: string, maximumSize: number): string {
        if (text.length < maximumSize) {
            return text;
        }

        return text.slice(0, maximumSize) + '...';
    }
}