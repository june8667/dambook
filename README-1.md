# React 배포 (Product Build)

## yarn build 배포파일 만들기
```
.
├── build  <- build폴더가 생성되고 그안에 배포파일이 생성됨
└── src
```

- 위 build 폴더를 보통 권한문제를 피하기위해 
 "/var/www/${productName}" 에 copy함

 ## nginx (엔진엑스) 서버 툴을 설치한다.
 - 설치
 - sudo apt install nginx 
 - 설정파일 수정
    ```
    sudo vi /etc/nginx/sites-available/default
    ```

 - 루트파일 설정(/etc/nginx/sites-available/default)
    ```
    root /var/www/${pathToProduct}/;
    ```

 - 로케이션 설정
    ```
    location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ /index.html;
            allow 54.206.67.182;
    }
    ```
 -  설정파일 적용
    ```
    sudo nginx -t
    ```

 -  엔진엑스 실행
    ```
    sudo systemctl restart nginx
    ```

 - 엔진엑스 로그 보기, client접속시 로그를 확인가능
    ```
    sudo tail -f /var/log/nginx/error.log
    ```

## json-server 실행 (reverse proxy)
 -  db파일과 리소스를 적당한 위치에 저장후 다음 명령 실행
    ```
    npx json-server db.json --static ./ --port 4000
    ```


- ${myReactApp}/.env.production 구성
    ```
    REACT_APP_API_URL=http://54.206.67.182/images
    ```

 - db.json 구성
    ```
    {
        "images": [
            { "id": 1, "src": "/images/ysh/ysh-01.jpg", "title": "Image 1" },
            { "id": 2, "src": "/images/ysh/ysh-02.jpg", "title": "Image 2" },
            { "id": 3, "src": "/images/ysh/ysh-03.jpg", "title": "Image 3" },
            { "id": 4, "src": "/images/ysh/ysh-04.jpg", "title": "Image 4" },
            { "id": 5, "src": "/images/ysh/ysh-05.jpg", "title": "Image 5" },
            { "id": 6, "src": "/images/ysh/ysh-06.jpg", "title": "Image 6" },
            { "id": 7, "src": "/images/ysh/ysh-07.jpg", "title": "Image 7" }
        ]
    }
    ```

 - json-server 디렉토리 구성json-server 디렉토리 구성
    ``` 
    .
    ├── db.json
    └── images
        └── ysh
            ├── ysh-01.jpg
            ├── ysh-02.jpg
            ├── ysh-03.jpg
            ├── ysh-04.jpg
            ├── ysh-05.jpg
            ├── ysh-06.jpg
            └── ysh-07.jpg
    ```

 -  엔진엑스 설정 구성 (reverse proxy)
    ```
    sudo vi /etc/nginx/sites-available/default 

    location /images/ {
    proxy_pass http://127.0.0.1:4000/images/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    ```