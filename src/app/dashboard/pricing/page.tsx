import Loading from "@/app/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-screen flex items-center justify-center">
        Pricing Page
      </div>
    </Suspense>
  );
}
