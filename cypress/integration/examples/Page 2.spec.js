describe ('Teste de Page 2', function() {
    it('Acessar o site', function () {
        //Acessar o site
        cy.visit ('http://localhost:3000/')
        cy.wait(3000)
        //Validar se o site foi acessado
        cy.get('.ant-form > :nth-child(1)')
        .should('be.visible')
    })

    it('Fazer login', function() {
        //Usuário
        cy.get('#normal_login_username')
        .type('testuser')

        //Senha
        cy.get('#normal_login_password')
        .type('pl123')

        //Login
        cy.get('.ant-btn').click()

        //Validar se login foi realizado com sucesso
        cy.get('[data-cy=appTitle] > a')
        .should('have.text', 'Test Automation')
    }
    )

    it('Visitar Page 2', function () {
        //Clicar na page 2
        cy.get('[href="#/page2"] > span').click()

        //Validar se página 2 foi acessada
        cy.get(':nth-child(1) > .ant-col-4 > label')
        .should('be.visible')
    })

});