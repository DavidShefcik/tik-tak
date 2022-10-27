FROM elixir:1.14

WORKDIR /api/ws

RUN mix local.hex --force

EXPOSE 4000

CMD ["mix", "phx.server"]