const user = jest.genMockFromModule('../model');

user.getAuthenticated = () => ({
  age: 622,
  name: 'Mock name',
});

export default user;