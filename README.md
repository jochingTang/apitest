# 匯率轉換 API

這個專案是一個提供匯率轉換的 API，使用 Node.js 開發。

## 如何執行

1. 安裝相依套件：

npm install


2. 啟動應用程式：

npm start

應用程式將在 http://localhost:3000 上運行。

## 如何使用 API

使用瀏覽器或 API 測試工具發送 GET 請求到以下端點：

GET /convert?source=USD&target=JPY&amount=$1,525


範例輸出：

```json
{
  "msg": "success",
  "amount": "$170,496.53"
}

單元測試
這個專案包含單元測試，您可以運行以下指令來執行測試：

npx jest

匯率資料
匯率資料存放在 currencies.json 檔案中，以下是範例資料：
{
  "currencies": {
    "TWD": {
      "TWD": 1,
      "JPY": 3.669,
      "USD": 0.03281
    },
    // ...其他幣別
  }
}
請自行確保 currencies.json 檔案存在並包含正確的匯率資料。