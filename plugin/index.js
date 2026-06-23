// Agent Realm — server-side stub
// This plugin is purely a UI app. The isometric world and live data polling
// run entirely in the browser via web/index.js. There are no agent tools or
// actions. If a future version adds leaderboards or cross-device realm state,
// this is where that server logic would live.

const PLUGIN_ID = "agentverse";

export async function run() {
  return { ok: true, pluginId: PLUGIN_ID, message: "Agent Realm is a UI-only plugin." };
}

export async function ping() {
  return { ok: true, pluginId: PLUGIN_ID };
}

export default { run, ping };
