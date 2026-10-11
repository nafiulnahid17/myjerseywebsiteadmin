# Cloudflare admin deployment

This folder is the isolated Cloudflare deployment root. It contains the built
static admin app and a small Worker that serves it, so Cloudflare does not need
to install the full pnpm monorepo just to publish the prototype.

From the repository root, run `pnpm run build:admin-cloudflare` before pushing
admin UI changes. This builds the app at `/` and copies the result into
`cloudflare-admin/public`; Cloudflare then validates and deploys that bundle
when `main` changes.

The admin UI is still a sample-only prototype. It has no login, Supabase
connection, or live records.
