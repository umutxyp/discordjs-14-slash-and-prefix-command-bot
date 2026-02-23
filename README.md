# 🛠️ Hybrid Discord Bot Template (Prefix + Slash)

The ultimate starter kit for Discord bots that need the best of both worlds: traditional **Prefix-based** commands and modern **Slash Commands**.

## 🌟 Key Features

- **Dual Command System:** Separate handlers for prefix/message commands and slash commands.
- **Rich Intents:** Pre-configured with total `GatewayIntentBits` for advanced features.
- **Developer Friendly:** Includes a `run.bat` for easy local Windows execution.
- **Modular Events:** Clean event management system.

## 🏗️ Structure

- `/prefix`: Home for commands like `!help`.
- `/slash`: Home for commands like `/help`.
- `/events`: Centralized event management.

## 🔧 Configuration

Update `config.js`:

```javascript
module.exports = {
    token: "YOUR_BOT_TOKEN",
    prefix: "!",
    ownerID: "YOUR_ID"
}
```
