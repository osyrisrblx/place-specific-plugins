# place-specific-plugins

This plugin enables you to have place-specific plugins!
Useful for creating plugin code that is specific to a single place file and reuses game code.

## Setup

Create a folder in ServerStorage called `plugins`.

Any ModuleScript descendant of this folder will be run with `require()`.

You can access the `plugin` global via `_G.plugin`

Example:

```ts
/// <reference types="@rbxts/types/plugin" />

declare global {
	interface _G {
		plugin: Plugin;
	}
}

_G.plugin
	.CreateToolbar("foo")
	.CreateButton("bar", "", "")
	.Click.Connect(() => print("baz!"));
```

## Usage

Plugins will load automatically on startup.

If you make any changes to either plugin ModuleScripts _or_ ModuleScripts used by the plugins, you can reload them with the hotkey of `Ctrl+Shift+L` on Windows.

TODO: Unsure what the hotkey is on MacOS

## Caveats

1. The plugin's .rbxm file must be in your local plugins folder, you can find that by clicking here:

![](https://i.imgur.com/ISGvXAN.png)

2. Rojo should be installed as a "cloud plugin" from the Roblox website. The reload hotkey will reload _all_ local file plugins. If Rojo is a local file plugin, this will disconnect your Rojo serve session each time you reload.
