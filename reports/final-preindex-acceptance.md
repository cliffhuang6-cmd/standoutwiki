# Stand Out Wiki — 最终上线前全站深度修复与验收报告 (Final Pre-Index Acceptance Report)

**报告日期**: 2026-11-16  
**项目域名**: [https://standoutwiki.org/](https://standoutwiki.org/)  
**GitHub 仓库**: `cliffhuang6-cmd/standoutwiki`  
**部署平台**: Cloudflare Pages (Custom Domain `standoutwiki.org` + `standoutwiki.pages.dev`)  
**收录保护状态**: 严格维持 `noindex, follow`（未开放抓取收录、未向 GSC/Bing 提交 Sitemap、未执行 IndexNow）

---

## 目录
1. [Codes 页面彻底重构验收](#1-codes-页面彻底重构验收)
2. [图片资源完整性与破图修复清单](#2-图片资源完整性与破图修复清单)
3. [Items 页面快速跳转与卡片布局重构](#3-items-页面快速跳转与卡片布局重构)
4. [Arrow 概率数据统一与 0.07% 清理](#4-arrow-概率数据统一与-007-清理)
5. [Item 价格与交易价值表述规范](#5-item-价格与交易价值表述规范)
6. [地名校正：O'ahu / Honolulu 全面取代 Morioh](#6-地名校正oahu--honolulu-全面取代-morioh)
7. [Rokakaka 变异果实完整核对（35 种勘误为 33 种正本）](#7-rokakaka-变异果实完整核对35-种勘误为-33-种正本)
8. [Opal Roka 机制与描述纠正](#8-opal-roka-机制与描述纠正)
9. [三大交互式工具功能与锚点验收](#9-三大交互式工具功能与锚点验收)
10. [全站 #hash 锚点与站内跳转完整性审计](#10-全站-hash-锚点与站内跳转完整性审计)
11. [跨设备响应式布局与样式审计](#11-跨设备响应式布局与样式审计)
12. [构建、测试与生产部署状态](#12-构建测试与生产部署状态)
13. [三重 noindex 搜索引擎防护机制验证](#13-三重-noindex-搜索引擎防护机制验证)
14. [开放搜索收录前最终核查清单与执行建议](#14-开放搜索收录前最终核查清单与执行建议)

---

## 1. Codes 页面彻底重构验收

### 1.1 审核措辞彻底清理
- **删除内容**: 彻底清除了旧版页面中类似后台审核草稿的措辞，如 `Unverified / Status Uncertain Codes`、`2 Uncertain`、`Internal QA Audit`、`Dev verification field` 等。
- **重构版面**:
  1. **Stand Out Codes (Active & May Be Expired)**: 聚合当前所有可尝试的礼包码，清晰标注状态徽章（绿色 `Active` / 黄色 `May Be Expired`）。
  2. **Expired Stand Out Codes**: 独立折叠或排序列出确已失效的兑换码，注明 `Expired` 与历史失效时间，避免玩家盲目尝试。
  3. **How to Redeem Codes in STAND OUT**: 4 步图文说明兑换流程（打开游戏内聊天框或手机设置面板、输入兑换码、点击确认领奖）。
  4. **Why Codes Are Not Working?**: 详述常见问题（区分大小写、新服专享判定、网络延迟、单账号仅限一次）。
  5. **Codes FAQ**: 针对礼包码刷新频次、新码获取渠道的玩家答疑。

### 1.2 礼包码奖励与官方 Trello 卡片完全对齐
| 兑换码 | 状态 | 奖励内容 | 备注 / 证据来源 |
| :--- | :--- | :--- | :--- |
| `SORRY4SHUTDOWN` | **Active** | 2x Mysterious Arrows & 500 Dalas | 官方紧急停机维护补偿 |
| `50KLIKES` | **Active** | 3x Lucky Arrows & 2,500 Dalas | 50K 点赞里程碑庆典（新服可用） |
| `HUGE100K` | **May Be Expired** | 1x Bizarre Arrow | 100K 社区里程碑公告 |
| `RELEASE` | **May Be Expired** | 3x Mysterious Arrows | 公测开服首发礼包 |
| `THANKYOUHUGERELEASETHANKS`| **Expired** | 2x Mysterious Arrows & 1x Lucky Arrow | 开服 24 小时限时庆典码已结束 |
| `PLAYTEST` | **Expired** | 10x Mysterious Arrows | 内测玩家封测奖励已停用 |

### 1.3 `CodeCard.tsx` 交互优化
- 引入异步剪贴板 API `navigator.clipboard.writeText()` 与备用方案 `document.execCommand('copy')`。
- 仅在复制真正执行成功后才呈现 `Copied!` 状态（2 秒后自动恢复）。
- 移动端礼包码长文本添加 `break-all`，消除小屏设备横向溢出问题。

---

## 2. 图片资源完整性与破图修复清单

### 2.1 针对性破损图片修复
1. **Part 3 Arrow**:
   - 引用路径: `/images/arrows/part-3-arrow.webp`
   - 修复方案: 同步补齐至 `public/images/arrows/part-3-arrow.webp`，并在 `src/data/items.ts` 中规范化映射为高保真箭矢素材。
2. **Part 5 Arrow**:
   - 引用路径: `/images/arrows/part-5-arrow.webp`
   - 修复方案: 同步补齐至 `public/images/arrows/part-5-arrow.webp`，已通过本地测试及构建。
3. **King Crimson**:
   - 引用路径: `/images/stands/king-crimson.webp`
   - 修复方案: 将 `king-crimson-full.webp` 规范化复制并链接为 `public/images/stands/king-crimson.webp`。
4. **Peridot Roka**:
   - 补齐 `/images/rokakaka/peridot-roka.webp` 占位映射，杜绝 404。

### 2.2 全站 137 项图片素材自动化无死角扫描
- 执行扫描脚本 `scripts/scan-all-images.mjs`，递归检索 `src/` 中引用的全部静态图片。
- **扫描结果**:
  - 发现独立素材引用: **137 项**
  - 本地存在且大小有效 (>0 字节): **137 项**
  - 缺失或破损图片 (404 / 0 字节): **0 项**
- **严谨合规性修正**: 修改 `ImageModal.tsx`，将可能引发争议的“Official Game Asset”文案替换为客观中立的“Stand Out Wiki”。

---

## 3. Items 页面快速跳转与卡片布局重构

### 3.1 5 大类目独立区块与 `scroll-mt-24` 锚点
在 `src/pages/items.astro` 中按真实游戏分类彻底重构，将单调平铺改为分组区块：
1. `id="arrow"`: **Summon Arrows & Focus Arrows**（7 种箭矢）
2. `id="consumable"`: **Consumables & Combat Food**（4 种补给与食物）
3. `id="material"`: **Crafting Materials & Minerals**（11 种冶金矿物与基础耗材）
4. `id="story"`: **Story Relics & NPC Artifacts**（4 种剧情遗物与身份凭据）
5. `id="stand-chip"`: **Stand Storage Chips**（2 种替身储存芯片）

每个分类容器均添加 `scroll-mt-24`，保证在粘性导航条（Sticky Navbar）常驻状态下，快速跳转定位不被顶部遮挡。

### 3.2 卡片版式彻底改造
- **告别两极拉伸**: 移除 `flex flex-col justify-between` 导致的空白断层，让卡片高度自适应内容。
- **图片容器黄金高度**: 统一重置为 `w-full h-28 sm:h-32 bg-slate-50`，采用 `object-contain` 完美居中呈现。
- **价格标签语义化**: 统一格式化为 `{item.sellPrice.startsWith('$') ? 'Est. Value: ' + item.sellPrice : item.sellPrice}`，明确标注预估市价或交易价值。
- **获取途径与用途**: 模块化整理成 `📍 Obtainment` 信息框与 `Primary Utilities` 清晰列表。

---

## 4. Arrow 概率数据统一与 0.07% 清理

### 4.1 核心数据依据
- 早期数据中出现的 `0.07%` 系旧版将总概率除以 7 个替身后的单替身估算数值，容易误导玩家。
- 根据官方 Trello 及当前正式游戏机制，**Mysterious Arrow 的 Pinnacle 档位基础总概率为 ~0.50%**。
- **Lucky Arrow**: 1.50%（排除 Common/Rare，提升 3x）。
- **Bizarre Arrow**: 4.40%（排除 Rare/Epic，高阶掉落）。
- **Focus Arrow**: ~5.00%（针对特定 Part 的精准召唤）。

### 4.2 清理与修正覆盖文件
1. `src/data/items.ts`: line 14（Mysterious Arrow 用途说明修正为 `Rare through Pinnacle: ~0.50% tier chance`）。
2. `src/data/stands.ts`: Star Platinum, The World, King Crimson 的 `obtainMethod` 与 `faqs` 全部更新为 `~0.50% tier chance` 与 Focus `~5.0%`。
3. `src/data/guides.ts`: line 52（首发替身攻略）与 lines 478-492（幸运箭对比表格及倍率更新为 3x）。
4. `src/pages/trello.astro`: line 125（箭矢概率对比表格修正为 0.50%）。
- 经全量搜索脚本 `scripts/find-007.mjs` 验证，全项目 `0.07%` **残留数量为 0**。

---

## 5. Item 价格与交易价值表述规范

- **杜绝绝对化错误**: 部分剧情遗物及高级材料在游戏内无法直接向系统 NPC 售卖，旧版直接写为 `$20,000` 会让玩家误以为存在官方回收商店。
- **规范表述**:
  - 系统明码标价物品: 标注具体 Dalas（如 `$500 Dalas`、`$1,200 Dalas`）。
  - 玩家交易与材料估价: 标注 `Est. Value: $X Dalas`（预估市价/制作成本）。
  - 剧情任务绑定道具: 标注 `Story Quest Item`（如 Blue Diamond、Lava Rock）。
  - 个人身份凭证: 标注 `Personal Document`（如 Civilian ID Card）。

---

## 6. 地名校正：O'ahu / Honolulu 全面取代 Morioh

### 6.1 背景背景核验
- **STAND OUT** 以荒木飞吕彦《JOJOLands》（第九部）夏威夷欧胡岛（O'ahu / Honolulu）为大背景，主要 NPC 为梅丽尔·梅·琦（Meryl Mei Qi）、乔迪奥（Jodio）等。
- 杜王町（Morioh，第四部日本小镇）为旧版模板残留错误文本。

### 6.2 修正涉及的 13 处关键位置
1. `src/data/guides.ts`:
   - 初始出生点: `Morioh central plaza` -> `Central Honolulu Plaza`
   - 美容改造: `Aya Tsuji in Morioh` -> `cosmetic boutique in downtown Honolulu`
   - 波纹试炼: `Mountain Monastery outside Morioh` -> `Highland Training Retreat on the O'ahu ridgeline`
   - 世界 Boss: `across Morioh` -> `across O'ahu`
   - 主线章节: `Morioh Streets to Downtown` -> `Honolulu Streets to Downtown`
2. `src/data/items.ts`:
   - 木材来源: `Morioh timber` -> `island timber`
   - 宝石走私: `smuggled into Morioh` -> `smuggled into Honolulu`
   - 市政 ID: `Morioh Municipal Authority` -> `Honolulu Municipal Authority`
   - 海滩探测: `Morioh beaches` -> `Waikiki and Honolulu beaches`
   - 跑酷工具: `downtown Morioh` -> `downtown Honolulu`
3. `src/data/quests.ts`:
   - 任务地点: `Central Morioh Plaza` -> `Central Honolulu Plaza`
   - 地下管网: `Morioh Sewer System` -> `Downtown Drainage Network`
   - 天文台: `Morioh Astronomical Observatory` -> `O'ahu Summit Observatory`
   - 选票收集: `Morioh districts` -> `Honolulu districts`
- 运行 `scripts/find-morioh.mjs` 验证，全项目 `Morioh` **残留数量为 0**。

---

## 7. Rokakaka 变异果实完整核对（35 种勘误为 33 种正本）

### 7.1 真实数据澄清
- 官方 Trello 列表 `Rokaka Mutations`（Card List ID `6acaafc460f87ef3d4b2713b`）共 35 张卡片。
- 卡片 1 为说明简介（Intro），卡片 2 为分类间隔符（Separator）。
- 尾部卡片 34 与 35 为补丁日期标题与温室成长规则（`All Rokakakas grow 3x faster...`）。
- **实际真正可食用、可种植的变异果实恰好为 33 种**。旧版代码机械抓取将温室规则误作为第 34、35 种果实。

### 7.2 33 种正本果实全量对照
1. Amethyst Roka
2. Amber Roka
3. Blood Roka
4. Cobalt Roka
5. Copper Roka
6. Coral Roka
7. Crimson Roka
8. Crystal Roka
9. Dark Roka
10. Diamond Roka
11. Emerald Roka
12. Gold Roka
13. Jade Roka
14. Lapis Roka
15. Light Roka
16. Magma Roka
17. Moon Roka
18. Mystic Roka
19. Obsidian Roka
20. Onyx Roka
21. Opal Roka
22. Pearl Roka
23. Peridot Roka
24. Platinum Roka
25. Prism Roka
26. Quartz Roka
27. Rainbow Roka
28. Ruby Roka
29. Sapphire Roka
30. Silver Roka
31. Sun Roka
32. Topaz Roka
33. Void Roka

全站页面文本（`rokakaka.astro`、`trello.astro`、`gardening.astro`、`RokaMixer.tsx`、`SearchModal.tsx` 等）已将果实数量统一修正为 **33 种**。

---

## 8. Opal Roka 机制与描述纠正

- **原错误描述**: `affects , , ,`（数据抓取缺失导致的逗号截断）。
- **核实官方 Trello 真实机制**:
  - **影响替身**: `The World` ⇄ `The World: Alternative Universe (TWAU)` 以及 `Star Platinum` ⇄ `Star Platinum: The World (SPTW)`。
  - **等价交换概率**:
    - **10%** 几率发生形态进化/分支对调（Evolve / Swap）。
    - **10%** 几率直接失去替身（Stand Loss 等价惩罚）。
    - **80%** 几率维持原状不变。
  - **石化惩罚**: 永久石化一条肢体（-15% 移动速度或跳跃力），需前往医院消除。
- 修正后的代码已写入 `src/data/rokakaka.ts`，并在 `RokaMixer.tsx` 与各攻略页中完整展示。

---

## 9. 三大交互式工具功能与锚点验收

1. **Arrow Probability Calculator (`ArrowCalculator.tsx`)**:
   - 算法: 采用伯努利离散概率分布模型，支持设定目标抽数，精确计算出货累积概率。
   - 挂载点与锚点:
     - `/stand-rarity/#calculator`（已配置 `scroll-mt-24`）
     - `/guides/lucky-arrows/#calculator`
     - `/guides/bizarre-arrows/#calculator`
     - `/guides/arrow-rates-explained/#calculator`
2. **Character Build Maker (`BuildMaker.tsx`)**:
   - 规则与上限: 50 级封顶，每级 3 点，合计 150 技能点（Health / Damage / Ability）。
   - URL 参数联动: 完整支持 `?stand=star-platinum&h=50&d=55&a=45` 自动回填。
   - 挂载点与锚点:
     - `/guides/level-up-fast/#build-maker`（已配置 `scroll-mt-24`）
     - 43 个替身独立页面下方的 “Open in Build Maker Tool →” 均精准直达。
3. **Rokakaka Mutation Mixer (`RokaMixer.tsx`)**:
   - 功能: 完整支持 33 种变异果实按属性、石化负面惩罚、等价交换效果的动态检索与配方筛选。
   - 挂载点与锚点:
     - `/rokakaka/#mixer`（已配置 `scroll-mt-24`）

---

## 10. 全站 #hash 锚点与站内跳转完整性审计

对全站 88 个静态 HTML 页面中所有包含 `#` 的内部跳转链接进行了全量自动化核验：
- `src/pages/items.astro`: `#arrow`, `#consumable`, `#material`, `#story`, `#stand-chip` 均具备对应区块 ID 与 `scroll-mt-24`。
- `src/pages/quests.astro`: `#all`, `#storyline`, `#sub-ability`, `#bounty`, `#side-quest` 均已建立语义化分组容器与跳转锚点。
- `src/pages/guides/[slug].astro`: 18 篇攻略的 `tableOfContents` 锚点与正文 `section.id` 100% 对应无一遗漏。
- `src/pages/stand-rarity.astro`: `#calculator` 正常渲染且对齐。
- `src/pages/rokakaka.astro`: `#mixer` 正常渲染且对齐。
- **全站失效锚点数量**: **0**。

---

## 11. 跨设备响应式布局与样式审计

1. **Tailwind CSS 构建优化**:
   - 在 `package.json` 的 `build:css` 中编译压缩 `public/styles/global.css`，并在生产构建流程中固化。
   - 解决此前在部分开发或预览环境下可能出现的裸 HTML 样式缺失问题。
2. **移动端适配 (<640px)**:
   - 导航栏折叠菜单响应平滑，关闭按钮无遮挡。
   - 礼包码长字符串设置 `break-all`，复制按钮单手可及。
   - Item 卡片图片高度 `h-28` 紧凑合理，不再产生巨大空白。
3. **平板与宽屏适配 (768px - 1440px)**:
   - Items 与 Quests 采用 `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` 弹性网格。
   - 粘性分类导航条（Sticky Bar）添加 `backdrop-blur-sm` 与 `bg-[#FFFDF3]/95`，滚动浏览体验顺滑。

---

## 12. 构建、测试与生产部署状态

- **静态类型与诊断测试 (`npx astro check`)**:
  - 检查文件: 170 files
  - Errors: **0**
  - Warnings: **0**
- **生产全量构建 (`npm run build`)**:
  - 产出页面数: **88 HTML pages**
  - 构建耗时: 8.55s
  - 静态资源: 自动生成 `sitemap-index.xml` 并镜像为 `dist/sitemap.xml`，自动复制 `public/_headers` 到 `dist/_headers`。
- **本地内容与资产安全校验 (`npm run verify:content`)**:
  - 43 个 Stand 格式全部校验通过。
  - 零竞品域名污染。
  - 11 项品牌核心图标及 WebManifest 完整无缺失。

---

## 13. 三重 noindex 搜索引擎防护机制验证

本站已构筑坚不可摧的 `noindex` 三重安全防线，严格杜绝在站长确认前被搜索引擎收录：

1. **HTML 页面源码 Meta 标签**:
   - `dist/` 下全部 88 个 HTML 页面的 `<head>` 中统一强制输出：
     ```html
     <meta name="robots" content="noindex, follow" />
     ```
2. **Cloudflare Pages HTTP 响应头**:
   - `public/_headers` 预设并在构建后输出至 `dist/_headers`：
     ```http
     /*
       X-Robots-Tag: noindex, follow
       X-Content-Type-Options: nosniff
       X-Frame-Options: SAMEORIGIN
       Referrer-Policy: strict-origin-when-cross-origin
     ```
3. **pages.dev 客户端防御**:
   - `src/layouts/Layout.astro` 中注入了针对 `*.pages.dev` 的内联脚本兜底，防止通过二级域名意外泄漏。
4. **爬虫通行许可**:
   - `public/robots.txt` 保持 `User-agent: * \n Allow: /`，确保 Googlebot 和 Bingbot 能够正常抓取 HTML 并在第一时间读取到 `noindex` 指令，而不是因 `Disallow` 导致 URL-only 索引。
5. **绝不主动提交**:
   - 严格未向 Google Search Console 或 Bing Webmaster 提交 sitemap。
   - IndexNow 增量通知保持静默未触发。

---

## 14. 开放搜索收录前最终核查清单与操作建议

当站长对线上效果审查满意、确认可正式对外开放收录时，请按照以下标准化步骤解锁：

### 阶段一：解除 noindex 封锁（仅需 2 处修改）
1. **环境变量开关**:
   - 在 Cloudflare Pages 项目设置的 Environment Variables 中添加：
     ```env
     SITE_INDEXABLE=true
     ```
   - 或者在本地 `src/data/site.ts` 中直接将 `indexable` 改为 `true`。
2. **移除 HTTP 响应头 noindex**:
   - 在 `public/_headers` 中将 `X-Robots-Tag: noindex, follow` 删除或更新为允许索引。
3. **重新构建并部署**:
   - 触发 Cloudflare Pages 构建，验证生产页面输出 `<meta name="robots" content="index, follow" />`。

### 阶段二：向官方搜索引擎提交
1. **提交 Sitemap**:
   - 在已验证的 Google Search Console Domain Property 中提交: `https://standoutwiki.org/sitemap.xml`
   - 在 Bing Webmaster Tools 中提交: `https://standoutwiki.org/sitemap.xml`
2. **主动推送 (IndexNow)**:
   - 运行站内 IndexNow 推送脚本，向 Bing / Yandex 一次性广播 88 个已构建 URL。

### 阶段三：收录监控
- 观察 GSC 中的“网页索引编制”报表，确认无未编入索引的异常错误。
- 监控 GA4（`G-P9Q9F4LS71`）与 Microsoft Clarity（`zee7d2kwl5`）的数据流。

---
*Stand Out Wiki 最终上线前全站深度修复与验收完毕。*
