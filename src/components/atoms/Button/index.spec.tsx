import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import Button from '.'

describe('Button', ()=>{
  let renderResult: RenderResult
  let handleClick: jest.Mock

  beforeEach(() => {
    // ダミー関数
    handleClick=jest.fn()
    renderResult=render(
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>,
    )
  })

  afterEach(() =>{
    renderResult.unmount()
  })

  it('ボタンを押したときにonClickが呼ばれる', () =>{
    // ボタンが一回クリックされたかどうか確認
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})