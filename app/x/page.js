import XLayout from "./layout";

import { redirect } from "next/navigation";
export default async function TwitterX() {
  redirect("https://x.com/dramaticscripts");
}

TwitterX.getLayout = function getLayout(page) {
  return <XLayout>{page}</XLayout>;
};
