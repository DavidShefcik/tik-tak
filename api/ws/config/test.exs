import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :ws, WsWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "rL3KoMDObYhJenQH0b4JUlRmJr+2ggxz6sfHBJDt/Vmaj3iq/dA6l3/8D4lbm1hW",
  server: false

# In test we don't send emails.
config :ws, Ws.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
