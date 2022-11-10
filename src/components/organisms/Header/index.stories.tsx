import React, { useEffect } from 'react'
import { ComponentMeta } from '@storybook/react'
import Header from './index'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext'
import { AuthContextProvider } from 'contexts/AuthContext'

export default { title: 'organisms/Header' } as ComponentMeta<typeof Header>

// サインイン状態でないヘッダー
export const NoLogin = () => <Header />

// サインイン状態のヘッダー
export const Login = () => {
  // ダミーユーザー追加
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Taketo Yoshida',
    email: 'test@example.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
  }

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    // ダミー商品追加
      useEffect(() => {
        addProductToCart({
          id:1,
          category: 'book',
          title: 'Product',
          desctiprion: '',
          imageUrl: '/images/sample/1.jpg',
          blurDataUrl: '',
          price: 1000,
          condition: 'used',
          owner: authUser,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      return <Header />
    }
    return(
      <ShoppingCartContextProvider>
        <AuthContextProvider
          context={{ apiRootUrl: 'https://dummy'}}
          authUser={authUser}
        >
          <ChildComponent />
        </AuthContextProvider>
      </ShoppingCartContextProvider>
    )
  }
