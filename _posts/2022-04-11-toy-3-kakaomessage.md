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
2. **윈도우로 가볍게 UI 설계**
3. 버튼클릭이벤트 발생시 카카오톡 메세지 나에게 전송 구현
4. 위 과정 후 세부 설계기획 및 구현, Alpha 버전 생성

---

### 인증코드 요청 및 발급하기
인증코드는 REST API key를 이용해 요청할 수 있다. 크롬에서 '새 시크릿'창을 열고 진행하도록 하자.

![image](https://user-images.githubusercontent.com/82863114/162362424-e3e60529-01b7-42e9-ab24-bf017068c99b.png)


동의하고 계속하기를 클릭하면 아래와 같이 사이트에 연결하면 인증코드를 포함한 url을 확인할 수 있다. 

![image](https://user-images.githubusercontent.com/82863114/162363310-9eec8971-9b7b-4d46-bd2c-49b6ac8770bb.png)

code= 인증코드

이렇게 발급된 인증코드를 이용해 access_token을 받을 수 있다.


### access_token 발급하기

이제부터는 Visual Studio를 켜서 간단한 UI를 디자인해보자. 
Winform Project를 하나 생성하기.

![image](https://user-images.githubusercontent.com/82863114/162365818-d6982c59-d033-4bd4-b15e-abe6cd35f27a.png)

C#에서 API를 호출하기 위해서는 아래의 코드를 작성한다.

보통 Python이나 JAVA를 사용해 호출하지만 난 C#을 이용하겠다.

C#에서 JSON 객체를 사용하기 위해서는 패키지를 설치해줘야 한다. 아래 글에 잘 쓰여있으니 참고.
[C# JSON 사용하기](https://kibbomi.tistory.com/189)

Nuget 다운로드가 완료됐으면 이제 UI를 구성하고 기능을 구현해보자.

![image](https://user-images.githubusercontent.com/82863114/162655133-9ba5c3e1-8614-430a-95ca-e7f65617d56f.png)

위 사진처럼 json을 생성하고 json을 쓰고 json을 읽는 버튼을 만든다음 기능을 구현해볼 것이다.

전체구성은 아래의 구조이다.
```
InitEvent()
CreatJson()
WriteJson()
ReadJson() //제이슨 파일 쓰기 
InputJson() //제이슨 내용 입력
button_read_json_Click() //클릭이벤트 ReadJson 함수 호출
button_write_json_Click() //클릭이벤트 ReadJson 함수 호출
button_creat_json_Click() //클릭이벤트 ReadJson 함수 호출
```
지정된 경로에 Json 파일을 하나 넣어둔 뒤 read 하면 아래와 같이 읽어들인다. 

![image](https://user-images.githubusercontent.com/82863114/162665096-0f307271-c2fe-4272-96c4-b1439016aac9.png)

아래 전체 코드를 참고하자. 
```
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Web.Script.Serialization;
using System.Windows.Forms;

namespace sol_program
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            InitEvent();
        }

        private void InitEvent()
        {
            button_creat_json.Click += button_creat_json_Click;
            button_write_json.Click += button_write_json_Click;
            button_read_json.Click += button_read_json_Click;
        }

        /// <summary>
        /// Json Read 버튼 클릭 이벤트 핸들러
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button_read_json_Click(object sender, EventArgs e)
        {
            button_text.Clear();
            ReadJson();
        }

        /// <summary>
        /// Json Write 버튼 클릭 이벤트 핸들러
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button_write_json_Click(object sender, EventArgs e)
        {
            button_text.Clear();
            WrtieJson();
        }

        /// <summary>
        /// Json Create 버튼 클릭 이벤트 핸들러
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void button_creat_json_Click(object sender, EventArgs e)
        {
            CreateJson();
        }

        /// <summary>
        /// Json 파일 생성 메서드
        /// </summary>
        private void CreateJson()
        {
            string path = @"C:\Users\DSM-N\test.json";

            if (!File.Exists(path))
            {
                using (File.Create(path))
                {
                    MessageBox.Show("파일 생성 성공");
                }
            }
            else
            {
                MessageBox.Show("이미 파일이 존재 합니다.");
            }
        }


        /// <summary>
        /// Json 내용 입력
        /// </summary>
        private void InputJson(string path)
        {
            //사용자 정보 배열로 선언
            var users = new[] { "USER1", "USER2", "USER3", "USER4" };

            JObject dbSpec = new JObject(
                new JProperty("IP", "127.0.0.1"),
                new JProperty("ID", "PARK PROMOTION"),
                new JProperty("PW", "201904001"),
                new JProperty("SID", "TEST"),
                new JProperty("DATABASE", "TEST")
                );

            //Jarray 로 추가
            dbSpec.Add("USERS", JArray.FromObject(users));

            File.WriteAllText(path, dbSpec.ToString());

            //텍스트 박스에 출력
            button_text.Text = dbSpec.ToString();
        }

        private void WrtieJson()
        {
            string path = @"C:\Users\DSM-N\test.json";

            //json 파일이 존재 한다면
            if (File.Exists(path))
            {
                InputJson(path);
            }
        }
        /// <summary>
        /// Json 파일 내용 추출 및 읽어오는 메서드
        /// </summary>
        private void ReadJson()
        {
            string jsonFilePath = @"C:\Users\DSM-N\test.json";
            string str = string.Empty;
            string users = string.Empty;

            using (StreamReader file = File.OpenText(jsonFilePath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JObject json = (JObject)JToken.ReadFrom(reader);
                DataBase _db = new DataBase();

                _db.IP = (string)json["IP"].ToString();
                _db.ID = (string)json["ID"].ToString();
                _db.PW = (string)json["PW"].ToString();
                _db.SID = (string)json["SID"].ToString();
                _db.DATABASE = (string)json["DATABASE"].ToString();

                var user = json.SelectToken("USERS");
                var cnt = user.Count();

                for (int idx = 0; idx < user.Count(); idx++)
                {
                    var name = user[idx].ToString();

                    if (idx == 0)
                    {
                        users += $"{name}";
                    }
                    else
                    {
                        users += $" , {name}";
                    }
                }
                str = $" IP : {_db.IP}\n ID : {_db.ID}\n PW : {_db.PW}\n SID :" +
                    $" {_db.SID}\n DATABASE : {_db.DATABASE}\n USERS : {users}";
                button_text.Text = str;
            }
        }
    }

    public class DataBase
    {
        public string IP = string.Empty;
        public string ID = string.Empty;
        public string PW = string.Empty;
        public string SID = string.Empty;
        public string DATABASE = string.Empty;
    }
}

```
여기까지 Json을 읽어들이고 표현해봤다면 이제는 카카오 API를 이용해보도록 하자.


---
**Reference**
* <ref>https://developers.kakao.com/product/message</ref>
* <ref>https://blog.naver.com/PostView.naver?blogId=hyoun1202&logNo=222607931357&parentCategoryNo=1&categoryNo=&viewDate=&isShowPopularPosts=true&from=search</ref>
* <ref>https://afsdzvcx123.tistory.com/entry/C-%EB%AC%B8%EB%B2%95-C-JSON-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1-%EC%93%B0%EA%B8%B0-%EC%9D%BD%EA%B8%B0</ref>