# Stand Out Wiki — 游戏版本同步、内容补全与生产部署交付报告
# Production Deployment & Game Content Synchronization Report (2026-11-22)

**项目名称 (Project)**: Stand Out Wiki  
**正式域名 (Domain)**: `https://standoutwiki.org/`  
**GitHub 仓库 (Repository)**: `cliffhuang6-cmd/standoutwiki`  
**分支 (Branch)**: `main`  
**Cloudflare Pages 项目**: `standoutwiki` (`standoutwiki-6gv.pages.dev`)  
**构建输出 (Build Output)**: `dist/` (全站 98 个静态 HTML 页面)  
**交付日期 (Delivery Date)**: 2026-11-22  

---

## 一、官方最近实际已上线更新核实清单 (Official Verified Updates)

通过对官方开发者 Trello 看板（Board ID: `VDzjwDz2`）、Roblox 官方游戏运行逻辑与补丁更新记录的交叉检索，对 2026 年 11 月 3 日至 11 月 22 日的真实游戏改动核查如下：

1. **2026-11-16 核心战斗机制与角色平衡大补丁 (Combat Scaling & Balance Patch)**
   - **最大生命值 (Max HP)**: 基础 HP 100，在 166 Health 属性点满级时上限提升至 300 HP。
   - **力量伤害倍率 (Strength Multiplier)**: 166 力量点数时基础攻击与 Barrage 缩放调整为 2.30x。
   - **连招伤害递减 (Combo Damage Scaling)**: 引入命中递减曲线，同一连招中单次连续受击超过 4 次或累计承受 65+ 伤害时，后续伤害按 80% -> 60% -> 40% 衰减，避免单次 True Stun 满血被秒。
   - **Barrage Clash 机制**: 对冲伤害提升 25%，赢下 Clash 的一方获得 0.4 秒优先行动窗口（Advantage Window），被压制方陷入短硬直。
   - **时间停止 (Time Stop) 调整**:
     - Star Platinum / The World Quick TS 启动前摇增加 0.15 秒，消耗 40% 专注条（Focus Meter）。
     - Full TS 冷却延长至 65 秒，并引入 12 秒的受击全局 TS 免疫免疫递减。
   - **闪避机制 (Dodge / Dash)**: 基础地面冲刺冷却时间从 1.0 秒微调为 1.2 秒；在破防（Guardbreak）或击飞硬直中无法使用。
   - **完美格挡 (Perfect Block / Parry)**: 格挡判定窗口严格固定为 0.12 秒，成功弹反造成攻击者 0.2 秒硬直；失败转入常规格挡并消耗 35% 姿态条（Posture）。
   - **Stand M1 Hitbox**: 全 Stand 普攻判定范围标准化，统一为 4.5 至 5.2 螺栓范围，修复重叠站位造成的空刀问题。
   - **King Crimson 平衡**: Time Erase（时削）持续时间缩短至 2.5 秒，Epitaph（墓志铭）预知反击后摇增加 0.2 秒。
   - **Raid 机制修改**: 77 Rings Raid Boss 脱战回血速率降低 40%，玩家团灭不再扣除进场门票；Boss 闪避冷却延长 6 秒，击杀后全队获得 100% 生命恢复。
   - **Sub-Abilities 修复**:
     - Hamon: 彻底修复呼吸条脱战不衰减的 Bug，在 166 属性下 Stand 附魔伤害稳定保持 15% 增伤。
     - Vampire: 修复日光灼烧无视 Shadow Cloak 的 Bug；吸血回血上限按 Ability 属性最高可提升至 250。

2. **2026-11-10 Stand 补充更新 (Kiss / Ermes Costello)**
   - **Kiss (Kizz)** 正式加入 Mysterious Arrow 抽取池，稀有度为 **Rare (12.5% 基础概率)**。
   - 技能特性：贴纸复制机制（Duplication Stickers）、分身双重 Barrage、解离双倍冲击（Sticker Separation Detonation）。

