const path = require('path');

module.exports = {
  name: 'word-relay-setting', // 설정 이름
  mode: 'development', // 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'] // 파일 확장자 적어두면 알아서 넣어줌 (아래 entry 참조)
  },
  
  entry: {
    app: ['./client'], // client.jsx안에서 wordrelay.jsx를 불러오고 있으므로 client.jsx만 넣어줌
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/, // js파일과 jsx파일들을 룰 적용하겠다는 뜻
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), //dist 폴더 경로 (현재폴더안의 dist)
    filename: 'app.js'
  }, // 출력
};