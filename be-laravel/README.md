
## usage
1. `git clone https://github.com/yogarypr/ktfsfrtz.git`
2. `cd /ktfsfrtz`
3. `cp .env.example .env`
4. adjust database environment
	```
	DB_HOST=db / 127.0.0.1
	DB_PORT=3306
	DB_DATABASE=laravel
	DB_USERNAME=username
	DB_PASSWORD=verysecurepasswordofc
	```
### with docker
1. `docker compose build`
2. `docker compose up -d`
3. `docker compose exec app composer install`
4. `docker compose exec php artisan key:generate`
5. `docker compose exec php artisan migrate:fresh --seed`

### local environment
1. `composer install`
2. `php artisan key:generate`
3. `php artisan migrate:fresh --seed`
4. `php artisan serve`
