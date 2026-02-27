import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Valeron",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#141414] px-8 py-16 md:px-16 lg:px-32">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-16 inline-block">
          <Image
            src="/assets/valeron-wordmark.png"
            alt="VALERON"
            width={160}
            height={28}
            className="h-auto w-28"
          />
        </Link>

        <h1 className="mb-8 text-2xl font-semibold uppercase tracking-wider text-white">
          Privacy Policy
        </h1>

        <p className="text-sm leading-relaxed text-neutral-400">
          Privacy policy content coming soon. If you have questions, reach out
          to us at{" "}
          <a
            href="mailto:privacy@valeron.ai"
            className="text-white underline underline-offset-2 hover:text-neutral-300"
          >
            privacy@valeron.ai
          </a>
          .
        </p>
      </div>
    </main>
  );
}
