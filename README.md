# qB WebUI
### 基于官方的`Web UI`，进行了一些优化:
* 对种子列表和文件列表中的每个文件名进行判断是否包含假名，如果包含假名，就将那一行设置为日文字体，否则保持默认字体（有两种实现方式，详见注意事项）
* 美化了登录页<s>，夹了一些私货 </s>
* 增加了拒绝蜘蛛协议，防止`WebUI`的页面被搜索引擎收录 <s>（感兴趣可以[必应一下](https://cnm.buhuibing.xyz/?s=qBittorrent%20Web%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)）</s>
* 另外，我用修改后的`WebUI`替换了自带的，打包进了源码；如果您要使用源码从头开始编译安装，可以使用此包一步到位<br>由于更纱黑体版本文件比较大，就没有打包，等搭完`CDN`再放新的版本
#### 更换`WebUI`后请一定要清除浏览器缓存！！！！！！

### 注意事项:
* 基于`4.4.3.1`的官方`WebUI`进行修改，绝大多数功能都向下兼容
* 对于使用`4.1.x`、`4.2.x`及`4.3.x`的用户，也建议使用此`WebUI`包，因为此版本的`WebUI`对于`4.4.x`以下版本均有功能扩充（事实上，qb的每一个大版本更新都有`WebUI`的功能扩充）
* `4.4.3.1`相比`4.1.9.1`加入的功能有(从第5点开始对部分老版本不兼容，有的是`4.2.x`加入的，有的是`4.3.x`加入的)：
  1. 文件列表折叠
  2. RSS订阅
  3. 种子完成进度条
  4. 以`Tag`分类种子
  5. 以`Tracker`分类种子
  6. 可以通过`WebUI`更改高级设置
  7. 可能还有别的
* 由于`Windows`和`Linux`表示路径的分隔符并不一样，因此给出了两个系统对应的版本（虽然用`Windows`就不需要`WebUI`了，直接远程桌面就行）
* 给出了默认字体和更纱黑体的两个版本，其中默认字体版本通过修改`html`的`lang`属性来修改字体，绝大多数桌面浏览器都支持这个功能（[必应](https://www.bing.com/)、[萌娘百科](https://zh.moegirl.org.cn/)和[1919810论坛](https://1919810.com/)等网站的字体选择就是这么解决的）<br>但是此方式也会有一定问题，例如，如果在标题中出现了简体字（如「xx字幕组」的「组」），就会被`fallback`到中文字体，很有可能两个字体的风格并不匹配<br>而更纱黑体版本则对于不同地区化版本给出了对应的字体包和`CSS`样式表，通过修改`class`属性来更改字体<br>我们正在对更纱黑体的`WebFont`搭建`CDN`，以便在线调用，搭建完成后，可以将`60MiB`左右的文件减小至和默认字体版本一样大
* [qBittorrent](https://github.com/qbittorrent/qBittorrent) 的旧版本比较稳定，推荐`4.1.9.1`或者`4.2.5`版本
* 如果您在`Ubuntu`或者`Debian`下编译安装`qBittorrent`遇到了困难，推荐[NPCHK的教程](https://npchk.info/ubuntu-debian-install-qbittorrent/)，其他系统的教程应该也可以在他的博客中找到
* `Windows`的`qBittorrent 4.1.9.1`安装包，可以在[这里](https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/qbittorrent-4.1.9.1/)下载到
* 如需下载此改版`Web UI`，<s>请移步对应版本的`branch`（[4.1.9.1版本](https://github.com/Lambholl/qb-webui/tree/4.1.9.1)）</s><br>
请前往[Releases](https://github.com/Lambholl/qb-webui/releases/latest)
* <s>如果您習慣於港繁或臺繁，請前往`Releases`下載CJK地區化附加包解壓後覆蓋原來的內容</s>
