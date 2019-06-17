import utils from './index';

/* Add it in package.json file and un comment one unit test cases set at a time

  "jest": {
     "automock": true
   }
*/

/* Auto mock */

// test('if utils are mocked', () => {
//   expect(utils.authorize.mock).toBeTruthy();
//   expect(utils.isAuthorized.mock).toBeTruthy();
// });

// test('mocked implementation', () => {
//   utils.authorize.mockReturnValue('mocked_token');
//   utils.isAuthorized.mockReturnValue(true);

//   expect(utils.authorize()).toBe('mocked_token');
//   expect(utils.isAuthorized('not_wizard')).toBeTruthy();
// });

/* Mock Using genMockFromModule */

// test('implementation created by automock', () => {
//     expect(utils.authorize('wizzard')).toBeUndefined();
//     expect(utils.isAuthorized()).toBeUndefined();
// });
  
// test('implementation created by jest.genMockFromModule', () => {
//     const utils = jest.genMockFromModule('./index').default;
//     utils.isAuthorized = jest.fn(secret => secret === 'not wizard');
  
//     expect(utils.authorize.mock).toBeTruthy();
//     expect(utils.isAuthorized('not wizard')).toEqual(true);
// });

/* Disable auto mock */

// jest.disableAutomock();
test('original implementation', () => {
    expect(utils.authorize()).toBe('token');
});