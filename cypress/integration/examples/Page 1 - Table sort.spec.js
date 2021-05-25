describe ('Teste de Page 1', function() {
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

    it('Visitar Page 1', function () {
        //Clicar na page 1
        cy.get('[href="#/page1"] > span').click()

        //Validar se página 1 foi acessada
        cy.get('.ant-table-column-sorters')
        .should('be.visible')
    })

    it('Ordenar Tabela por Nome - Crescente', function () {
        //Ordenar em ordem crescente
        cy.wait(1000)
        cy.get('.ant-table-column-sorter').dblclick()

        //Verificar se está na ordem crescente
        cy.get('[data-row-key="10"] > .ant-table-column-has-actions')
        .contains('Byron Hansen')

    })   

    it('Ordenar Tabela por Nome - Decrescente', function () {
        //Ordenar em ordem decrescente
        cy.wait(1000)
        cy.get('.ant-table-column-sorter').dblclick()
        
        //Verificar se está na ordem decrescente
        cy.get('[data-row-key="9"] > .ant-table-column-has-actions')
        .contains('Willard Medina')

    })

});