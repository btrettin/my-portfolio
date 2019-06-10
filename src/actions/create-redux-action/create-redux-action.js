export const createReduxAction = actionType => data => ({ type: actionType, data });
export default createReduxAction;
