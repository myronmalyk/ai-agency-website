import Image from "next/image";
import Link from "next/link";

/** Tyvelo brand lockup: icon mark + wordmark. Logos are 677×369. */
export default function Brand({
  href = "/",
  markHeight = 26,
  className = "",
}: {
  href?: string;
  markHeight?: number;
  className?: string;
}) {
  const width = Math.round((markHeight * 677) / 369);
  return (
    <Link
      href={href}
      aria-label="Tyvelo"
      className={`flex items-center gap-3 no-underline ${className}`}
    >
      <Image
        src="/images/logo/logo_black.png"
        alt=""
        width={width}
        height={markHeight}
        priority
      />
      <span className="text-xl font-bold tracking-[0.2em] text-white">TYVELO</span>
    </Link>
  );
}
