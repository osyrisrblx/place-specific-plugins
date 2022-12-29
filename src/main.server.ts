export {};

const RunService = game.GetService("RunService");
const ServerStorage = game.GetService("ServerStorage");

declare global {
	interface _G {
		plugin: Plugin;
	}
}

if (RunService.IsEdit() || RunService.IsServer()) {
	_G.plugin = plugin;

	for (const descendant of ServerStorage.WaitForChild("plugins", math.huge)!.GetDescendants()) {
		if (descendant.IsA("ModuleScript")) {
			require(descendant);
		}
	}
}
