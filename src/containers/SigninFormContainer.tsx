import SigninForm from "components/organisms/SigninForm";
import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";

interface SigninFormContainerProps {
  /**
   * サインインした時に呼ばれるイベントハンドラ
   */
  onSignin: (error?: Error) => void
}

/**
 * サインインフォームコンテナ
 */
const SigninFormContainer = ({
  onSignin,
}: SigninFormContainerProps) =>{
  const { signin } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  // サインインボタンを押されたときのイベントハンドラ
  const handleSignin = async (usename: string, password: string) =>{
    try{
      // ローディングスピナーを表示する
      setGlobalSpinner(true)
      await signin(username, password)
      onSignin && onSignin()
    } catch (err: unknown){
      if(err instanceof Error){
        // エラー内容を表示
        window.alert(err.message)
        onSignin && onSignin(err)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return <SigninForm onSignin={handleSignin} />
}

export default SigninFormContainer