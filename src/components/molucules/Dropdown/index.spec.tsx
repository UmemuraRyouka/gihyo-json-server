import { ThemeProvider } from 'styled-components'
import {
  render,
  screen,
  act,
  fireEvent,
  RenderResult,
} from '@testing-library/react'

describe('Dropdown', () =>{
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // ダミー関数
    handleChange=jest.fn()
    renderResult=render(
      <ThemeProvider theme={theme}>
        <Dropdown
          options={[
            { value: 'used', label: '中古'},
            { value: 'new', label: '新品'},
          ]}
          onChange={handleChange}
        />
      </ThemeProvider>,
    )
  })
  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', async()=> {
    // act関数で囲むことでプルダウンを開いているようにDOMが更新されたことを保証する
    await act(async () => {
      // クリックして、オプションのプルダウンを開く
      const element = await screen.findByTestId('dropdown-control')
      element && fireEvent.mouseDown(element)
    })

    // プルダウンから最初のオプションを選択
    const elements = await screen.getAllByTestId('dropdown-option')
    elements && fireEvent.click(elements[0])

    // オプションを選択したか確認
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})