# QBS配套系统的扩展包

1. formatDate：将时间戳（10位或13位）转换为设定格式的时间
API：
	formateDate ${默认格式} ${默认值（当输入为空时）}

使用方法：
```
<template>
	<span v-text="time | formatDate 'yyyy-mm-dd HH:mm:ss' '空'" ></span>
</template>
<script>
import Vue from 'vue'
import qbsExtensions from 'qbs-extensions'
Vue.use(qbs-extensions); 

export default {
	data(){
		return {
			time:'1411111111'
		}
	}
}
</script>
```

2. translate: 根据列表提取对应的值
API：
	translate ${供选择的列表}

使用方法:
```
<template>
	<span v-text="item | translate list"></span>
</template>
<script>
import Vue from 'vue'
import qbsExtensions from 'qbs-extensions'
Vue.use(qbsExtensions); 

export default {
	data(){
		return {
			item:1,
			time:[{
				value:1,
				name:'支付宝'
			},{
				value:2,
				name:'微信'
			},{
				value:3,
				name:'银联'
			}]
		}
	}
}
</script>
```