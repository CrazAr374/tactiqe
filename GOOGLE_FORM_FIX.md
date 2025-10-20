# How to Fix Google Form Sign-in Requirement

## The Problem
Your Google Form is currently requiring users to sign in to Google, which creates friction and prevents anonymous submissions.

## Solution: Update Google Form Settings

### Step 1: Open Your Google Form
1. Go to: https://docs.google.com/forms/d/1FAIpQLScZvLCWhiaYJ2E4c3l1TbbnLruauDXT-IPZUFgvhtxuJ-cWxQ/edit
2. Make sure you're signed in to the Google account that owns this form

### Step 2: Change Response Settings
1. Click the **Settings** gear icon (⚙️) at the top right of the form
2. In the **Responses** tab, look for these settings:
   - **Collect email addresses**: Turn this OFF (unless you specifically need emails)
   - **Restrict to users in [your organization]**: Turn this OFF
   - **Limit to 1 response**: Turn this OFF (unless you want to limit responses)

### Step 3: Make Form Public
1. Click the **Send** button at the top right
2. Click the link icon (🔗) to get the shareable link
3. Make sure "Restricted" is NOT selected
4. The link should be publicly accessible

### Step 4: Test the Form
1. Open an incognito/private browser window
2. Visit your form URL: https://docs.google.com/forms/d/e/1FAIpQLScZvLCWhiaYJ2E4c3l1TbbnLruauDXT-IPZUFgvhtxuJ-cWxQ/viewform
3. Verify it doesn't ask for sign-in

## Alternative Solutions Implemented

### 1. Backup Application Form
I've created a custom application form component that:
- Collects the same information as your Google Form
- Sends submissions via your existing contact API
- Works without any external dependencies
- Provides a better user experience

### 2. Improved User Experience
The join page now:
- Shows a clear notice about the form opening in a new tab
- Provides multiple options for form submission
- Has a collapsible embedded form section
- Includes a backup form that works entirely on your site

## Current Form Fields in Backup Form
- Personal Information (Name, Email, Phone, Location)
- Technical Background (Experience Level, Skills, GitHub)
- Project Experience
- Motivation and Availability

## Testing the Fix
1. Build and test locally: `npm run build && npm run dev`
2. Test both the Google Form link and the backup form
3. Verify form submissions work through your contact API

## Deployment
The code changes are ready for deployment. The backup form will work immediately, and once you fix the Google Form settings, users will have both options available.