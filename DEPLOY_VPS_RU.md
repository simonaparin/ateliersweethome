# Деплой Atelier Sweet Home на VPS

Короткая схема:

1. Сайт собирается локально.
2. Папка сборки загружается на VPS в `/var/www/atelier-sweet-home`.
3. Сайт запускается системным сервисом.
4. Nginx принимает запросы с домена и передает их сайту.
5. DNS домена направляется на IP сервера.

## DNS у регистратора

Для домена без `www`:

```text
Type: A
Name: @
Value: 89.167.16.6
```

Для `www`:

```text
Type: CNAME
Name: www
Value: ateliersweethome.ge
```

Если регистратор не принимает `@`, поле `Name` обычно оставляют пустым или пишут сам домен. Это зависит от панели регистратора.

## Что нужно на VPS

- Ubuntu/Debian;
- Node.js 20 или новее;
- nginx;
- systemd;
- доступ по SSH.

## Важные файлы

- `deploy/atelier-sweet-home.service` - шаблон системного сервиса;
- `deploy/nginx-ateliersweethome.conf` - шаблон nginx;
- `.env.local` - секреты формы и Telegram-бота, в публичный git не класть.

## После запуска

Проверить:

- открывается ли `http://ateliersweethome.ge`;
- открывается ли `http://www.ateliersweethome.ge`;
- отправляется ли форма в Telegram;
- нет ли ошибки 502;
- после DNS и nginx подключить SSL-сертификат Let's Encrypt.
