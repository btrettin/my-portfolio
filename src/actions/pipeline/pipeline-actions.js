import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const setRequestInformation = createReduxAction(Actions.requests.setRequestInformation);
export const setTypeOfRequest = createReduxAction(Actions.requests.setTypeOfRequest);
export const setRequestPrice = createReduxAction(Actions.requests.setRequestPrice);
export const requestInProgress = createReduxAction(Actions.requests.requestInProgress);
