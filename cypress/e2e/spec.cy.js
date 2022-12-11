describe('prueba spec ', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Busqueda de naves', () => {
        cy.get('#naveA').type('3')
        cy.get('#naveB').type('5')
        cy.get('#calcular').click()
        cy.get('#respuesta').contains('Sentinel-class landing craft es mas rapida que Star Destroyer')
    })
})