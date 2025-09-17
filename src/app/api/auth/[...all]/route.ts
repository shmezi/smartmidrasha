// import {handlers} from "../../../../../../auth";
//
// export const { GET, POST } = handlers


import {toNextJsHandler} from "better-auth/next-js";
import {auth} from "../../../../../auth";

export const {GET, POST} = toNextJsHandler(auth.handler);