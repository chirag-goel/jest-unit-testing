import user from './model';

test('if orginal user model', () => {
    expect(user.getAuthenticated()).toEqual({age: 26, name: 'Real name'});
});