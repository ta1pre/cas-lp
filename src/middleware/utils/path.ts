/**
 * パスに関するユーティリティ関数
 */

import { PATH_MAPPINGS } from '../constants';

/**
 * URLパスからクッキーに設定する値を決定する
 * @param path URLパス
 * @returns クッキーに設定する値、マッチしない場合はundefined
 */
export function getValueFromPath(path: string): string | undefined {
  // 定義されたパスマッピングを順番に確認
  for (const mapping of PATH_MAPPINGS) {
    if (mapping.pathPattern.test(path)) {
      return mapping.value;
    }
  }
  
  // マッチするパターンがない場合はundefinedを返す
  return undefined;
}
