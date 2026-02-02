# Egirls Links (MVP)

Public profile + linklist.

## Run locally (Docker Compose)

```bash
docker compose up --build
```

- Web: http://localhost:3000
- Demo profile: http://localhost:3000/@demo (rewritten to /u/demo)

## DB
- Postgres in compose (`egirls_links`)
- Prisma schema: `prisma/schema.prisma`

## Next steps
- Signup/login UI + sessions
- Dashboard to manage links + themes
- Theme styling per user
- Rate limiting + moderation
