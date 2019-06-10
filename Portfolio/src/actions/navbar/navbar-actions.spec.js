import Actions from '../../reducers/actions';
import setLoggedIn from '.';


describe('setLoggedIn action', () => {
  const testActionType = Actions.login.isLoggedIn;
  it('should return a lambda that returns an object with the isLoggedIn action', () => {
    const actionValue = setLoggedIn();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
