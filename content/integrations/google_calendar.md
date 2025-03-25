---
title: Integrate with Google Calendar
tags:
  - integrations
---

Integrate Voice Mate with Google Calendar to automatically schedule callback events when a caller requests one.

## Set up the Voice Mate app

> [!info] Getting Started
> You'll need a Google Calendar account.

1. **Log in with Google OAuth**:
   To integrate with Google Calendar, simply click the "Connect with Google" button in Voice Mate. You'll be redirected to Google's OAuth login page, where you’ll need to log into your Google account. Once authenticated, Voice Mate will request the necessary permissions to access your Google Calendar.

2. **Event Creation on Callback Request**:
   In this beta version, Voice Mate will automatically schedule an event in your Google Calendar whenever a caller requests a callback. The AI voice will ask for the most convenient time for the caller and schedule for time considering 'normal' working hours and your timezone. This might cause calendar events while you're busy - we're aware and working on a future release in which the AI assistent is aware of your availability and will agree with the caller on the next free spot.
   The event that is created contains the details of the callback, including summary and recording.

3. **Add to Voice Mate**:
   Once your Google account is authenticated, Voice Mate will handle the rest. You don't need to manually configure any webhooks or additional settings.

> [!note]
> In the future, the AI voicemail will be aware of your availability and will schedule callbacks accordingly, taking into account your schedule. In this first release the AI may schedule events over already existing items.

## Support

For further assistance, contact our support team or refer to our FAQ.
