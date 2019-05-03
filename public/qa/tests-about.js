suite('Тесты на странице "О ..."',function(){
    test("Страница должна содержать ссылку на страницу контактов", function(){
        assert(document.querySelectorAll('a[href="/contact"]').length);
    });
});