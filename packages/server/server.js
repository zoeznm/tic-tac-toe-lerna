const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 클라이언트 빌드 정적 파일 제공
app.use(express.static(path.join(__dirname, '../client/build'))); // 경로 수정

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html')); // 경로 수정
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});