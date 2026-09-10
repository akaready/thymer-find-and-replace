"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    COMMANDS: () => COMMANDS,
    DEFAULTS: () => DEFAULTS,
    PLUGIN_NAME: () => PLUGIN_NAME,
    PLUGIN_VERSION: () => PLUGIN_VERSION,
    Plugin: () => Plugin,
    ROOT_CLASS: () => ROOT_CLASS,
    cssColor: () => cssColor,
    defaultShortcuts: () => defaultShortcuts,
    normalizeSettings: () => normalizeSettings
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Keyboard shortcut rows (keyRow) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-key-name { min-width: 0; }

.tps-key-desc {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  white-space: normal;
}

.tps-key-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-key-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: var(--tps-fs-button);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-key-chip:hover { border-color: var(--tps-border); }

.tps-key-chip--unbound { color: var(--tps-text-faint); font-style: italic; }

.tps-key-chip[data-capturing="true"] {
  background: var(--tps-accent-soft);
  border-color: var(--tps-accent);
  color: var(--tps-accent);
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-key-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--tps-control-h-sm);
  height: var(--tps-control-h-sm);
  padding: 0;
  font-size: var(--tps-fs-button);
  line-height: 1;
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
}

.tps-key-clear:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-divider);
}

.tps-key-chip:focus-visible,
.tps-key-clear:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/keybindings.js
  var MOD_KEYS = /* @__PURE__ */ new Set(["Control", "Shift", "Alt", "Meta"]);
  function keyFromCode(e) {
    const code = String(e.code || "");
    if (/^Key[A-Z]$/.test(code)) return code.slice(3);
    if (/^Digit[0-9]$/.test(code)) return code.slice(5);
    return "";
  }
  __name(keyFromCode, "keyFromCode");
  function keyFromKey(e) {
    let key = String(e.key || "");
    if (key === " ") return "Space";
    if (key.length === 1) key = key.toUpperCase();
    return key;
  }
  __name(keyFromKey, "keyFromKey");
  function eventToCombo(e) {
    if (MOD_KEYS.has(e.key)) return null;
    const parts = [];
    if (e.ctrlKey) parts.push("Ctrl");
    if (e.altKey) parts.push("Alt");
    if (e.shiftKey) parts.push("Shift");
    if (e.metaKey) parts.push("Meta");
    const byKey = keyFromKey(e);
    const byCode = keyFromCode(e);
    const key = e.altKey && byCode && !/^[A-Z0-9]$/.test(byKey) ? byCode : byKey || byCode;
    if (!key) return null;
    parts.push(key);
    return parts.join("+");
  }
  __name(eventToCombo, "eventToCombo");
  function parseCombo(combo) {
    const parts = String(combo || "").split("+").map((p) => p.trim()).filter(Boolean);
    const out = { ctrl: false, alt: false, shift: false, meta: false, key: "" };
    for (const p of parts) {
      const lower = p.toLowerCase();
      if (lower === "ctrl" || lower === "control") out.ctrl = true;
      else if (lower === "alt" || lower === "option") out.alt = true;
      else if (lower === "shift") out.shift = true;
      else if (lower === "meta" || lower === "cmd" || lower === "command") out.meta = true;
      else out.key = p;
    }
    if (out.key === " ") out.key = "Space";
    if (out.key.length === 1) out.key = out.key.toUpperCase();
    return out;
  }
  __name(parseCombo, "parseCombo");
  function comboMatches(e, m) {
    if (!m.key) return false;
    if (!!e.ctrlKey !== m.ctrl) return false;
    if (!!e.altKey !== m.alt) return false;
    if (!!e.shiftKey !== m.shift) return false;
    if (!!e.metaKey !== m.meta) return false;
    return keyFromKey(e) === m.key || keyFromCode(e) !== "" && keyFromCode(e) === m.key;
  }
  __name(comboMatches, "comboMatches");
  function isMacPlatform() {
    try {
      const p = String(navigator.platform || "") + " " + String(navigator.userAgent || "");
      return /Mac|iPhone|iPad|iPod/i.test(p);
    } catch {
      return false;
    }
  }
  __name(isMacPlatform, "isMacPlatform");
  var MAC_GLYPHS = { ctrl: "\u2303", alt: "\u2325", shift: "\u21E7", meta: "\u2318" };
  var KEY_GLYPHS = {
    ArrowLeft: "\u2190",
    ArrowRight: "\u2192",
    ArrowUp: "\u2191",
    ArrowDown: "\u2193",
    Enter: "\u21A9",
    Escape: "Esc",
    Backspace: "\u232B",
    Delete: "\u2326",
    Tab: "\u21E5",
    Space: "\u2423"
  };
  function formatCombo(combo, opts = {}) {
    const m = parseCombo(combo);
    if (!m.key) return opts.placeholder ?? "Unbound";
    const mac = opts.mac ?? isMacPlatform();
    const key = KEY_GLYPHS[m.key] || m.key;
    if (mac) {
      return (m.ctrl ? MAC_GLYPHS.ctrl : "") + (m.alt ? MAC_GLYPHS.alt : "") + (m.shift ? MAC_GLYPHS.shift : "") + (m.meta ? MAC_GLYPHS.meta : "") + key;
    }
    const parts = [];
    if (m.ctrl) parts.push("Ctrl");
    if (m.alt) parts.push("Alt");
    if (m.shift) parts.push("Shift");
    if (m.meta) parts.push("Win");
    parts.push(key);
    return parts.join("+");
  }
  __name(formatCombo, "formatCombo");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el3 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el3
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el3.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el3.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el3.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el3.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el3.setAttribute(k, v);
          }
        } else {
          el3.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el3, children);
    return el3;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback, scope } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback,
      scope
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el3, key) {
    const scope = (
      /** @type {HTMLElement} */
      el3.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el3 = (
        /** @type {HTMLElement} */
        node
      );
      el3.dataset.sectionScope = scope;
      const key = el3.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el3, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el3._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, persistKey, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      // `open` is the controlled form — a caller driving it owns the state, so
      // that case opts out of the remembered-state machinery entirely.
      dataset: open == null ? { open: String(initialOpen), sectionKey: persistKey || label } : { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen, restoring) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (!restoring && sectionEl.dataset.sectionKey != null) {
        SECTION_STATE.set(sectionStateKey(sectionEl, sectionEl.dataset.sectionKey), nextOpen);
      }
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    sectionEl._tpsSetOpen = setOpen;
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function optionNote(text) {
    return h("p", { class: "tps-opt-note" }, text);
  }
  __name(optionNote, "optionNote");
  function listRow({ icon, name, controls }) {
    const ctrlChildren = controls == null ? [] : Array.isArray(controls) ? controls : [controls];
    return h(
      "div",
      { class: "tps-list-row" },
      h("div", null, icon || null),
      h("div", { class: "tps-list-name" }, name),
      h("div", null, ...ctrlChildren)
    );
  }
  __name(listRow, "listRow");
  function listHeader({ columns }) {
    return h(
      "div",
      { class: "tps-list-header" },
      ...columns.map((c) => h("div", null, c))
    );
  }
  __name(listHeader, "listHeader");
  function keyRow({ label, desc, combo, onChange, onClear, placeholder }) {
    const show = /* @__PURE__ */ __name((c) => formatCombo(c, { placeholder }), "show");
    const chip = h("button", { type: "button", class: "tps-key-chip", "aria-label": `${label} \u2014 click to rebind` }, show(combo));
    chip.classList.toggle("tps-key-chip--unbound", !combo);
    let capturing = false;
    let onCaptureKey = null;
    const stop = /* @__PURE__ */ __name((commit, next) => {
      if (!capturing) return;
      capturing = false;
      chip.removeAttribute("data-capturing");
      if (onCaptureKey) {
        window.removeEventListener("keydown", onCaptureKey, true);
        onCaptureKey = null;
      }
      if (commit) combo = next;
      chip.textContent = show(combo);
      chip.classList.toggle("tps-key-chip--unbound", !combo);
    }, "stop");
    chip.addEventListener("click", () => {
      if (capturing) {
        stop(false, combo);
        return;
      }
      capturing = true;
      chip.setAttribute("data-capturing", "true");
      chip.textContent = "Press keys\u2026";
      onCaptureKey = /* @__PURE__ */ __name((ev) => {
        if (ev.key === "Escape") {
          ev.preventDefault();
          ev.stopPropagation();
          stop(false, combo);
          return;
        }
        const next = eventToCombo(ev);
        if (!next) return;
        ev.preventDefault();
        ev.stopPropagation();
        stop(true, next);
        onChange(next);
      }, "onCaptureKey");
      window.addEventListener("keydown", onCaptureKey, true);
    });
    const controls = [chip];
    if (onClear) {
      controls.push(h("button", {
        type: "button",
        class: "tps-key-clear",
        "aria-label": `${label} \u2014 remove shortcut`,
        title: "Remove shortcut",
        onClick: /* @__PURE__ */ __name(() => {
          stop(false, "");
          combo = "";
          chip.textContent = show("");
          chip.classList.add("tps-key-chip--unbound");
          onClear();
        }, "onClick")
      }, "\xD7"));
    }
    const name = desc ? h("div", { class: "tps-key-name" }, h("div", null, label), h("div", { class: "tps-key-desc" }, desc)) : label;
    return listRow({ icon: null, name, controls: h("div", { class: "tps-key-controls" }, ...controls) });
  }
  __name(keyRow, "keyRow");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");
  async function healPluginIdentity(plugin, identity) {
    return queuePluginConfigWrite(plugin, () => healPluginIdentityNow(plugin, identity));
  }
  __name(healPluginIdentity, "healPluginIdentity");
  async function healPluginIdentityNow(plugin, identity) {
    if (!identity || typeof identity.name !== "string" || !identity.name.trim()) return;
    const STUB_NAMES = ["New Global Plugin", "New Collection", "My Global Plugin"];
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (conf.ver === void 0 && conf.custom === void 0) return;
    const hasStubName = typeof conf.name !== "string" || !conf.name.trim() || STUB_NAMES.includes(conf.name.trim());
    const missingRepo = identity.sourceRepo && conf.__source_repo === void 0;
    if (!hasStubName && !missingRepo) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-identity-healed/${ws}/${identity.name}`;
      if (sessionStorage.getItem(guardKey) === "1") return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
    }
    const next = { ...conf };
    if (hasStubName) {
      next.name = identity.name;
      if (identity.icon) next.icon = identity.icon;
      if (identity.description) next.description = identity.description;
    }
    if (missingRepo) {
      next.__source_repo = identity.sourceRepo;
      if (conf.__source_files === void 0 && identity.sourceFiles) {
        next.__source_files = { ...identity.sourceFiles };
      }
    }
    try {
      await api.saveConfiguration(next);
    } catch {
    }
  }
  __name(healPluginIdentityNow, "healPluginIdentityNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/plugin-settings.js
  function createSettingsStore(plugin, {
    slug,
    key = "settings",
    version,
    normalize = /* @__PURE__ */ __name((raw) => raw && typeof raw === "object" ? raw : {}, "normalize"),
    scopeKey = null,
    readSynced = null,
    pickSynced = null
  }) {
    const readBag = readSynced || ((custom) => custom?.[key]);
    const pickSyncedSubset = pickSynced || ((s) => s);
    let current = {};
    let dirty = false;
    let editRevision = 0;
    let localUnavailable = false;
    let restoredFromMirror = false;
    let writeChain = Promise.resolve();
    let flushTimer = null;
    let settleTimer = null;
    const fnv1a = /* @__PURE__ */ __name((s) => {
      let h2 = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h2 ^= s.charCodeAt(i);
        h2 = Math.imul(h2, 16777619);
      }
      return (h2 >>> 0).toString(36);
    }, "fnv1a");
    const deviceIdentityParts = /* @__PURE__ */ __name(() => {
      try {
        const n = (
          /** @type {any} */
          typeof navigator !== "undefined" ? navigator : {}
        );
        const ua = String(n.userAgent || "");
        const isApp = /electron/i.test(ua);
        const os = /android/i.test(ua) ? "android" : /iphone|ipad|ios/i.test(ua) ? "ios" : /linux/i.test(ua) ? "linux" : /mac|darwin/i.test(ua) ? "mac" : /win/i.test(ua) ? "win" : "x";
        return { n, ua, isApp, os };
      } catch {
        return { n: {}, ua: "", isApp: false, os: "x" };
      }
    }, "deviceIdentityParts");
    const identity = deviceIdentityParts();
    const legacyDeviceKey = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${identity.ua}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const stableFingerprint = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${String(identity.ua).replace(/\d+(?:[._]\d+)*/g, "#")}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const persistentDeviceKey = /* @__PURE__ */ __name(() => {
      const storageKey = "tps-settings-device-id";
      try {
        const existing = localStorage.getItem(storageKey);
        if (existing && /^device-[a-z0-9-]+$/i.test(existing)) return existing;
        let id = "";
        try {
          id = `device-${crypto.randomUUID()}`;
        } catch {
        }
        if (!id) id = `device-${fnv1a(`${Date.now()}|${Math.random()}|${stableFingerprint}`)}`;
        localStorage.setItem(storageKey, id);
        if (localStorage.getItem(storageKey) === id) return id;
      } catch {
      }
      return stableFingerprint;
    }, "persistentDeviceKey");
    const deviceKey = persistentDeviceKey();
    const asMap = /* @__PURE__ */ __name((bag) => {
      if (bag && typeof bag === "object" && bag.byDevice && typeof bag.byDevice === "object") {
        return {
          shared: bag.shared,
          byDevice: { ...bag.byDevice },
          aliases: bag.aliases && typeof bag.aliases === "object" ? { ...bag.aliases } : {}
        };
      }
      if (bag && typeof bag === "object" && Object.keys(bag).length) {
        return { shared: bag, byDevice: {}, aliases: {} };
      }
      return { shared: void 0, byDevice: {}, aliases: {} };
    }, "asMap");
    const readCustom = /* @__PURE__ */ __name(() => {
      try {
        const conf = plugin.getConfiguration?.();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }, "readCustom");
    const resolveDeviceSlotKey = /* @__PURE__ */ __name((m) => {
      if (Object.prototype.hasOwnProperty.call(m.byDevice, deviceKey)) return deviceKey;
      const aliased = m.aliases[stableFingerprint];
      if (aliased && Object.prototype.hasOwnProperty.call(m.byDevice, aliased)) return aliased;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, stableFingerprint)) return stableFingerprint;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, legacyDeviceKey)) return legacyDeviceKey;
      return null;
    }, "resolveDeviceSlotKey");
    const readSyncedDevice = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const slotKey = resolveDeviceSlotKey(m);
      if (slotKey) return m.byDevice[slotKey];
      return m.shared ?? null;
    }, "readSyncedDevice");
    const prune = /* @__PURE__ */ __name((m) => {
      const out = { byDevice: m.byDevice };
      if (m.shared !== void 0) out.shared = m.shared;
      if (Object.keys(m.aliases).length) out.aliases = m.aliases;
      return out;
    }, "prune");
    const buildDevicePatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildDevicePatch");
    const buildAllPatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.shared = subset;
      for (const k of Object.keys(m.byDevice)) m.byDevice[k] = subset;
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildAllPatch");
    const buildResetPatch = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const resolved = resolveDeviceSlotKey(m);
      if (resolved) delete m.byDevice[resolved];
      delete m.byDevice[deviceKey];
      delete m.byDevice[stableFingerprint];
      delete m.byDevice[legacyDeviceKey];
      delete m.aliases[stableFingerprint];
      return { [key]: prune(m) };
    }, "buildResetPatch");
    const normalizedStringify = /* @__PURE__ */ __name((raw) => JSON.stringify(normalize(raw)), "normalizedStringify");
    const workspaceGuid = /* @__PURE__ */ __name(() => {
      try {
        return String(plugin.getWorkspaceGuid?.() || "") || "default";
      } catch {
        return "default";
      }
    }, "workspaceGuid");
    const scope = /* @__PURE__ */ __name(() => {
      if (!scopeKey) return "";
      try {
        return `/${String(scopeKey() || "scope")}`;
      } catch {
        return "/scope";
      }
    }, "scope");
    const cacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${deviceKey}/cache`, "cacheKey");
    const legacyCacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${legacyDeviceKey}/cache`, "legacyCacheKey");
    const readCache = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(cacheKey()) ?? localStorage.getItem(legacyCacheKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readCache");
    const writeCache = /* @__PURE__ */ __name((value) => {
      try {
        const keyName = cacheKey();
        localStorage.setItem(keyName, value);
        if (localStorage.getItem(keyName) !== value) throw new Error("localStorage read-back mismatch");
        localUnavailable = false;
        return true;
      } catch {
        localUnavailable = true;
        return false;
      }
    }, "writeCache");
    const clearCache = /* @__PURE__ */ __name(() => {
      try {
        localStorage.removeItem(cacheKey());
        localStorage.removeItem(legacyCacheKey());
      } catch {
      }
    }, "clearCache");
    const mirrorKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/mirror`, "mirrorKey");
    const readMirror = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(mirrorKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readMirror");
    const writeMirror = /* @__PURE__ */ __name((bag) => {
      try {
        const m = asMap(bag);
        if (m.shared === void 0 && !Object.keys(m.byDevice).length) return;
        localStorage.setItem(mirrorKey(), JSON.stringify(prune(m)));
      } catch {
      }
    }, "writeMirror");
    const recoveryFlagKey = /* @__PURE__ */ __name(() => `tps-settings-recovered/${slug}/${workspaceGuid()}${scope()}`, "recoveryFlagKey");
    const recoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        return sessionStorage.getItem(recoveryFlagKey()) === "1";
      } catch {
        return false;
      }
    }, "recoveryAttempted");
    const markRecoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        sessionStorage.setItem(recoveryFlagKey(), "1");
      } catch {
      }
    }, "markRecoveryAttempted");
    const bagIsAbsent = /* @__PURE__ */ __name((custom) => {
      const bag = readBag(custom);
      if (!bag || typeof bag !== "object") return true;
      const m = asMap(bag);
      return m.shared === void 0 && !Object.keys(m.byDevice).length;
    }, "bagIsAbsent");
    const saveCustomNow = /* @__PURE__ */ __name(async (buildPatch) => {
      try {
        const api = await resolveConfigApi(plugin);
        if (!api || typeof api.saveConfiguration !== "function") return false;
        let conf = {};
        try {
          conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
        } catch {
          return false;
        }
        if (typeof conf.name !== "string" || !conf.name.trim()) return false;
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const patch = buildPatch(custom);
        const patchKeys = Object.keys(patch);
        if (!patchKeys.length) return true;
        const converged = patchKeys.every((patchKey) => patchKey === key ? bagConverged(custom[key], patch[key]) : JSON.stringify(custom[patchKey]) === JSON.stringify(patch[patchKey]));
        if (converged) {
          if (patch[key] !== void 0) writeMirror(patch[key]);
          return true;
        }
        const result = await api.saveConfiguration(configWithPluginVersion(conf, patch, version));
        if (result === false) return false;
        if (patch[key] !== void 0) writeMirror(patch[key]);
        return true;
      } catch {
        return false;
      }
    }, "saveCustomNow");
    const saveCustom = /* @__PURE__ */ __name((buildPatch) => {
      const run = /* @__PURE__ */ __name(() => queuePluginConfigWrite(plugin, () => saveCustomNow(buildPatch)), "run");
      const result = writeChain.then(run, run);
      writeChain = result.then(() => void 0, () => void 0);
      return result;
    }, "saveCustom");
    const bagConverged = /* @__PURE__ */ __name((a, b) => {
      const ma = asMap(a);
      const mb = asMap(b);
      if (normalizedStringify(ma.shared || {}) !== normalizedStringify(mb.shared || {})) return false;
      const keys = /* @__PURE__ */ new Set([...Object.keys(ma.byDevice), ...Object.keys(mb.byDevice)]);
      for (const k of keys) {
        if (normalizedStringify(ma.byDevice[k] || {}) !== normalizedStringify(mb.byDevice[k] || {})) return false;
      }
      if (JSON.stringify(Object.entries(ma.aliases).sort()) !== JSON.stringify(Object.entries(mb.aliases).sort())) return false;
      return true;
    }, "bagConverged");
    const FLUSH_DELAY_MS = 4e3;
    const cancelFlush = /* @__PURE__ */ __name(() => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
    }, "cancelFlush");
    const flushDevice = /* @__PURE__ */ __name(async () => {
      cancelFlush();
      if (!dirty) return true;
      const revision = editRevision;
      const subset = pickSyncedSubset(normalize(current));
      const ok = await saveCustom((custom) => buildDevicePatch(custom, subset));
      if (ok && editRevision === revision) {
        dirty = false;
        clearCache();
      } else if (dirty) scheduleFlush();
      return ok;
    }, "flushDevice");
    const scheduleFlush = /* @__PURE__ */ __name(() => {
      cancelFlush();
      flushTimer = setTimeout(() => {
        flushTimer = null;
        void flushDevice();
      }, FLUSH_DELAY_MS);
    }, "scheduleFlush");
    const store = {
      /**
       * Read this device's settings from the synced config. A localStorage cache
       * that differs (an edit not yet flushed before a crash/reload) wins and is
       * re-flushed. Read-only w.r.t. the synced config.
       */
      load() {
        if (dirty) return { settings: current, diverged: this.isDiverged() };
        let custom = readCustom();
        if (bagIsAbsent(custom)) {
          const mirrored = readMirror();
          if (mirrored && !recoveryAttempted()) {
            markRecoveryAttempted();
            restoredFromMirror = true;
            void saveCustomNow(() => ({ [key]: prune(asMap(mirrored)) }));
            custom = { ...custom, [key]: prune(asMap(mirrored)) };
          }
        }
        const synced = normalize(readSyncedDevice(custom) || {});
        const cached = readCache();
        if (cached && normalizedStringify(cached) !== JSON.stringify(synced)) {
          current = normalize(cached);
          dirty = true;
          scheduleFlush();
        } else {
          current = synced;
          dirty = false;
          writeMirror(readBag(custom));
          if (cached) clearCache();
          const resolved = resolveDeviceSlotKey(asMap(readBag(custom)));
          if (resolved && resolved !== deviceKey) {
            dirty = true;
            editRevision += 1;
            if (writeCache(JSON.stringify(current))) scheduleFlush();
            else void flushDevice();
          }
        }
        return { settings: current, diverged: this.isDiverged() };
      },
      get() {
        return current;
      },
      /** This device's settings differ from the shared baseline (informational). */
      isDiverged() {
        const shared = asMap(readBag(readCustom())).shared;
        return normalizedStringify(shared || {}) !== JSON.stringify(normalize(current));
      },
      /** True when the immediate recovery journal could not be verified. */
      isLocalUnavailable() {
        return localUnavailable;
      },
      /**
       * True when this load found the synced settings gone and rebuilt them from
       * the durable local mirror. Worth surfacing to the user — a silent recovery
       * hides that something wiped their config, and they should know to check
       * whatever did it.
       */
      wasRestoredFromMirror() {
        return restoredFromMirror;
      },
      /**
       * Lossless migration/recovery entry point. The normalized value is journaled
       * through the store's real cache key and retried to synced config; callers
       * never need to know or recreate that private key.
       */
      recover(raw) {
        const next = normalize(raw);
        const synced = normalize(readSyncedDevice(readCustom()) || {});
        if (JSON.stringify(next) === JSON.stringify(synced)) return false;
        current = next;
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return true;
      },
      /** Force this device's pending settings into its durable synced slot. */
      flush() {
        return flushDevice();
      },
      /**
       * Apply an edit to THIS device: update memory, cache locally for instant UI,
       * and schedule a durable flush to this device's synced slot. Never touches
       * another device's slot or the shared baseline.
       */
      update(patch) {
        current = normalize({ ...current, ...patch });
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return { settings: current, diverged: this.isDiverged() };
      },
      /**
       * "Copy these settings to all my devices": write the current settings to the
       * shared baseline AND every existing device slot, in ONE saveConfiguration.
       * (This is the header pill's ↑ action.)
       */
      async pushToAll() {
        cancelFlush();
        const revision = editRevision;
        const subset = pickSyncedSubset(normalize(current));
        const ok = await saveCustom((custom) => buildAllPatch(custom, subset));
        if (ok && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * "Reset this device": drop this device's slot so it re-inherits the shared
       * baseline (or defaults). (The header pill's ↺ action.) Returns the settings
       * this device now shows.
       */
      discardLocal() {
        cancelFlush();
        const shared = asMap(readBag(readCustom())).shared;
        current = normalize(shared || {});
        dirty = true;
        editRevision += 1;
        const revision = editRevision;
        writeCache(JSON.stringify(current));
        void saveCustom((custom) => buildResetPatch(custom)).then((ok) => {
          if (ok && editRevision === revision) {
            dirty = false;
            clearCache();
          } else if (dirty) scheduleFlush();
        });
        return current;
      },
      /**
       * Persist sibling custom data and this device's pending settings in one
       * serialized save. Data-owning plugins use this instead of manually
       * snapshotting the settings bag from a potentially stale config instance.
       */
      async saveCustomPatch(extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const ok = await saveCustom((custom) => ({
          ...typeof extraPatch === "function" ? extraPatch(custom) : extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        }));
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * The canonical settings-aware kill switch. Pending device settings and any
       * sibling data patch land atomically with pluginDisabled, and recovery is
       * cleared only after Thymer confirms the save.
       */
      async setDisabled(disabled, extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const run = /* @__PURE__ */ __name(() => setPluginDisabled(plugin, disabled, version, (custom) => ({
          ...extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        })), "run");
        const okPromise = writeChain.then(run, run);
        writeChain = okPromise.then(() => void 0, () => void 0);
        const ok = await okPromise;
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * Post-push pill settle. A successful push saves the config, which reloads
       * the plugin; the fresh instance can render its scope pill from a config
       * snapshot the save hasn't reached yet, and the follow-up config event is
       * filtered as local (attachLifecycle, by design) — so nothing repaints and
       * the pill sits on "This device" even though the push landed. Re-read the
       * synced config on a short interval until it converges: when the adopted
       * settings changed, `onAdopt(settings)` fires (apply + full panel render);
       * otherwise `refreshPill()` fires (pill-only repaint). A genuine local
       * edit still wins — load() carries it through the crash cache. No-ops
       * instantly when already settled. Call from the push success callback AND
       * the post-reload panel heal; returns a cancel fn for onUnload.
       */
      settleAfterPush({ onAdopt = void 0, refreshPill = void 0, tries = 8, intervalMs = 500 } = {}) {
        if (settleTimer) {
          clearTimeout(settleTimer);
          settleTimer = null;
        }
        const tick = /* @__PURE__ */ __name((left) => {
          const before = JSON.stringify(current);
          const next = this.load().settings;
          if (JSON.stringify(next) !== before) onAdopt?.(next);
          else refreshPill?.();
          if (left <= 0 || !this.isDiverged()) return;
          settleTimer = setTimeout(() => {
            settleTimer = null;
            tick(left - 1);
          }, intervalMs);
        }, "tick");
        tick(tries);
        return () => {
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
        };
      },
      /**
       * Live-follow: when another device does "apply to all" (or edits propagate),
       * `global-plugin.updated` (or, for CollectionPlugins, the collection event the
       * adopter also wires) fires; re-read this device's synced settings and, if
       * they changed, hand them to the plugin's central apply. Also registers the
       * boundary flush (hidden / pagehide) so a just-made edit isn't stranded in the
       * localStorage cache. Returns a detach function for onUnload.
       */
      attachLifecycle({ onRemoteChange } = {}) {
        const handlerIds = [];
        const onHide = /* @__PURE__ */ __name(() => {
          if (document.visibilityState === "hidden") void flushDevice();
        }, "onHide");
        const onPageHide = /* @__PURE__ */ __name(() => {
          void flushDevice();
        }, "onPageHide");
        try {
          document.addEventListener("visibilitychange", onHide);
          window.addEventListener("pagehide", onPageHide);
        } catch {
        }
        try {
          const id = plugin.events?.on?.("global-plugin.updated", (event) => {
            try {
              if (dirty) return;
              if (event?.source?.isLocal) return;
              const guid = plugin.getGuid?.();
              const eventGuid = event?.pluginGuid || event?.guid || event?.rootId || null;
              if (eventGuid && guid && eventGuid !== guid) return;
              const next = normalize(readSyncedDevice(readCustom()) || {});
              if (JSON.stringify(next) === JSON.stringify(current)) return;
              current = next;
              onRemoteChange?.(current);
            } catch {
            }
          });
          if (id) handlerIds.push(id);
        } catch {
        }
        return () => {
          cancelFlush();
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
          try {
            document.removeEventListener("visibilitychange", onHide);
            window.removeEventListener("pagehide", onPageHide);
          } catch {
          }
          for (const id of handlerIds) {
            try {
              plugin.events?.off?.(id);
            } catch {
            }
          }
        };
      }
    };
    return store;
  }
  __name(createSettingsStore, "createSettingsStore");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/editor-dom.js
  var FOCUSED_PANEL_SEL = ".panel.focused-panel, .panel.has-focus";
  var LISTITEM_SEL = ".listitem[data-guid]";
  var LINE_SEL = ".line-div";
  var CARET_EL_SEL = "div.listview-caret-self";
  var SELECTION_OVERLAY_SEL = ".text-selection-self .text-selection";
  var MODAL_SEL = ".cmdpal--dialog, .dropdown, .modal-container, .link-menu-visible";
  var REPLACEABLE_RUN_SEL = ".lineitem-text, .lineitem-bold, .lineitem-italic, .lineitem-code";
  var SPECIAL_EDITABLE_RUN_SEL = ".lineitem-linkobj, .lineitem-hashtag, .lineitem-hashtag-input";
  var NO_CLICK_RUN_SEL = "a, .lineitem-linkobj, .lineitem-link, .lineitem-hashtag, .lineitem-hashtag-input, .lineitem-ref, .lineitem-ref-title, .lineitem-lineref";
  var DERIVED_RUN_SEL = ".lineitem-link, .lineitem-ref, .lineitem-ref-title, .lineitem-lineref, .lineitem-mention, .lineitem-datetime";
  function focusedPanelEl(doc = document) {
    const el3 = doc.querySelector(FOCUSED_PANEL_SEL);
    return el3 instanceof HTMLElement ? el3 : null;
  }
  __name(focusedPanelEl, "focusedPanelEl");
  function modalOpen(doc = document) {
    return !!doc.querySelector(MODAL_SEL);
  }
  __name(modalOpen, "modalOpen");
  function thymerCaretEl(doc = document) {
    try {
      let best = null, bestRect = null, bestScore = -1;
      const panel2 = focusedPanelEl(doc);
      for (const node of doc.querySelectorAll(CARET_EL_SEL)) {
        if (!(node instanceof HTMLElement)) continue;
        const rect = node.getBoundingClientRect();
        if (!(rect.height > 0.5)) continue;
        const score = panel2 && panel2.contains(node) ? 2 : 1;
        if (score > bestScore) {
          best = node;
          bestRect = rect;
          bestScore = score;
        }
      }
      return best && bestRect ? { el: best, rect: bestRect } : null;
    } catch {
      return null;
    }
  }
  __name(thymerCaretEl, "thymerCaretEl");
  function textPositionAtPoint(x, y, doc = document) {
    try {
      const d = (
        /** @type {any} */
        doc
      );
      if (typeof d.caretRangeFromPoint === "function") {
        const r = d.caretRangeFromPoint(x, y);
        if (r && r.startContainer && r.startContainer.nodeType === Node.TEXT_NODE) {
          return { node: (
            /** @type {Text} */
            r.startContainer
          ), offset: r.startOffset };
        }
        return null;
      }
      if (typeof d.caretPositionFromPoint === "function") {
        const p = d.caretPositionFromPoint(x, y);
        if (p && p.offsetNode && p.offsetNode.nodeType === Node.TEXT_NODE) {
          return { node: (
            /** @type {Text} */
            p.offsetNode
          ), offset: p.offset };
        }
      }
    } catch {
    }
    return null;
  }
  __name(textPositionAtPoint, "textPositionAtPoint");
  function rangeRect(node, start, end) {
    try {
      const r = node.ownerDocument.createRange();
      r.setStart(node, start);
      r.setEnd(node, end);
      const rect = r.getClientRects()[0] || r.getBoundingClientRect();
      return rect && (rect.width > 0 || rect.height > 0) ? rect : null;
    } catch {
      return null;
    }
  }
  __name(rangeRect, "rangeRect");
  function synthesizeClick(target, x, y, opts = {}) {
    const shift = !!opts.shift;
    const mouse = { bubbles: true, cancelable: true, composed: true, view: window, clientX: x, clientY: y, button: 0, buttons: 1, shiftKey: shift };
    const pointer = { ...mouse, pointerId: 1, pointerType: "mouse", isPrimary: true };
    const hasPointer = typeof PointerEvent === "function";
    const activates = !!(target.closest && target.closest(NO_CLICK_RUN_SEL));
    if (hasPointer) target.dispatchEvent(new PointerEvent("pointerdown", pointer));
    target.dispatchEvent(new MouseEvent("mousedown", mouse));
    if (hasPointer) target.dispatchEvent(new PointerEvent("pointerup", { ...pointer, buttons: 0 }));
    target.dispatchEvent(new MouseEvent("mouseup", { ...mouse, buttons: 0 }));
    if (!activates) target.dispatchEvent(new MouseEvent("click", { ...mouse, buttons: 0 }));
  }
  __name(synthesizeClick, "synthesizeClick");
  function placeCaretAt(node, offset) {
    const parent = node.parentElement;
    if (!parent) return false;
    const len = node.data.length;
    const rect = offset < len ? rangeRect(node, offset, offset + 1) : len > 0 ? rangeRect(node, len - 1, len) : null;
    if (!rect) return false;
    const x = offset < len ? rect.left + 1 : rect.right - 1;
    synthesizeClick(parent, x, rect.top + rect.height / 2);
    return true;
  }
  __name(placeCaretAt, "placeCaretAt");
  function selectTextRange(node, start, end) {
    const parent = node.parentElement;
    if (!parent || end <= start) return false;
    const first = rangeRect(node, start, start + 1);
    const last = rangeRect(node, end - 1, end);
    if (!first || !last) return false;
    synthesizeClick(parent, first.left + 1, first.top + first.height / 2);
    synthesizeClick(parent, last.right - 1, last.top + last.height / 2, { shift: true });
    return true;
  }
  __name(selectTextRange, "selectTextRange");
  function selectionOverlayRects(panelEl) {
    const scope = panelEl.closest(".panel") || panelEl;
    return Array.from(scope.querySelectorAll(SELECTION_OVERLAY_SEL)).map((el3) => el3.getBoundingClientRect()).filter((r) => r.width > 0.5 && r.height > 0.5);
  }
  __name(selectionOverlayRects, "selectionOverlayRects");
  function readThymerSelection(panelEl) {
    const rects = selectionOverlayRects(panelEl);
    if (!rects.length) return null;
    const doc = panelEl.ownerDocument;
    const r0 = rects[0];
    const r1 = rects[rects.length - 1];
    const a = textPositionAtPoint(r0.left + 1, r0.top + r0.height / 2, doc);
    const b = textPositionAtPoint(r1.right - 1, r1.top + r1.height / 2, doc);
    if (!a || !b) return { multi: true };
    if (a.node !== b.node) return { multi: true };
    const row = a.node.parentElement && a.node.parentElement.closest(LISTITEM_SEL);
    if (!(row instanceof HTMLElement)) return null;
    const start = snapBoundary(a.node, a.offset, r0.left, "left");
    const end = snapBoundary(b.node, b.offset, r1.right, "right");
    if (end <= start) return null;
    const text = a.node.data.slice(start, end);
    if (!text) return null;
    return { text, node: a.node, start, end, row };
  }
  __name(readThymerSelection, "readThymerSelection");
  function snapBoundary(node, offset, edgeX, side) {
    const len = node.data.length;
    let best = Math.max(0, Math.min(offset, len));
    let bestD = Infinity;
    for (const c of [offset, offset - 1, offset + 1]) {
      if (c < 0 || c > len) continue;
      const rect = side === "left" ? c < len ? rangeRect(node, c, c + 1) : null : c > 0 ? rangeRect(node, c - 1, c) : null;
      if (!rect) continue;
      const d = Math.abs((side === "left" ? rect.left : rect.right) - edgeX);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }
  __name(snapBoundary, "snapBoundary");
  var WORD_CHAR = /[\p{L}\p{N}_]/u;
  function wordAt(node, offset) {
    const s = node.data;
    if (!s) return null;
    let start = Math.min(offset, s.length);
    let end = start;
    while (start > 0 && WORD_CHAR.test(s[start - 1])) start--;
    while (end < s.length && WORD_CHAR.test(s[end])) end++;
    if (end <= start) return null;
    return { start, end, text: s.slice(start, end) };
  }
  __name(wordAt, "wordAt");
  function wordAtThymerCaret(doc = document) {
    const caret = thymerCaretEl(doc);
    if (!caret) return null;
    const y = caret.rect.top + caret.rect.height / 2;
    const pos = textPositionAtPoint(caret.rect.left + 1, y, doc) || textPositionAtPoint(caret.rect.left - 1, y, doc);
    if (!pos) return null;
    const w = wordAt(pos.node, pos.offset);
    if (!w) return null;
    const row = pos.node.parentElement && pos.node.parentElement.closest(LISTITEM_SEL);
    if (!(row instanceof HTMLElement)) return null;
    return { text: w.text, node: pos.node, start: w.start, end: w.end, row };
  }
  __name(wordAtThymerCaret, "wordAtThymerCaret");

  // ../../shared/line-segments.js
  var STRING_SEGMENT_TYPES = /* @__PURE__ */ new Set(["text", "bold", "italic", "code"]);
  function segmentDisplayText(seg) {
    if (!seg) return "";
    const t = seg.text;
    if (typeof t === "string") return t;
    if (t && typeof t === "object") {
      if (typeof t.title === "string" && t.title) return t.title;
      if (typeof t.link === "string") return t.link;
      if (typeof t.text === "string") return t.text;
    }
    return "";
  }
  __name(segmentDisplayText, "segmentDisplayText");

  // matches.js
  var WORD = "[\\p{L}\\p{N}_]";
  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  __name(escapeRegExp, "escapeRegExp");
  function buildMatcher(query, flags) {
    if (!query) return null;
    const body = flags.wholeWord ? `(?<!${WORD})${escapeRegExp(query)}(?!${WORD})` : escapeRegExp(query);
    try {
      return new RegExp(body, flags.caseSensitive ? "gu" : "giu");
    } catch {
      return null;
    }
  }
  __name(buildMatcher, "buildMatcher");
  function findInText(text, query, flags) {
    const re = buildMatcher(query, flags);
    if (!re) return [];
    const out = [];
    for (const m of text.matchAll(re)) {
      if (m[0].length === 0) continue;
      out.push({ start: m.index, end: m.index + m[0].length });
    }
    return out;
  }
  __name(findInText, "findInText");
  function findInRuns(runs, query, flags) {
    const joined = runs.map((r) => r.text).join("");
    const hits = findInText(joined, query, flags);
    if (!hits.length) return [];
    const starts = [];
    let acc = 0;
    for (const r of runs) {
      starts.push(acc);
      acc += r.text.length;
    }
    const runIndexAt = /* @__PURE__ */ __name((pos) => {
      let i = starts.length - 1;
      while (i > 0 && starts[i] > pos) i--;
      return i;
    }, "runIndexAt");
    return hits.map((h2) => {
      const ri = runIndexAt(h2.start);
      const local = h2.start - starts[ri];
      const inside = h2.end <= starts[ri] + runs[ri].text.length;
      return {
        run: ri,
        start: local,
        end: inside ? h2.end - starts[ri] : runs[ri].text.length,
        replaceable: inside && !!runs[ri].replaceable,
        text: joined.slice(h2.start, h2.end)
      };
    });
  }
  __name(findInRuns, "findInRuns");
  function editableText(seg) {
    if (!seg) return null;
    if (STRING_SEGMENT_TYPES.has(seg.type) && typeof seg.text === "string") return seg.text;
    if (seg.type === "hashtag" && typeof seg.text === "string") return seg.text;
    if (seg.type === "linkobj" && seg.text && typeof seg.text === "object" && typeof seg.text.title === "string") return seg.text.title;
    return null;
  }
  __name(editableText, "editableText");
  function withEditableText(seg, next) {
    if (seg && seg.type === "linkobj" && seg.text && typeof seg.text === "object") {
      return { ...seg, text: { ...seg.text, title: next } };
    }
    return { ...seg, text: next };
  }
  __name(withEditableText, "withEditableText");
  function segmentToRun(seg) {
    return { text: segmentDisplayText(seg), replaceable: editableText(seg) !== null };
  }
  __name(segmentToRun, "segmentToRun");
  function countInSegments(segments, query, flags) {
    const ms = findInRuns(segments.map(segmentToRun), query, flags);
    return { total: ms.length, replaceable: ms.filter((m) => m.replaceable).length };
  }
  __name(countInSegments, "countInSegments");
  function replaceInSegments(segments, query, replacement, flags) {
    const ms = findInRuns(segments.map(segmentToRun), query, flags);
    const out = segments.map((s) => ({ ...s }));
    let replaced = 0, skipped = 0;
    for (let i = ms.length - 1; i >= 0; i--) {
      const m = ms[i];
      if (!m.replaceable) {
        skipped++;
        continue;
      }
      const cur = editableText(out[m.run]);
      if (cur === null) {
        skipped++;
        continue;
      }
      out[m.run] = withEditableText(out[m.run], cur.slice(0, m.start) + replacement + cur.slice(m.end));
      replaced++;
    }
    return { segments: out, replaced, skipped };
  }
  __name(replaceInSegments, "replaceInSegments");
  function replaceInSegmentsAtOrdinals(segments, query, replacement, flags, ordinals) {
    const ms = findInRuns(segments.map(segmentToRun), query, flags).filter((m) => m.replaceable);
    const out = segments.map((s) => ({ ...s }));
    const chosen = ms.filter((_, i) => ordinals.has(i));
    chosen.sort((a, b) => a.run !== b.run ? b.run - a.run : b.start - a.start);
    const fn = typeof replacement === "function" ? replacement : () => replacement;
    let replaced = 0;
    for (const m of chosen) {
      const cur = editableText(out[m.run]);
      if (cur === null) continue;
      out[m.run] = withEditableText(out[m.run], cur.slice(0, m.start) + fn(m.text) + cur.slice(m.end));
      replaced++;
    }
    return { segments: out, replaced };
  }
  __name(replaceInSegmentsAtOrdinals, "replaceInSegmentsAtOrdinals");

  // highlight.js
  var HL_ALL = "fnr-all";
  var HL_CURRENT = "fnr-current";
  var HL_SKIPPED = "fnr-skipped";
  function highlightsSupported() {
    try {
      return typeof CSS !== "undefined" && !!CSS.highlights && typeof Highlight === "function";
    } catch {
      return false;
    }
  }
  __name(highlightsSupported, "highlightsSupported");
  function setHighlight(name, ranges) {
    if (!highlightsSupported()) return;
    if (!ranges.length) {
      CSS.highlights.delete(name);
      return;
    }
    CSS.highlights.set(name, new Highlight(...ranges));
  }
  __name(setHighlight, "setHighlight");
  function paintHighlights(layers) {
    setHighlight(HL_ALL, layers.all);
    setHighlight(HL_CURRENT, layers.current);
    setHighlight(HL_SKIPPED, layers.skipped);
  }
  __name(paintHighlights, "paintHighlights");
  function clearHighlights() {
    if (!highlightsSupported()) return;
    CSS.highlights.delete(HL_ALL);
    CSS.highlights.delete(HL_CURRENT);
    CSS.highlights.delete(HL_SKIPPED);
  }
  __name(clearHighlights, "clearHighlights");
  function rangeFor(node, start, end) {
    try {
      if (!node.isConnected || end > node.data.length) return null;
      const r = node.ownerDocument.createRange();
      r.setStart(node, start);
      r.setEnd(node, end);
      return r;
    } catch {
      return null;
    }
  }
  __name(rangeFor, "rangeFor");
  function highlightCSS(colors) {
    return `
::highlight(${HL_ALL}) {
	background-color: color-mix(in srgb, ${colors.matchColor} 28%, transparent);
}
::highlight(${HL_CURRENT}) {
	background-color: color-mix(in srgb, ${colors.currentColor} 55%, transparent);
	text-decoration: underline;
	text-decoration-color: ${colors.currentColor};
	text-decoration-thickness: 2px;
}
::highlight(${HL_SKIPPED}) {
	background-color: color-mix(in srgb, ${colors.matchColor} 12%, transparent);
	text-decoration: underline dotted;
	text-decoration-color: color-mix(in srgb, ${colors.matchColor} 60%, transparent);
}
`;
  }
  __name(highlightCSS, "highlightCSS");

  // session.js
  var OWN_CHROME_SEL = ".listview-selections, .listview-carets, .listview-caret-self, .listview-overlaybuttons, .text-selection-self";
  function rowTextNodes(row) {
    const line = row.querySelector(`:scope > ${LINE_SEL}`) || row.querySelector(LINE_SEL);
    if (!line) return [];
    const walker = row.ownerDocument.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    const out = [];
    let n;
    while (n = walker.nextNode()) {
      const t = (
        /** @type {Text} */
        n
      );
      if (!t.data) continue;
      const parent = t.parentElement;
      if (!parent) continue;
      if (parent.closest(DERIVED_RUN_SEL)) {
        out.push({ node: t, replaceable: false, navigable: false });
        continue;
      }
      if (parent.closest(SPECIAL_EDITABLE_RUN_SEL)) {
        out.push({ node: t, replaceable: true, navigable: true });
        continue;
      }
      const plain = !!parent.closest(REPLACEABLE_RUN_SEL) || parent === line;
      out.push({ node: t, replaceable: plain, navigable: plain });
    }
    return out;
  }
  __name(rowTextNodes, "rowTextNodes");
  function scanRow(row, query, flags) {
    const guid = row.getAttribute("data-guid") || "";
    const nodes = rowTextNodes(row);
    if (!nodes.length) return [];
    const ms = findInRuns(nodes.map((n) => ({ text: n.node.data, replaceable: n.replaceable })), query, flags);
    return ms.map((m) => ({ node: nodes[m.run].node, start: m.start, end: m.end, replaceable: m.replaceable, navigable: m.replaceable && nodes[m.run].navigable, guid, row }));
  }
  __name(scanRow, "scanRow");
  var OccurrenceSession = class {
    static {
      __name(this, "OccurrenceSession");
    }
    /**
     * @param {SessionHost} host
     * @param {{ mode: SessionMode, query: string, flags: MatchFlags, wrap: boolean }} init
     */
    constructor(host, init) {
      this.host = host;
      this.mode = init.mode;
      this.query = init.query;
      this.flags = { ...init.flags };
      this.wrap = init.wrap;
      this.rows = /* @__PURE__ */ new Map();
      this.current = null;
      this.selected = [];
      this.stepping = false;
      this.sdkTotal = 0;
      this.sdkReplaceable = 0;
      this.suppressUntil = 0;
      this.ended = false;
      this.observer = null;
      this.supported = highlightsSupported();
      this.observe();
    }
    /* ── scanning ─────────────────────────────────────────────────────── */
    /** Full rescan of the panel's rendered rows. */
    rescan() {
      this.rows = /* @__PURE__ */ new Map();
      if (this.query) {
        for (const row of this.host.panelEl.querySelectorAll(LISTITEM_SEL)) {
          if (!(row instanceof HTMLElement)) continue;
          const ms = scanRow(row, this.query, this.flags);
          if (ms.length) this.rows.set(row.getAttribute("data-guid") || "", ms);
        }
      }
      this.reconcileCurrent();
      this.paint();
      void this.refreshSdkCounts();
    }
    /** Rescan one row (a keystroke landed in it). @param {HTMLElement} row */
    rescanRow(row) {
      const guid = row.getAttribute("data-guid") || "";
      const ms = this.query ? scanRow(row, this.query, this.flags) : [];
      if (ms.length) this.rows.set(guid, ms);
      else this.rows.delete(guid);
      this.reconcileCurrent();
      this.paint();
    }
    /** All matches in DOM order. */
    all() {
      const out = [];
      for (const row of this.host.panelEl.querySelectorAll(LISTITEM_SEL)) {
        const ms = this.rows.get(row.getAttribute("data-guid") || "");
        if (ms) out.push(...ms);
      }
      return out;
    }
    /** Re-point `current` and the selected set at live matches after a rescan. */
    reconcileCurrent() {
      const relink = /* @__PURE__ */ __name((c) => {
        const ms = this.rows.get(c.guid) || [];
        return ms.find((m) => m.node === c.node && m.start === c.start) || ms.find((m) => m.start === c.start) || null;
      }, "relink");
      if (this.selected.length) {
        this.selected = this.selected.map(relink).filter((m) => !!m);
        this.current = this.selected[this.selected.length - 1] || null;
        return;
      }
      if (this.current) this.current = relink(this.current);
    }
    /** True once this match's (guid,node,start) is already in the selection. */
    isSelected(m) {
      return this.selected.some((x) => x.guid === m.guid && x.node === m.node && x.start === m.start);
    }
    /**
     * The matches ⌘D visits: every editable run — plain/bold/italic/code plus a
     * link's label and a hashtag's text. Bare URLs, refs, mentions and dates are
     * derived from something else, so they are painted dim and never touched.
     */
    navMatches() {
      return this.all().filter((m) => m.navigable);
    }
    get total() {
      return this.navMatches().length;
    }
    get selectedCount() {
      return this.selected.length;
    }
    get skipped() {
      return this.all().filter((m) => !m.replaceable).length;
    }
    get unrendered() {
      return Math.max(0, this.sdkReplaceable - this.total);
    }
    get currentIndex() {
      if (!this.current) return 0;
      const i = this.navMatches().indexOf(this.current);
      return i < 0 ? 0 : i + 1;
    }
    /* ── painting ─────────────────────────────────────────────────────── */
    paint() {
      if (this.ended) return;
      if (this.mode === "select") {
        const all2 = [], current2 = [];
        for (let k = 0; k < this.selected.length; k++) {
          const m = this.selected[k];
          const r = rangeFor(m.node, m.start, m.end);
          if (!r) continue;
          if (k === this.selected.length - 1) current2.push(r);
          else all2.push(r);
        }
        paintHighlights({ all: all2, current: current2, skipped: [] });
        this.host.onChange();
        return;
      }
      const all = [], skipped = [], current = [];
      for (const m of this.all()) {
        const r = rangeFor(m.node, m.start, m.end);
        if (!r) continue;
        if (m === this.current) current.push(r);
        else if (m.replaceable) all.push(r);
        else skipped.push(r);
      }
      paintHighlights({ all, current, skipped });
      this.host.onChange();
    }
    /* ── observing ────────────────────────────────────────────────────── */
    observe() {
      this.observer = new MutationObserver((muts) => {
        if (this.ended) return;
        const touched = /* @__PURE__ */ new Set();
        let structural = false;
        for (const m of muts) {
          const t = m.target;
          const el3 = t instanceof Element ? t : t.parentElement;
          if (el3 && el3.closest && el3.closest(OWN_CHROME_SEL)) continue;
          const row = el3 && el3.closest ? el3.closest(LISTITEM_SEL) : null;
          if (row instanceof HTMLElement) {
            touched.add(row);
          } else if (m.type === "childList" && (m.addedNodes.length || m.removedNodes.length)) {
            structural = true;
          }
        }
        if (structural) {
          this.rescan();
          return;
        }
        for (const row of touched) this.rescanRow(row);
      });
      this.observer.observe(this.host.panelEl, { childList: true, subtree: true, characterData: true });
    }
    /* ── navigation ───────────────────────────────────────────────────── */
    /**
     * Where Thymer's caret actually is, as a text position inside this panel —
     * or null if it can't be read. This is what makes ⌘G resume from wherever you
     * were last editing rather than from a stale `current`.
     * @returns {{ node: Text, offset: number } | null}
     */
    caretAnchor() {
      try {
        const caret = thymerCaretEl();
        if (!caret) return null;
        const pos = textPositionAtPoint(caret.rect.left + 1, caret.rect.top + caret.rect.height / 2);
        if (!pos || !pos.node.parentElement) return null;
        return this.host.panelEl.contains(pos.node.parentElement) ? pos : null;
      } catch {
        return null;
      }
    }
    /**
     * Where a match sits relative to the caret: -1 it ends before, 1 it starts
     * after, 0 the caret is inside it.
     * @param {DomMatch} m @param {{ node: Text, offset: number }} anchor @returns {-1 | 0 | 1}
     */
    positionVsCaret(m, anchor) {
      if (m.node === anchor.node) {
        if (m.end <= anchor.offset) return -1;
        if (m.start >= anchor.offset) return 1;
        return 0;
      }
      let rel = 0;
      try {
        rel = anchor.node.compareDocumentPosition(m.node);
      } catch {
        return 0;
      }
      if (rel & Node.DOCUMENT_POSITION_FOLLOWING) return 1;
      if (rel & Node.DOCUMENT_POSITION_PRECEDING) return -1;
      return 0;
    }
    /**
     * Move `current` to the next/previous match, make it Thymer's real selection
     * and scroll it into view. This is the ⌘G mover and find-mode's Enter.
     * @param {1 | -1} dir @returns {boolean}
     */
    step(dir) {
      const list = this.navMatches();
      if (!list.length) return false;
      let next = -1;
      const anchor = Date.now() >= this.suppressUntil ? this.caretAnchor() : null;
      if (anchor) {
        if (dir > 0) {
          next = list.findIndex((m) => this.positionVsCaret(m, anchor) === 1);
          if (next < 0) {
            if (!this.wrap) return false;
            next = 0;
          }
        } else {
          for (let k = list.length - 1; k >= 0; k--) {
            if (this.positionVsCaret(list[k], anchor) === -1) {
              next = k;
              break;
            }
          }
          if (next < 0) {
            if (!this.wrap) return false;
            next = list.length - 1;
          }
        }
      } else {
        let i = this.current ? list.indexOf(this.current) : -1;
        if (i < 0) {
          const caretRow = this.host.panelEl.querySelector(".listitem.listitem-with-caret[data-guid]");
          const at = caretRow ? list.findIndex((m) => m.row === caretRow) : -1;
          i = dir > 0 ? at >= 0 ? at - 1 : -1 : at >= 0 ? at + 1 : list.length;
        }
        next = i + dir;
        if (next < 0 || next >= list.length) {
          if (!this.wrap) return false;
          next = (next + list.length) % list.length;
        }
      }
      if (this.mode === "select") this.selected = [list[next]];
      this.stepping = true;
      this.setCurrent(list[next]);
      return true;
    }
    /**
     * Seed the accumulating selection with the first occurrence (⌘D from a word
     * or caret). `m` must be a live match in the current scan.
     * @param {DomMatch} m
     */
    seedSelection(m) {
      this.stepping = false;
      this.selected = m && m.replaceable ? [m] : [];
      this.current = this.selected[0] || null;
      if (this.current) this.setCurrent(this.current);
      else this.paint();
    }
    /**
     * ⌘D: add the next occurrence after the last one added (document order,
     * wrapping), skipping already-selected ones. ⌥⌘D (dir -1) removes the most
     * recently added instead. Returns false when nothing changed.
     * @param {1 | -1} dir @returns {boolean}
     */
    addNext(dir) {
      this.stepping = false;
      if (dir < 0) return this.removeLast();
      const list = this.navMatches();
      if (!list.length) return false;
      if (!this.selected.length) {
        this.seedSelection(list[0]);
        return true;
      }
      const last = this.selected[this.selected.length - 1];
      let i = list.indexOf(last);
      if (i < 0) i = 0;
      for (let step = 1; step <= list.length; step++) {
        let j = i + step;
        if (j >= list.length) {
          if (!this.wrap) break;
          j -= list.length;
        }
        const cand = list[j];
        if (!this.isSelected(cand)) {
          this.selected.push(cand);
          this.setCurrent(cand);
          return true;
        }
      }
      return false;
    }
    /** Remove the most recently added occurrence. Returns false when the set empties. */
    removeLast() {
      if (this.selected.length <= 1) {
        this.selected = [];
        this.current = null;
        this.paint();
        return false;
      }
      this.selected.pop();
      this.current = this.selected[this.selected.length - 1];
      this.setCurrent(this.current);
      return true;
    }
    /** @param {DomMatch} m */
    setCurrent(m) {
      this.current = m;
      this.suppressUntil = Date.now() + 500;
      try {
        m.row.scrollIntoView({ block: "nearest" });
      } catch {
      }
      requestAnimationFrame(() => {
        if (this.ended || this.current !== m) return;
        selectTextRange(m.node, m.start, m.end);
        this.suppressUntil = Date.now() + 500;
        if (this.host.onReposition) this.host.onReposition();
      });
      this.paint();
    }
    /**
     * The box the chip must keep clear of. With a ⌘D selection running that's the
     * union of EVERY selected match's row, so the chip can sit below the lowest
     * one and cover none of them; otherwise it's just the current match's row.
     * @returns {DOMRect | null}
     */
    anchorRect() {
      let list = [];
      if (this.mode === "select" && this.selected.length) list = this.selected.slice();
      else list = this.all();
      if (!list.length && this.current) list = [this.current];
      if (!list.length) return null;
      const vh = window.innerHeight;
      const rows = /* @__PURE__ */ new Set();
      for (const m of list) rows.add(m.row);
      let top = Infinity, bottom = -Infinity, left = Infinity, right = -Infinity;
      for (const row of rows) {
        let r;
        try {
          r = row.getBoundingClientRect();
        } catch {
          continue;
        }
        if (!r || !r.width && !r.height) continue;
        if (r.bottom < 0 || r.top > vh) continue;
        top = Math.min(top, r.top);
        bottom = Math.max(bottom, r.bottom);
        left = Math.min(left, r.left);
        right = Math.max(right, r.right);
      }
      if (!Number.isFinite(top)) {
        const m = this.current || list[0];
        try {
          return m ? m.row.getBoundingClientRect() : null;
        } catch {
          return null;
        }
      }
      return (
        /** @type {DOMRect} */
        /** @type {unknown} */
        {
          x: left,
          y: top,
          left,
          top,
          right,
          bottom,
          width: right - left,
          height: bottom - top,
          toJSON() {
            return this;
          }
        }
      );
    }
    /* ── SDK side ─────────────────────────────────────────────────────── */
    /** Every line item of the record, flat (folded/unrendered rows included). */
    async lineItems() {
      const rec = this.host.getRecord();
      if (!rec) return [];
      try {
        const items = await rec.getLineItems(false);
        return Array.isArray(items) ? items : [];
      } catch {
        return [];
      }
    }
    async refreshSdkCounts() {
      if (!this.query) {
        this.sdkTotal = 0;
        this.sdkReplaceable = 0;
        return;
      }
      const q = this.query, flags = { ...this.flags };
      const items = await this.lineItems();
      if (this.ended || q !== this.query) return;
      let total = 0, replaceable = 0;
      for (const it of items) {
        const c = countInSegments(it.segments || [], q, flags);
        total += c.total;
        replaceable += c.replaceable;
      }
      this.sdkTotal = total;
      this.sdkReplaceable = replaceable;
      this.host.onChange();
    }
    /**
     * Rewrite every replaceable match in the record. Returns the undo snapshot
     * (original segments per guid) plus counts; null if nothing was written.
     * @param {string} replacement
     * @returns {Promise<{ snapshot: { guid: string, segments: any[] }[], replaced: number, skipped: number, lines: number, failed: number } | null>}
     */
    async replaceAll(replacement) {
      const q = this.query, flags = { ...this.flags };
      const items = await this.lineItems();
      if (this.ended) return null;
      const writes = [];
      let skipped = 0;
      for (const it of items) {
        const segs = Array.isArray(it.segments) ? it.segments : [];
        const r = replaceInSegments(segs, q, replacement, flags);
        skipped += r.skipped;
        if (r.replaced > 0) writes.push({ item: it, next: r.segments, replaced: r.replaced, skipped: r.skipped });
      }
      if (!writes.length) return { snapshot: [], replaced: 0, skipped, lines: 0, failed: 0 };
      this.pause();
      const snapshot = writes.map((w) => ({ guid: w.item.guid, segments: JSON.parse(JSON.stringify(w.item.segments)) }));
      const results = await Promise.all(writes.map((w) => Promise.resolve(w.item.setSegments(w.next)).catch(() => false)));
      const failed = results.filter((ok) => !ok).length;
      const replaced = writes.reduce((n, w, i) => n + (results[i] ? w.replaced : 0), 0);
      return { snapshot, replaced, skipped, lines: writes.length - failed, failed };
    }
    /**
     * Rewrite only the current match, then step to the next one.
     * @param {string} replacement @returns {Promise<{ guid: string, segments: any[] } | null>}
     */
    async replaceCurrent(replacement) {
      const m = this.current;
      if (!m || !m.replaceable) return null;
      const items = await this.lineItems();
      if (this.ended) return null;
      const item = items.find((it) => it.guid === m.guid);
      if (!item) return null;
      const ordinal = (this.rows.get(m.guid) || []).filter((x) => x.replaceable).indexOf(m);
      const segs = Array.isArray(item.segments) ? item.segments : [];
      const r = replaceOrdinalInSegments(segs, this.query, replacement, this.flags, ordinal);
      if (!r) return null;
      const snapshot = { guid: item.guid, segments: JSON.parse(JSON.stringify(segs)) };
      this.suppressUntil = Date.now() + 800;
      const ok = await Promise.resolve(item.setSegments(r)).catch(() => false);
      if (!ok) return null;
      return snapshot;
    }
    /**
     * Replace exactly the occurrences in the accumulating ⌘D selection (select
     * mode), not every match of the query. Same write/undo shape as replaceAll.
     * @param {string | ((matchText: string) => string)} replacement
     * @returns {Promise<{ snapshot: { guid: string, segments: any[] }[], replaced: number, lines: number, failed: number } | null>}
     */
    async replaceSelected(replacement) {
      if (!this.selected.length) return null;
      const items = await this.lineItems();
      if (this.ended) return null;
      const byGuid = /* @__PURE__ */ new Map();
      for (const m of this.selected) {
        if (!m.replaceable) continue;
        const ord = (this.rows.get(m.guid) || []).filter((x) => x.replaceable).indexOf(m);
        if (ord < 0) continue;
        if (!byGuid.has(m.guid)) byGuid.set(m.guid, /* @__PURE__ */ new Set());
        (byGuid.get(m.guid) || /* @__PURE__ */ new Set()).add(ord);
      }
      if (!byGuid.size) return { snapshot: [], replaced: 0, lines: 0, failed: 0 };
      this.pause();
      const writes = [];
      for (const [guid, ords] of byGuid) {
        const item = items.find((it) => it.guid === guid);
        if (!item) continue;
        const r = replaceInSegmentsAtOrdinals(item.segments || [], this.query, replacement, this.flags, ords);
        if (r.replaced > 0) writes.push({ item, next: r.segments, replaced: r.replaced });
      }
      if (!writes.length) return { snapshot: [], replaced: 0, lines: 0, failed: 0 };
      const snapshot = writes.map((w) => ({ guid: w.item.guid, segments: JSON.parse(JSON.stringify(w.item.segments)) }));
      const results = await Promise.all(writes.map((w) => Promise.resolve(w.item.setSegments(w.next)).catch(() => false)));
      const failed = results.filter((ok) => !ok).length;
      const replaced = writes.reduce((n, w, i) => n + (results[i] ? w.replaced : 0), 0);
      return { snapshot, replaced, lines: writes.length - failed, failed };
    }
    /* ── lifecycle ────────────────────────────────────────────────────── */
    /** Stop observing and painting, keep state (used around bulk writes). */
    pause() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      clearHighlights();
    }
    end() {
      if (this.ended) return;
      this.ended = true;
      this.pause();
      this.rows = /* @__PURE__ */ new Map();
      this.current = null;
      this.selected = [];
      this.host.onEnd();
    }
  };
  function replaceOrdinalInSegments(segments, query, replacement, flags, ordinal) {
    if (ordinal < 0) return null;
    const ms = findInRuns(segments.map(segmentToRun), query, flags).filter((m2) => m2.replaceable);
    const m = ms[ordinal];
    if (!m) return null;
    const out = segments.map((s) => ({ ...s }));
    const seg = out[m.run];
    seg.text = seg.text.slice(0, m.start) + replacement + seg.text.slice(m.end);
    return out;
  }
  __name(replaceOrdinalInSegments, "replaceOrdinalInSegments");

  // chip.js
  var CHIP_CLASS = "fnr-chip";
  function el2(tag, cls, attrs = {}, text = "") {
    const n = document.createElement(tag);
    n.className = cls;
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (text) n.textContent = text;
    return n;
  }
  __name(el2, "el");
  function createChip(h2) {
    const root = el2("div", CHIP_CLASS, { role: "toolbar", "aria-label": "Find and Replace" });
    root.hidden = true;
    const rail = el2("div", "fnr-rail");
    const caseBtn = el2("button", "fnr-tgl", { type: "button", title: "Match case", "aria-pressed": "false" }, "Aa");
    const wordBtn = el2("button", "fnr-tgl", { type: "button", title: "Whole word", "aria-pressed": "false" }, "ab|");
    rail.append(caseBtn, wordBtn);
    const query = (
      /** @type {HTMLInputElement} */
      el2("input", "fnr-field fnr-find", { type: "text", placeholder: "Find\u2026", "aria-label": "Find", spellcheck: "false", autocomplete: "off" })
    );
    const closeBtn = el2("button", "fnr-close", { type: "button", tabindex: "-1", title: "Close (Esc)", "aria-label": "Close" }, "\xD7");
    const replace = (
      /** @type {HTMLInputElement} */
      el2("input", "fnr-field fnr-replace", { type: "text", placeholder: "Replace\u2026", "aria-label": "Replace with", spellcheck: "false", autocomplete: "off" })
    );
    const allBtn = (
      /** @type {HTMLButtonElement} */
      el2("button", "fnr-all", { type: "button", title: "Replace all matches", "aria-label": "Replace all matches" })
    );
    allBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"></path></svg>';
    const status = el2("div", "fnr-status");
    const hints = el2("div", "fnr-hints");
    const cmdNextBtn = el2("button", "fnr-hint-btn", { type: "button", tabindex: "-1", title: "Add the next occurrence to the selection" });
    const cmdNextKey = el2("span", "fnr-hint-key");
    cmdNextBtn.append(el2("span", "fnr-hint-label", {}, "Next"), cmdNextKey);
    const cmdAllBtn = el2("button", "fnr-hint-btn", { type: "button", tabindex: "-1", title: "Select every occurrence" });
    const cmdAllKey = el2("span", "fnr-hint-key");
    cmdAllBtn.append(el2("span", "fnr-hint-label", {}, "All"), cmdAllKey);
    hints.append(cmdNextBtn, cmdAllBtn);
    const count = el2("div", "fnr-count", { "aria-live": "polite" });
    status.append(hints, count);
    const measure = el2("span", "fnr-measure");
    root.append(rail, query, replace, allBtn, closeBtn, status, measure);
    let state = { mode: "find", query: "", current: 0, replaceCount: 0, matchCount: 0, stepping: false, caseSensitive: false, wholeWord: false, supported: true, shortcuts: { next: "", prev: "", all: "", find: "" } };
    const FIELD_BASE = 300, FIELD_MAX = 560;
    function autosize() {
      const widest = Math.max(
        textWidth(query.value || query.placeholder || ""),
        textWidth(replace.value || replace.placeholder || "")
      );
      const want = Math.max(FIELD_BASE, Math.min(FIELD_MAX, widest + 28));
      root.style.setProperty("--fnr-field", Math.round(want) + "px");
    }
    __name(autosize, "autosize");
    function textWidth(text) {
      measure.textContent = text;
      return measure.offsetWidth;
    }
    __name(textWidth, "textWidth");
    caseBtn.addEventListener("click", () => h2.onToggleCase());
    wordBtn.addEventListener("click", () => h2.onToggleWord());
    closeBtn.addEventListener("click", () => h2.onClose());
    allBtn.addEventListener("click", () => h2.onReplaceAll(replace.value));
    query.addEventListener("input", () => {
      autosize();
      h2.onQuery(query.value);
    });
    replace.addEventListener("input", () => autosize());
    cmdNextBtn.addEventListener("click", () => h2.onCommand("next"));
    cmdAllBtn.addEventListener("click", () => h2.onCommand("all"));
    root.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        ev.preventDefault();
        ev.stopPropagation();
        h2.onClose();
        return;
      }
      const t = (
        /** @type {HTMLElement} */
        ev.target
      );
      if (t && t.tagName === "BUTTON" && (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar")) {
        ev.stopPropagation();
        ev.preventDefault();
        t.click();
        return;
      }
      if (ev.key !== "Enter") return;
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.target === replace) {
        if (ev.metaKey || ev.ctrlKey || state.mode === "all" || state.mode === "select") h2.onReplaceAll(replace.value);
        else h2.onReplaceOne(replace.value);
        return;
      }
      if (ev.shiftKey) h2.onPrev();
      else h2.onNext();
    });
    root.addEventListener("mousedown", (ev) => {
      const t = (
        /** @type {HTMLElement} */
        ev.target
      );
      if (!(t && t.tagName === "INPUT")) ev.preventDefault();
    });
    let moved = false;
    let drag = null;
    const MARGIN = 8;
    root.addEventListener("pointerdown", (ev) => {
      const t = (
        /** @type {HTMLElement} */
        ev.target
      );
      if (t && (t.tagName === "INPUT" || t.closest && t.closest("button"))) return;
      const r = root.getBoundingClientRect();
      drag = { dx: ev.clientX - r.left, dy: ev.clientY - r.top, id: ev.pointerId };
      try {
        root.setPointerCapture(ev.pointerId);
      } catch {
      }
      root.classList.add("fnr-dragging");
      ev.preventDefault();
    });
    root.addEventListener("pointermove", (ev) => {
      if (!drag || ev.pointerId !== drag.id) return;
      moved = true;
      const w = root.offsetWidth, ht = root.offsetHeight;
      const left = Math.max(MARGIN, Math.min(ev.clientX - drag.dx, window.innerWidth - w - MARGIN));
      const top = Math.max(MARGIN, Math.min(ev.clientY - drag.dy, window.innerHeight - ht - MARGIN));
      root.style.left = Math.round(left) + "px";
      root.style.top = Math.round(top) + "px";
    });
    const endDrag = /* @__PURE__ */ __name((ev) => {
      if (!drag) return;
      try {
        root.releasePointerCapture(drag.id);
      } catch {
      }
      drag = null;
      root.classList.remove("fnr-dragging");
    }, "endDrag");
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);
    function update(next) {
      state = next;
      root.dataset.mode = next.mode;
      if (query.value !== next.query && document.activeElement !== query) query.value = next.query;
      caseBtn.classList.toggle("on", next.caseSensitive);
      caseBtn.setAttribute("aria-pressed", String(next.caseSensitive));
      wordBtn.classList.toggle("on", next.wholeWord);
      wordBtn.setAttribute("aria-pressed", String(next.wholeWord));
      var x = next.replaceCount, y = next.matchCount;
      const positional = next.mode === "find" || next.stepping;
      if (y === 0) count.textContent = next.query ? "No matches" : "\u2014";
      else if (positional) count.textContent = `${next.current || "\u2013"} of ${y}`;
      else count.textContent = `Replace ${x} in ${y}`;
      count.classList.remove("none", "skipping", "complete", "unsupported");
      if (!next.supported) {
        count.textContent = "highlighting off";
        count.classList.add("unsupported");
      } else if (y === 0) {
        if (next.query) count.classList.add("none");
      } else if (positional) count.classList.add("complete");
      else if (x === 0) count.classList.add("none");
      else if (x < y) count.classList.add("skipping");
      else count.classList.add("complete");
      var sc = next.shortcuts || {};
      cmdNextKey.textContent = sc.next ? formatCombo(sc.next) : "";
      cmdAllKey.textContent = sc.all ? formatCombo(sc.all) : "";
      allBtn.title = next.mode === "select" ? "Replace the selected occurrences" : "Replace all matches";
      allBtn.setAttribute("aria-label", allBtn.title);
      allBtn.disabled = !(x > 0);
      autosize();
    }
    __name(update, "update");
    function place(anchor, panelRect) {
      root.hidden = false;
      autosize();
      if (moved) return;
      const m = 8, gap = 6;
      const vw = window.innerWidth, vh = window.innerHeight;
      const w = root.offsetWidth || 288, ht = root.offsetHeight || 96;
      let left, top;
      if (anchor) {
        left = anchor.left;
        top = anchor.bottom + gap;
        if (left + w > vw - m) left = anchor.right - w;
        if (top + ht > vh - m) top = anchor.top - gap - ht;
      } else if (panelRect) {
        left = panelRect.right - w - 16;
        top = panelRect.top + 12;
      } else {
        left = vw - w - 16;
        top = 72;
      }
      left = Math.max(m, Math.min(left, vw - w - m));
      top = Math.max(m, Math.min(top, vh - ht - m));
      root.style.left = Math.round(left) + "px";
      root.style.top = Math.round(top) + "px";
    }
    __name(place, "place");
    function focusStep(dir) {
      const items = (
        /** @type {HTMLElement[]} */
        Array.from(root.querySelectorAll("button, input")).filter((elm) => !/** @type {HTMLButtonElement} */
        elm.disabled && elm.offsetParent !== null && elm.getAttribute("tabindex") !== "-1")
      );
      if (!items.length) return;
      const i = items.indexOf(
        /** @type {HTMLElement} */
        document.activeElement
      );
      const n = i < 0 ? dir > 0 ? 0 : items.length - 1 : (i + dir + items.length) % items.length;
      const next = items[n];
      next.focus();
      if (next.tagName === "INPUT") next.select();
    }
    __name(focusStep, "focusStep");
    function hide() {
      root.hidden = true;
      moved = false;
    }
    __name(hide, "hide");
    function focus(which, prefill, opts) {
      const input = which === "query" ? query : replace;
      if (typeof prefill === "string") input.value = prefill;
      input.focus();
      if (!opts || opts.select !== false) input.select();
    }
    __name(focus, "focus");
    function contains(node) {
      return !!node && root.contains(node);
    }
    __name(contains, "contains");
    function destroy() {
      root.remove();
    }
    __name(destroy, "destroy");
    document.body.appendChild(root);
    return { el: root, update, place, hide, focus, focusStep, contains, destroy, get query() {
      return query.value;
    }, get replacement() {
      return replace.value;
    } };
  }
  __name(createChip, "createChip");
  var CHIP_CSS = `
.${CHIP_CLASS} {
	position: fixed;
	z-index: 9000;
	display: grid;
	grid-template-columns: auto minmax(0, var(--fnr-field, 300px)) auto;
	grid-template-areas:
		"rail find close"
		"rail replace all"
		".    status status";
	column-gap: 8px;
	row-gap: 8px;
	align-items: center;
	max-width: calc(100vw - 24px);
	padding: 11px;
	border-radius: 12px;
	/* Elevation: the base surface plus a thin light wash, so the chip reads as
	   floating above the page in a dark theme without going grey in a light one.
	   Border and shadow do the rest. */
	background-color: var(--bg-default, var(--panel-bg-color, Canvas));
	background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));
	border: 1px solid var(--border-hover, rgba(127, 127, 127, 0.45));
	box-shadow:
		0 18px 44px rgba(0, 0, 0, 0.38),
		0 4px 12px rgba(0, 0, 0, 0.24),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);
	font-family: inherit;
	font-size: 12.5px;
	line-height: 1;
	color: var(--text-default, inherit);
	color-scheme: inherit;
	user-select: none;
	-webkit-user-select: none;
	cursor: grab;
	touch-action: none;
}
.${CHIP_CLASS}.fnr-dragging { cursor: grabbing; }
.${CHIP_CLASS} input { cursor: text; }
.${CHIP_CLASS} button { cursor: pointer; }
.${CHIP_CLASS}[hidden] { display: none; }
.${CHIP_CLASS} .fnr-measure {
	position: absolute; left: -9999px; top: 0;
	visibility: hidden; white-space: pre; pointer-events: none;
	font: inherit; font-size: 12.5px;
}
.${CHIP_CLASS} .fnr-rail {
	grid-area: rail;
	display: flex; flex-direction: column; gap: 6px; justify-content: center;
	padding-right: 8px; border-right: 1px solid var(--border-default, rgba(127, 127, 127, 0.25));
}
.${CHIP_CLASS} .fnr-find { grid-area: find; }
.${CHIP_CLASS} .fnr-replace { grid-area: replace; }
.${CHIP_CLASS} .fnr-all { grid-area: all; justify-self: end; }
.${CHIP_CLASS} .fnr-close { grid-area: close; justify-self: end; }
.${CHIP_CLASS} .fnr-count { grid-area: count; justify-self: end; }

.${CHIP_CLASS} .fnr-field {
	width: 100%;
	height: 30px;
	padding: 0 9px;
	font: inherit;
	font-size: 12.5px;
	color: inherit;
	background: var(--bg-hover, rgba(127, 127, 127, 0.08));
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.25));
	border-radius: 6px;
	outline: none;
	user-select: text;
	-webkit-user-select: text;
}
.${CHIP_CLASS} .fnr-field:focus { border-color: var(--logo-color, #04d1ab); box-shadow: 0 0 0 2px color-mix(in srgb, var(--logo-color, #04d1ab) 28%, transparent); }

.${CHIP_CLASS} .fnr-tgl {
	width: 100%; height: 30px; padding: 0 8px;
	display: inline-flex; align-items: center; justify-content: center;
	font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px;
	color: var(--text-muted, rgba(127, 127, 127, 0.9));
	background: transparent;
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.25));
	border-radius: 6px; cursor: pointer;
}
.${CHIP_CLASS} .fnr-tgl:hover { border-color: var(--border-hover, rgba(127, 127, 127, 0.4)); color: var(--text-default, inherit); }
.${CHIP_CLASS} .fnr-tgl.on {
	color: var(--logo-color, #04d1ab);
	border-color: var(--logo-color, #04d1ab);
	background: color-mix(in srgb, var(--logo-color, #04d1ab) 14%, transparent);
}

.${CHIP_CLASS} .fnr-all {
	height: 28px; min-width: 34px; padding: 0 10px;
	display: inline-flex; align-items: center; justify-content: center;
	color: var(--logo-color, #04d1ab);
	background: transparent; border: 1px solid var(--logo-color, #04d1ab); border-radius: 6px; cursor: pointer;
}
.${CHIP_CLASS} .fnr-all svg { display: block; }
.${CHIP_CLASS} .fnr-all:hover { background: color-mix(in srgb, var(--logo-color, #04d1ab) 14%, transparent); }
.${CHIP_CLASS} .fnr-all:disabled { opacity: 0.4; cursor: default; }
.${CHIP_CLASS} .fnr-all:disabled:hover { background: transparent; }

.${CHIP_CLASS} .fnr-close {
	height: 30px; min-width: 26px; padding: 0 6px;
	display: inline-flex; align-items: center; justify-content: center;
	font: inherit; font-size: 15px;
	color: var(--text-muted, rgba(127, 127, 127, 0.9));
	background: transparent; border: 1px solid transparent; border-radius: 6px; cursor: pointer;
}
.${CHIP_CLASS} .fnr-close:hover { color: var(--text-default, inherit); background: var(--bg-hover, rgba(127, 127, 127, 0.12)); }

.${CHIP_CLASS} .fnr-status {
	grid-area: status;
	display: flex; align-items: center; justify-content: space-between; gap: 10px; min-width: 0;
}
.${CHIP_CLASS} .fnr-hints { display: inline-flex; align-items: center; gap: 5px; min-width: 0; }
.${CHIP_CLASS} .fnr-hint-btn {
	display: inline-flex; align-items: center; gap: 6px;
	height: 24px; padding: 0 9px;
	font: inherit; font-size: 11.5px; font-weight: 500; white-space: nowrap;
	color: var(--text-default, inherit);
	background: var(--bg-hover, rgba(127, 127, 127, 0.12));
	border: 1px solid var(--border-default, rgba(127, 127, 127, 0.3));
	border-radius: 6px; cursor: pointer;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.18);
}
.${CHIP_CLASS} .fnr-hint-btn:hover {
	border-color: var(--border-hover, rgba(127, 127, 127, 0.5));
	background: var(--bg-default, rgba(127, 127, 127, 0.2));
}
.${CHIP_CLASS} .fnr-hint-btn:active { box-shadow: none; transform: translateY(1px); }
.${CHIP_CLASS} .fnr-hint-btn:focus-visible { outline: 2px solid var(--logo-color, #04d1ab); outline-offset: 1px; }
.${CHIP_CLASS} .fnr-hint-key {
	font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif;
	font-size: 11px; letter-spacing: 0.02em;
	color: var(--text-muted, rgba(127, 127, 127, 0.85));
	opacity: 0.6;
}
.${CHIP_CLASS} .fnr-hint-key:empty { display: none; }
.${CHIP_CLASS} .fnr-count {
	flex: none;
	font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif;
	font-size: 11.5px; font-weight: 500; font-variant-numeric: tabular-nums; white-space: nowrap;
	opacity: 1;
	color: inherit;
}
.${CHIP_CLASS} .fnr-count.none { color: var(--enum-red-fg, var(--error-color, #d64045)); }
.${CHIP_CLASS} .fnr-count.skipping { color: var(--enum-orange-fg, var(--warn-color, #b8751a)); }
.${CHIP_CLASS} .fnr-count.complete { color: inherit; }
.${CHIP_CLASS} .fnr-count.unsupported { color: var(--text-muted, rgba(127, 127, 127, 0.85)); }

.${CHIP_CLASS} .fnr-tgl:focus-visible,
.${CHIP_CLASS} .fnr-all:focus-visible,
.${CHIP_CLASS} .fnr-close:focus-visible { outline: 2px solid var(--logo-color, #04d1ab); outline-offset: 1px; }
`;

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TW_MID_INDEX = 5;
  function mirrorShadeIdx(idx) {
    const n = TW_SHADES.length;
    const i = Math.max(0, Math.min(n - 1, Number(idx) || 0));
    return n - 1 - i;
  }
  __name(mirrorShadeIdx, "mirrorShadeIdx");
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function exactTailwind(hex) {
    if (!isHex(hex)) return null;
    const needle = hex.toLowerCase();
    for (const family of TW_FAMILIES) {
      const i = TAILWIND[family].indexOf(needle);
      if (i >= 0) return { family, shadeIdx: i };
    }
    return null;
  }
  __name(exactTailwind, "exactTailwind");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // ../../shared/settings-ui/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar"
  ];
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent
    { name: "--logo-color", label: "Accent" },
    // Text
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-hilite", label: "Highlight text" },
    { name: "--text-brighter", label: "Brighter text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-warning", label: "Warning text" },
    { name: "--cmdpal-hilite-color", label: "Command palette highlight" },
    { name: "--color-text-900", label: "Legacy text" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--panel-bg-color", label: "Panel background" },
    { name: "--input-bg-color", label: "Input background" },
    { name: "--hover-subtle", label: "Hover background" },
    { name: "--sidebar-bg-hover", label: "Sidebar hover" },
    { name: "--active-bg-color", label: "Active background" },
    // Borders / dividers
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--input-border-color", label: "Input border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag palette (Thymer ships 16 hues — no amber, lime, or violet)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
    { name: "--enum-purple-fg", label: "Purple" },
    { name: "--enum-fuchsia-fg", label: "Fuchsia" },
    { name: "--enum-pink-fg", label: "Pink" },
    { name: "--enum-rose-fg", label: "Rose" },
    { name: "--enum-stone-fg", label: "Stone" },
    { name: "--enum-zinc-fg", label: "Zinc" }
  ]);
  function elementOrNull(node) {
    return node instanceof Element ? node : null;
  }
  __name(elementOrNull, "elementOrNull");
  function themeVariableRoots(options = {}) {
    const roots = [];
    const seen = /* @__PURE__ */ new Set();
    const add = /* @__PURE__ */ __name((node) => {
      const el3 = elementOrNull(node);
      if (!el3 || seen.has(el3)) return;
      seen.add(el3);
      roots.push(el3);
    }, "add");
    add(document.documentElement);
    add(document.body);
    for (const selector of options.selectors || DEFAULT_THEME_SOURCES) {
      try {
        document.querySelectorAll(selector).forEach(add);
      } catch {
      }
    }
    for (const root of options.roots || []) add(root);
    return roots;
  }
  __name(themeVariableRoots, "themeVariableRoots");
  function resolveRenderedColor(cssColor2, root = document.body) {
    const host = elementOrNull(root) || document.body || document.documentElement;
    if (!host) return "";
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.style.visibility = "hidden";
    probe.style.color = "transparent";
    host.appendChild(probe);
    const attempts = [cssColor2];
    if (cssColor2.startsWith("var(")) {
      attempts.push(`rgb(${cssColor2})`, `rgba(${cssColor2}, 1)`, `hsl(${cssColor2})`, `hsla(${cssColor2}, 1)`);
    }
    try {
      for (const attempt of attempts) {
        probe.style.color = "";
        probe.style.color = attempt;
        const resolved = getComputedStyle(probe).color;
        if (resolved && resolved !== "rgba(0, 0, 0, 0)" && resolved !== "transparent") return resolved;
      }
    } finally {
      probe.remove();
    }
    return "";
  }
  __name(resolveRenderedColor, "resolveRenderedColor");

  // ../../shared/settings-ui/theme-swatches.js
  var THEME_GROUPS = (
    /** @type {ThemeGroupDef[]} */
    Object.freeze([
      {
        key: "hues",
        label: "Theme colors",
        tokens: [
          { token: "--enum-red-fg", label: "Red" },
          { token: "--enum-orange-fg", label: "Orange" },
          { token: "--enum-yellow-fg", label: "Yellow" },
          { token: "--enum-green-fg", label: "Green" },
          { token: "--enum-teal-fg", label: "Teal" },
          { token: "--enum-cyan-fg", label: "Cyan" },
          { token: "--enum-sky-fg", label: "Sky" },
          { token: "--enum-blue-fg", label: "Blue" },
          { token: "--enum-indigo-fg", label: "Indigo" },
          { token: "--enum-purple-fg", label: "Purple" },
          { token: "--enum-fuchsia-fg", label: "Fuchsia" },
          { token: "--enum-pink-fg", label: "Pink" },
          { token: "--enum-rose-fg", label: "Rose" },
          { token: "--tag-fg-color", label: "Tag" },
          { token: "--text-warning", label: "Warning" }
        ]
      },
      {
        key: "text",
        label: "Text & neutrals",
        tokens: [
          { token: "--text-default", label: "Text" },
          { token: "--text-muted", label: "Muted text" },
          { token: "--text-subtle", label: "Subtle text" },
          { token: "--text-hilite", label: "Highlight text" },
          { token: "--text-brighter", label: "Brighter text" },
          { token: "--text-disabled", label: "Disabled text" },
          { token: "--enum-stone-fg", label: "Stone" },
          { token: "--enum-zinc-fg", label: "Zinc" }
        ]
      },
      {
        key: "surfaces",
        label: "Surfaces & lines",
        marginal: true,
        tokens: [
          { token: "--panel-bg-color", label: "Panel background" },
          { token: "--input-bg-color", label: "Input background" },
          { token: "--hover-subtle", label: "Hover background" },
          { token: "--active-bg-color", label: "Active background" },
          { token: "--divider-color", label: "Divider" },
          { token: "--thin-divider-color", label: "Thin divider" },
          { token: "--faint-divider-color", label: "Faint divider" },
          { token: "--input-border-color", label: "Input border" },
          { token: "--titlebar-border-color", label: "Titlebar border" },
          { token: "--selection-border", label: "Selection border" }
        ]
      }
    ])
  );
  function resolveThemeToken(token, roots) {
    const rs = roots || themeVariableRoots();
    for (const root of rs) {
      const raw = getComputedStyle(root).getPropertyValue(token).trim();
      if (!raw) continue;
      const resolved = resolveRenderedColor(`var(${token})`, root);
      if (resolved) return resolved;
    }
    return "";
  }
  __name(resolveThemeToken, "resolveThemeToken");
  function resolveThemeGroups({ exclude = [] } = {}) {
    const roots = themeVariableRoots();
    const excludeSet = new Set(exclude);
    const groups = [];
    for (const def of THEME_GROUPS) {
      const swatches = [];
      const seen = /* @__PURE__ */ new Set();
      for (const { token, label } of def.tokens) {
        if (excludeSet.has(token)) continue;
        const color = resolveThemeToken(token, roots);
        if (!color || seen.has(color)) continue;
        seen.add(color);
        swatches.push({ token, label, color });
      }
      if (swatches.length) {
        groups.push({ key: def.key, label: def.label, hint: def.hint, marginal: def.marginal, swatches });
      }
    }
    return groups;
  }
  __name(resolveThemeGroups, "resolveThemeGroups");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && /** @type {any} */
    window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el3) => el3.getAttribute("data-tps-tip") || el3.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // ../../shared/settings-ui/color-field.js
  var MAX_CUSTOM = 44;
  function colorField({ value = null, onPick, featured = [], allowNone = true, customSwatches = [], onCustomSwatchesChange } = {}) {
    const emit = /* @__PURE__ */ __name((r) => {
      if (typeof onPick === "function") onPick(r);
    }, "emit");
    let curFamily = "blue";
    let curShade = TW_MID_INDEX;
    let invertLightness = false;
    let mode = "theme";
    let customList = Array.isArray(customSwatches) ? customSwatches.filter(isHex).map((s) => s.toLowerCase()).slice(0, MAX_CUSTOM) : [];
    let selection = null;
    if (value && value.type === "tw" && value.family && TAILWIND[value.family]) {
      const idx = Math.max(0, Math.min(TW_SHADES.length - 1, Number(value.shadeIdx) || 0));
      curFamily = value.family;
      curShade = idx;
      invertLightness = !!value.invert;
      selection = { kind: "hex", hex: TAILWIND[value.family][idx] };
      mode = "tailwind";
    } else {
      selection = normalizeValue(value);
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) {
          curFamily = ex.family;
          curShade = ex.shadeIdx;
          mode = "tailwind";
        } else {
          const near = nearestTailwind(selection.hex);
          if (near) {
            curFamily = near.family;
            curShade = near.shadeIdx;
          }
          mode = "custom";
        }
      }
    }
    const root = h("div", { class: "tps-color-field" });
    const tabs = { theme: tabBtn("theme", "Theme"), tailwind: tabBtn("tailwind", "Tailwind"), custom: tabBtn("custom", "Custom") };
    root.appendChild(h("div", { class: "tps-cf-tabs" }, tabs.theme, tabs.tailwind, tabs.custom));
    function tabBtn(m, label) {
      const b = h("button", { type: "button", class: "tps-cf-tab", dataset: { mode: m } }, label);
      b.addEventListener("click", () => setMode(m));
      return b;
    }
    __name(tabBtn, "tabBtn");
    const paneTheme = h("div", { class: "tps-cf-pane", dataset: { pane: "theme" } });
    const featuredTokens = featured.map((f) => f.token);
    if (featured.length) {
      const featRow = h("div", { class: "tps-cf-featured" });
      for (const f of featured) {
        const color = resolveThemeToken(f.token);
        if (!color) continue;
        featRow.appendChild(themeTile(f.label, f.token, color));
      }
      if (featRow.children.length) paneTheme.appendChild(featRow);
    }
    for (const g of resolveThemeGroups({ exclude: featuredTokens })) {
      paneTheme.appendChild(h(
        "div",
        { class: "tps-cf-group" },
        h(
          "div",
          { class: "tps-cf-group-head" },
          h("span", { class: "tps-cf-group-label" }, g.label),
          g.hint ? h("span", { class: "tps-cf-group-hint" }, g.hint) : null
        ),
        h("div", { class: "tps-cf-dots" }, ...g.swatches.map((s) => themeDot(s.label, s.token, s.color)))
      ));
    }
    root.appendChild(paneTheme);
    const paneTw = h("div", { class: "tps-cf-pane", dataset: { pane: "tailwind" } });
    const hueCells = {};
    const hueRow = h("div", { class: "tps-cf-dots" });
    for (const fam of TW_FAMILIES) {
      const dot = h("button", {
        type: "button",
        class: "tps-cf-swatch tps-cf-dot tps-cf-hue-dot",
        dataset: { cfTip: fam },
        "aria-label": fam,
        style: { background: TAILWIND[fam][TW_MID_INDEX] }
      });
      dot.addEventListener("click", () => {
        curFamily = fam;
        buildLightRamp();
        pickTailwind(fam, curShade);
      });
      hueCells[fam] = dot;
      hueRow.appendChild(dot);
    }
    const lightRamp = h("div", { class: "tps-cf-ramp" });
    const invertCheckbox = h("input", { type: "checkbox", class: "tps-cf-invert-cb" });
    invertCheckbox.checked = invertLightness;
    const invertRow = h(
      "label",
      { class: "tps-cf-invert" },
      invertCheckbox,
      h("span", null, "Invert lightness in light/dark"),
      h("span", { class: "tps-cf-invert-hint" }, "e.g. 900 in light \u2192 100 in dark")
    );
    invertCheckbox.addEventListener("change", () => {
      invertLightness = invertCheckbox.checked;
      renderSelection();
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) emit({ type: "tw", family: ex.family, shadeIdx: ex.shadeIdx, invert: invertLightness, hex: selection.hex });
      }
    });
    paneTw.appendChild(labeledGroup("Hue", hueRow));
    paneTw.appendChild(labeledGroup("Lightness", lightRamp));
    paneTw.appendChild(invertRow);
    root.appendChild(paneTw);
    function buildLightRamp() {
      lightRamp.textContent = "";
      TW_SHADES.forEach((s, si) => {
        const hex = TAILWIND[curFamily][si];
        const cell = h("button", {
          type: "button",
          class: "tps-cf-ramp-cell",
          dataset: { si: String(si), cfTip: `${curFamily}-${s} \xB7 ${hex}` },
          "aria-label": `${curFamily} ${s}`,
          style: { background: hex, color: textOn(hex) }
        }, String(s));
        cell.addEventListener("click", () => {
          curShade = si;
          pickTailwind(curFamily, si);
        });
        lightRamp.appendChild(cell);
      });
    }
    __name(buildLightRamp, "buildLightRamp");
    function pickTailwind(family, shadeIdx) {
      curFamily = family;
      curShade = shadeIdx;
      const hex = TAILWIND[family][shadeIdx];
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "tw", family, shadeIdx, invert: invertLightness, hex });
    }
    __name(pickTailwind, "pickTailwind");
    const paneCustom = h("div", { class: "tps-cf-pane", dataset: { pane: "custom" } });
    const customRow = h("div", { class: "tps-cf-dots tps-cf-custom-row" });
    const hexDot = h("span", { class: "tps-cf-hex-dot" });
    const hexInput = h("input", { type: "text", class: "tps-cf-hex-input", placeholder: "#hex", maxLength: 7, spellcheck: false, "aria-label": "Custom hex color" });
    const addBtn = h("button", { type: "button", class: "tps-cf-add" }, "Add");
    const removeBtn = h("button", { type: "button", class: "tps-cf-remove" }, "Remove");
    removeBtn.hidden = true;
    const countEl = h("span", { class: "tps-cf-custom-count" });
    paneCustom.appendChild(customRow);
    paneCustom.appendChild(h(
      "div",
      { class: "tps-cf-addrow" },
      h("span", { class: "tps-cf-hexbox" }, hexDot, hexInput),
      addBtn,
      removeBtn,
      countEl
    ));
    root.appendChild(paneCustom);
    removeBtn.addEventListener("click", () => {
      if (!selection || selection.kind !== "hex") return;
      const idx = customList.indexOf(selection.hex);
      if (idx >= 0) removeCustom(idx);
    });
    let dragIdx = -1;
    function renderCustomRow() {
      customRow.textContent = "";
      if (!customList.length) {
        customRow.appendChild(h("span", { class: "tps-cf-custom-empty" }, "No saved colors yet \u2014 add a hex, then select one and press Remove to delete it."));
      }
      customList.forEach((hex, i) => {
        const dot = h("button", {
          type: "button",
          class: "tps-cf-swatch tps-cf-dot tps-cf-custom-dot",
          draggable: "true",
          dataset: { hex, idx: String(i), cfTip: hex.toUpperCase() },
          "aria-label": hex,
          style: { background: hex }
        });
        dot.addEventListener("click", () => pickHex(hex));
        dot.addEventListener("dragstart", () => {
          dragIdx = i;
          dot.classList.add("is-dragging");
        });
        dot.addEventListener("dragend", () => dot.classList.remove("is-dragging"));
        dot.addEventListener("dragover", (e) => e.preventDefault());
        dot.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragIdx >= 0 && dragIdx !== i) reorderCustom(dragIdx, i);
          dragIdx = -1;
        });
        customRow.appendChild(dot);
      });
      countEl.textContent = `${customList.length}/${MAX_CUSTOM}`;
      renderSelection();
    }
    __name(renderCustomRow, "renderCustomRow");
    const commitCustom = /* @__PURE__ */ __name(() => {
      if (typeof onCustomSwatchesChange === "function") onCustomSwatchesChange(customList.slice());
    }, "commitCustom");
    function addCustom() {
      const hex = normHex(hexInput.value);
      if (!hex) return;
      if (!customList.includes(hex) && customList.length < MAX_CUSTOM) {
        customList = [...customList, hex];
        commitCustom();
        renderCustomRow();
      }
      hexInput.value = "";
      hexDot.style.background = "";
      pickHex(hex);
    }
    __name(addCustom, "addCustom");
    function removeCustom(i) {
      customList = customList.filter((_, j) => j !== i);
      commitCustom();
      renderCustomRow();
    }
    __name(removeCustom, "removeCustom");
    function reorderCustom(from, to) {
      const arr = customList.slice();
      const [m] = arr.splice(from, 1);
      arr.splice(to, 0, m);
      customList = arr;
      commitCustom();
      renderCustomRow();
    }
    __name(reorderCustom, "reorderCustom");
    addBtn.addEventListener("click", addCustom);
    hexInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustom();
      }
    });
    hexInput.addEventListener("input", () => {
      const hadHash = hexInput.value.trimStart().startsWith("#");
      const digits = hexInput.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const cleaned = (hadHash ? "#" : "") + digits;
      if (cleaned !== hexInput.value) hexInput.value = cleaned;
      const hex = normHex(hexInput.value);
      hexDot.style.background = hex || "";
      if (hex) {
        selection = { kind: "hex", hex };
        renderSelection();
        emit({ type: "hex", hex });
      }
    });
    let noneRef = null;
    if (allowNone) {
      const noneBtn = h("button", { type: "button", class: "tps-cf-none" }, h("span", { class: "tps-cf-none-sw" }), "No color");
      noneBtn.addEventListener("click", () => {
        selection = { kind: "none" };
        renderAll();
        emit(null);
      });
      root.appendChild(h("div", { class: "tps-cf-divider" }));
      root.appendChild(h("div", { class: "tps-cf-universal" }, noneBtn));
      noneRef = noneBtn;
    }
    function pickHex(hex) {
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "hex", hex });
    }
    __name(pickHex, "pickHex");
    function renderSelection() {
      root.querySelectorAll(".is-sel, .is-sel-mirror").forEach((e) => e.classList.remove("is-sel", "is-sel-mirror"));
      Object.values(hueCells).forEach((c) => c.classList.remove("is-active"));
      if (hueCells[curFamily]) hueCells[curFamily].classList.add("is-active");
      removeBtn.hidden = !(selection && selection.kind === "hex" && customList.includes(selection.hex));
      let twShadeSelected = false;
      if (selection) {
        if (selection.kind === "theme") {
          const el3 = root.querySelector(`.tps-cf-swatch[data-token="${cssEscape(selection.token)}"]`);
          if (el3) el3.classList.add("is-sel");
        } else if (selection.kind === "hex") {
          const selHex = selection.hex;
          const rc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${curShade}"]`);
          if (rc && TAILWIND[curFamily][curShade] === selHex) {
            rc.classList.add("is-sel");
            twShadeSelected = true;
          }
          customRow.querySelectorAll(".tps-cf-custom-dot").forEach((d) => {
            if (d.dataset.hex === selHex) d.classList.add("is-sel");
          });
        } else if (selection.kind === "none") {
          if (noneRef) noneRef.classList.add("is-sel");
        }
      }
      const canInvert = twShadeSelected && curShade !== TW_MID_INDEX;
      invertCheckbox.disabled = !canInvert;
      invertRow.classList.toggle("is-disabled", !canInvert);
      if (canInvert && invertLightness) {
        const mc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${mirrorShadeIdx(curShade)}"]`);
        if (mc) mc.classList.add("is-sel-mirror");
      }
    }
    __name(renderSelection, "renderSelection");
    function setMode(m) {
      mode = m;
      for (const k in tabs) tabs[k].classList.toggle("is-active", k === m);
      paneTheme.classList.toggle("is-active", m === "theme");
      paneTw.classList.toggle("is-active", m === "tailwind");
      paneCustom.classList.toggle("is-active", m === "custom");
    }
    __name(setMode, "setMode");
    function renderAll() {
      setMode(mode);
      renderSelection();
    }
    __name(renderAll, "renderAll");
    function themeTile(label, token, color) {
      const tile = h(
        "button",
        { type: "button", class: "tps-cf-swatch tps-cf-tile", dataset: { token }, "aria-label": label },
        h("span", { class: "tps-cf-tile-dot", style: { background: color } }),
        h("span", { class: "tps-cf-tile-label" }, label)
      );
      tile.addEventListener("click", () => selectTheme(token));
      return tile;
    }
    __name(themeTile, "themeTile");
    function themeDot(label, token, color) {
      const dot = h("button", { type: "button", class: "tps-cf-swatch tps-cf-dot", dataset: { token, cfTip: label }, "aria-label": label, style: { background: color } });
      dot.addEventListener("click", () => selectTheme(token));
      return dot;
    }
    __name(themeDot, "themeDot");
    function selectTheme(token) {
      selection = { kind: "theme", token };
      renderSelection();
      const rendered = resolveThemeToken(token);
      emit({ type: "theme", token, hex: renderedToHex(rendered) || rendered });
    }
    __name(selectTheme, "selectTheme");
    function labeledGroup(label, body) {
      return h("div", { class: "tps-cf-group" }, h("div", { class: "tps-cf-group-head" }, h("span", { class: "tps-cf-group-label" }, label)), body);
    }
    __name(labeledGroup, "labeledGroup");
    installInstantTooltip();
    buildLightRamp();
    renderCustomRow();
    if (selection && selection.kind === "hex" && mode === "custom" && !customList.includes(selection.hex)) {
      hexInput.value = selection.hex;
      hexDot.style.background = selection.hex;
    }
    renderAll();
    return root;
  }
  __name(colorField, "colorField");
  function normalizeValue(value) {
    if (!value) return null;
    if (value.type === "hex" && isHex(value.hex)) return { kind: "hex", hex: value.hex.toLowerCase() };
    if (value.type === "theme" && value.token) return { kind: "theme", token: value.token };
    return null;
  }
  __name(normalizeValue, "normalizeValue");
  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }
  __name(cssEscape, "cssEscape");
  function normHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s) return null;
    if (!s.startsWith("#")) s = `#${s}`;
    if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normHex, "normHex");
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
  }
  __name(textOn, "textOn");
  function renderedToHex(str) {
    if (!str) return "";
    if (/^#[0-9a-f]{6}$/i.test(str)) return str.toLowerCase();
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (!m) return "";
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return `#${t(parts[0])}${t(parts[1])}${t(parts[2])}`;
  }
  __name(renderedToHex, "renderedToHex");

  // panel.js
  function colorValue(c) {
    if (typeof c === "string" && c.startsWith("theme-var:")) return { type: "theme", token: c.slice("theme-var:".length) };
    return { type: "hex", hex: c };
  }
  __name(colorValue, "colorValue");
  function pickedColor(r) {
    if (!r) return null;
    if (r.type === "theme" && r.token) return `theme-var:${r.token}`;
    if (r.type === "hex" && r.hex) return r.hex;
    if (r.type === "none") return "theme-var:--logo-color";
    return null;
  }
  __name(pickedColor, "pickedColor");
  function renderSettings(ctx) {
    const s = ctx.settings;
    const shortcutRows = ctx.commands.filter((c) => !/** @type {any} */
    c.noKey).map((c) => keyRow({
      label: c.label,
      desc: c.hint,
      combo: s.shortcuts[c.id] || "",
      onChange: /* @__PURE__ */ __name((combo) => ctx.update({ shortcuts: { ...s.shortcuts, [c.id]: combo } }), "onChange"),
      onClear: /* @__PURE__ */ __name(() => ctx.update({ shortcuts: { ...s.shortcuts, [c.id]: "" } }), "onClear")
    }));
    const shortcutList = h(
      "div",
      { class: "tc-shortcut-list tps-list" },
      listHeader({ columns: ["", "Command", "Shortcut"] }),
      ...shortcutRows
    );
    const toggle = /* @__PURE__ */ __name((key, label, desc) => optionRow({
      type: "checkbox",
      name: key,
      label,
      desc,
      checked: s[key],
      onChange: /* @__PURE__ */ __name((e) => ctx.update({ [key]: !!/** @type {HTMLInputElement} */
      e.target.checked }), "onChange")
    }), "toggle");
    const colorRow = /* @__PURE__ */ __name((key, label, desc) => h(
      "div",
      { class: "tc-color-row" },
      h("div", { class: "tps-option-text" }, h("div", { class: "tps-option-label" }, label), h("div", { class: "tps-option-desc" }, desc)),
      colorField({
        value: colorValue(s[key]),
        allowNone: false,
        featured: [{ label: "Thymer accent", token: "--logo-color" }],
        onPick: /* @__PURE__ */ __name((r) => {
          const v = pickedColor(r);
          if (v) ctx.update({ [key]: v });
        }, "onPick")
      })
    ), "colorRow");
    const footer = h(
      "div",
      { class: "tps-footer" },
      button({ label: "Reset to defaults", variant: "ghost", size: "md", onClick: /* @__PURE__ */ __name(() => ctx.resetDefaults(), "onClick") }),
      button({ label: "Close", variant: "ghost", size: "md", onClick: /* @__PURE__ */ __name(() => ctx.close(), "onClick") })
    );
    ctx.root.replaceChildren(panel({ pluginClass: `${ctx.rootClass}-panel` }, [
      pluginHeaderFromConfig(ctx.conf, {
        version: ctx.version,
        scope: ctx.scope,
        killSwitch: { on: !ctx.disabled, onToggle: /* @__PURE__ */ __name((nextOn) => ctx.setEnabled(nextOn), "onToggle") },
        feedback: { data: ctx.data }
      }),
      section({
        label: "Shortcuts",
        hint: "Click a binding and press the keys you want; Escape cancels, \xD7 unbinds. Escape always ends a selection session. \u2318\u21E7D and \u2318\u21E7L are Thymer\u2019s own keys, which is why the defaults use \u2325 \u2014 rebind them if you prefer VS Code\u2019s.",
        body: [shortcutList]
      }),
      section({
        label: "Behaviour",
        body: [
          toggle("caseSensitive", "Match case", "Match capitalisation exactly. The Aa toggle in the find box sets this too \u2014 whichever you change, it sticks until you change it back."),
          toggle("wholeWord", "Whole word", "Only match complete words, not fragments inside longer ones. The ab| toggle in the find box sets this too."),
          toggle("wrap", "Wrap around", "Next after the last match goes back to the first."),
          optionNote("The find/replace box always shows while a session is live \u2014 it is the only way to enter a replacement, because Thymer cannot place multiple typing cursors. Rewrites go through the plugin SDK, which Thymer\u2019s own undo doesn\u2019t track, so \u2318Z reverts them here until you type something yourself.")
        ]
      }),
      section({
        label: "Appearance",
        collapsible: true,
        defaultOpen: false,
        persistKey: "find-and-replace.appearance",
        body: [
          colorRow("matchColor", "Match colour", "Every occurrence. Mixed to a tint so the text stays readable; tag/link matches use a dimmer version."),
          colorRow("currentColor", "Current match colour", "The occurrence the selection is on.")
        ]
      }),
      section({
        label: "Not possible from a plugin",
        collapsible: true,
        defaultOpen: false,
        persistKey: "find-and-replace.limits",
        body: [
          h("p", { class: "tc-not-feasible" }, "True multi-cursor typing, column (box) selection, and selections that span more than one line. Thymer draws its own caret and selection and the plugin SDK has no selection API, so \u201Cselect all occurrences\u201D marks every match and offers a replace box instead of N live cursors.")
        ]
      }),
      footer
    ]));
  }
  __name(renderSettings, "renderSettings");

  // plugin.js
  var PLUGIN_VERSION = "1.1.2";
  var PLUGIN_NAME = "Find and Replace";
  var SLUG = "find-and-replace";
  var ROOT_CLASS = "plg-fnr";
  var PANEL_TYPE = "find-and-replace-settings";
  var HL_STYLE_ID = "tc-highlight-style";
  var UNDO_LIMIT = 20;
  var COMMANDS = Object.freeze([
    { id: "next", label: "Add next occurrence", icon: "arrow-down", mac: "Meta+D", other: "Ctrl+D", hint: "Grow the selection by one more occurrence of the selected word." },
    { id: "prev", label: "Drop last added occurrence", icon: "arrow-up", mac: "Alt+Meta+D", other: "Ctrl+Alt+D", hint: "Shrink the selection again, most recent first." },
    { id: "stepNext", label: "Move to next occurrence", icon: "arrow-down", mac: "Meta+G", other: "Ctrl+G", hint: "Move the one selection, and the cursor, to the next match \u2014 no accumulating." },
    { id: "stepPrev", label: "Move to previous occurrence", icon: "arrow-up", mac: "Shift+Meta+G", other: "Ctrl+Shift+G", hint: "Same, backwards." },
    { id: "all", label: "Select all occurrences", icon: "list-search", mac: "Shift+Meta+A", other: "Ctrl+Shift+A", hint: "Mark every match and open the replace box." },
    { id: "find", label: "Find and replace", icon: "search", mac: "Meta+F", other: "Ctrl+F", hint: "Type a query instead of selecting one. \u2318F only reaches the plugin if the OS/Thymer find-in-page on that key is reassigned first." },
    { id: "undo", label: "Undo last replace", icon: "arrow-back-up", mac: "", other: "", noKey: true, hint: "Restore the lines the last replace rewrote. Also \u2318Z, until you type something yourself." },
    { id: "redo", label: "Redo last replace", icon: "arrow-forward-up", mac: "", other: "", noKey: true, hint: "Re-apply a replace you just undid. Also \u2318\u21E7Z." }
  ]);
  function defaultShortcuts() {
    const mac = isMacPlatform();
    const out = {};
    for (const c of COMMANDS) out[c.id] = mac ? c.mac : c.other;
    return (
      /** @type {Shortcuts} */
      out
    );
  }
  __name(defaultShortcuts, "defaultShortcuts");
  var DEFAULTS = Object.freeze({
    caseSensitive: false,
    wholeWord: false,
    wrap: true,
    matchColor: "theme-var:--logo-color",
    currentColor: "theme-var:--logo-color"
  });
  function normalizeSettings(raw) {
    const src = (
      /** @type {Record<string, any>} */
      raw && typeof raw === "object" ? raw : {}
    );
    const dflt = defaultShortcuts();
    const sc = (
      /** @type {Record<string, any>} */
      src.shortcuts && typeof src.shortcuts === "object" ? src.shortcuts : {}
    );
    const shortcuts = {};
    for (const c of COMMANDS) shortcuts[c.id] = c.noKey ? "" : typeof sc[c.id] === "string" ? sc[c.id] : dflt[c.id];
    const bool = /* @__PURE__ */ __name((k) => typeof src[k] === "boolean" ? src[k] : (
      /** @type {any} */
      DEFAULTS[k]
    ), "bool");
    const color = /* @__PURE__ */ __name((k) => typeof src[k] === "string" && src[k].trim() ? src[k] : (
      /** @type {any} */
      DEFAULTS[k]
    ), "color");
    return {
      shortcuts: (
        /** @type {Shortcuts} */
        shortcuts
      ),
      caseSensitive: bool("caseSensitive"),
      wholeWord: bool("wholeWord"),
      wrap: bool("wrap"),
      matchColor: color("matchColor"),
      currentColor: color("currentColor")
    };
  }
  __name(normalizeSettings, "normalizeSettings");
  function cssColor(value) {
    if (typeof value === "string" && value.startsWith("theme-var:")) {
      return `var(${value.slice("theme-var:".length)}, #04d1ab)`;
    }
    return value || "#04d1ab";
  }
  __name(cssColor, "cssColor");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {TcSettings} */
    _settings = normalizeSettings({});
    /** @type {ReturnType<typeof createSettingsStore>} */
    _settingsStore = (
      /** @type {any} */
      null
    );
    /** @type {(() => void) | null} */
    _cancelPillSettle = null;
    /** @type {OccurrenceSession | null} */
    _session = null;
    /** @type {ReturnType<typeof createChip> | null} */
    _chip = null;
    /** @type {{ label: string, lines: { guid: string, segments: any[] }[], group?: number }[]} */
    _undoStack = [];
    /** Bumps per session; replace-ones within one session coalesce into a single undo entry. */
    _sessionSeq = 0;
    /** Undone entries, holding the POST-replace text so ⌘⇧Z can re-apply them. */
    /** @type {{ label: string, lines: { guid: string, segments: any[] }[] }[]} */
    _redoStack = [];
    /** @type {any} */
    _sessionPanel = null;
    /** @type {number} */
    _queryRaf = 0;
    /** @type {string[]} */
    _handlerIds = [];
    /** @type {{ remove: () => void }[]} */
    _cmdItems = [];
    /** @type {{ remove: () => void } | null} */
    _cmdSettings = null;
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {((e: KeyboardEvent) => void) | null} */
    _keyHandler = null;
    /** @type {(() => void) | null} */
    _detachSettingsLifecycle = null;
    _disabled = false;
    /** True while an _undo() is in flight, so held ⌘Z can't race two restores. */
    _undoBusy = false;
    /**
     * Where the caret was when the session started, as a row guid + offset into
     * that row's text — NOT a Text node, which setSegments destroys when the row
     * re-renders. Restored when the session ends, so you land back where you were.
     * @type {{ guid: string, offset: number } | null}
     */
    _returnCaret = null;
    /** The element focused before the chip took over (Thymer's editor key sink). */
    /** @type {HTMLElement | null} */
    _returnFocusEl = null;
    onLoad() {
      pingInstall(SLUG);
      pingActive(SLUG);
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      void healPluginIdentity(this, {
        name: PLUGIN_NAME,
        icon: "search",
        description: "Find and replace across the page, with VS Code-style \u2318D occurrence selection.",
        sourceRepo: "https://github.com/akaready/thymer-find-and-replace",
        sourceFiles: { branch: "main", json: "plugin.json", js: "plugin.js" }
      });
      this._disabled = readKillSwitch(this);
      this._handlerIds = [];
      this._panelEl = null;
      this._cmdSettings = null;
      this._cmdItems = [];
      this._keyHandler = null;
      this._detachSettingsLifecycle = null;
      this._session = null;
      this._chip = null;
      this._undoStack = [];
      this._settingsStore = createSettingsStore(this, {
        slug: SLUG,
        key: "settings",
        version: PLUGIN_VERSION,
        normalize: normalizeSettings
      });
      this._settings = /** @type {TcSettings} */
      this._settingsStore.load().settings;
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(CHIP_CSS);
      this.ui.injectCSS(`
			.${ROOT_CLASS}-panel .tps-footer { display: flex; gap: var(--tps-space-2); margin-top: var(--tps-space-5); }
			.${ROOT_CLASS}-panel .tc-shortcut-list .tps-list-row { grid-template-columns: 0 1fr auto; }
			.${ROOT_CLASS}-panel .tc-shortcut-list .tps-list-header { grid-template-columns: 0 1fr auto; }
			.${ROOT_CLASS}-panel .tc-not-feasible { font-size: var(--tps-fs-hint); color: var(--tps-text-muted); margin: 0; }
		`);
      this._applyHighlightStyle();
      this._cmdSettings = this.ui.addCommandPaletteCommand({
        label: `Plugin: ${PLUGIN_NAME}`,
        icon: "search",
        onSelected: /* @__PURE__ */ __name(() => this._openSettings(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle(PLUGIN_NAME);
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderSettings();
      });
      this._detachSettingsLifecycle = this._settingsStore.attachLifecycle({
        onRemoteChange: /* @__PURE__ */ __name((settings) => {
          this._settings = /** @type {TcSettings} */
          settings;
          this._applySettings();
          this._renderSettings();
        }, "onRemoteChange")
      });
      try {
        const staleRoot = document.querySelector(`.${ROOT_CLASS}-panel`);
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = staleRoot.parentElement;
          this._renderSettings();
          this._refreshScopePillUntilSettled();
        }
      } catch {
      }
      for (const stale of document.querySelectorAll(`.${CHIP_CLASS}`)) stale.remove();
      clearHighlights();
      if (this._disabled) return;
      this._keyHandler = (e) => this._onKeydown(e);
      window.addEventListener("keydown", this._keyHandler, true);
      for (
        const ev of
        /** @type {const} */
        ["panel.navigated", "panel.focused", "panel.closed"]
      ) {
        this._handlerIds.push(this.events.on(ev, () => this._endSession()));
      }
    }
    onUnload() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = null;
      this._endSession();
      if (this._chip) {
        this._chip.destroy();
        this._chip = null;
      }
      if (this._keyHandler) {
        window.removeEventListener("keydown", this._keyHandler, true);
        this._keyHandler = null;
      }
      try {
        this._detachSettingsLifecycle?.();
      } catch {
      }
      this._detachSettingsLifecycle = null;
      for (const id of this._handlerIds || []) this.events.off(id);
      this._handlerIds = [];
      for (const c of this._cmdItems) {
        try {
          c.remove();
        } catch {
        }
      }
      this._cmdItems = [];
      if (this._cmdSettings) {
        this._cmdSettings.remove();
        this._cmdSettings = null;
      }
      document.getElementById(HL_STYLE_ID)?.remove();
      this._panelEl = null;
    }
    /* ── keyboard ─────────────────────────────────────────────────────── */
    /** @param {KeyboardEvent} e */
    _onKeydown(e) {
      if (this._disabled) return;
      if (e.key === "Escape") {
        if (this._session) {
          e.preventDefault();
          e.stopPropagation();
          this._endSession();
        }
        return;
      }
      if (this._chip && this._chip.contains(
        /** @type {Node} */
        e.target
      )) {
        if (e.key === "Tab") {
          e.preventDefault();
          e.stopPropagation();
          this._chip.focusStep(e.shiftKey ? -1 : 1);
          return;
        }
        if (this._undoStack.length && this._isUndoKey(e)) {
          e.preventDefault();
          e.stopPropagation();
          void this._undo();
          return;
        }
        if (this._redoStack.length && this._isRedoKey(e)) {
          e.preventDefault();
          e.stopPropagation();
          void this._redo();
          return;
        }
        if (this._runShortcut(e)) return;
        return;
      }
      if (!this._editorHasKeys()) return;
      if (e.key === "Tab" && !e.shiftKey && this._session && this._session.mode === "select" && this._session.selectedCount > 0 && this._chip && !this._chip.el.hidden) {
        e.preventDefault();
        e.stopPropagation();
        this._returnFocusEl = /** @type {HTMLElement | null} */
        document.activeElement;
        this._chip.focus("replace");
        return;
      }
      if (this._undoStack.length || this._redoStack.length) {
        if (this._undoStack.length && this._isUndoKey(e)) {
          e.preventDefault();
          e.stopPropagation();
          void this._undo();
          return;
        }
        if (this._redoStack.length && this._isRedoKey(e)) {
          e.preventDefault();
          e.stopPropagation();
          void this._redo();
          return;
        }
        if (this._isTextEditKey(e)) {
          this._undoStack = [];
          this._redoStack = [];
        }
      }
      this._runShortcut(e);
    }
    /**
     * A keystroke that actually changes the text (so Thymer's own undo history
     * takes over from ours). Navigation, modifiers and shortcuts are NOT edits.
     * @param {KeyboardEvent} e
     */
    _isTextEditKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return false;
      if (e.key === "Backspace" || e.key === "Delete" || e.key === "Enter") return true;
      return e.key.length === 1;
    }
    /**
     * Run whichever command this keystroke is bound to. Every binding is a
     * modifier combo, so this is safe to consult even while typing in the chip.
     * @param {KeyboardEvent} e @returns {boolean} handled
     */
    _runShortcut(e) {
      for (const c of COMMANDS) {
        const combo = this._settings.shortcuts[c.id];
        if (!combo) continue;
        if (comboMatches(e, parseCombo(combo))) {
          e.preventDefault();
          e.stopPropagation();
          this._run(
            /** @type {CommandId} */
            c.id
          );
          return true;
        }
      }
      return false;
    }
    /** ⌘Z / Ctrl+Z (no shift/alt). @param {KeyboardEvent} e */
    _isUndoKey(e) {
      const meta = e.metaKey || e.ctrlKey;
      return meta && !e.shiftKey && !e.altKey && (e.key === "z" || e.key === "Z" || e.code === "KeyZ");
    }
    /** ⌘⇧Z / Ctrl+⇧Z, or Ctrl+Y on Windows/Linux. @param {KeyboardEvent} e */
    _isRedoKey(e) {
      if (e.altKey) return false;
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.shiftKey && (e.key === "z" || e.key === "Z" || e.code === "KeyZ")) return true;
      return !!e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === "y" || e.key === "Y" || e.code === "KeyY");
    }
    /**
     * Is the editor the thing that would receive this keystroke? Not when a
     * modal owns focus (the caret stays painted underneath the palette), not
     * when a real input/textarea/contentEditable has focus, and only when
     * Thymer has a laid-out caret in the focused panel.
     */
    _editorHasKeys() {
      if (modalOpen()) return false;
      const a = (
        /** @type {HTMLElement | null} */
        document.activeElement
      );
      if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.tagName === "SELECT" || a.isContentEditable)) {
        if (!a.closest || !a.closest(".editor-panel")) return false;
      }
      return !!this._editorPanel();
    }
    /* ── commands ─────────────────────────────────────────────────────── */
    /** @param {CommandId} id */
    _run(id) {
      if (this._disabled) return;
      try {
        switch (id) {
          case "next":
            return this._selectStep(1);
          case "prev":
            return this._selectStep(-1);
          case "stepNext":
            return this._stepSelection(1);
          case "stepPrev":
            return this._stepSelection(-1);
          case "all":
            return this._selectAll();
          case "find":
            return this._find();
          case "undo":
            return void this._undo();
          case "redo":
            return void this._redo();
        }
      } catch (err) {
        console.error("[find-and-replace]", id, err);
        this._toast("Something went wrong", String(err && /** @type {any} */
        err.message || err));
      }
    }
    /** The focused editor panel (SDK handle + element), or null. */
    _editorPanel() {
      const panelApi = this.ui.getActivePanel();
      const el3 = panelApi && panelApi.getElement ? panelApi.getElement() : null;
      if (!panelApi || !(el3 instanceof HTMLElement)) return null;
      if (!el3.querySelector(LISTITEM_SEL)) return null;
      return { api: panelApi, el: el3 };
    }
    /**
     * The word to work with: Thymer's selection on one line, else the word under
     * the caret. Toasts and returns null when neither applies.
     * @param {HTMLElement} panelEl
     */
    _seed(panelEl) {
      const sel = readThymerSelection(panelEl);
      if (sel && "multi" in sel) {
        this._toast("Select text on a single line", "Occurrence commands work on one word or phrase at a time.");
        return null;
      }
      const seed = sel || wordAtThymerCaret();
      if (!seed) {
        this._toast("Nothing to select", "Select a word, or put the caret inside one, then try again.");
        return null;
      }
      return seed;
    }
    /**
     * @param {'select' | 'all' | 'find'} mode @param {string} query
     * @param {{ api: any, el: HTMLElement }} panel
     */
    _startSession(mode, query, panel2) {
      this._endSession({ restore: false });
      this._sessionSeq++;
      this._returnCaret = this._captureCaret(panel2.el);
      this._sessionPanel = panel2.api;
      const session = new OccurrenceSession({
        panelEl: panel2.el,
        getRecord: /* @__PURE__ */ __name(() => {
          try {
            return panel2.api.getActiveRecord();
          } catch {
            return null;
          }
        }, "getRecord"),
        toast: /* @__PURE__ */ __name((t, m) => this._toast(t, m), "toast"),
        onChange: /* @__PURE__ */ __name(() => this._refreshChip(false), "onChange"),
        onReposition: /* @__PURE__ */ __name(() => this._refreshChip(true), "onReposition"),
        onEnd: /* @__PURE__ */ __name(() => {
          this._chip?.hide();
        }, "onEnd")
      }, {
        mode,
        query,
        flags: { caseSensitive: this._settings.caseSensitive, wholeWord: this._settings.wholeWord },
        wrap: this._settings.wrap
      });
      this._session = session;
      session.rescan();
      return session;
    }
    /**
     * Where the editor caret is right now, so a chip-focused session can put it
     * back on Escape. Prefers an existing selection's start, else Thymer's caret.
     * @param {HTMLElement} panelEl @returns {{ guid: string, offset: number } | null}
     */
    _captureCaret(panelEl) {
      try {
        let node = null;
        let off = 0;
        const sel = readThymerSelection(panelEl);
        if (sel && !("multi" in sel)) {
          node = sel.node;
          off = sel.start;
        } else {
          const caret = thymerCaretEl();
          if (caret) {
            const pos = textPositionAtPoint(caret.rect.left + 1, caret.rect.top + caret.rect.height / 2);
            if (pos) {
              node = pos.node;
              off = pos.offset;
            }
          }
        }
        if (!node) return null;
        const row = node.parentElement && node.parentElement.closest(LISTITEM_SEL);
        if (!(row instanceof HTMLElement)) return null;
        const guid = row.getAttribute("data-guid") || "";
        if (!guid) return null;
        let rowOffset = 0;
        for (const n of rowTextNodes(row)) {
          if (n.node === node) return { guid, offset: rowOffset + off };
          rowOffset += n.node.data.length;
        }
        return { guid, offset: rowOffset };
      } catch {
      }
      return null;
    }
    /**
     * Put the caret back at a bookmark. The row is found by guid (stable across a
     * setSegments rewrite) and the offset clamped to the row's current length, so
     * a shorter replacement still lands sensibly.
     * @param {{ guid: string, offset: number }} mark
     */
    _restoreCaret(mark) {
      const panel2 = this._editorPanel();
      if (!panel2) return;
      const row = panel2.el.querySelector(`${LISTITEM_SEL}[data-guid="${CSS.escape(mark.guid)}"]`);
      if (!(row instanceof HTMLElement)) return;
      const nodes = rowTextNodes(row);
      if (!nodes.length) return;
      let pos = Math.max(0, mark.offset);
      for (const n of nodes) {
        const len = n.node.data.length;
        if (pos <= len) {
          placeCaretAt(n.node, pos);
          return;
        }
        pos -= len;
      }
      const last = nodes[nodes.length - 1];
      placeCaretAt(last.node, last.node.data.length);
    }
    /** @param {{ restore?: boolean }} [opts] restore:false when a new session follows immediately */
    _endSession(opts) {
      const restore = !opts || opts.restore !== false;
      if (this._queryRaf) {
        cancelAnimationFrame(this._queryRaf);
        this._queryRaf = 0;
      }
      if (this._session) {
        this._session.end();
        this._session = null;
      }
      this._sessionPanel = null;
      this._chip?.hide();
      const rc = this._returnCaret;
      const fe = this._returnFocusEl;
      this._returnFocusEl = null;
      if (rc && restore) setTimeout(() => {
        try {
          this._restoreCaret(rc);
        } catch {
        }
      }, 50);
      if (fe && fe.isConnected && typeof fe.focus === "function" && fe !== document.body) {
        try {
          fe.focus({ preventScroll: true });
        } catch {
        }
      }
    }
    /**
     * ⌘G / ⌘⇧G move the ONE selection (and the caret with it) to the next or
     * previous occurrence. Unlike ⌘D this never accumulates, and it deliberately
     * leaves focus in the editor so you can keep stepping.
     * @param {1 | -1} dir
     */
    _stepSelection(dir) {
      const panel2 = this._editorPanel();
      if (!panel2) return;
      let session = this._session;
      const live = readThymerSelection(panel2.el);
      const liveText = live && !("multi" in live) ? live.text : null;
      const reusable = !!session && (!liveText || liveText.toLowerCase() === session.query.toLowerCase());
      if (!reusable) {
        const seed = liveText ? live : this._seed(panel2.el);
        if (!seed || "multi" in seed) {
          if (seed) this._toast("Select text on a single line");
          return;
        }
        session = this._startSession("select", seed.text, panel2);
        const own = (session.rows.get(seed.row.getAttribute("data-guid") || "") || []).find((m) => m.node === seed.node && m.start === seed.start);
        if (own && own.replaceable) session.seedSelection(own);
      }
      if (!session) return;
      if (!session.step(dir)) {
        this._toast(
          session.total ? "No more occurrences" : "No matches",
          session.total ? 'Turn on "Wrap around" in settings to loop.' : void 0
        );
      }
      this._refreshChip(true);
    }
    /**
     * ⌘D adds the next occurrence to a growing selection (VS Code's add-selection,
     * as close as Thymer allows: the set is highlighted and acted on together via
     * replace / transform, since the SDK can't place N live cursors). ⌥⌘D removes
     * the most recently added. A fresh selection of a different word starts over.
     * @param {1 | -1} dir
     */
    _selectStep(dir) {
      const panel2 = this._editorPanel();
      if (!panel2) return;
      const session = this._session;
      const live = readThymerSelection(panel2.el);
      const liveText = live && !("multi" in live) ? live.text : null;
      const reusable = !!session && session.mode === "select" && (!liveText || liveText.toLowerCase() === session.query.toLowerCase());
      if (reusable && session) {
        if (!session.addNext(dir)) {
          if (dir < 0) this._endSession();
          else this._toast(session.selectedCount >= session.total ? "All occurrences selected" : "No more occurrences");
        }
        this._refreshChip(true);
        const held = this._chip;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (this._session === session && held) held.focus("replace", void 0, { select: false });
        }));
        return;
      }
      if (dir < 0) return;
      const editorFocus = (
        /** @type {HTMLElement | null} */
        document.activeElement
      );
      const seed = liveText ? live : this._seed(panel2.el);
      if (!seed || "multi" in seed) {
        if (seed) this._toast("Select text on a single line");
        return;
      }
      const fresh = this._startSession("select", seed.text, panel2);
      this._returnFocusEl = editorFocus;
      const own = (fresh.rows.get(seed.row.getAttribute("data-guid") || "") || []).find((m) => m.node === seed.node && m.start === seed.start);
      if (!own || !own.replaceable) {
        this._toast("Select editable text", "That word sits inside a link, tag or reference and can\u2019t be selected for editing.");
        this._endSession();
        return;
      }
      fresh.seedSelection(own);
      if (liveText) fresh.addNext(1);
      this._refreshChip(true);
      const chip = this._ensureChip();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (this._session === fresh) chip.focus("replace", seed.text);
      }));
    }
    _selectAll() {
      const panel2 = this._editorPanel();
      if (!panel2) return;
      const editorFocus = (
        /** @type {HTMLElement | null} */
        document.activeElement
      );
      const seed = this._seed(panel2.el);
      if (!seed) return;
      const session = this._startSession("all", seed.text, panel2);
      this._returnFocusEl = editorFocus;
      const own = (session.rows.get(seed.row.getAttribute("data-guid") || "") || []).find((m) => m.node === seed.node && m.start === seed.start);
      if (own && own.replaceable) session.current = own;
      session.paint();
      this._refreshChip(true);
      this._ensureChip().focus("replace", seed.text);
    }
    _find() {
      const panel2 = this._editorPanel();
      if (!panel2) return;
      const editorFocus = (
        /** @type {HTMLElement | null} */
        document.activeElement
      );
      const sel = readThymerSelection(panel2.el);
      const query = sel && !("multi" in sel) ? sel.text : "";
      this._startSession("find", query, panel2);
      this._returnFocusEl = editorFocus;
      this._refreshChip(true);
      this._ensureChip().focus("query", query);
    }
    async _undo() {
      if (this._undoBusy) return;
      const entry = this._undoStack.pop();
      if (!entry) {
        this._toast("Nothing to undo", "No replace from this session left to restore.");
        return;
      }
      this._undoBusy = true;
      let restored = 0;
      try {
        const panel2 = this._editorPanel();
        const record = panel2 ? panel2.api.getActiveRecord() : null;
        const items = record ? await record.getLineItems(false) : [];
        const redoLines = [];
        for (const line of entry.lines) {
          const item = items.find((it) => it.guid === line.guid);
          if (!item) continue;
          redoLines.push({ guid: line.guid, segments: JSON.parse(JSON.stringify(item.segments || [])) });
          const ok = await Promise.resolve(item.setSegments(line.segments)).catch(() => false);
          if (ok) restored++;
        }
        if (redoLines.length) this._redoStack.push({ label: entry.label, lines: redoLines });
      } catch (err) {
        console.error("[find-and-replace] undo", err);
      } finally {
        this._undoBusy = false;
      }
      if (restored === 0) {
        this._toast("Could not undo", "Those lines are no longer in this page.");
        return;
      }
      this._toast(`Undid: ${entry.label}`, `${restored} line${restored === 1 ? "" : "s"} restored.`);
    }
    /** Re-apply the replace that ⌘Z just reverted, and make it undoable again. */
    async _redo() {
      if (this._undoBusy) return;
      const entry = this._redoStack.pop();
      if (!entry) {
        this._toast("Nothing to redo", "No undone replace to re-apply.");
        return;
      }
      this._undoBusy = true;
      let applied = 0;
      try {
        const panel2 = this._editorPanel();
        const record = panel2 ? panel2.api.getActiveRecord() : null;
        const items = record ? await record.getLineItems(false) : [];
        const undoLines = [];
        for (const line of entry.lines) {
          const item = items.find((it) => it.guid === line.guid);
          if (!item) continue;
          undoLines.push({ guid: line.guid, segments: JSON.parse(JSON.stringify(item.segments || [])) });
          const ok = await Promise.resolve(item.setSegments(line.segments)).catch(() => false);
          if (ok) applied++;
        }
        if (undoLines.length) this._undoStack.push({ label: entry.label, lines: undoLines });
      } catch (err) {
        console.error("[find-and-replace] redo", err);
      } finally {
        this._undoBusy = false;
      }
      if (applied === 0) {
        this._toast("Could not redo", "Those lines are no longer in this page.");
        return;
      }
      this._toast(`Redid: ${entry.label}`, `${applied} line${applied === 1 ? "" : "s"} changed.`);
    }
    /**
     * @param {string} label @param {{ guid: string, segments: any[] }[]} lines
     * @param {number} [group] - when given and equal to the top entry's group, the
     *   lines merge into it (keeping the EARLIER snapshot per guid, i.e. the
     *   original text), so one ⌘Z reverts a whole run of replace-ones.
     */
    _pushUndo(label, lines, group) {
      if (!lines.length) return;
      this._redoStack = [];
      const top = this._undoStack[this._undoStack.length - 1];
      if (group !== void 0 && top && top.group === group) {
        for (const l of lines) if (!top.lines.some((x) => x.guid === l.guid)) top.lines.push(l);
        top.label = label;
        return;
      }
      this._undoStack.push({ label, lines, group });
      if (this._undoStack.length > UNDO_LIMIT) this._undoStack.shift();
    }
    /* ── chip ─────────────────────────────────────────────────────────── */
    _ensureChip() {
      if (this._chip) return this._chip;
      this._chip = createChip({
        onNext: /* @__PURE__ */ __name(() => {
          this._session?.step(1);
          this._refreshChip(true);
        }, "onNext"),
        onPrev: /* @__PURE__ */ __name(() => {
          this._session?.step(-1);
          this._refreshChip(true);
        }, "onPrev"),
        onClose: /* @__PURE__ */ __name(() => this._endSession(), "onClose"),
        onToggleCase: /* @__PURE__ */ __name(() => this._toggleFlag("caseSensitive"), "onToggleCase"),
        onToggleWord: /* @__PURE__ */ __name(() => this._toggleFlag("wholeWord"), "onToggleWord"),
        onQuery: /* @__PURE__ */ __name((q) => this._setQuery(q), "onQuery"),
        onReplaceOne: /* @__PURE__ */ __name((r) => void this._replaceOne(r), "onReplaceOne"),
        onReplaceAll: /* @__PURE__ */ __name((r) => void this._replaceAll(r), "onReplaceAll"),
        onCommand: /* @__PURE__ */ __name((id) => this._run(id), "onCommand")
      });
      return this._chip;
    }
    /**
     * Chip Aa / ab| are sticky: flipping one applies to this session AND becomes
     * the default every later session starts from, until it's flipped back. The
     * settings panel shows the same two values.
     * @param {'caseSensitive' | 'wholeWord'} key
     */
    _toggleFlag(key) {
      const s = this._session;
      const next = s ? !s.flags[key] : !this._settings[key];
      this._updateSettings({ [key]: next });
      if (s) {
        s.flags = { ...s.flags, [key]: next };
        s.rescan();
        this._refreshChip(false);
      }
      if (this._panelEl && document.contains(this._panelEl)) this._renderSettings();
    }
    /** @param {string} q */
    _setQuery(q) {
      const s = this._session;
      if (!s) return;
      s.query = q;
      s.current = null;
      if (this._queryRaf) cancelAnimationFrame(this._queryRaf);
      this._queryRaf = requestAnimationFrame(() => {
        this._queryRaf = 0;
        if (this._session === s) {
          s.rescan();
          this._refreshChip(false);
        }
      });
    }
    /** @param {string} replacement */
    async _replaceOne(replacement) {
      const s = this._session;
      if (!s) return;
      if (!s.current) {
        if (!s.step(1)) return;
        this._refreshChip(true);
        return;
      }
      const snapshot = await s.replaceCurrent(replacement);
      if (!snapshot) {
        this._toast("Nothing replaced", "The current match is inside a tag, link or reference.");
        return;
      }
      this._pushUndo("Replace (this session)", [snapshot], this._sessionSeq);
      setTimeout(() => {
        if (this._session === s) {
          s.step(1);
          this._refreshChip(true);
        }
      }, 80);
    }
    /** @param {string} replacement */
    async _replaceAll(replacement) {
      const s = this._session;
      if (!s) return;
      const query = s.query;
      const selecting = s.mode === "select";
      const result = selecting ? await s.replaceSelected(replacement) : await s.replaceAll(replacement);
      if (!result) return;
      if (result.replaced === 0) {
        this._toast("Nothing replaced", "skipped" in result && result.skipped ? `${result.skipped} match${result.skipped === 1 ? " is" : "es are"} inside tags, links or references.` : "No matches.");
        s.observe();
        s.paint();
        return;
      }
      this._pushUndo(`Replace \u201C${query}\u201D \u2192 \u201C${replacement}\u201D`, result.snapshot);
      const bits = [`Replaced ${result.replaced} in ${result.lines} line${result.lines === 1 ? "" : "s"}`];
      if ("skipped" in result && result.skipped) bits.push(`${result.skipped} skipped (tags, links, refs)`);
      if (result.failed) bits.push(`${result.failed} line${result.failed === 1 ? "" : "s"} failed`);
      this._toast(bits[0], bits.slice(1).join(" \xB7 ") || "Undo with \u201CUndo last replace\u201D.");
      this._endSession();
    }
    /** @param {boolean} reposition */
    _refreshChip(reposition) {
      const s = this._session;
      if (!s) {
        this._chip?.hide();
        return;
      }
      const chip = this._ensureChip();
      const selecting = s.mode === "select";
      const stepping = selecting && s.stepping;
      const matchCount = stepping ? s.total : Math.max(s.sdkTotal || 0, s.total + s.skipped);
      const replaceCount = selecting ? s.selectedCount : Math.max(s.sdkReplaceable || 0, s.total);
      chip.update({
        mode: s.mode,
        query: s.query,
        current: s.currentIndex,
        replaceCount,
        matchCount,
        caseSensitive: s.flags.caseSensitive,
        wholeWord: s.flags.wholeWord,
        stepping,
        supported: highlightsSupported(),
        shortcuts: {
          next: this._settings.shortcuts.next,
          prev: this._settings.shortcuts.prev,
          all: this._settings.shortcuts.all,
          find: this._settings.shortcuts.find
        }
      });
      if (reposition || chip.el.hidden) {
        const panelRect = (() => {
          try {
            return s.host.panelEl.getBoundingClientRect();
          } catch {
            return null;
          }
        })();
        chip.place(s.anchorRect(), panelRect);
      }
    }
    /* ── settings ─────────────────────────────────────────────────────── */
    _applyHighlightStyle() {
      let el3 = document.getElementById(HL_STYLE_ID);
      if (!el3) {
        el3 = document.createElement("style");
        el3.id = HL_STYLE_ID;
        document.head.appendChild(el3);
      }
      el3.textContent = highlightCSS({ matchColor: cssColor(this._settings.matchColor), currentColor: cssColor(this._settings.currentColor) });
    }
    /** Central live-apply; guarded so edits made while disabled stage without effects. */
    _applySettings() {
      this._applyHighlightStyle();
      if (this._disabled) return;
      const s = this._session;
      if (s) {
        s.wrap = this._settings.wrap;
        this._refreshChip(false);
      }
    }
    /** @param {Record<string, any>} patch */
    _updateSettings(patch) {
      this._settings = /** @type {TcSettings} */
      this._settingsStore.update(patch).settings;
      this._applySettings();
      this._refreshScopePill();
    }
    _scopeArgs() {
      return {
        diverged: this._settingsStore.isDiverged(),
        localUnavailable: !!this._settingsStore.isLocalUnavailable(),
        onPush: /* @__PURE__ */ __name(() => {
          void this._settingsStore.pushToAll().then((ok) => {
            if (!ok) {
              this._toast(PLUGIN_NAME, "Could not save to all devices \u2014 the plugin config could not be written.");
              return;
            }
            this._toast(PLUGIN_NAME, "Settings applied to all devices");
            this._refreshScopePillUntilSettled();
          });
        }, "onPush"),
        onDiscard: /* @__PURE__ */ __name(() => {
          this._settings = /** @type {TcSettings} */
          this._settingsStore.discardLocal();
          this._applySettings();
          this._renderSettings();
          this._toast(PLUGIN_NAME, "Reverted to synced settings");
        }, "onDiscard")
      };
    }
    _refreshScopePill() {
      const el3 = this._panelEl?.querySelector?.(".tps-scope");
      if (el3) el3.replaceWith(scopeCluster(this._scopeArgs()));
    }
    _refreshScopePillUntilSettled() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = this._settingsStore.settleAfterPush({
        onAdopt: /* @__PURE__ */ __name((settings) => {
          this._settings = /** @type {TcSettings} */
          settings;
          this._applySettings();
          this._renderSettings();
        }, "onAdopt"),
        refreshPill: /* @__PURE__ */ __name(() => this._refreshScopePill(), "refreshPill")
      });
    }
    async _openSettings() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const p = await this.ui.createPanel();
      if (p) p.navigateToCustomType(PANEL_TYPE);
    }
    _renderSettings() {
      if (!this._panelEl) return;
      const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      renderSettings({
        root: this._panelEl,
        commands: COMMANDS,
        defaultShortcuts: defaultShortcuts(),
        conf,
        version: PLUGIN_VERSION,
        rootClass: ROOT_CLASS,
        settings: this._settings,
        disabled: !!this._disabled,
        data: this.data,
        scope: this._scopeArgs(),
        update: /* @__PURE__ */ __name((patch) => this._updateSettings(patch), "update"),
        resetDefaults: /* @__PURE__ */ __name(() => {
          this._updateSettings({ ...DEFAULTS, shortcuts: defaultShortcuts() });
          this._toast(PLUGIN_NAME, "Settings reset to defaults");
          this._renderSettings();
        }, "resetDefaults"),
        setEnabled: /* @__PURE__ */ __name((on) => void this._settingsStore.setDisabled(!on), "setEnabled"),
        close: /* @__PURE__ */ __name(() => {
          try {
            this.ui.getActivePanel()?.close?.();
          } catch {
          }
        }, "close")
      });
    }
    /** @param {string} title @param {string} [message] */
    _toast(title, message) {
      try {
        this.ui.addToaster({ title, message, dismissible: true, autoDestroyTime: 3500 });
      } catch {
      }
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
