import type { Result } from "@/types/result";
import { request } from "@/util/request";
import type { AxiosResponse } from "axios";

/**
 * 用户登录——密码
 * @param username 用户名
 * @param password 密码
 * @returns
 */
export const onLoginByPwd = function (username: string, password: string): Promise<AxiosResponse<Result, any>> {
  return request.post("/user/login/pwd", {
    username,
    password,
  });
};
