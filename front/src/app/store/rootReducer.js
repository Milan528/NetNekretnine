// import { loginReducer } from '../../pages/login/redux/slices';
// import { registerReducer } from '../../pages/register/redux/slices';
// import { homeReducer } from '../../pages/home/redux/slices';
// import { createPostReducer } from '../../pages/createPost/redux/slices';
// import { tagsReducer } from '../../pages/tags/redux/slices';
import { authReducer } from "../../pages/login/redux/slices";
import { appReducer } from "../redux/slices";

const rootReducer = {
  app: appReducer,
  // login: loginReducer,
  // home: homeReducer,
  // createPost: createPostReducer,

  auth: authReducer,
  // tags: tagsReducer,
};

export default rootReducer;
