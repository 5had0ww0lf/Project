describe ('Teste de Page 3', function() {
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
        .should('be.visible')
    }
    )

    it('Visitar Page 3', function () {
        //Clicar na page 3
        cy.get('[href="#/page3"] > span').click()

        //Validar se página 3 foi acessada
        cy.get('.ant-breadcrumb')
        .should('be.visible')
    })

});