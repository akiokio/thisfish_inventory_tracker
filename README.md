# thisfish_inventory_tracker

Author: Guilherme Akio Sakae

[Github repository](https://github.com/akiokio/thisfish_inventory_tracker)

### Requirements
- Docker
- Docker compose

### Instructions
Clone this repo:
```
git clone https://github.com/akiokio/thisfish_inventory_tracker
```
Move to the new directory:
```
cd thisfish_inventory_tracker
```
Build the local images
```
docker-compose build
```
Run the migrations (if necessary):
```
docker-compose run web python manage.py migrate
```
Create the superuser (if necessary):
```
 docker-compose run web python manage.py createsuperuser --username=admin --email=admin@admin.com
```
Install frontend dependencies (if necessary):
```
docker-compose run web npm i
```
Run the services
```
docker-compose up
```
Visit:
http://localhost:3000

OBS:
If you don't see the UI straight away webpack might be compiling the javascript files, wait until you see something like this on your console:
```javascript
web_1  | Hash: 376746c6f1511fe9b290
web_1  | Version: webpack 4.35.0
web_1  | Time: 15138ms
web_1  | Built at: 06/24/2019 8:06:33 AM
web_1  |                 Asset      Size       Chunks             Chunk Names
web_1  |         app.bundle.js   145 KiB          app  [emitted]  app
web_1  | vendors~app.bundle.js  9.54 MiB  vendors~app  [emitted]  vendors~app
web_1  | Entrypoint app = vendors~app.bundle.js app.bundle.js
web_1  | [./frontend/src/helpers/cookie.js] 517 bytes {app} [built]
web_1  | [./frontend/src/index.js] 35 bytes {app} [built]
web_1  | [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {vendors~app} [built]
web_1  |     + 1297 hidden modules
```

### Urls:
- Main UI: http://localhost:8000
- Admin: http://localhost:8000/admin/
- API: http://localhost:8000/api/

### Tests
Sample files covered:
- frontend/src/components/Dashboard/Dashboard.test.js
- frontend/src/components/ProductForm/ProductForm.test.js