# Meridian — Vercel + GoDaddy DNS Setup

## Step 1: Deploy to Vercel (already done)
The project is deployed. You have a preview URL like `meridian-landing-xxxx.vercel.app`.

## Step 2: Add Custom Domain in Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click the **meridian-landing** project
3. Go to **Settings → Domains**
4. Type `meridianventura.com` and click **Add**
5. Vercel will show you DNS records to configure

## Step 3: Configure GoDaddy DNS
1. Log into [GoDaddy](https://dcc.godaddy.com/)
2. Find `meridianventura.com` → **DNS Management**
3. Delete any existing A records pointing to parking/default IPs
4. Add these records:

| Type  | Name | Value              | TTL    |
|-------|------|--------------------|--------|
| A     | @    | 76.76.21.21        | 600    |
| CNAME | www  | cname.vercel-dns.com | 600  |

5. Save changes

## Step 4: Verify in Vercel
1. Go back to Vercel → Settings → Domains
2. Wait 1–10 minutes for DNS propagation
3. Vercel will show a green checkmark when verified
4. HTTPS is automatically provisioned

## Step 5: Test
- Visit `https://meridianventura.com` — should load your site
- Visit `https://www.meridianventura.com` — should redirect to apex domain
- Test on mobile

## Troubleshooting
- **DNS not propagating**: Wait up to 48 hours (usually 5–30 minutes)
- **SSL certificate error**: Vercel auto-provisions Let's Encrypt. Wait 10 minutes.
- **Still showing GoDaddy parking page**: Clear browser cache or try incognito
