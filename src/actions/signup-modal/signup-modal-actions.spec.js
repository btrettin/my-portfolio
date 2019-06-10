import Actions from '../../reducers/actions';
import { toggleSignupModal, swapModal } from '.';

describe('toggle login modal action', () => {
  const testActionType = Actions.login.toggleSignupModal;
  it('should return a lambda that returns an object with the toggleSignupModal action', () => {
    const actionValue = toggleSignupModal();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
describe('swap modal action', () => {
  const testActionType = Actions.login.swapModal;
  it('should return a lambda that returns an object with the swapModal action', () => {
    const actionValue = swapModal();
    expect(actionValue).toEqual({ type: testActionType });
  });
});
