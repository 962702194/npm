/** 测试类 */
class HelloWorld {
  /**
   * 在页面中显示hello world
   */
  say () {
    let div = document.createElement('div')
    div.innerHTML = 'hello world'
    const thisNode = document.querySelector('#root')
    const childs = thisNode.childNodes
    for (var i = 0; i < childs.length; i++) {
      thisNode.removeChild(childs[i])
    }
    thisNode.appendChild(div)
  }
}

export default HelloWorld
