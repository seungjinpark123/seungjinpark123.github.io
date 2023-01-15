---
title: 토이프로젝트 시작하기-출결관리시스템-카카오톡 나에게 메세지 보내기 계속
layout: post
post-image: /assets/images/toy.JPG
description: 카카오 Developer를 이용한 출결알림시스템 개발 토이프로젝트
tags:
- how to
- setup
- theme
---

**현재 Pre-Alpha 단계**
1. 카카오톡 메세지 전송하는 기능확인
2. 윈도우로 가볍게 UI 설계 
3. **버튼클릭이벤트 발생시 카카오톡 메세지 나에게 전송 구현**
4. 위 과정 후 세부 설계기획 및 구현, Alpha 버전 생성

---

### 나에게 메세지 전송하기 구현
Json 파일을 받고 표현하는 방법을 지금까지 알아봤다면 이제 실제로 카카오 API를 이용한 기능구현을 해볼텐데, 이 과정은 아래의 참조 블로그에 잘 정리되어 있으니 그 부분은 생략하도록 하겠다.

아래의 그림과 같이 2개의 윈폼을 만들어 UI까지 설계했다면 나에게 메세지 보내기 기능을 테스트해보자.

![image](https://user-images.githubusercontent.com/82863114/163311496-24632400-397a-4f25-80d8-81870ed0a1d6.png)

로그인버튼을 누르면 새로운 form이 열리는데, 로그인한 뒤 템플릿 메세지나 커스텀 메시지를 보내어 내가 만들어놓은 템플릿과 동일한 모습으로 전달되는지 확인한다. 

![image](https://user-images.githubusercontent.com/82863114/163311707-2a35fa02-8e90-4ad5-8f2b-94c8f4ad8125.png)

### 학생 이름 선택하여 메세지 보내기
현재 구현되어 있는 모습은 고정된 메세지만 클릭하면 보내는 것이다. 하지만 실제 구현하고자 하는 모습은 '이름', '시각', '등/하원' 텍스트가 가변해야 한다. 

![image](https://user-images.githubusercontent.com/82863114/163312827-9a0dcbf6-4711-4480-acba-ecd2ff922bf6.png)

애석하게도 이 텍스트는 윈도우 어플리케이션에서 수정하는 것이 아니라 이미 만들어진 카카오톡 템플릿을 나는 템플릿id 로 가져오는 방식이다.


---
**Reference**
* <ref>https://jaeho0613.tistory.com/168</ref>