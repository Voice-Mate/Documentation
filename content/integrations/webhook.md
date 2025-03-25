---
title: Integrate with Webhooks
tags:
  - integrations
---

Integrate Voice Mate with external systems via webhooks to receive call summaries in a structured format.

## Set up the Webhook Integration

> [!info] Getting Started
> You'll need a server or endpoint that can handle incoming webhook requests.
> If you want to test our webhooks anyway, we recommend using [Webhook.site](https://webhook.site). It’s a free tool that allows you to easily capture and inspect incoming webhooks. You can generate a temporary URL, configure it in your application, and then view the payload sent to that URL in real-time.

1. **Create a Webhook Endpoint**:
   Set up an endpoint on your server that can handle HTTP POST requests. This will be the URL where Voice Mate will send the call summaries.

2. **Webhook Payload Structure**:
   When Voice Mate sends a webhook, it will post a JSON object containing the call summary. Below is the structure of the data you'll receive:

```json
{
  "callback_time": "Tomorrow Morning",
  "answered": false,
  "sort_key": "CALL-1742933883-fcf944e9-41ab-4eeb-ac47-90680b5adce6",
  "call_reason": "To invite you for a Job Interviews",
  "calltimestamp": 1725879525,
  "callduration": 130,
  "read": false,
  "archived": false,
  "messages": [
    Array of messages
    {
      "message": "message",
      "role": "bot",
      "time": 1725890325875
    },
  ],
  "callsummary": "Bob called to Invite Peter for a job interview. He was very impressed by your resume and still is interviewing next thursday and friday",
  "caller_name": "Bob",
  "caller_phone_number": "+31610438353",
  "call_back_needed": true
}
```

3. **Add the Webhook URL to Voice Mate**:
   In your Voice Mate settings, paste your webhook URL. This is the endpoint where we will post the call summaries.

4. **Test the Integration**:
   Once everything is set up, you can test the webhook by triggering a test call in Voice Mate. The call summary will be sent to your webhook endpoint in the specified format.

## Support

Here's the updated paragraph with that information:

> [!info] Failures
> We’ll send you an email if a webhook fails, and we’ll automatically retry the webhook 5 times (after 5, 10, 30, 90 and 180 seconds) before marking it as failed.

For further assistance, contact our support team or refer to our FAQ.