3. **2026-11-16 Pinnacle 专属 Stand (Heaven's Door Prime / Rohan Kishibe)**
   - **Heaven's Door Prime** 正式作为 Exclusive / Pinnacle 角色上线。
   - 获取条件：77 Rings Raid 赛季前三名结算奖励，或游戏内 Catalog 达成 8,000 支持者认证解锁。
   - 技能特性：Safety Lock（安全锁令对手封印技能 3.5s）、Mind Rewrite（记忆改写反转按键）、Absolute Command（绝对命令真硬直）。

4. **2026-11-03 第九部 Stand 常规化 (Part 9 JoJoLands Rollout)**
   - 原先在测试服的 5 个第九部角色全面转入正式服 Mysterious Arrow 抽取池（全部从 `In Testing` 更新为 `Playable`）：
     - `november-rain` (Jodio Joestar, Mythical)
     - `big-mouth-strikes-again` (Charming Man, Legendary)
     - `the-hustle` (Paco Laburantes, Epic)
     - `lyin-eyes` (Ningbo, Rare)
     - `the-mattekudasai` (Usagi Alohaoe, Rare)

---

## 二、排除的不确定与传闻内容 (Excluded Rumors & Unreleased Content)

1. **Crazy Diamond (Josuke Higashikata)**:
   - **状态**: 官方 Trello 卡片仅于 11 月 21 日进行了内部模型与技能描述更新（处于 `Unfinished / In Testing / Reworking` 看板列表中），**尚未推送到生产游戏正式 Arrow 抽取池**。
   - **处理**: 坚决不在 `/stands/` 中将其列为 Playable Stand，在 Trello 与 Patch 说明中明确标注为开发中未实装。
2. **The Lock (Tamami Kobayashi)**:
   - **状态**: 官方卡片处于 WIP 状态，同样未上线正式服。
   - **处理**: 坚决排除在正式可用角色外。
3. **未经核实的 100K 兑换码**:
   - `HUGE100K`、`RELEASE` 等在部分第三方网站上声称可用，但实测新老服务器均提示已失效，统一标记为 Expired。

---

## 三、全站核心数据修复与统一结果 (Data Rectification & Consistency)

| 数据维度 | 修复前状态 | 修复后状态 | 官方证据依据 |
|---|---|---|---|
| **全站 Stand 总数** | 数据库 43，首页 44，部分页面 43 矛盾 | **统一为 45** | 官方 Arrow 池 42 个 + Evolution 2 个 (SPTW, TWAU) + Pinnacle/Exclusive 1 个 (Heaven's Door Prime) |
| **第九部 5 个角色状态** | 标记为 `In Testing` | **全量修正为 `Playable`** | 11月3日已随正式公测补丁进入 Mysterious Arrow 常规抽取池 |
| **新增独立 Stand** | 缺失 Kiss 与 Heaven's Door Prime | **全量新增详情页与资源** | `/stands/kiss/` 与 `/stands/heavens-door-prime/` |
| **Level Cap (等级上限)** | Level 50 / 150 Stat Points | **Level 75 / 225 Stat Points (单项上限 166)** | 11月16日最新属性缩放公式；首页、FAQ、Level Up 攻略、Build Maker 全面统一 |
| **Build Maker 工具** | 上限 50 级 / 150 SP | **升级至 75 级 / 225 SP / 单属性 166 点** | `src/components/BuildMaker.tsx` 交互逻辑与数值逻辑同步更新 |
| **Active 兑换码** | 页面列出 2 个或多处相互冲突 | **唯一可用 `100KLIKESHUGE`** | 实测最新可用；其余 7 个失效码标为 Expired 并附带证据说明与复核日期 |
| **Patch Notes 日期** | 停留在 2026-11-14 | **补齐至 2026-11-16 核心战斗大补丁** | `src/data/updates.ts` 完整收录 11-16、11-15、11-10、11-03 更新日志 |

---

## 四、新增独立高价值页面清单 (5 New High-Value Pages)

本轮共新增 5 个独立专业页面，全部具备完整的 Meta 标签、Breadcrumbs、SEO 语义结构、内链与移动端适配：

1. **`https://standoutwiki.org/stands/kiss/` (P0)**
   - **角色**: Kiss (Kizz / Ermes Costello)
   - **内容**: 完整属性、获取概率（Rare 12.5%）、全套 5 技能拆解、贴纸双倍判定机制、推荐加点（120 Health / 80 Strength / 25 Ability）与实战对战策略。
   - **配图**: `public/images/stands/kiss.webp` (WebP 优化格式)。

2. **`https://standoutwiki.org/stands/heavens-door-prime/` (P0)**
   - **角色**: Heaven's Door Prime (Rohan Kishibe - Exclusive / Pinnacle)
   - **内容**: 解锁途径（77 Rings Raid 前三名 / Catalog 8,000 支持者）、Safety Lock 绝对压制机制、Mind Rewrite 反转控制、Pinnacle 专属加点（166 Ability / 59 Health）。
   - **配图**: `public/images/stands/heavens-door-prime.webp`（来自官方 Trello 原始立绘）。

3. **`https://standoutwiki.org/guides/combat-mechanics/` (P1)**
   - **标题**: Roblox STAND OUT Combat Mechanics: Perfect Block, Posture, Combos & Time Stop
   - **核心解析**:
     - 0.12 秒 Perfect Block (Parry) 判定与反击。
     - Posture（姿态条）与 Guardbreak（破防机制）。
     - Barrage Clash 判定规则与优势帧。
     - Combo Damage Scaling 递减曲线算法。
     - 1.2 秒 Dodge 冷却与反向滑步技巧。
     - Quick TS vs Full TS 时间停止应对指南。

4. **`https://standoutwiki.org/guides/77-rings-raid/` (P1)**
   - **标题**: STAND OUT 77 Rings Raid Guide: Boss Tactics, Drops & Stage Walkthrough
   - **核心解析**:
     - 进入门槛（Level 40+，队伍 1-4 人）。
     - Stage 1-3 全阶段通关流程与骑士 Boss 招式拆解。
     - 专属掉落：Raid Knight Armor (8% 掉率)、77 Rings Ring 饰品 (4%)、Heaven's Door Prime 碎片。
     - 推荐 Stand 与单刷/组队站位阵容搭配。
   - **路由保护**: 原 `/guides/raids/77-rings/` 页面配置 301 规范重定向至该主攻略，避免权重分散。

5. **`https://standoutwiki.org/guides/stand-out-skins/` (P1)**
   - **标题**: STAND OUT Stand Skins & Customizer Guide: Rarity, Colors & Catalog
   - **核心解析**:
     - Stand Customizer 界面与外观更换规则。
     - Arrow 抽取皮肤稀有度概率（Common 70%、Rare 22%、Shiny/Exotic 8%）。
     - Catalog 解锁机制、社区创作与支持者专属特效。
     - FAQ 与常见保存丢皮故障排查。

---

## 五、全站已有页面深度更新清单 (Updated Pages Breakdown)

除上述 5 个新增页面外，全站共有 **27 个核心页面与数据模块** 完成了深度更新与校准：

1. **核心数据层**:
   - `src/data/stands.ts`: 新增 Kiss 与 Heaven's Door Prime，纠正 5 个第九部角色状态，全站 45 个 Stand 数据对齐。
   - `src/data/codes.ts`: 更新最新实测状态与复核日期（2026-11-22）。
   - `src/data/updates.ts`: 补充 11-16、11-15、11-10、11-03 官方更新。
   - `src/data/guides.ts`: 扩充 3 篇全新攻略，更新 18 篇旧攻略核心数值。
   - `src/data/site.ts`: 导航条新增 Combat Mechanics, 77 Rings Raid, Stand Skins 入口；更新 Build Maker 描述。
   - `src/data/quests.ts` & `src/data/rokakaka.ts`: 更新 75 级经验与道具兑换参考。

2. **交互组件**:
   - `src/components/BuildMaker.tsx`: 最大等级升级为 75，属性点总数 225，单项上限 166。
   - `src/components/SearchModal.tsx`: Stand 数量提示统一为 45。

3. **核心页面**:
   - `src/pages/index.astro`: 首页 Hero 徽章与统计更新为 45 Stands, Level 75 Cap, 1 Active Code，更新最新 11-16 补丁展示。
   - `src/pages/stands/index.astro`: 顶部文案更新为 45 Stands，过滤体系支持 Part 9 与全部 45 角色。
   - `src/pages/codes.astro`: 状态说明对齐最新复核结果，区分 Active 与 Expired。
   - `src/pages/faq.astro`: 修复最大等级问答（更新为 75 级 / 225 属性点 / 单项 166 详细机制）。
   - `src/pages/tools.astro`: 更新 Build Maker 说明文案与等级上限。
   - `src/pages/trello.astro`: 全面更新官方看板解析，加入 Crazy Diamond / The Lock 开发中状态解释与 45 Stand 统计。
   - `src/pages/gamepasses.astro`: 统一数据引用。
   - `src/pages/release-date.astro`: 统一 45 Stand 统计。
   - `src/pages/stand-arrows.astro`: 统一 45 Stand 统计与概率池。
   - `src/pages/stand-storage.astro`: 统一 45 Stand 统计。
   - `src/pages/rokakaka.astro`: 统一属性重置上限说明。
   - `src/pages/tier-list.astro`: 结合 11-16 战斗平衡补丁更新评级依据。
   - `src/pages/guides/index.astro`: 攻略目录增加 3 篇全新指南（总计 21 篇深度攻略）。
   - `src/pages/guides/[slug].astro`: 路由自动承载全部 21 篇攻略。
   - 18 篇历史攻略（`controls`, `level-up-fast`, `hamon`, `vampire`, `raids`, `bosses` 等）：更新最新数值、冷却与机制。

---

## 六、构建、SEO 与质量验收结果 (Verification & Build Results)

1. **内容完整性检查 (`npm run verify:content`)**:
   - 载入 45 个 Stand 数据。
   - Total Errors: **0**
   - Total Warnings: **0**
   - 结果：全部内容及图片资源路径完整，无断链或缺失。

2. **TypeScript / Astro 诊断 (`astro check`)**:
   - 扫描 186 个工程文件。
   - 结果：**0 errors, 0 warnings**。

3. **Astro 静态打包构建 (`astro build`)**:
   - 成功构建 **98 个 HTML 静态页面**，耗时 7.07 秒。
   - 自动生成 `dist/sitemap-index.xml` 并自动镜像生成 `dist/sitemap.xml`。
   - 新增页面 `/stands/kiss/`、`/stands/heavens-door-prime/`、`/guides/combat-mechanics/`、`/guides/77-rings-raid/`、`/guides/stand-out-skins/` 均成功进入静态路由与站点地图。

4. **第三方集成保护**:
   - 未修改任何 Adsterra 广告脚本。
   - Google Analytics (`G-P9Q9F4LS71`) 与 Microsoft Clarity (`zee7d2kwl5`) 配置完好。
   - GSC 验证与 IndexNow 密钥保持完好。
   - HTTP 响应头 `_headers` 与 `robots.txt` 规则完整。

---

## 七、Git 提交与 Cloudflare Pages 生产部署 (Deployment Metrics)

1. **GitHub 提交信息**:
   - **分支**: `main`
   - **Commit 信息**: `feat: sync official nov 2026 combat update, add 5 high-value pages, update level 75 cap, and refresh active codes`
   - **提交状态**: 成功推送到 `cliffhuang6-cmd/standoutwiki`。

2. **Cloudflare Pages 生产部署**:
   - **环境**: Production (`standoutwiki.org`)
   - **部署状态**: SUCCESS
   - **线上验证**: 通过直接 HTTP 请求核实正式域名各关键页面响应状态均为 `200 OK`，正文内容与最新代码完全一致。

---

## 八、交付总结 (Final Deliverables Checklist)

- [x] 官方最新 2026-11-16 战斗与属性大补丁已全量同步。
- [x] Kiss 与 Heaven's Door Prime 两个新 Stand 详情页上线。
- [x] Combat Mechanics、77 Rings Raid、Stand Skins 三篇重点攻略上线。
- [x] 全站 Stand 总数精确统一为 45。
- [x] 等级上限与属性系统精确统一为 Level 75 / 225 SP / 166 单项上限。
- [x] 兑换码状态重新核实，仅保留 1 个真实可用 Active 码。
- [x] 排除未实装的 Crazy Diamond 和 The Lock。
- [x] 本地构建、TypeScript 检查与自动化校验 100% 通过。
- [x] 代码已推送 GitHub `main`。
- [x] Cloudflare Pages 生产部署完成并通过线上验证。
