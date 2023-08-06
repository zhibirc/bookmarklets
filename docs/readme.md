# bookmarklets

[![Maintenance](https://img.shields.io/maintenance/yes/2023.svg?style=flat-square)]()
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](license.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square)]()
[![HitCount](https://hits.dwyl.com/zhibirc/bookmarklets.svg)](https://hits.dwyl.com/zhibirc/bookmarklets)
![Pandoc Document Converter](https://github.com/zhibirc/bookmarklets/workflows/Pandoc%20Document%20Converter/badge.svg?branch=master&style=flat-square)

---

## [hooktube](https://github.com/zhibirc/bookmarklets/blob/master/hooktube/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="hooktube" href="javascript:'use strict';(e=>{location.href=e.replace(/youtube/i,'hooktube')})(location.href);">hooktube</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [only-you](https://github.com/zhibirc/bookmarklets/blob/master/only-you/index.ts)

Personally I prefer to focus on some I'm currently doing. This is also about viewing videos on [YouTube](https://www.youtube.com/). 
The problem is that there are many, many visual distractions around it: similar or recommended videos, control elements, comments. 
At best, they can interfere with working concentration, and at worst, they can waste time. Current bookmarklet is an attempt to deal with this. :dart:

<!--
<div>
    <a rel="nofollow" data-id="only-you" href="javascript:'use strict';(()=>{let e={'ytd-app':{'#content':{'#page-manager':{'ytd-watch-flexy':{'#columns':{'#primary':{'#primary-inner':{'#comments':null}}}}}}}};function t(e,t=!1){const n=document.querySelector(e).parentNode;[...n.children].filter((n=>(t?n===document.querySelector(e):n!==document.querySelector(e))&&'SCRIPT'!==n.tagName&&'LINK'!==n.tagName&&'STYLE'!==n.tagName&&'META'!==n.tagName)).forEach((e=>n.removeChild(e)))}!function n(){let r;for(r in e){if(null===e[r])return t(r,!0);t(r),e=e[r],n()}}()})();">only-you</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->


## [quick-search](https://github.com/zhibirc/bookmarklets/blob/master/quick-search/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="quick-search" href="javascript:'use strict';(()=>{let e,t;e=window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text,t=String(e).trim(),t&&window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(t)}`)})();">quick-search</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [remove-images](https://github.com/zhibirc/bookmarklets/blob/master/remove-images/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="remove-images" href="javascript:'use strict';[...document.all].forEach((e=>{'IMG'===e.tagName&&(e.style.display='none !important'),-1!==getComputedStyle(e).backgroundImage.indexOf('url')&&(e.style.backgroundImage='none !important')}));">remove-images</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [restore-contextmenu](https://github.com/zhibirc/bookmarklets/blob/master/restore-contextmenu/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="restore-contextmenu" href="javascript:'use strict';document.onmousedown=document.onmouseup=document.oncontextmenu=()=>!0,window.addEventListener('contextmenu',(n=>{n.stopPropagation()}),!0);">restore-contextmenu</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [show-passwords](https://github.com/zhibirc/bookmarklets/blob/master/show-passwords/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="show-passwords" href="javascript:'use strict';(()=>{const t=document.getElementsByTagName('input');let e,s;for(s=0;s<t.length;s+=1)e=t[s],'password'===e.type.toLowerCase()&&(e.type='text')})();">show-passwords</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [time-estimator](https://github.com/zhibirc/bookmarklets/blob/master/time-estimator/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="time-estimator" href="javascript:'use strict';(()=>{const e=document.createElement('div'),t=document.createElement('div'),i=document.createElement('b'),n=`position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, .7); z-index: ${Math.pow(2,31)-1}; transition: .5s`;e.style.cssText=n,t.style.cssText='width: 258px; height: 244px;',i.style.cssText='position: absolute; top: -22px; left: 236px; font-size: 40px; cursor: pointer;',i.innerHTML='&times;',t.innerHTML='<iframe src=%22https://zhibirc.github.io/estimator/%22 style=%22width: 100%; height: 100%; border: none; display: block; background: cyan;%22><p>How about IFRAME?</p></iframe>',i.addEventListener('click',(()=>{document.body.removeChild(e)})),e.appendChild(i),e.appendChild(t),document.body.appendChild(e)})();">time-estimator</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [unhide-elements](https://github.com/zhibirc/bookmarklets/blob/master/unhide-elements/index.ts)

<!--
<div>
    <a rel="nofollow" data-id="unhide-elements" href="javascript:'use strict';(()=>{const t=document.all;let i,l;for(l=0;l<t.length;l+=1)i=t[l],'hidden'===i.style.visibility?i.style.visibility='visible !important':'none'===i.style.display?i.style.display='block !important':'IMG'===i.tagName&&(i.width<2||i.height<2)&&(i.style.cssText='outline: 5px solid #f00'),i.style.opacity=1})();">unhide-elements</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->

## [yodify](https://github.com/zhibirc/bookmarklets/blob/master/yodify/index.ts)

![Yoda himself](https://github.com/zhibirc/bookmarklets/blob/master/assets/images/yoda.png)

This fun bookmarklet allows you to translate the so-called "normal" speech in **Russian**/**Ukrainian**/**English** to Yoda's language. 
Just select an original language and enter some.

<!--
<div>
    <a rel="nofollow" data-id="yodify" href="javascript:'use strict';(()=>{const e=`position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, .6); z-index: ${Math.pow(2,31)-1}; transition: .5s`,t='flex: 1; font-size: 40px; font-weight: bold; text-align: center; line-height: 600px; cursor: pointer;',n=document.createElement('div'),i=document.createElement('div'),d=document.createElement('div'),o=document.createElement('div'),r=document.createElement('b');n.style.cssText=e,i.style.cssText='display: flex; width: 600px; height: 600px; border: none; margin: 100px auto; background: cyan; overflow: hidden;',d.style.cssText=t,o.style.cssText=t,r.style.cssText='position: absolute; top: 20px; right: 45px; font-size: 60px; cursor: pointer;',d.textContent='RU/UK',o.textContent='EN',r.innerHTML='&times;',d.addEventListener('click',(()=>{for(;i.firstChild;)i.removeChild(i.firstChild);i.innerHTML='<iframe src=%22https://vexer.ru/jokez/joda.php%22 style=%22width: 100%; height: 100%; border: none; display: block; background: cyan; overflow: hidden;%22 scrolling=%22no%22><p>How about IFRAME?</p></iframe>'})),o.addEventListener('click',(()=>{})),r.addEventListener('click',(()=>{document.body.removeChild(n)})),i.appendChild(d),i.appendChild(o),n.appendChild(r),n.appendChild(i),document.body.appendChild(n)})();">yodify</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->


## [zip-url](https://github.com/zhibirc/bookmarklets/blob/master/zip-url/index.ts)

Short links for less typing, quick remember, pretty look and traffic economy.

<!--
<div>
    <a rel="nofollow" data-id="zip-url" href="javascript:'use strict';(()=>{const t={tinyUrl:()=>`https://tinyurl.com/create.php?url=${encodeURIComponent(location.href)}`};window.open(t.tinyUrl())})();">zip-url</a>
    <p class="tip"><strong>Tip:</strong> drag this to your bookmarks toolbar or right-click and add to bookmarks.</p>
</div>
-->


## Contributing

Pull requests with your own favorite bookmarklets are highly welcome.