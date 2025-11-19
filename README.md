# 음악 스트리밍 사이트, MangoZ
![image](https://github.com/user-attachments/assets/f7af3727-e437-44cd-83ca-ab5a8c432b5c)

<br />

## 📋 프로젝트 개요

**MangoZ(망고즈)** 는 음악 스트리밍, 실시간 채팅 기능을 제공하는 음악 플랫폼입니다. 사용자는 음악을 재생하고, 플레이리스트를 만들고, 다른 사용자와 관심있는 아티스트에 대해 실시간 채팅을 통해 소통할 수 있습니다.

<br />

## ⏱️ 개발 기간

2023.09.01 ~ 2023.09.15

<br />

## 👥 Members (팀원)

|                                    이원노(Leader)                                   |                                    박가현                                    |                                     서채영                                     |                                    이우종                                    |                                    황동하                                     |
| :------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/105614390?v=4" width=150> | <img src="https://avatars.githubusercontent.com/u/138436056?v=4" width=150> | <img src="https://avatars.githubusercontent.com/u/97508297?v=4" width=150> | <img src="https://avatars.githubusercontent.com/u/107784810?v=4" width=150> | <img src="https://avatars.githubusercontent.com/u/121819598?v=4" width=150> |
|                 [@Leewonno](https://github.com/Leewonno)                 |                    [@bliss1454](https://github.com/bliss1454)                    |                 [@chxxyx](https://github.com/chxxyx)                 |             [@RainBell98](https://github.com/RainBell98)             |                    [@hdh9078](https://github.com/hdh9078)                     |

<br />

## ⚡️ 주요 기능

- 음악 스트리밍 기능을 제공합니다.
- 플레이리스트를 생성하고 공유할 수 있으며, 드래그 앤 드롭으로 곡 순서를 변경할 수 있습니다.</ListItem>
- 제목, 아티스트, 앨범, 가사 검색 기능을 제공합니다.
- Socket.io를 활용하여 실시간 아티스트톡(A-Talk) 기능을 구현했습니다.
- JQuery를 사용해 SPA 구조화를 진행했습니다.
- AWS S3를 이용한 이미지 업로드 기능을 제공합니다.
- JWT 기반 인증을 통해 사용자 인증을 지원합니다.

<br />

## ⚙️ 사용 기술

<div style="display: flex; gap: 5px;">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/JQuery-0769AD?style=flat&logo=jquery&logoColor=white" />
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
</div>

<br />

- Node.js : JavaScript 단일 언어로 웹 사이트를 개발하기 위해 사용하였습니다.
- JQuery : 간결한 문법과 풍부한 DOM 조작 기능을 활용하기 위해 사용하였습니다.
- MySQL : 무료로 사용할 수 있는 오픈소스이며, 다양한 운영체제에서 사용 가능하여 사용하였습니다.
- AWS : EC2(Node.js 호스팅), RDS(MySQL 운영), S3(이미지 파일 업로드)를 위해 이용했습니다.

<!-- <div style="display:flex">
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=white" />
</div> -->

<br />

## 📁 프로젝트 구조

```
project2/
├── config/              # 데이터베이스 설정
├── controller/          # 컨트롤러 (비즈니스 로직)
├── database/            # 데이터베이스 관련
│   └── model/           # 데이터 모델
├── middleware/          # 미들웨어
├── router/              # 라우터
├── static/              # 정적 파일
├── utils/               # 유틸리티 함수
└── views/               # EJS 템플릿
```

<br />

## 🏃 설치 및 실행

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/Leewonno/mangoz.git
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env` 파일을 생성하고 다음 변수를 설정하세요:
```
DB_USER=your_db_user
DB_PW=your_db_password
DB_DATABASE=your_database_name
DB_HOST=your_db_host

AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_BUCKET=your_s3_bucket_name

SECRET_JWT=your_jwt_secret
```

4. 서버 실행
```bash
# 개발 환경
npm start
```

<br />

## 🌏 서비스 화면
![image](https://github.com/user-attachments/assets/827422cc-6e0d-44b8-ac48-7b1dda2b40d1)

<!-- ![image](https://github.com/Leewonno/project2/assets/105614390/7c640344-9501-4b73-8f9c-b457c8e6a13d)
![image](https://github.com/Leewonno/project2/assets/105614390/bab034d9-e454-4635-9789-bff7c056a497)
![image](https://github.com/Leewonno/project2/assets/105614390/d6ccfcbe-8cdc-46b4-8582-ec2300813e8f) -->

