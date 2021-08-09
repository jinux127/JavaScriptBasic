# JavaScriptBasic



-------------

## script 참조 위치에 따른 효과

-------------------

### 1. head 태그 안에 script 참조

```html
<head>
    <script src='main.js'></script>
</head>
```

- html을 파싱하는 중간에 script 를 다운받아 실행하고 난 후 파싱을 진행 
- 만약 js 파일이 클 경우 사용자가 html 을 늦게 볼수 있음.

### 2.  body 태그 안 마지막 줄 script 참조

```html
<body>
    <!--last line-->
    <script src='main.js'></script>
</body>
```

- 브라우저가 html을 전부 파싱하고 js 를 다운받고 실행함
- 만약 웹 사이트가 js에 의존적이라면 사용자가 정상적인 페이지를 보기까지 시간이 걸릴 수 있음

### 3.  head 태그에 async 옵션 사용

```html
<head>
    <script async src='main.js'></script>
</head>
```

- 브라우저가 html을 전부 파싱하면서 병렬로(비동기) 다운받고 다운이 완료되면 파싱을 멈추고 js를 실행한다. 그 후에 다시 파싱 시작.
- 만약 js 파일에서 돔요소를 조작한다면 원하는 요소가 정의되지않았다면 위험할 수 있음.
- js 파일이 여러개일 경우 다운로드가 먼저 된 js를 실행, 정의된 순서는 상관없이 실행됨

### 4.  head 태그안에 defer 옵션 사용

```html
<head>
    <script defer src='main.js'></script>
</head>
```

- 브라우저가 html을 전부 파싱하면서 병렬로(비동기) 다운받고 파싱이 끝난후에 js를 실행
- js파일이 여러개일 경우 정의한 순서대로 js를 실행함.

-----------------------

## 변수 

---------------





