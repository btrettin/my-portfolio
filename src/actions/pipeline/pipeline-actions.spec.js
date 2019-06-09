import Actions from '../../reducers/actions';
import { setRequestPrice, setRequestInformation, setTypeOfRequest, requestInProgress } from '.';


describe('setRequestPrice action', () => {
  const testData = 'test';
  const testActionType = Actions.requests.setRequestPrice;
  it('should return a lambda that returns an object with data and setRequestPrice action', () => {
    const actionValue = setRequestPrice(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});
describe('setRequestInformation action', () => {
  const testData = 'test';
  const testActionType = Actions.requests.setRequestInformation;
  it('should return a lambda that returns an object with data and setRequestInformation action', () => {
    const actionValue = setRequestInformation(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});

describe('setTypeOfRequest', () => {
  const testData = 'test';
  const testActionType = Actions.requests.setTypeOfRequest;
  it('should return a lambda that returns an object with data and setTypeOfRequest action type', () => {
    const actionValue = setTypeOfRequest(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});

describe('requestInProgress action', () => {
  const testData = 'test';
  const testActionType = Actions.requests.requestInProgress;
  it('should return a lambda that returns an object with data and requestInProgress action type', () => {
    const actionValue = requestInProgress(testData);
    expect(actionValue).toEqual({ type: testActionType, data: testData });
  });
});
