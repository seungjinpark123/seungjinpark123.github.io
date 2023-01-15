---
title: 토이프로젝트 시작하기-출결관리시스템-카카오톡 나에게 메세지 보내기
layout: post
post-image: /assets/images/toy.JPG
description: 카카오 Developer를 이용한 출결알림시스템 개발 토이프로젝트
tags:
- how to
- setup
- theme
---

**현재 Pre-Alpha 단계**
1. **카카오톡 메세지 전송하는 기능확인**
2. 윈도우로 가볍게 UI 설계 
3. 버튼클릭이벤트 발생시 카카오톡 메세지 나에게 전송 구현
4. 위 과정 후 세부 설계기획 및 구현, Alpha 버전 생성

---
### 카카오톡 메세지 전송하는 기능확인
Visual Studio를 이용해 아주 빨리 윈폼을 만들어 테스트를 해보도록 하자.
kakao Developers 문서를 보면 '나에게 보내기'의 경우 별도의 권한 없이도 손쉽게 API를 사용할 수 있지만 '친구에게 보내기'의 경우 플랫폼등록, 로그인 활성화, 동의항목이 사전설정되어야 하고 사용권한이 있어야 한다는 점에서 조금 복잡하다. 
사업자를 등록하기에 앞서 먼저 나에게 보내기를 실행해보자.


### 카카오톡 메세지 나에게 보내기
준비물 : API key, 사용자 token
사전지식 : REST API, 메세지 템플릿, 메세지 종류 등등의 내용을 카카오 디벨로퍼 문서를 통해 습득<br>
[kakao developers message 바로가기]("https://developers.kakao.com/product/message")

![image](https://user-images.githubusercontent.com/82863114/162155970-3845e767-adc1-41c2-9bc6-d7181150ccc8.png)<br>

잠깐 API를 짚고 넘어가자면 아래와 같다.
카카오가 제공하는 API를 통해 클라이언트 개발자들은 손쉽게 기능을 구현할 수 있다. 카카오 API 문서를 보면 카카오 서버 개발자가 만들어 놓은 서버 API가 어떻게 약속되어 있는지 확인할 수 있고, 클라이언트는 그 약속에 따라 구현하는 식이다. 이 때 그림에서 보이는 바와 같이 카카오가 제공하는 API호출은 **인증코드**발급, **토큰**발급, 그리고 **API 호출 및 응답**의 순서로 이루어진다. 따라서 우리가 해야할 일은 어떤 기능을 구현하고 싶은지를 결정하고 그 다음은 카카오가 제공하는 API 문서를 성실하게 따라가는 것이다. 

카카오톡 메시지 API서버가 제공하는 기능은 아래와 같다.

* 기본 템플릿으로 메시지 보내기: 기본적으로 제공되는 메시지 템플릿(피드, 리스트, 위치, 커머스, 텍스트 템플릿)을 이용하여 메시지를 전송합니다.
* 사용자 정의 템플릿으로 메시지 보내기: 메시지 템플릿 도구를 사용해 만든 사용자 정의 템플릿을 이용하여 메시지를 전송합니다.
* 기본 템플릿으로 스크랩 메시지 보내기: 기본 템플릿을 이용하여 웹 페이지의 Open Graph 정보를 바탕으로 스크랩 메시지를 구성하여 전송합니다.
* 사용자 정의 템플릿으로 스크랩 메시지 보내기: 사용자 정의 템플릿을 이용하여 웹 페이지의 Open Graph 정보를 바탕으로 스크랩 메시지를 구성하여 전송합니다.

학원의 출결시스템으로 사용할 것이므로 아래의 템플릿을 예시로 만들어 보았다.

>[솔음악학원 등하원 알림]
2022-04-07 오후 15:00 **민이슬** 학생이 등원하였습니다.<br>
[솔음악학원 등하원 알림]
2022-04-07 오후 14:00 **민이슬**  학생이 하원하였습니다.<br>
[솔음악학원 등하원 알림]
2022-04-07 오후 14:30 **이다솔**  학생이 등원하였습니다.<br>
[솔음악학원 등하원 알림]
2022-04-07 오후 15:40  **이다솔** 학생이 하원하였습니다.

위의 형식처럼 내가 원하는 템플릿을 정의하고자 할 때에는 '사용자 정의 템플릿으로 메시지 보내기'의 기능을 사용하면 될 것 같다. 

카카오 디벨로퍼에서 어플리케이션을 하나 추가해놓는다.

![image](https://user-images.githubusercontent.com/82863114/162343349-c5d77e5d-d38d-4f2f-ad73-edcd1a4f7886.png)

Owner 버튼을 누르면 앱키가 생성된 것을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/82863114/162343483-0645ff4b-d92a-4883-94ff-23941e5edcc9.png)

이제 API 문서를 차례로 읽어보자.

![image](https://user-images.githubusercontent.com/82863114/162344408-43d65071-2a13-4dca-90a2-94b2a13fd766.png)

카카오톡 메시지를 구현하는 방법은 2가지가 있는데 나는 '카카오톡 메시지 API'를 사용하겠다. 이유는 REST API를 지원하기 때문.

![image](https://user-images.githubusercontent.com/82863114/162344205-db24c2b7-9389-465f-a5e2-3efebca561ed.png)

카카오톡 메시지를 카카오톡 친구에게 보내는 과정은 아래와 같다.
1. 친구 목록 가져오기 API로 카카오톡 친구 정보를 받아 서비스 UI로 보여주고, 메시지를 보낼 친구 선택하게 하기
2. 메시지 템플릿을 참고하여 보낼 메시지 내용 구성하기
3. 구성한 메시지의 타입과 전송 대상에 맞는 카카오톡 메시지 보내기 API 호출하기

이 때 나에게 보내기는 1번 생략. 

개발은 총 세 가지 플랫폼을 이용할 수 있다.<br>
Android / iOS / Web
일단 Web으로 등록해보자. 구글로.

![image](https://user-images.githubusercontent.com/82863114/162347019-14a80965-b4c0-40e7-b41e-f323c87a1638.png)

다음은 카카오 로그인 화면에 들어가서 Redirect URI를 설정해준다.
local:3000으로 등록.

![image](https://user-images.githubusercontent.com/82863114/162346953-d6489989-8283-4f46-a25e-79f8baa256c2.png)

접근권한은 이용중 동의로 변경

![image](https://user-images.githubusercontent.com/82863114/162360951-b3916b8e-980f-4011-85cf-892d4e7be8b0.png)

여기까지 완료했다면 이제 드디어 인증코드>토큰>API 호출을 시작해보자.

---
**Reference**
* <ref>https://developers.kakao.com/product/message</ref>
* <ref>https://blog.naver.com/PostView.naver?blogId=hyoun1202&logNo=222607931357&parentCategoryNo=1&categoryNo=&viewDate=&isShowPopularPosts=true&from=search</ref>