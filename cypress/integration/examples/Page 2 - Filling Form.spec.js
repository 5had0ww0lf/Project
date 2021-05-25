describe ('Filling Form', function() {
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

    it('Visitar Page 2', function () {
        //Clicar na page 2
        cy.get('[href="#/page2"] > span').click()

        //Validar se página 2 foi acessada
        cy.get(':nth-child(1) > .ant-col-4 > label')
        .should('be.visible')
    })

    it('Preencher Formulário', function () {
        const currentValue  = 1;
        const targetValue = 4;
        const increment = 1;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps); 
        
        //Input
        cy.get('.ant-input-affix-wrapper > .ant-input')
        .type('Teste Lucas')

        //Selecionar País
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
        .type('Brazil')

        //Tree Select
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection')
        .click()
        cy.get('.ant-select-tree-switcher')
        .click()
        cy.get('.ant-select-tree-child-tree > :nth-child(1) > .ant-select-tree-node-content-wrapper')
        .click()

        //Cascader
        cy.get('.ant-cascader-picker > .ant-input')
        .click()
        cy.get('.ant-cascader-menu-item')
        .click()
        cy.get(':nth-child(2) > [title="São Paulo"]')
        .click()

        //DatePicker
        cy.get('.ant-calendar-picker-input')
        .click()
        cy.get(':nth-child(6) > .ant-calendar-last-day-of-month > .ant-calendar-date')
        .click()

        //Slider
        cy.get('.ant-slider-handle')
        .should('have.attr', 'aria-valuenow', 1)
        .type(arrows)
        //Validador do Slider
        cy.get('.ant-input-number-input')
        .should('have.attr', 'value', 4)

        //Switch
        cy.get('.ant-switch')
        .click()

        //TypeArea
        cy.get('.ant-form-item-children > .ant-input')
        .type('Hello, World!')


        //Radio
        cy.get('.ant-radio-group > :nth-child(2)')
        .click()
        cy.get('.ant-radio-group > :nth-child(3)')
        .click()
    })


});