"use strict";

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    let todoPage = new TodoPage()
    todoPage.go()
    todoPage.addTodo('write first protractor test')

    var todoList = element.all(by.css('.checkbox'))
    expect(todoList.count()).toEqual(3)
    expect(todoList.get(2).getText()).toEqual('write first protractor test')

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click()
    var completedAmount = element.all(by.css('.done-true'))
    expect(completedAmount.count()).toEqual(2)
  })
})

class TodoPage {
  constructor () {}

  go () {
    browser.get('https://angularjs.org')
  }

  addTodo (todoString) {
    element(by.model('todoList.todoText')).sendKeys(todoString);
    element(by.css('[value="add"]')).click();
  }
}
