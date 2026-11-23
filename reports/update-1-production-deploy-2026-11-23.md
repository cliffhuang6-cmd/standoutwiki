# Stand Out Wiki — Update 1 大版本同步与生产部署报告

**发布日期**：2026 年 11 月 23 日  
**官方基准**：Roblox STAND OUT (Studio Umbra: Europa) Update 1 (2026-11-22)  
**生产环境**：`https://standoutwiki.org/`  
**GitHub 仓库**：`cliffhuang6-cmd/standoutwiki`  
**部署平台**：Cloudflare Pages (`standoutwiki`)

---

## 一、更新内容概述

本轮为 **Update 1 增量版本同步**，在保留原有 Level 75 / 225 属性点系统、Kiss 及 Heaven's Door Prime 记录的基础上，全面补齐 2026 年 11 月 22 日 Studio Umbra 发布的 Update 1 正式版本内容：

1. **6 个新增 Stand 数据库与独立详情页**：
   - Crazy Diamond (Pinnacle)
   - The Hand (Mythical)
   - Bad Company (Mythical)
   - The Lock (Legendary)
   - Cheap Trick (Epic)
   - Dolly Dagger (Exclusive, Ranked 1850 ELO)
   - 全站 Stand 数量从 45 个统一提升至 **51 个**。
2. **2 个全新深度攻略**：
   - `/guides/ranked-mode/` (1v1 排位赛机制、Level 60 门槛、ELO 等级表、Dolly Dagger 解锁攻略)
   - `/guides/car-tuning/` (帮派车库升降机、V6/V8/Twin Turbo 引擎、重装甲、自爆装置)
   - 全站 Guides 总数达到 **23 篇**。
3. **战斗与核心系统更新**：
   - `combat-mechanics` 补充 Universal Evasive 全民闪避/受身破连招机制 (X 键, 1 EX Bar, 45s 基础冷却, 10 冲击伤害)。
   - `sub-abilities` 补充 Jonathan Hamon 与 Vampire 的 Pluck 武器独立技能组。
   - `stand-storage` 记录官方向全体玩家免费发放的 +1 Free Stand Slot。
4. **兑换码系统同步**：
   - 最新有效码：`CRAZYDIAMOND`、`200KLIKESMASSIVE`。
   - 已过期退役码：`100KLIKESHUGE`、`50KLIKES`、`THANKYOUHUGERELEASETHANKS`。
5. **UI 与全站导航优化**：
   - 顶部导航 Guides 下拉菜单重构为 560px 现代双列卡片布局，彻底消除挤压截断问题。

---

## 二、代码与质量验证

- `npm run verify:content`：通过，51 个 Stand 校验 0 错误、0 警告。
- `npx astro check`：通过，186 个文件 0 错误、0 警告。
- `npm run build`：通过，106 个静态页面成功构建生成。
- 资源完整性：所有 6 个新 Stand 的 WebP 素材均保存在本地 `public/images/stands/`。

---

## 三、部署记录

- **Git Commit**：包含 6 个 Stand 数据、Patch Notes、2 篇深度攻略、系统页更新及素材文件。
- **目标分支**：`origin/main`。
- **生产验证**：全部新路由均经由线上自动化与无头浏览器验证。
