# 主題 - 標題

## 內文索引
  - [概述](#概述)
    - [任務要求](#任務要求)
    - [螢幕截圖](#螢幕截圖)
    - [作品連結](#作品連結)
  - [過程](#過程)
    - [所用工具](#所用工具)
    - [學習到的是...](#學習到的是...)
    - [可以優化的地方](#可以優化的地方)
    - [參考資源](#參考資源)
  - [作者](#作者)
  - [感謝](#感謝)

## 概述

### 任務要求

使用者可以：

-  到這個網頁看到chatTalker內容
-  可以使用螢幕右下角的"TOP"按鈕回到最上面
-  可以滑動最下方的「好評如潮」，並且可以看到會調整的滾動區域，但目前還無法點擊到所想看的好評

### 螢幕截圖

![desktop-1366px](src/asset/screenshot/homepage%20-%20desktop%20-%201366px%20-%20chatTalker.png)
![mobile-iphoneSE-375px](src/asset/screenshot/homepage%20-%20iphoneSE%20-%20375px%20-%20chatTalker.png)

### 作品連結

- [GitHub](https://github.com/Beginneraboutlife116/Layout-mission-two-chatTalker)
- [Live Site URL](https://beginneraboutlife116.github.io/Layout-mission-two-chatTalker/)

## 過程

### 所用工具

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass

### 學習到的是...

- 這次算比較大量的使用sass，有思考很多命名以及架構的東西，希望CSS的樣式可以更具可利用性。
- 這次也比較大量使用BEM的概念去設計，從中其實改過很多次className去迎合不同狀況。
- 也特地設計了類似Tailwind的那種命名方式，將一些普遍常用到的做成utility來使用。
- 另外也實作用grid、overflow、scroll-snap、scroll-snap-align等方式去實踐Swipper等套件可以做到事情，當然套件還是比較好用😂

### 可以優化的地方

1. 有找到這一個[假的api](https://randomuser.me/api/)，想做到fetch，讓一開始375px可以有四個使用者好評的資料，並且做到Insert。
2. 也希望可以在window有resize的時候可以做到下方好評區域可以有從四個好評到四組共十二個的好評顯示
3. scroll-bar還可以再多實作：「當使用者點擊到不同的scroll bar的點上的時候，帶到相對應的好評呈現」

### 參考資源

- [Building a media scroller component](https://web.dev/building-a-media-scroller-component/) - 蠻詳細的說明一個scrollbar該怎麼實作
- [Create a horizontal media scroller with CSS](https://www.youtube.com/watch?v=3yfswsnD2sw) - 影片的實作

## 感謝

感謝web.dev的[Adam Argyle](https://web.dev/authors/adamargyle/)以及Kevin Powell的影片讓我有機會學到自做一個scroll bar的練習。
也感謝六角學院本次的課程內容以及作業的練習，讓我有實作的機會！😄