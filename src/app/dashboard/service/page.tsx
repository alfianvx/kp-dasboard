import Loading from "@/app/loading";
import MainService from "@/components/pages/service/main";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MainService />
    </Suspense>
  );
}
