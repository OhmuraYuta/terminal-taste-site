up:
	@docker compose up -d

down:
	@docker compose down

build:
	@docker compose build

logs:
	@docker compose logs -f -n 1000

exec:
	@docker compose exec next-app bash

restart:
	@docker compose restart
