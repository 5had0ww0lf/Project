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
        .should('have.text', 'Test Automation')
    }
    )

    it('Visitar Page 3', function () {
        //Clicar na page 3
        cy.get('[href="#/page3"] > span').click()

        //Validar se página 3 foi acessada
        cy.get('.ant-breadcrumb')
        .should('be.visible')
    })

    it('Navegar pelo Breadcrumb', function () {
        //Clicar na page 1 pelo breadcrumb
        cy.get(':nth-child(2) > .ant-breadcrumb-link > a')
        .click()

        //Validar se o breadcrumb levou a página correta
        cy.get('.ant-table-column-sorters')
        .should('have.text', 'Name')

        //Clicar na page 3 novamente
        cy.get('[href="#/page3"] > span').click()        

        //Clicar na page 2 pelo breadcrumb
        cy.get(':nth-child(3) > .ant-breadcrumb-link > a')
        .click()
        
        //Validar se o breadcrumb levou a página correta
        cy.get('h1')
        .should('have.text', 'Page Not Found')
        cy.log('Breadcrumb levou à página errada')        

    })

});