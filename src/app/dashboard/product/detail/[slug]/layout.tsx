import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Produk | Ladeva CMS",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
