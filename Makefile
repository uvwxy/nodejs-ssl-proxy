.PHONY: all image
all: image

image: 
	docker build -t uvwxy/nodejs-ssl-proxy .
