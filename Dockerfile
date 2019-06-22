FROM nikolaik/python-nodejs:latest

ENV PYTHONUNBUFFERED 1

RUN mkdir /src
WORKDIR /src

COPY requirements.txt /src/
RUN pip install -r requirements.txt

COPY package.json /src
COPY package-lock.json /src
RUN npm install

COPY . /src/
