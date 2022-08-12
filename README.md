# qB WebUI
### 基于官方的`Web UI`，进行了一些优化:
* 将`UI`字体更换为更纱黑体，并对种子列表和文件列表中的每个文件名进行判断是否包含假名，如果包含假名，就将那一行设置为日文字体，否则保持默认字体（正在考虑是否要将分类列表也加上这个判断）
* 更纱黑体的子集化和`Web Font`化采用[自研的 WebFont 制作工具](https://github.com/Lambholl/webfont-seperator)进行制作
* 美化了登录页<s>，夹了一些私货 </s>

### 注意事项:
* 此工具目前只对`4.1.9.1`版本自带的`Web UI`进行了修改，之后应该也会对高版本进行修改（`4.1`以上版本应该都是兼容的）
* [qBittorrent](https://github.com/qbittorrent/qBittorrent) 的旧版本比较稳定，推荐`4.1.9.1`或者`4.2.5`版本
* 如果您在`Ubuntu`或者`Debian`下编译安装`qBittorrent`遇到了困难，推荐[NPCHK的教程](https://npchk.info/ubuntu-debian-install-qbittorrent/)，其他系统的教程应该也可以在他的博客中找到
* `Windows`的`qBittorrent 4.1.9.1`安装包，可以在[这里](https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/qbittorrent-4.1.9.1/)下载到
* 如需下载此改版`Web UI`，<s>请移步对应版本的`branch`（[4.1.9.1版本](https://github.com/Lambholl/qb-webui/tree/4.1.9.1)）</s><br>
请前往[Releases](https://github.com/Lambholl/qb-webui/releases/tag/4191)
* <s>如果您習慣於港繁或臺繁，請前往`Releases`下載CJK地區化附加包解壓後覆蓋原來的內容</s>
