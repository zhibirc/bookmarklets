FROM debian:bullseye-slim@sha256:73a0914422727a2c9dd4f5515b660079248561794cbc7a551443562ae0bd4ba0

WORKDIR /app

VOLUME /app/docs

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install curl -y \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install nodejs -y \
    && apt-get install pandoc -y

COPY package*.json ./

RUN npm ci

COPY . ./

CMD npm run build:src \
    && pandoc --from=markdown \
            --to=html \
            --self-contained \
            --css=assets/main.css \
            --metadata pagetitle="Bookmarklets" \
            --output=tmp/index.html \
            tmp/tmp.md \
    && sed -i -e 's/<!--//g' tmp/index.html \
    && sed -i -e 's/-->//g' tmp/index.html \
    && mv tmp/index.html /app/docs \
    && rm -rf tmp
