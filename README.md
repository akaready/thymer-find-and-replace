# Find and Replace

Find and replace across the current page in Thymer, plus VS Code-style **⌘D** occurrence selection — the find & replace Thymer doesn't ship yet.

Plugins are made with 🤍 for the Thymer community. Free to use, fork, and hack on for <a href="LICENSE" target="_blank" rel="noopener noreferrer">non-commercial use</a>.

Plug-ins take effort, hours, and credits to build. If you find them helpful for you and your workflows, a star ⭐ on the repo, a <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">coffee</a> ☕, and a link back to <a href="https://akaready.com" target="_blank" rel="noopener noreferrer">@akaready</a> 🔗 all go a long way. Optional of course, but always appreciated.

Enjoy! 🙏

<p align="left">
  <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" alt="Buy me a coffee">
  </a>
</p>

## 📦 Install

**Recommended:** Use the <a href="https://github.com/ahpatel/thymer-plugins-manager" target="_blank" rel="noopener noreferrer">Thymer Plugins Manager</a> and install via <a href="https://github.com/akaready/thymer-find-and-replace" target="_blank" rel="noopener noreferrer">this repo's URL</a>. You'll get notifications when new versions ship.

**Manual:** copy <a href="plugin.js" target="_blank" rel="noopener noreferrer"><code>plugin.js</code></a> and <a href="plugin.json" target="_blank" rel="noopener noreferrer"><code>plugin.json</code></a> from this repo into Thymer's plugin editor.

## ⌨️ Use

Everything is a keystroke — there are no command-palette entries for the actions, only **Plugin: Find and Replace** for the settings panel.

### Find and replace — ⌘F

Opens the find box with the cursor in **Find**. Type a query and the matches highlight as you go. **Enter** and **Shift+Enter** step through them, **Tab** moves to the **Replace** field, and the ✓ button (or **⌘Enter**) replaces every match.

### Move through occurrences — ⌘G

Select a word and press **⌘G** to move the selection — and the cursor with it — to the next occurrence, **⌘⇧G** for the previous. One selection that hops, wrapping at the end. The count reads as a position: *2 of 4*. Focus stays in the editor so you can keep stepping.

### Select occurrences — ⌘D

Select a word, or just put the caret in one, and press **⌘D**. It adds that occurrence to a growing selection and drops the cursor into the **Replace** box, prefilled with the word. Each further **⌘D** adds the next occurrence; **⌥⌘D** removes the one you added last. Type a replacement and press **Enter** to rewrite the whole set at once. **⌘⇧A** grabs every occurrence in one go.

Focus stays in the replace box the entire time, so you can keep pressing ⌘D while typing.

### The find box

```
[ Aa ] │ [ Find……… ] [ × ]
[ ab|] │ [ Replace… ] [ ✓ ]
   [ Next ⌘D ] [ All ⌘⇧A ]   Replace 2 in 4
```

**Aa** matches case and **ab|** matches whole words. Both are sticky — whichever way you set them is how the next session starts, and the settings panel shows the same two values.

While ⌘G cycles, the count is your position (*2 of 4*). Otherwise it tells you what the ✓ will actually do, as a stoplight: **red** nothing will change, **yellow** some matches can't be rewritten, **white** it covers everything.

The box places itself clear of every match you can see, flipping above or beside them near an edge so it's never clipped. You can also **drag it** anywhere by its background; once you move it by hand it stays put until you close it.

**Tab** and **Shift+Tab** cycle inside the box and never fall through to the editor. **Esc** closes it and returns the caret to exactly where you started.

### Undo — ⌘Z

Replacements go through Thymer's plugin API, which its own undo doesn't track, so **⌘Z** reverts them here instead — the whole batch in one press. **⌘⇧Z** re-applies it. As soon as you type anything yourself, undo hands back to Thymer.

Rebind any shortcut in the settings panel: **Plugin: Find and Replace**.

### ⌘F and the native find-in-page

Thymer/Electron binds ⌘F to its own find-in-page at a level a plugin can't intercept. To give ⌘F to this plugin, reassign that first: **System Settings → Keyboard → Keyboard Shortcuts → App Shortcuts**, add an entry for Thymer targeting its Find menu item on a different key. Until then, rebind find here to any non-⌘F combo.

## 🧭 What replace will and won't touch

**Rewritten:** ordinary text, **bold**, *italic*, `code`, `#tags`, and the visible label of a `[label](url)` link — the link keeps its URL.

**Left alone:** bare URLs, page references, @mentions and dates. Their visible text isn't text you typed — it's derived from the destination, the linked page's title, a user, or a stored date — so replacing it would repoint a link, relabel a reference, change who is mentioned, or corrupt a date rather than edit words. Those matches are highlighted dimly and counted separately, and the count turns yellow to tell you some were skipped.

## 🚫 What a plugin can't do

Thymer draws its own caret and selection and the SDK has no selection API, so there's no true multi-cursor typing: ⌘D builds a highlighted set you edit through the replace box and toggles, not N live blinking cursors. Column selection and multi-line selections are likewise out of reach.

## 📊 Anonymous Usage Counter

This plugin pings a <a href="https://www.goatcounter.com/" target="_blank" rel="noopener noreferrer">privacy-respecting counter</a> on first install and once per day of active use. It exists so I can see which plugins are worth continuing to invest in — both "did anyone install it" and "is anyone still using it after a week." Combined with the coffee donations, this is what tells me whether to keep building. It tracks the plugin slug only, no other telemetry or user data, and you can see exactly what I see on the <a href="https://thymer-plugins.goatcounter.com" target="_blank" rel="noopener noreferrer">public dashboard</a>.

**Opt out:** Do Not Track, or `localStorage.setItem('tps-telemetry-opt-out','1')` in the console.
