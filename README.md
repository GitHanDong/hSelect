# hSelect
hSelect是一个用来通过jQuery修改伪元素CSS值的小工具。

## 功能
常规的jQuery是没有办法选择伪元素进行修改的（比如：'::after','::before'），而有些时候我们为了保证DOM结构的美观，一些元素会利用伪元素来进行实现。当这些元素需要修改CSS样式的时候，jQuery原生不支持选择伪元素就有点力不从心了。本小插件的作用就是能让你修改伪元素的CSS样式。

## 依赖
jQuery

## 用法
`$('dom').hSelect('swicth','css');`

1.swicth传入'a'表示修改`当前DOM::after`的CSS值，传入'b'表示修改`当前DOM::before`的CSS值    
2.css传入常规CSS，例如`'content:"123123";font-size:12px;'`    
3.支持链式调用

## 注意：所有传入的值均为String格式！
