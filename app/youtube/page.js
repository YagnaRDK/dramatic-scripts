import YouTubeLayout from "./layout";

import { redirect } from "next/navigation";
export default async function YouTube() {
  redirect("https://www.youtube.com/@DramaticScripts");
}

YouTube.getLayout = function getLayout(page) {
  return <YouTubeLayout>{page}</YouTubeLayout>;
};
