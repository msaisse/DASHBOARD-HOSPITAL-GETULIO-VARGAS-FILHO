#Este Dockerfile define o ambiente de execução do front-end do sistema,
#baseado em Node.js, instalando dependências do dashboard e 
#garantindo uma execução reprodutível e isolada da interface web.

FROM node:22.16.0

WORKDIR /app


COPY ./package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH
