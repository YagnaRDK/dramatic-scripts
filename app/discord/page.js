import DiscordLayout from "./layout";

import { redirect } from "next/navigation";
export default async function Discord() {
  redirect("https://discord.com/invite/ZMsddhmTAf");
}

Discord.getLayout = function getLayout(page) {
  return <DiscordLayout>{page}</DiscordLayout>;
};
