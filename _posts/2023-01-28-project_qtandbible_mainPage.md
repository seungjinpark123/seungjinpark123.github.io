---
title: 리액트 프로젝트 생성 및 라우터 개발
layout: post
post-image: /assets/images/toy2.png
description: 
tags:
- react
- css
- javascript
- vscode
---

**리액트 프로젝트 생성 및 라우터 개발**

1. 개발 위치 : C:\Users\gbnj0\blog\proj_qtandbible\Client
<br />

```
Microsoft Windows [Version 10.0.16299.1087]
(c) 2017 Microsoft Corporation. All rights reserved.

C:\Users\gbnj0\blog\proj_qtandbible\Client>npx create-react-app qtandbible
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\gbnj0\blog\proj_qtandbible\Client\qtandbible.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
```

CLI로 리액트 프로젝트를 하나 만든다.
npx create-react-app qtandbible 로 만들어진 리액트 프로젝트 앱에 대한 설명은 공식 문서를 참고한다.

> 추천 툴체인
>>React 팀의 추천 방법은 아래와 같습니다
>>>React를 배우고 있거나 아니면 새로운 싱글 페이지 앱을 만들고 싶다면 Create React App.
서버 렌더링 Node.js 웹사이트를 만들고 있다면 Next.js을 시도해보세요..
고정적인 콘텐츠 지향적 웹사이트를 만들고 있다면 Gatsby를 시도해보세요..
컴포넌트 라이브러리 혹은 이미 있는 코드 베이스에 통합을 한다면 더 유연한 툴체인.

이 프로젝트는 client 개발완료 server 개발 예정이며, CSR(Client Side Rendering)으로 진행할 예정이다. SSR(Server Side Rendering)과 SPA(Single Page Application)의 단점을 보완하여 나온 Next.js를 활용하는 것도 좋은 방법이다. 하지만 첫 웹 클라이언트 플젝이니만큼 기본으로 구현해보겠다. 

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

위와같이 리액트 기본 틀이 생성됐다. 
리액트 플젝을 만들고 필요한 서드파티 패키지(모듈)를 붙이기 위해 yarn 혹은 npm가 설치되어 있어야 한다. 나는 npm을 취했으며, npm이 앞으로 이 모듈의 버전을 관리하고 설치하고 업데이트 할 것이다. 리액트 공식문서에서는 Node 14.0.0 혹은 상위 버전 및 npm 5.6 혹은 상위 버전이 필요하다 하여 현재 내 플젝에 적용된 node와 npm 버전을 확인해봤다. 

```
C:\Users\gbnj0\blog\proj_qtandbible\Client\qtandbible>npm -v
8.19.3

C:\Users\gbnj0\blog\proj_qtandbible\Client\qtandbible>node -v
v18.13.0
```

예전에 깃헙페이지를 만든다고 설치해 둔 버전이 위와 같다. 
만약 위의 버전과 다른 버전으로 플젝에 적용/관리하고 싶다면 nvm(npm Version Management)를 이용해 여러 버전을 넘나들면 된다. 

CRA(Create-React-App)를 이용해 이렇게 손쉽게 플젝을 시작할 수 있는데, 이는 굳이 바벨 컴파일러나 모듈관리를 위한 웹펙을 설치하지 않아도 된다는 점에서 진입장벽을 낮추고 개발환경 구축시간을 단축시킨다. 

페이스북 최고! 

2. 라우터 생성<br />
기본중의 기본, 라우터를 생성한다. 

```
C:\Users\gbnj0\blog\proj_qtandbible\Client\qtandbible>npm install react-router-dom
added 3 packages, and audited 1474 packages in 9s
231 packages are looking for funding
  run `npm fund` for details
6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

설치가 완료되면 웹펙에 쏙 들어간다.

```javascript
"packages": {
    "": {
      "name": "qtandbible",
      "version": "0.1.0",
      "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.8.0", // 설치 완료!
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      }
    },
```

라우터를 테스트해볼 샘플 페이지를 몇개 생성해보자.

```javascript
// 홈 페이지
import React from "react";

const Home = ()=>{
    return(
        <div>
            하이루. 홈 페이지입니다.
        </div>
    )
}

export default Home;

// 로그인 페이지
import React from "react";

const Login = ()=>{
    return(
        <div>
            하이루. 로그인 페이지입니다.
        </div>
    )
}

export default Login;
```

다시 App.js로 돌아와 위 두 페이지를 임포트 해준다.
상대경로로 접근해 가져와 보자. 추후에 절대경로 접근가능하도록 개선할 예정이다.
코드 짜면서 느낀점. EsLint, 프리티어도 아직 설정 안되어있어서 매우 불편하니 개선할 예정이다.


```javascript
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} /> //exact는 슬래시 중복 경로와 겹치치 않고 '정확히' "/" 일 때만 동작한단 뜻이다.
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
```

3. 라우터 연결 정의 index.js 별도생성<br />

가독성을 위해 라우터로 연결된 모든 주소는 별도의 파일로 관리하는게 국룰이다. 

```javascript
// Pages 폴더 내 정의된 페이지 목록을 App.js로 한번에 넘김.

// 홈 화면
export { default as Home } from './home/home';

// 시스템 관리자 화면
// export { default as SystemMng } from './system';
// export { default as SystemMng } from './system';
// export { default as SystemMng } from './system';

// 유저 화면 
export { default as Login } from './user-mng/login';
export { default as Edit } from './user-mng/edit';

// qt-mng 화면
export { default as Daily } from './qt-mng/daily';
```

이렇게 생성한 뒤 App.js에서 한번에 받아준다.

```javascript
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Daily, Edit } from './pages'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/daily" element={<Daily />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
```

지금은 라우터를 일단 이렇게 구성하지만, 다음에는 이 과정을 map함수를 이용해 가져올 수 있도록 수정해보겠다. 

4. ESLint, prettier 설정 <br />
답답해서 못쓰겠다. ESLint, 프리티어부터 설정하고 코딩하자. 
ESLint 부터 설치해보자.

```javascript
npm install -D eslint
```

먼저 개발용으로 설치하고 (-d를 포함)
Extension에서 Eslint를 찾아서 설치한다. 

Prettier도 설치해보자.

```javascript
npm install -D prettier
```
Extension에서 prettier를 찾아서 설치한다.
설정에 진입해서 규칙 원하는대로 변경.

![image](https://github.com/seungjinpark123/seungjinpark123.github.io/blob/main/image.png?raw=true)

나는 single quote로만 설정을 변경했다.
이렇게 개발할 준비 완료.



---
**Reference**
* 리액트 시작하기 >> [바로가기](https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app)
* 라우터 설정이 잘 안된다면 >> [바로가기](https://velog.io/@seondal/React-Router-%EC%98%A4%EB%A5%98-6.x.x-%EB%B2%84%EC%A0%84%EC%97%90%EC%84%9C-%EB%B0%94%EB%80%90-%EC%82%AC%EC%9A%A9%EB%B2%95)
* 잘 설명된 프리티어 설정법 >> [바로가기](https://ux.stories.pe.kr/150)