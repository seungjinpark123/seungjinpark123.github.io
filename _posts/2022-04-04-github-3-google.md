---
title: Github Page 검색엔진 등록하기
layout: post
post-image: /assets/images/github.JPG
description: Jekyll is a static site generator. You give it text written in your favorite
  markup language and it uses layouts to create a static website.
tags:
- jekyll
- informative
- technology
---

## 1. RSS Feed 생성하기
 >**RSS 피드란 무엇인가?**
 
**RSS(Rich Site Summary) Feed**는 블로그 또는 온라인 잡지와 같은 즐겨 찾는 웹 사이트와 **최신 정보를 쉽게 사용할 수 있는 방법**이다. 사이트에서 RSS 피드를 제공하는 경우 **게시물이 올라가면 알림**을 받을 수 있으며 요약 또는 전체 게시물을 읽을 수 있다. 또한 RSS 피드 동기화를 Outlook 구독한 모든 피드와 해당 게시물은 RSS 구독 폴더로 Outlook 전달된다. 

검색엔진 봇은 수억개 블로그를 일일이 다시 방문하지 않더라도 RSS를 통해 업데이트 사항을 확인하고 검색할 수 있게 된다. 

>**RSS 피드 생성 방법**

RSS 피드는 직접 작성하는 방법, 그리고 플러그인을 통한 다운로드 방법 등이 있다. 
sitemap을 다운로드 할 때에도 마찬가지였지만, 필자는 [jekyll]("http://jekyllrb-ko.github.io/")을 사용하므로 jekyll이 제공하는 플러그인을 이용하여 손쉽게 지킬을 확장하여 사용하기로 한다. 

```
gem install jekyll-feed
```

명령창에 위의 명령으로 설치를 진행한 다음, 깃허브 블로그 url 뒤에 /feed.xml를 입력하면
아래와 같은 피드창이 열린다.
```
<feed xmlns="http://www.w3.org/2005/Atom">
...
</feed>
```
## 2. 네이버 웹마스터 도구에 블로그 등록

구글서치콘솔이 구글의 웹마스터 도구라면, 마찬가지로 네이버 또한 [네이버 서치 어드바이저]("https://searchadvisor.naver.com/")라는 웹마스터 도구가 존재하여 우리의 웹사이트를 검색관리할 수 있도록 돕는다. 
블로그를 등록하는 순서는 아래와 같다.

1. 네이버 아이디로 로그인
2. 우측상단 **웹마스터 도구** 버튼 클릭
3. 사이트 등록 화면에 나의 웹사이트 url 입력

네이버 또한 구글과 마찬가지로 웹사이트 소유권을 확인하는데, HTML 파일 업로드 방식과 HTML메타태그 확인방식이 있다. 

필자는 HTML 파일 업로드 방식을 선택했고, 방법은 구글과 동일하게 HTML 파일을 루트디렉터리에 붙여넣은 다음 웹에서 확인되면 인증이 완료되므로 아주 간단하다.
![screenshot1](https://user-images.githubusercontent.com/82863114/119091943-c296b380-ba48-11eb-9902-7d2378183782.png) 
이렇게 웹사이트 주소가 등록이 완료되면 이제 네이버에서 내 블로그가 검색된다. 

## 2. 올바른 RSS가 아닙니다 문제해결

Jekyll을 통해 다운로드 받은 플러그인인 **jekyll-feed**가 아톰으로 작성되어 문제가 생길 수 있다. 따라서 지킬의 플러그인을 이용하는 방법이 아닌 직접 파일 생성해주는 방식을 사용한다. 

- 루트 디렉토리에 파일명 feed.xml으로 새 파일 생성
- [rss 파일]("https://github.com/gmlwjd9405/gmlwjd9405.github.io/blob/master/feed.xml")을 붙여넣음
- push하여 웹사이트 업데이트

이렇게 하면 정상적으로 피드가 등록된 것을 확인할 수 있다. 

하지만 sitemap 또한 등록에 오류가 생겨, 기존에 만들었던 sitemap을 sitemap.xml을 만들어 사이트 url.site.xml로 접근하여 확인된 문서를 붙여넣어 주었다. 

이렇게하면 정상적으로 사이트맵이 등록된 것을 확인할 수 있다. 

*****
**References**

* <ref>https://support.microsoft.com/ko-kr/office/rss-%ED%94%BC%EB%93%9C%EB%9E%80-e8aaebc3-a0a7-40cd-9e10-88f9c1e74b9</ref>
* <ref>https://github.com/gmlwjd9405/gmlwjd9405.github.io/blob/master/feed.xml</ref>