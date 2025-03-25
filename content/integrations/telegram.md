---
title: Integrate with Telegram
tags:
  - integrations
---

Integrate Voice Mate with Telegram to receive call summaries directly in your Telegram chats.

## Set up the Voice Mate app

> [!info] Getting Started
> You'll need a Telegram account.

1. **Create a Telegram Bot**:
   Open Telegram and search for the "BotFather" (official Telegram bot). Start a conversation and use the `/newbot` command to create a new bot. Follow the instructions to choose a name and username for your bot. After creation, you’ll receive a unique **API token**—keep this safe.

2. **Obtain the Chat ID**:
   To send messages to your Telegram chat, you’ll need the **chat ID**. There are two types of chats to consider:

   - **For individual chats**: Start a conversation with your bot by searching for its username in Telegram. Then, send any message (e.g., "Hello") to the bot.
   - **For group chats**: Add your bot to the group and send a message. The chat ID for a group chat typically begins with a minus sign (`-`) followed by a numeric ID (e.g., `-123456789`).

   To retrieve the exact chat ID, you can use the following API endpoint:

   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```

   Replace `<YOUR_BOT_TOKEN>` with the API token you got from the BotFather. Check the response for the `chat.id` field that corresponds to your chat.

   **Note**: If you're using a group chat, the chat ID will typically contain a prefix (e.g., `-100`), so ensure you're copying the full ID.

3. **Add the Chat ID and Bot Token to Voice Mate**:
   In your Voice Mate settings, enter both the **chat ID** and the **API token** you obtained earlier in the Telegram integration section. This will allow Voice Mate to send call summaries to your chosen Telegram chat.

## Support

For further assistance, contact our support team or refer to our FAQ.
