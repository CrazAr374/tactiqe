# Deployment Guide for Tactiqe Website

## Pre-deployment Checklist

### 1. Security Review
- [ ] All environment variables are properly configured
- [ ] No sensitive data in the codebase
- [ ] Security headers are implemented
- [ ] Input validation is working
- [ ] Rate limiting is configured

### 2. Performance Optimization
- [ ] Images are optimized and properly sized
- [ ] Fonts are preloaded
- [ ] Bundle size is optimized
- [ ] Lighthouse score is above 90

### 3. SEO Optimization
- [ ] Meta tags are properly configured
- [ ] Structured data is implemented
- [ ] Sitemap is generated
- [ ] Robots.txt is configured
- [ ] Open Graph tags are set

## Environment Variables Setup

### Production Environment Variables
```bash
# Email Configuration (Choose one method)

# Method 1: Gmail SMTP
EMAIL_USER=your-production-gmail@gmail.com
EMAIL_PASS=your-production-app-password

# Method 2: EmailJS
EMAILJS_SERVICE_ID=your-production-service-id
EMAILJS_TEMPLATE_ID=your-production-template-id
EMAILJS_PUBLIC_KEY=your-production-public-key

# Analytics (if using)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure custom domain
4. Enable security headers in vercel.json

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure environment variables
5. Set up redirects and headers

### Self-hosted (Docker)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Post-deployment Steps

### 1. Domain Configuration
- [ ] SSL certificate is installed
- [ ] HTTPS redirect is enabled
- [ ] WWW redirect is configured
- [ ] DNS records are properly set

### 2. Performance Monitoring
- [ ] Set up Google Analytics
- [ ] Configure Core Web Vitals monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor server response times

### 3. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager (if needed)

### 4. Security Verification
- [ ] Run security scan (SSL Labs, etc.)
- [ ] Verify security headers are working
- [ ] Test contact form functionality
- [ ] Check for mixed content warnings

## Monitoring and Maintenance

### Daily Checks
- [ ] Website is accessible
- [ ] Contact form is working
- [ ] No console errors
- [ ] Performance metrics are normal

### Weekly Checks
- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Monitor Core Web Vitals
- [ ] Review error logs

### Monthly Tasks
- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance optimization review
- [ ] Backup verification

## Troubleshooting Common Issues

### Build Failures
1. Check Node.js version compatibility
2. Clear cache: `npm run clean`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Check for TypeScript errors: `npm run type-check`

### Performance Issues
1. Analyze bundle size: `npm run build:analyze`
2. Optimize images and fonts
3. Check for unused dependencies
4. Review Core Web Vitals

### SEO Issues
1. Verify meta tags are rendering
2. Check structured data with Google's tool
3. Ensure sitemap is accessible
4. Verify robots.txt is correct

## Rollback Procedure

### Vercel
1. Go to Vercel dashboard
2. Select previous deployment
3. Click "Promote to Production"

### Manual Rollback
1. Revert to previous Git commit
2. Redeploy application
3. Verify functionality
4. Update DNS if necessary

## Contact Information

For deployment issues or questions:
- Technical Lead: Atharva Rahate (atharva.rahate374@gmail.com)
- Repository: https://github.com/tactiqe/website
- Documentation: https://tactiqe.in/docs

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Web Performance Best Practices](https://web.dev/performance/)
- [SEO Best Practices](https://developers.google.com/search/docs)