import InstagramLayout from "./layout";

import { redirect } from "next/navigation";
export default async function Instagram() {
  redirect("https://instagram.com/dramaticscripts/");
}

Instagram.getLayout = function getLayout(page) {
  return <InstagramLayout>{page}</InstagramLayout>;
};
