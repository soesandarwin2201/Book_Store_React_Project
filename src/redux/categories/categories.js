import { Action } from "@remix-run/router";

const STATUS = 'status';
const categoriesArray = [];

export const completeStatus = () =>( {
 type : STATUS
});

const statusReducer = (state = categoriesArray , action ) => {
 if(action.type === STATUS) {
  return 'Under construction';
 }
 return state;
};

export default statusReducer;