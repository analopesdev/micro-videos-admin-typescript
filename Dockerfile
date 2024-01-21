FROM node:20.11.0

USER node

WORKDIR /home/analopes/dev/full-cycle

CMD ["tail", "-f", "/dev/null"]
