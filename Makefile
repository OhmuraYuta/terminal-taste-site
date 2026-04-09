up:
	@docker compose up -d

down:
	@docker compose down

build:
	@docker compose build

log:
	@docker compose logs -f -n 1000
