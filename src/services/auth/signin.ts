// typesは後ほど定義
import { ApiContext, User } from 'types'

// src/utils/index.tsから読込
import { fetcher } from 'utils'

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string

  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string
}

/**
 * 認証API(サインイン)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @param returns ログインユーザ
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin