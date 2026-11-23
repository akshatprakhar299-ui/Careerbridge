# Simulations & External Service Disclosure

This prototype is deliberately self-contained. The following are mocked or represented locally; no live integration is claimed.

| Service / capability | Prototype behaviour | Production integration to consider |
|---|---|---|
| Authentication | Demo sign-in and role switching in browser | Secure backend auth, hashed passwords, session/JWT and RBAC |
| Database | Browser localStorage seed object | PostgreSQL with migrations and backups |
| Resume upload | File picker selects a local file name for the demo | Private object storage, malware scan and access-controlled download |
| Notifications | Local notification array and read/unread state | Email/push provider and server-side notification queue |
| Employer listings | Recruiter/admin CRUD in local browser state | Authenticated REST API and audit log |
| Application submission | Creates local application record | Server-side application transaction, confirmation email and status history |
| Search | In-memory filtering of seeded listings | Indexed database search / search service |
| Organisation verification | Not implemented; demo records are sample data | Admin verification workflow and organisation-domain checks |

No real payment, email, external employer API, calendar, resume storage or identity verification is connected.
