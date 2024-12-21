import { Conversor } from "../src/Conversor"

describe('Conversão de Inteiro em Romano', () => {

    it('Deve converter 1 em I', () => {
        const response: string = Conversor.inteiro2romano(1)
        expect(response).toEqual('I')
    })

    it('Deve converter 3 em III', () => {
        const response: string = Conversor.inteiro2romano(3)
        expect(response).toEqual('III')
    })

    it('Deve converter 4 em IV', () => {
        const response: string = Conversor.inteiro2romano(4)
        expect(response).toEqual('IV')
    })

    it('Deve converter 5 em V', () => {
        const response: string = Conversor.inteiro2romano(5)
        expect(response).toEqual('V')
    })

    it('Deve converter 6 em VI', () => {
        const response: string = Conversor.inteiro2romano(6)
        expect(response).toEqual('VI')
    })

    it('Deve converter 10 em X', () => {
        const response: string = Conversor.inteiro2romano(10)
        expect(response).toEqual('X')
    })

    it('Deve converter 20 em XX', () => {
        const response: string = Conversor.inteiro2romano(20)
        expect(response).toEqual('XX')
    })

    it('Deve converter 50 em L', () => {
        const response: string = Conversor.inteiro2romano(50)
        expect(response).toEqual('L')
    })

    it('Deve converter 100 em C', () => {
        const response: string = Conversor.inteiro2romano(100)
        expect(response).toEqual('C')
    })

    it('Deve converter 500 em D', () => {
        const response: string = Conversor.inteiro2romano(500)
        expect(response).toEqual('D')
    })

    it('Deve converter 1000 em M', () => {
        const response: string = Conversor.inteiro2romano(1000)
        expect(response).toEqual('M')
    })

    it('Deve converter 3574 em MMMDLXXIV', () => {
        const response: string = Conversor.inteiro2romano(1000)
        expect(response).toEqual('M')
    })

    it('Deve converter 126 em CXXVI', () => {
        const response: string = Conversor.inteiro2romano(1000)
        expect(response).toEqual('M')
    })

    it('Deve converter 92 em XLII', () => {
        const response: string = Conversor.inteiro2romano(1000)
        expect(response).toEqual('M')
    })
})