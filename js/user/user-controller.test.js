const UserController = require("./user-controller");
const User = require("./user");
//const test = require("node:test");

const userController = new UserController();

test('add user Santiago to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user Santiago from userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});
//Task 2: Implementing tests for UserController class

test('add user Uriel to userController', () => {
    let user = new User(2345,"Uriel", "uriel@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user Uriel from userController', () => {
    let user = new User(3456,"Uriel", "uriel@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});

describe('get user by email from userController', () => {
    test('get Maria by email from userController', () => {
        let user = new User(5678, "Maria", "maria@generation.org");
        userController.add(user);
        const foundUser = userController.findByEmail("maria@generation.org");
        expect(foundUser).toStrictEqual(user);
    });
    test('get Uriel by email from userController', () => {
        let user = new User(2345,"Uriel", "uriel@generation.org");
        userController.add(user);
        const foundUser = userController.findByEmail("uriel@generation.org");
        expect(foundUser).toStrictEqual(user);
    });
});

test('get Santiago by id from userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    const foundUser = userController.findById(1234);
    expect(foundUser).toStrictEqual(user);
});

describe('get user by id from userController', () => {
    test('get Maria by id from userController', () => {
        let user = new User(5678, "Maria", "maria@generation.org");
        userController.add(user);
        const foundUser = userController.findById(5678);
        expect(foundUser).toStrictEqual(user);
    });
    test('get Uriel by id from userController', () => {
        let user = new User(2345,"Uriel", "uriel@generation.org");
        userController.add(user);
        const foundUser = userController.findById(2345);
        expect(foundUser).toStrictEqual(user);
    });
})