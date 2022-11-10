import { ComponentMeta } from '@storybook/react'
import GlobalSpinner from './index'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from 'contexts/GlobalSpinnerContext'
import BUtton from 'components/atoms/Button'

export default {
  title: 'organisms/GlobalSpinner',
} as ComponentMeta<typeof GlobalSpinner>

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick() => {
      setGlobalSpinner(true)
      // 5秒後に閉じる
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return(
      <>
        <GlobalSpinner />
        {/* クリックでスピナーを表示 */}
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    )
  }

  return(
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}