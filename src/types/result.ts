// 返回值定义
export interface Result<T> {
  code: number;
  message: string;
  data: T;
}
