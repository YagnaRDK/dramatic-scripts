import TwitterLayout from "./layout";

import { redirect } from "next/navigation";
export default async function Twitter() {
  redirect("https://x.com/dramaticscripts");
}

Twitter.getLayout = function getLayout(page) {
  return <TwitterLayout>{page}</TwitterLayout>;
};
