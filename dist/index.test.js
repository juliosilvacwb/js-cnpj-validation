"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe("Testes for CNPJ Validation", () => {
    test('Testing a valid CNPJ without mask', () => {
        expect((0, _1.isValidCNPJ)("40397773000178")).toBeTruthy();
    });
    test('Testing a valid CNPJ with mask', () => {
        expect((0, _1.isValidCNPJ)("88.601.412/0001-28")).toBeTruthy();
    });
    test('Testing a invalid CNPJ', () => {
        expect((0, _1.isValidCNPJ)("40397773000100")).toBeFalsy();
    });
    test('Testing a empty CNPJ', () => {
        expect((0, _1.isValidCNPJ)("")).toBeFalsy();
    });
});
