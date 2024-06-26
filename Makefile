DC=docker-compose
DC_EXEC=$(DC) exec
FRONTEND=$(DC_EXEC) t3-gallery
NPM=$(FRONTEND) npm run

start:
	$(DC) up -d

stop:
	$(DC) stop

ssh:
	$(FRONTEND) sh

install:
	$(FRONTEND) npm install

dev:
	$(NPM) dev

db-push:
	$(NPM) db:push

db-studio:
	$(NPM) db:studio

start-dev:
	$(DC) up -d && $(NPM) dev

build:
	$(NPM) build