/**
 * Copyright (c) 2020 Bytedance Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type CallbackFunc<T> = (...params: unknown[]) => T;

// 是函数就执行不是函数则返回数值
// setData(fun|data)
export default function functionExecutor<T>(callback: CallbackFunc<T> | T, ...args: unknown[]): T {
  return typeof callback === 'function' ? (callback as CallbackFunc<T>)(...args) : callback;
}
