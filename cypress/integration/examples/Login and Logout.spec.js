describe ('Teste de Login', function() {

    it('Acessar o site', function () {
        //Acessar o site
        cy.visit ('http://localhost:3000/')
        cy.wait(3000)
        //Validar se o site foi acessado
        cy.get('.ant-form > :nth-child(1)')
        .should('be.visible')
    })

    it('Validar mensagem de erro com login e senha erradas', function() {
        //Usuário
        cy.get('#normal_login_username')
        .type('loginerrado')

        //Senha
        cy.get('#normal_login_password')
        .type('senhaerrada')

        //Login
        cy.get('.ant-btn').click()

        //Validar se login foi realizado com sucesso
        cy.get('.error-message')
        .should('have.text', 'There was a problem logging in: Login/Password is incorrect')

        //Limpar campos preenchidos
        cy.get('#normal_login_username').clear()
        cy.get('#normal_login_password').clear()
    })

    it('Validar mensagem de erro sem digitar senha', function() {
        //Usuário
        cy.get('#normal_login_username')
        .type('loginerrado')

        //Login
        cy.get('.ant-btn').click()

        //Validar se mensagem aparece
        cy.get('.ant-form-explain')
        .should('have.text', 'Please input your Password.')

        //Limpar campo preenchido
        cy.get('#normal_login_username').clear()
    })   
    
    it('Validar mensagem de erro sem digitar login', function() {
        //Usuário
        cy.get('#normal_login_password')
        .type('pl123')

        //Login
        cy.get('.ant-btn').click()

        //Validar se mensagem aparece
        cy.get('.ant-form-explain')
        .should('have.text', 'Please input your username.')

        //Limpar campo preenchido
        cy.get('#normal_login_password').clear()
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
    })

    it('Logout', function () {
        cy.get('.ant-avatar')
        .click()
        cy.get('.ant-dropdown-menu > :nth-child(4)')
        .click()
    })    

});