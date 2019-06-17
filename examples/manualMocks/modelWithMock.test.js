import user from './model';
jest.mock('./model');

test('if user model is mocked', () => {
    expect(user.getAuthenticated()).toEqual({age: 622, name: 'Mock name'});
});