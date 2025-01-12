import { View, Image } from '@tarojs/components'

import './index.scss'


const handleBuy = data => () => {
  console.log('handle buy', data)
}

// function component 必须首字母大写
export default function ShopGood(props) {
  const {goodName = '', goodPrice = 1, mainImageUrl = ''} = props.data
  return (
    <View className="shopContent-good">
      <View className="shopContent-good-image">
        <Image src={mainImageUrl} />
      </View>
      <View className="shopContent-good-content">
        <View>
          <View className="shopContent-good-content-title">{goodName}</View>
          <View className="shopContent-good-content-des">商品注释商品注释商品注释商品注释商品注释商品注释</View>
        </View>
        <View className="shopContent-good-content-footer">
          <View>¥{goodPrice}</View>
          <View className="shopContent-good-btn" onClick={handleBuy(props.data)}>去购买</View>
        </View>
      </View>
    </View>
  )
}
