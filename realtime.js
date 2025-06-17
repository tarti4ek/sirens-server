const WebSocket = require('ws');

const ws = new WebSocket('wss://alerts.pikudhaoref.org.il/websocket');

ws.on('open', () => {
  console.log('✅ Подключено к Pikud Haoref websocket!');
  ws.send('CONNECT\naccept-version:1.1,1.0\nheart-beat:10000,10000\n\n\0');
  ws.send('SUBSCRIBE\nid:sub-0\ndestination:/topic/alerts\n\n\0');
});

ws.on('message', (data) => {
  console.log("🔔 Новая тревога:");
  console.log(data.toString());
});

ws.on('error', (error) => {
  console.error("❌ Ошибка соединения:", error);
});

ws.on('close', () => {
  console.log("❌ Соединение закрыто");
});
