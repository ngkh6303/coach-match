# CoachMatch 教練資料登記｜設計腦暴

## 三個風格方向

### 方向一：Field Notes Club

以獨立運動會所、教練筆記及比賽場地為靈感，採用奶油白、深墨綠及球場橙，營造可信任、專業而有人情味的招募體驗。

**Probability：0.06**

### 方向二：Signal / Motion

以高對比黑白、螢光黃綠及動態標線呈現速度、節奏及運動表現，像一個面向新世代教練的運動人才網絡。

**Probability：0.04**

### 方向三：Soft Court Editorial

以雜誌式留白、溫暖米色、莓紅及精緻字體，把教練資料登記做成有質感的運動生活品牌入口，強調個人故事與專長。

**Probability：0.08**

## 已選方向：Field Notes Club

### Design Movement

當代運動會所（contemporary athletic club）與編輯式品牌設計的融合，參考獨立跑團、網球俱樂部及教練戰術板的視覺語言；不做傳統健身房的黑紅模板，也不做過度科技感的 SaaS 表格。

### Core Principles

1. **先建立信任，再要求填表。** 先說清楚平台為教練帶來什麼，再進入資料收集。
2. **資料像球場上的位置一樣清楚。** 每個欄位都有明確用途，避免讓教練猜測要填什麼。
3. **有節奏的非對稱編排。** 使用左側品牌敘事、右側行動卡及局部標線，避免全頁置中的通用 landing page。
4. **專業但不冷漠。** 以溫暖色溫、紙張質感及克制的動效，讓教練感覺自己是被邀請加入，而不是被審問。

### Color Philosophy

主色使用深墨綠，代表可靠、專業及戶外運動場地；背景使用奶油白，讓長表單閱讀舒適；標誌性球場橙只用於 CTA、編號及狀態提醒，代表行動及比賽開始。輔助色採用霧藍灰，讓資料層次清晰但不會變成冷冰冰的企業介面。

**Signature Brand Color：Court Orange #E76F3C**

### Layout Paradigm

採用「場邊 briefing」結構：頂部是細窄公告條；主視覺以左側縱向品牌敘事配合右側登記行動卡；下方以三個步驟及專長分類帶動教練理解流程；最後才放置 Google Form 嵌入區。桌面版呈現像一張攤開的教練戰術紙，手機版則變成順序清晰的 briefing flow。

### Signature Elements

1. **Field line 標線：** 使用細橙線、短刻度及手寫式編號，像場地界線及戰術板記號。
2. **Coach dossier 卡：** 用小型資料標籤（專長、地區、時段、語言）呈現平台會收集什麼，讓抽象流程變得具體。
3. **紙張與墨水質感：** 以細微 grain、低對比陰影及卡片邊界，建立獨立運動刊物的觸感。

### Interaction Philosophy

互動要像教練與球員溝通：直接、清楚、有反饋。CTA hover 只作輕微向前位移及顏色加深；步驟卡在 hover 時顯示橙色場線；Google Form 入口要讓教練知道自己會離開頁面或進入嵌入表格。所有互動必須保留清晰 focus ring 及手機觸控尺寸。

### Animation

入場時先顯示品牌 eyebrow，再讓標題及行動卡以 30–60ms 間隔滑入，幅度小於 12px。滾動至步驟區時，編號以短促 opacity/translate 動畫出現。CTA 使用 140ms ease-out 的 active scale（0.97）；不使用大型彈跳、旋轉或持續流動背景。尊重 prefers-reduced-motion，減少所有非必要移動。

### Typography System

標題使用 **DM Serif Display**，以帶有編輯感的襯線字體建立記憶點；正文及介面使用 **Manrope**，保持清晰及現代。大標題採用 56–72px，副標題 20–22px，正文 15–17px，標籤及 eyebrow 使用 11–12px、字距增加及全大寫。中文 fallback 使用 Noto Sans TC / PingFang TC，英文標題仍保留 DM Serif Display 的性格。

### Brand Essence

**CoachMatch 是一個為重視專長與時間彈性的教練，連接真實學生需求的運動導師配對入口；它以一次清楚的資料登記，換來更精準的介紹機會。**

Personality：**可靠、敏銳、爽快**。

### Brand Voice

標題要像一位懂運動的人直接講重點；CTA 要清楚說出下一步；microcopy 要友善但不討好，避免「歡迎來到我們的網站」等空泛句子。

例句：

- **「你教得好，讓合適的學生找到你。」**
- **「留下你的專長與可教時間，我們會在有合適需求時聯絡你。」**

### Wordmark & Logo

Logo mark 使用一個由兩條互相靠近的球場邊線組成的抽象「C」形符號，中間留出一條橙色通道，象徵 CoachMatch 將學生需求與教練專長接通。標誌不使用文字，配合 DM Serif Display 的 CoachMatch wordmark；favicon 使用單獨的雙線 C mark，保持在小尺寸仍可辨識。

### Google Form 內容策略

頁面不重複製作另一個表單，而是以 CoachMatch 品牌頁面負責解釋價值、資料用途及流程，Google Form 負責實際收集資料。嵌入區上方清楚標示「第 01 步｜教練資料登記」，並預留 Google Form URL 設定位；未提供 URL 前，顯示可替換的表單入口與說明，不製造虛假提交成功狀態。

### Style Decisions

- 使用深墨綠、奶油白、Court Orange；避免紫色漸變及過度霓虹。
- 使用 DM Serif Display + Manrope；避免 Inter 作為唯一字體。
- 桌面版採左敘事右行動的非對稱結構，手機版維持單欄清晰流程。
- Google Form URL 以單一設定常數管理，方便日後替換真實表單。

## Style Decisions

- CoachMatch 標誌必須讀成雙線抽象 C 形球場符號，並保留清晰的 Court Orange 通道；生成標誌失效時，頁面使用 CSS fallback 維持這個形態。
- 場線細節形成一致的 tactical-paper 系統：橙色刻度、編號、細球場線及 dossier labels 要在 hero、專長卡、表單區及 footer 之間互相呼應。
- 圖像維持溫暖的紀實運動會所攝影及紙張編輯質感，避免黑暗健身房 stock、霓虹表現主義或普通運動卡片風格。
