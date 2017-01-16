---
nav: zh-CN
---


### PopupPicker_COM

<img width="100" src="http://qr.topscan.com/api.php?text=http%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fpopup-picker"/>

#### Demo

 <div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
   <iframe src="http://vux.li/demos/v2/#/component/popup-picker" width="375" height="667" border="0" frameborder="0"></iframe>
 </div>

#### demo 代码

<p class="tip">下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。</p>

``` html
<template>
  <div>
    <group title="single column">
      <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide"></popup-picker>
    </group>
    <br>
    <div class="picker-buttons">
      <x-button type="primary" @click.native="changeList10">重新赋值列表</x-button>
      <x-button type="primary" @click.native="changeList11">push方式更改列表</x-button>
    </div>
    <group title="double columns">
      <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
    </group>
    <br>

    <group title="chained columns">
      <popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"></popup-picker>
      <cell title="获取值对应的文字" value="$refs.picker3.getNameValues()"></cell>
      <popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></popup-picker>
    </group>

    <br>
    <div class="picker-buttons">
      <x-button type="primary" @click.native="changeList21">push方式更改列表</x-button>
    </div>

    <br>
    <divider>Control the visibility of popup-picker</divider>
    <div style="margin: 0 15px;">
      <x-button @click.native="showPopupPicker = true" type="primary">Show PopupPicker. value: {{value5 }}</x-button>
    </div>
    <group>
      <popup-picker :show="showPopupPicker" :show-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]" v-model="value5" @on-hide="showPopupPicker=false"></popup-picker>
    </group>

    <br>
    <group title="隐藏时不影响其他popup-picker的mask">
      <x-switch title="ishide popup-picker" v-model="switch6"></x-switch>
      <popup-picker v-if="!switch6" :show.sync="showPopupPicker" title="显示值" :data="['我不会影响遮罩层'.split('')]" v-model="value6"></popup-picker>
    </group>

    <br>
    <br>

  </div>
</template>

<script>
import { PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch } from 'vux'

export default {
  components: {
    PopupPicker,
    Group,
    Picker,
    XButton,
    Divider,
    Cell,
    XSwitch
  },
  methods: {
    changeList10 () {
      this.list1 = [['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1']]
    },
    changeList11 () {
      this.list1[0].push('我是push条目')
    },
    changeList20 () {

    },
    changeList21 () {
      this.list3.push({
        name: '美国002_007',
        value: '0007',
        parent: 'usa002'
      })
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    }
  },
  data () {
    return {
      title1: '手机机型',
      title2: '详细机型',
      title3: '联动显示值',
      title4: '联动显示文字',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
      list3: [{
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }],
      value1: ['iPhone'],
      value2: ['iPhone', '华为3'],
      value3: [],
      value4: [],
      showPopupPicker: false,
      value5: ['2'],
      switch6: false,
      value6: []
    }
  }
}
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>


```
#### 文档

#### Github Issue