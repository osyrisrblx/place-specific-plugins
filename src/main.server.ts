export {};

const ServerStorage = game.GetService("ServerStorage");

declare global {
	interface _G {
		plugin: Plugin;
	}
}

_G.plugin = plugin;

for (const descendant of ServerStorage.WaitForChild("plugins").GetDescendants()) {
	if (descendant.IsA("ModuleScript")) {
		require(descendant);
	}
}
