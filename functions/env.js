// Cloudflare Pages Function — /env
// Serves environment variables to the client-side PWA.
// The Anthropic key is intentionally exposed here because the app calls
// the Claude API directly from the browser (anthropic-dangerous-direct-browser-access).
export async function onRequest(context) {
  return new Response(JSON.stringify({
    claudeKey: context.env.ANTHROPIC_API_KEY || '',
    sbUrl:     context.env.SUPABASE_URL      || '',
    sbKey:     context.env.SUPABASE_ANON_KEY || '',
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
