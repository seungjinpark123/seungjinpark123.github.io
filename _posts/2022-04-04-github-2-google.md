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

## 1. 검색엔진 등록 위한 SITEMAP 
구글, 네이버, 다음과 같은 검색엔진을 통해 내가 작성한 블로그, 웹페이지의 키워드를 검색하고 방문할 수 있도록 만들어 보자. 이 작업을 통해 검색엔진에서 크롤러를 통해 나의 웹사이트를 검색할 수 있도록 한다는 점에서 넓은 의미의 __검색 엔진 최적화(SEO, Search Engine Optimization)__ 라고 할 수 있다. 

> **sitemap이란?** 

The Sitemaps protocol allows a webmaster to inform search engines about URLs on a website that are available for crawling. A Sitemap is an XML file that lists the URLs for a site. It allows webmasters to include additional information about each URL: when it was last updated, how often it changes, and how important it is in relation to other URLs of the site. This allows search engines to crawl the site more efficiently and to find URLs that may be isolated from the rest of the site's content. The Sitemaps protocol is a URL inclusion protocol and complements robots.txt, a URL exclusion protocol.

요약하자면 다음과 같다. 
구글과 같은 검색엔진(search engine)은 사용자가 어떤 검색하기 전에 '웹 크롤러'라는 기능을 통하여 수 천 억 개에 달하는 웹페이지에서 정보를 모아 이를 정리한다. '웹 크롤러'의 프로세스를 보면, 봇이 맨 처음 실행하는 작업은 바로 웹 주소 목록과 웹사이트 소유자가 제공한 **sitemap**에 접근하는 것이다. 즉 sitemap은 웹사이트 소유자가 웹사이트의 각 구성요소를 체계적으로 구조화한 지도이다. 

크롤러는 소유자가 제공한 sitemap을 이용하며 웹페이지를 크롤링하고, 검색엔진 시스템에서는 브라우저와 마찬가지로 해당 페이지의 콘텐츠를 렌더링한다. 이때 키워드 및 웹사이트 최신정보에 이르는 주요 신호를 기록하며 검색 색인에서 모든 주요 신호를 추적한다. 

크롤러는 사이트맵을 통해 웹페이지를 누락없이 크롤링한 후 색인하여 우리가 구글 검색창에 입력한 키워드를 보다 정확히 모든 웹페이지를 탐색하며 구성요소를 보여주게 된다. 

## 2. SITEMAP.xml 생성

나의 깃허브 블로그 디렉토리에 'sitemap.xml' 파일을 생성한다. 
이 파일 내에는 페이지들의 목록들이 담겨있게 될 것이고, 해당 내용은 내가 수동으로 작성하지 않아도 간단히 확인할 수 있다. 내 블로그 url 주소뒤에 /sitemap.xml 을 입력하면 아래와 같이 사이트맵이 나타난다.

 ```
This XML file does not appear to have any style information associated with it. The document tree is shown below.

 <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://seungpphire.github.io/%EC%B2%AB%EB%B2%88%EC%A7%B8%ED%8F%AC%EC%8A%A4%ED%8A%B8/</loc>
<lastmod>2021-05-17T00:00:00+00:00</lastmod>
</url>
<url>
<loc>https://seungpphire.github.io/%EB%91%90%EB%B2%88%EC%A7%B8%ED%8F%AC%EC%8A%A4%ED%8A%B8/</loc>
<lastmod>2021-05-17T00:00:00+00:00</lastmod>
</url>
<url>
<loc>https://seungpphire.github.io/%EC%84%B8%EB%B2%88%EC%A7%B8%ED%8F%AC%EC%8A%A4%ED%8A%B8/</loc>
<lastmod>2021-05-17T00:00:00+00:00</lastmod>
</url>
<url>
<loc>https://seungpphire.github.io/</loc>
</url>
</urlset>
 ```
## 3. SITEMAP.xml 구글, 네이버, 다음에 제출 
각각 검색엔진마다 **웹마스터 도구** , 혹은 그와 비슷한 기능을 담당하는 곳이 존재하고, 그곳에 내 사이트맵을 제출하면 된다.  
-  [구글 서치콘솔](https://search.google.com/search-console?hl=ko, "https://search.google.com/search-console?hl=ko")
- [네이버 웹마스터](https://search.google.com/search-console?hl=ko, "https://search.google.com/search-console?hl=ko")
- [다음 사이트등록](https://search.google.com/search-console?hl=ko, "https://search.google.com/search-console?hl=ko")

구글 웹마스터를 예로 들어보면 아래와 같다.

**1. 구글 웹마스터 Google Search Console에서 [DNS](https://namu.wiki/w/DNS) 혹은 url 소유권 확인**
 구글서치콘솔에서 소유권 확인은 크게 두 가지 방법이 있다. 도메인을 등록하여 소유권을 증명하는 방식, 그리고 URL을 입력하여 소유권을 증명하는 방식이다. 필자는 별도의 도메인을 구매하지 않고 깃헙페이지가 제공해준 github.io 도메인을 그대로 사용할 것이므로 후자를 선택했다. 

 **2. HTML 문서를 이용한 증명**
 구글서치콘솔은 웹소유자의 URL을 이용하여 해당 구글계정이 정말 해당 웹사이트의 소유자인지 아닌지를 확인한다. 소유권 확인과정을 아래와 같이 요약할 수 있다.

 (1) 고유한 .html 문서 하나를 해당 구글계정에게 제공함
 (2) 해당 구글계정은 웹소유자임을 증명하기 위해 해당 문서를 웹문서에 추가함
 (3) 업로드한 .html이 웹에서 접근 가능하다면 구글서치콘솔은 해당 구글계정을 웹소유자로 인정하고 허용함

 **3. Sitemap을 추가**
 sitemaps > Add a new sitemap
 **sitemap.xml** 입력 후 submit

위 과정을 모두 진행한 뒤에도 웹사이트가 구글링되지 않는 경우가 있다.
그렇다면 사이트맵을 삭제하고 다시 만들어 보는 방법을 추천한다. 
필자의 경우 하루를 기다렸으나 사이트맵은 '가져올 수 없음' 상태 그대로였고, 
하루만 더 기다려 보면서 그동안 네이버와 다음을 등록하기로 했다.

*****

**References**
*  <ref>https://en.wikipedia.org/wiki/Sitemaps</ref>
*  <ref>https://www.google.com/intl/ko/search/howsearchworks/crawling-indexing/</ref>