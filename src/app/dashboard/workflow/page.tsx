import Loading from "@/app/loading";
import MainWorkflow from "@/components/pages/workflow/main";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MainWorkflow />
    </Suspense>
  );
}
