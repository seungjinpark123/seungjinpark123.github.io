---
title: Github Page 이미지 삽입하기
layout: post
post-image: /assets/images/github.JPG
description: Jekyll is a static site generator. You give it text written in your favorite
  markup language and it uses layouts to create a static website.
tags:
- jekyll
- informative
- technology
---

## 1. 업로드를 위한  .jpg / .png / .gif 파일 준비
업로드 하고 싶은 파일을 내 pc에 저장한다.

<img width="50%" src="https://user-images.githubusercontent.com/82863114/118420594-3445c900-b6fa-11eb-8120-0c2fce413cc9.gif"/>

> 냥냥한 고양이 짤을 퍼왔다. 

## 2. Github 레포지토리(Repository)의 Issue 발행
다른 방법을 사용하여 파일을 업로드 할 수도 있겠지만 깃허브 블로그가 제공하는 **Issue**를 활용하는 편이 가장 간단해 보인다.
- Issues 탭 클릭
- new Issue 클릭 (녹색 버튼)
- 이슈 발행화면에 적당한 Title을 입력하고 내용 입력화면(write) 부분에 파일을 drag & drop
※ 내용 입력화면이 바로 보이지 않을때에는 화면 하단의 Open a blank issue 클릭하면 된다.


## 3. Github 레포지토리(Repository)의 Issue의 이미지 주소 가져오기

발행된 **Issue**를 이미지 주소로 접근하여 활용한다. 발행된 이슈의 이미지 주소를 확인하려면 해당 이슈를 클릭하고 파일을 우클릭, **이미지 주소 복사**하면 된다.  

이슈화면의 우측에 있는 ... 탭을 클릭하면 보이는 (copy link)는 이미지의 주소가 아닌 깃허브 주소이므로 주소를 잘 보고 사용한다. 

해당 이슈 깃허브 주소 :
 https://github.com/Seungpphire/Seungpphire.github.io/issues/1#issue-892812178

해당 이슈 이미지 주소 :
https://user-images.githubusercontent.com/82863114/118420594-3445c900-b6fa-11eb-8120-0c2fce413cc9.gif


## 4. 블로그에 적용
- 업로드한 파일의 주소를 복사하여 마크다운 형식으로 .md에 삽입
```
<img width="80%" src="https://user-images.githubusercontent.com/82863114/118420594-3445c900-b6fa-11eb-8120-0c2fce413cc9.gif"/>
```
그럼 오늘포스팅은 여기까지!
