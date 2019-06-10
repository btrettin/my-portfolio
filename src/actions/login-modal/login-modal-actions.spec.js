import Actions from '../../reducers/actions';
import { toggleLoginModal, swapModal } from '.';

describe('toggle login modal action', () => {
  const testActionType = Actions.login.toggleLoginModal;
  it('should return a lambda that returns an object with the toggleLoginModal action', () => {
    const actionValue = toggleLoginModal();
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
