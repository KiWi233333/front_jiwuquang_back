import type { Result } from "@/types/result";
import { request } from "@/util/request";
import type { AxiosResponse } from "axios";

/**
 * 管理员登录——密码
 * @param username 用户名
 * @param password 密码
 * @returns
 */
export const onLoginByPwd = (username: string, password: string): Promise<AxiosResponse<Result<string>, any>> => {
  return request({
    method: "POST",
    url: "/login/pwd",
    data: {
      username,
      password,
    },
  });
};

/**
 * 退出登录
 * @param token token
 * @returns
 */
export const onLogout = (token: string): Promise<AxiosResponse<Result<string>, any>> => {
  return request({
    method: "DELETE",
    url: "/exit",
    headers: {
      Authorization: token,
    },
  });
};
