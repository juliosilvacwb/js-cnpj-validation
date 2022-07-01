import { isValidCNPJ } from ".";

describe("Testes for CNPJ Validation", () => {

    test('Testing a valid CNPJ without mask', () => {
        expect(isValidCNPJ("40397773000178")).toBeTruthy();
    })
    
    test('Testing a valid CNPJ with mask', () => {
        expect(isValidCNPJ("88.601.412/0001-28")).toBeTruthy();
    })

    test('Testing a invalid CNPJ', () => {
        expect(isValidCNPJ("40397773000100")).toBeFalsy();
    })
    
    test('Testing a empty CNPJ', () => {
        expect(isValidCNPJ("")).toBeFalsy();
    })

})