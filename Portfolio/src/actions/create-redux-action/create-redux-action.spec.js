import createReduxActionTest from './create-redux-action';

describe('redux action with data', () => {
  const testData = 'test';
  const testActionType = 'testActionType';
  it('should return a lambda that returns an object with data and action type', () => {
    const action = createReduxActionTest(testActionType);
    const actionValue = action(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});
