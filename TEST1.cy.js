describe('Тести для добавлення товарів до корзини', () => {  
    before(() => {  
        // Використання перед тестами  
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');  
    });  

    it('Пошук та добавлення товарів у корзину', () => {  
        // 1. Ввести значення "ro" у рядок пошуку  
        cy.get('.search-keyword').type('ro');  

        // 2. Знайти елемент Carrot і встановити кількість 5  
        cy.contains('.product', 'Carrot')
        .find('.quantity')
        .clear() // Очистка значення
        .type('5'); // Введення нового значення

        // 3. Знайти елемент Mushroom і встановити кількість 3  
        cy.contains('.product', 'Mushroom')
        .find('.increment')
        .click() // Перший клік
        .click() // Другий клік
        .click(); // Третій клік

        // 4. Добавити Carrot до корзини  
        cy.contains('.product', 'Carrot')
        .find('button')
        .click();

        // 5. Добавити Mushroom до корзини  
        cy.contains('.product', 'Mushroom')
        .find('button')
        .click();  

        // 6. Нажати на іконку корзини для відкриття списку товарів  
        cy.get('.cart-icon').click();  
        cy.get('.cart-preview').should('be.visible');  

        // 7. Видалити Carrot з корзини  
        cy.get('.cart-items').contains('Carrot').parents('.cart-item').find('a.product-remove').click();  

        // 8. Переконатися, що Carrot більше немає в корзині  
        cy.get('.cart-items').should('not.contain', 'Carrot');  
    });  
});