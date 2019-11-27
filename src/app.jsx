import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      'pages/admin/admin',
      'pages/user/user',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '好物清单',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#ffffff",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/home/home",
          iconPath: "./assets/nav/home.png",
          selectedIconPath: "./assets/nav/home-active.png",
          text: "发现"
        },
        {
          pagePath: "pages/admin/admin",
          iconPath: "./assets/nav/admin.png",
          selectedIconPath: "./assets/nav/admin-active.png",
          text: "清单"
        },
        {
          pagePath: "pages/user/user",
          iconPath: "./assets/nav/user.png",
          selectedIconPath: "./assets/nav/user-active.png",
          text: "我的"
        },
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))