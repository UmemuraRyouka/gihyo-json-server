import { ThemeProvider } from 'styled-components'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import { theme } from 'themes'
import Dropzone from '.'

describe('Dropzone', () =>{
  let renderResult: RenderResult
  let handleDrop: jest.Mock

  beforeEach(() => {
    // ダミー関数
    handleDrop = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Dropzone onDrop={handleDrop} />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ファイルがドロップされたらonDropが呼ばれる', () => {
    // ファイルをドロップする
    const element = await screen.findByTestId('dropzone')

    fireEvent.drop(element, {
      dataTransfer:{
        files:[
          new File(['(-□д□-)'], 'chucknorris.png', { type: 'image/png'}),
        ],
      },
    })

    // ファイルが入力されたか確認
    expect(handleDrop).toHaveBeenCalledTimes(1)
  })
})