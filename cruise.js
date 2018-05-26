// 保存每次点击加号的父DOM对象
var global_parent = null;

// 初始化方法
(function() {
  // 初始化绑定加号事件
  for (var i = 0; i < document.getElementsByClassName("icon-plus").length; i++) {
    document.getElementsByClassName("icon-plus")[i].addEventListener('click', function(e) {
      global_parent = e.target.parentNode;
      document.getElementById("inputValue").value = "";
      document.getElementById("popWindow").style.display = "block";
      document.getElementById("popWindow").style.top = e.screenY - 50 > window.innerHeight - 180 ? window.innerHeight - 180 + 'px' : e.screenY - 50 + "px";
      document.getElementById("popWindow").style.left = e.screenX - 80 + "px";
    }, false);
  }

  var initializeData = ["Firefox", "Safari", "Ubuntu", "Chrome"]
  initializeData.forEach(function(item) {
    document.getElementById("item1_content").appendChild(createNode(item));
    document.getElementById("item2_content").appendChild(createNode(item));
  });

  ["Firefox", "Safari"].forEach(function(item) {
    document.getElementById("item3_content").appendChild(createNode(item));
  })
})()

// 关闭弹框事件
document.getElementById("icon-close").addEventListener('click', function(e) {
  document.getElementById("popWindow").style.display = "";
}, false);

// add Resource事件
function addResource() {
  var text = document.getElementById("inputValue").value;
  text.split(",").forEach(function(item) {
    global_parent.appendChild(createNode(item));
  });
  document.getElementById("popWindow").style.display = "";
}

// 删除resource事件
function deleteElement(_element) {
  var _parentElement = null;
  var _removeElement = null;
  if (_element.target.nodeName.toLowerCase() === "span") {
    _parentElement = _element.target.parentNode.parentNode;
    _removeElement = _element.target.parentNode;
  } else {
    _parentElement = _element.target.parentNode;
    _removeElement = _element.target;
  }
  if (_parentElement) {
    _parentElement.removeChild(_removeElement);
  }
}

// 动态创建节点
function createNode(item) {
  var node = document.createElement("DIV");
  node.setAttribute("class", "icon-trash-my");
  node.setAttribute("id", "icon-trash-my");
  node.setAttribute("onclick", "deleteElement(event)");
  var nodeSpan = document.createElement("SPAN");
  var textnode = document.createTextNode(item);
  nodeSpan.appendChild(textnode)
  node.appendChild(nodeSpan);
  return node;
}
