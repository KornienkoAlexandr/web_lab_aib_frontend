##Лабораторная 1 HTTP HTTPS и их параметры 
***

### РГУПС

Скрипт при помощи которого получил информацию о сайте  __[‍РГУПС](https://www.rgups.ru)__: 

`curl rgups.ru -I -v -L -k`

Использовал такие ключи как:

`-I` - Этот ключ указывает отправить только заголовки HTTP-ответа сервера, без тела ответа.  
`-v` - Этот ключ делает подробный вывод информации о запросе.  
`-L` - Этот ключ указывает следовать перенаправлениям при запросе, если сервер возвращает код 301 или 302.  
`-k` - Этот ключ отключает проверку SSL-сертификата.

Что получил в итоге: 

```shell
> HEAD / HTTP/1.1 - Эта строка запроса указывает на тип запроса (HEAD) и версию протокола (HTTP/1.1)
> Host: rgups.ru - Это Host, который указывает на имя сервера.
> User-Agent: curl/8.2.1 - Эта строка запроса указывает на устройсто с которого отправлен запрос
> Accept: */* - Строка указывающая на тип принимаемого контента 
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK - Это статус ответа сервера. Сообщает, что сервер успешно обработал запрос
< Server: nginx/1.19.1 - Строка указывает на серверное ПО и его версию
<Date: Sun, 15 Oct 2023 10:37:04 GMT - Строка содержит дату и время когда был получен ответ от сервера
< Content-Type: text/html; charset=utf-8 - Строка указывает на тип содержимого.
< Connection: keep-alive - Эта строка указывает, что соединение между клиентом и сервером должно быть поддерживаемым
< X-Powered-By: ProcessWire CMS - Строка содержит информацию о ПО, которое используется на сервере
< Set-Cookie: wire=7099441999a2932090f625eb985b9bcc; path=/; HttpOnly; SameSite=Lax - Строка указывает на установку куки (cookie) на стороне клиента. 
Куки представляют собой данные, которые сервер отправляет браузеру, 
и они могут использоваться для отслеживания состояния сессии или других информационных целей.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - Строка указывает на дату и время истечения срока действия ответа.
Дата указана в прошлом, так как ответ не должен кэшироваться
< Cache-Control: no-store, no-cache, must-revalidate - Строка определяет инструкции для кэширования ответа.
В нашем случае указано, что ответ не должен сохраняться в кэше и должен быть проверен перед использованием
< Pragma: no-cache - Строка указывает, что ответ не должен кэшироваться и должен быть всегда запрашиваемым с сервера.
```

### GitHub

Скрипт при помощи которого получил информацию о сайте  __[GitHub](https://github.com/)__:

`curl github.com -I -v -L -k`

И получил такой ответ: 

```shell
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Sun, 15 Oct 2023 11:39:38 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With -  Этот заголовок указывает на факторы, 
которые могут влиять на кэширование ответа на стороне клиента или прокси-сервера. 
< content-language: en-US - Этот заголовок указывает на язык контента, который отправляется в ответе.
< ETag: W/"0dc4a8ee8e52aa862f1803fbac14e16a" - Этот заголовок представляет собой метку, которая идентифицирует уникальную версию ресурса. 
Он используется для управления кэшированием на стороне клиента. 
Если ресурс изменяется, ETag изменяется, и клиент может использовать его для определения, нужно ли ему получить обновленную версию ресурса.
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload -  Этот заголовок относится к безопасности. 
Он указывает, что клиент должен поддерживать строгую защиту транспортного уровня (HTTPS) в течение 31536000 секунд и включать поддомены 
< X-Frame-Options: deny - Это мера безопасности, которая может помочь предотвратить атаки.
< X-Content-Type-Options: nosniff - Этот заголовок предотвращает браузер от интерпретации содержимого как чего-то, отличного от указанного в Content-Type.
< X-XSS-Protection: 0 - Этот заголовок указывает на то, что браузер не должен активировать механизм защиты от межсайтового скриптового выполнения (XSS)
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - Этот заголовок управляет тем, какой информацией о предыдущей странице делится браузер при переходе по ссылке.
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Tue, 15 Oct 2024 11:39:42 GMT; HttpOnly; Secure; SameSite=Lax 
< Accept-Ranges: bytes - Этот заголовок указывает, что сервер поддерживает диапазоны запросов для данного ресурса.
< X-GitHub-Request-Id: 8377:E53C:98B1DFC:9B4DF67:652BCF7E - Этот заголовок содержит идентификатор запроса, который может быть полезен для отслеживания запроса на стороне сервера.
```

### РЖД

Скрипт при помощи которого получил информацию о сайте  __[РЖД](https://www.rzd.ru/)__:

`curl rzd.ru -I -v -L -k`

Получил такой ответ:

```shell
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 210102 -  Этот заголовок указывает на длину (размер) содержимого ответа в байтах (210102 байта).
< Connection: keep-alive
< Date: Sun, 15 Oct 2023 11:47:45 GMT
Content-Type: text/html
Content-Length: 150
Connection: keep-alive
Location: https://rzd.ru:443/

HTTP/1.1 403 Forbidden
Connection: close
Content-Length: 109
Content-Type: text/html
* Closing connection
* schannel: shutting down SSL/TLS connection with rzd.ru port 443

Добавил строку `--User-agent "Yandex"` -  Это строка, которую клиент  отправляет на сервер, чтобы указать серверу, какое программное обеспечение или устройство отправляет запрос.

`curl rzd.ru -I -v -L -k --User-agent "Yandex"`
Из этого вышло:

```shell
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 206340 -  Этот заголовок указывает на длину (размер) содержимого ответа в байтах (206340 байта).
< Connection: keep-alive
< Date: Sun, 15 Oct 2023 11:57:45 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-bc445bf7f-p6k8d - Этот заголовок связан с идентификацией серверного подключения.
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3 - Этот заголовок указывает на прокси-сервер, через который прошел запрос.
< X-Frame-Options: sameorigin
<  Set-Cookie: session-cookie=178e45fde841c77315de932e18991a2496ff4f6d54fda2e813847d7f21adb94c81ca0b556b9121538db88a58b1cf63c2; Max-Age=86400; Path=/; secure

< X-XSS-Protection: 1; mode=block - Этот заголовок говорит браузеру о включенной защите от XSS и указывает ему блокировать скрипты, 
которые могут представлять угрозу безопасности. 
```
### Yandex

Скрипт при помощи которого получил информацию о сайте  __[Яндекс](https://yandex.ru/)__:

`curl yandex.ru -I -v -L -k`

Ответ был такой:

```shell
* Connected to yandex.ru (77.88.55.60) port 80
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=Zpn8NHL3/VuC6cg+H7zwlLBtai7nqCTtfm9OvNLTx8o1uourMvHkGLWszRw3KhWYKtRF; domain=.yandex.ru; path=/; expires=Sun, 15 Oct 2033 12:02:11 GMT; secure
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
X-Yandex-Req-Id: 1697371331054793-14116198282632930123-balancer-l7leveler-kubr-yp-sas-158-BAL - Заголовок представляет собой уникальный идентификатор запроса, который полезен для отслеживания запроса на стороне сервера Yandex или системы, которая обрабатывает запросы.
```

### Python

Скрипт при помощи которого получил информацию о сайте  __[Python](https://www.python.org/)__:

`curl python.org -I -v -L -k`

Получил такой ответ:

```shell
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 49912
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Mon, Sun, 15 Oct 2023 12:11:43 GMT
< Age: 1002 - Этот заголовок указывает на время в секундах, прошедшее с момента кэширования ответа на сервере или прокси.
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230131-FRA - Этот заголовок указывает на серверы и прокси, которые обслуживали запрос.
< X-Cache: HIT, HIT - Этот заголовок указывает, что ответ был получен из кэша как минимум дважды.
< X-Cache-Hits: 1, 1 - Этот заголовок указывает на количество "попаданий" в кэш для данного запроса
< X-Timer: S1697371904.841537,VS0,VE3 - Этот заголовок содержит информацию о времени, затраченном на обработку запроса на сервере.
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Git

Скрипт при помощи которого получил информацию о сайте  __[Git](https://git-scm.com/)__:

`curl git-scm.com -I -v -L -k`

Получил такой ответ: 

```shell
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sun, 15 Oct 2023 12:14:59 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - Этот заголовок указывает, что файлы не должны открываться автоматически после загрузки.
< X-Permitted-Cross-Domain-Policies: none - Этот заголовок указывает, что политики, связанные с кросс-доменными запросами, отсутствуют.
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 64c0ae81-7d55-4798-a03e-5a0924ffcccd
< X-Runtime: 0.022433 - Этот заголовок указывает на время, затраченное на выполнение запроса на стороне сервера
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 9874
< Server: cloudflare
< CF-RAY:  8167fc28bd19005c-DME - Этот заголовок может содержать информацию о запросе и обработке на стороне Cloudflare.
```

### JetBrains

Скрипт при помощи которого получил информацию о сайте  __[JetBrains](https://www.jetbrains.com/)__:

`curl jetbrains.com -I -v -L -k`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47113
< Connection: keep-alive
< Date: Sun, 15 Oct 2023 12:13:46 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Sun, 15 Oct 2023 12:13:46 GMT - Этот заголовок указывает на дату и время истечения срока действия ответа в кэше.
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 d8b0b3928e53502c6ce822abc3cc3d70.cloudfront.net (CloudFront)
< Age: 246
< Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL51-P1 - Этот заголовок содержит информацию о Point of Presence CloudFront, через который прошел запрос.
< X-Amz-Cf-Id: 6XDsVgXriRqjdDjZccSNBJNnkewo5iTaZlDUQthqtdSlt27lAHAw0w== - Этот заголовок может содержать идентификатор запроса и обработки на стороне CloudFront.
```

### VSC

Скрипт при помощи которого получил информацию о сайте  __[VSC](https://code.visualstudio.com/)__:

`curl code.visualstudio.com -I -v -L -k`

Ответ: 

```shell
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Length: 50213
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c4ba-yUmgBbhhyEXPGyIMjsxA2bfcjRc"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' -  Этот заголовок определяет политику безопасности контента и разрешает встраивание ресурсов только с текущего домена.
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 0I9krZQAAAAD7pr2B0x/+R6u0L5tEs+8dU1RPRURHRTE4MjAAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< X-Cache: CONFIG_NOCACHE
< Date: Sun, 15 Oct 2023 12:20:50 GMT