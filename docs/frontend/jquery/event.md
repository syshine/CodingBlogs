# 事件
常见 DOM 事件：

| 鼠标事件	| 键盘事件	| 表单事件	| 文档/窗口事件 |
| --- | --- | --- | --- |
| [click](#click)	| keypress	| submit	| load |
| [dblclick](#dblclick)	| keydown	| change	| resize |
| mouseenter	| keyup	| [focus](#focus)	| scroll |
| mouseleave |  | [blur](#blur)	| unload |
| [hover](#hover) |  |  |   |

## 鼠标事件
### click()
当点击事件在某个 `<p>` 元素上触发时，隐藏当前的 `<p>` 元素：
```js
$("p").click(function(){
  $(this).hide();
});
```

### dblclick()
当双击 `<p>` 元素上触发时，隐藏当前的 `<p>` 元素：
```js
$("p").dblclick(function(){
  $(this).hide();
});
```

### hover()
当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)。
```js
$("#p1").hover(
  function(){
    alert("你进入了 p1!");
  },
  function(){
    alert("拜拜! 现在你离开了 p1!");
  }
);
```

## 表单事件
### focus()
当元素获得焦点时，发生 focus 事件。
```js
$("input").focus(function(){
  $(this).css("background-color","#cccccc");
});
```

### blur()
当元素失去焦点时，发生 blur 事件。
```js
$("input").blur(function(){
  $(this).css("background-color","#ffffff");
});
```