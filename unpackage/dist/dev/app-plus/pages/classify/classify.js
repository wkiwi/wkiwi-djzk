
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"page-body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background: #fff; overflow: hidden; }\n.",[1],"nav { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"nav-left { width: 25%; background: #fafafa; }\n.",[1],"nav-left-item { height: ",[0,100],"; border-right: solid 1px #f1f1f1; border-bottom: solid 1px #f1f1f1; font-size: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"nav-right { width: 75%; }\n.",[1],"box { display: block; overflow: hidden; border-bottom: ",[0,20]," solid #f3f3f3; }\n.",[1],"box:last-child { border: none; }\n.",[1],"nav-right-item { width: 28%; height: ",[0,220],"; float: left; text-align: center; padding: ",[0,11],"; font-size: ",[0,28],"; background: #fff; }\n.",[1],"nav-right-item wx-image { width: ",[0,150],"; height: ",[0,150],"; }\n.",[1],"active { color: #FF80AB; background: #fff; border-right: 0; }\n::-webkit-scrollbar { width: 0; height: 0; color: transparent; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/classify/classify.wxss:68:1)",{path:"./pages/classify/classify.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/classify/classify.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      