# nodejs-ssl-proxy

A Node.js based SSL proxy.

## Running

Add this to your `docker-compose.yml`, and adapt `<SERVICE>` to the service you want to proxy:

```yml
https:
  restart: always
  image: uvwxy/nodejs-ssl-proxy
  environment:
    - SSL_PROXY_TARGET=http://hosttobeproxied:8080
    - SSL_PROXY_PORT=8443
  ports:
    - 443:8443
  links:
    - <SERVICE>:hosttobeproxied
  volumes:
    - ./secrets:/opt/node-js-ssl-proxy/secrets/
```

Make sure your `key.pem` and `cert.pem` files reside in `secrets/`. If you don't have any keys you can run the following to create them.

```bash
bash generate-certs.sh
```

⚠️ Note: Do not use this in production. In that case you will have something better at hand in any case ;).


