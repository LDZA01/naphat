"use client";
import { useState } from "react";
import { ArrowUpRight, Download, Check } from "lucide-react";
export function AvailabilityLink({
  label,
  href,
  download = false,
  className = "",
}: {
  label: string;
  href: string | null;
  download?: boolean;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <span className={`availability-link ${className}`}>
      {href ? (
        <a
          href={href}
          download={download || undefined}
          target={download || href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
        >
          {label}
          {download ? <Download size={15} /> : <ArrowUpRight size={16} />}
        </a>
      ) : (
        <>
          <button onClick={() => setShow(!show)} aria-expanded={show}>
            {label}
            {show ? (
              <Check size={15} />
            ) : download ? (
              <Download size={15} />
            ) : (
              <ArrowUpRight size={16} />
            )}
          </button>
          {show && (
            <span role="status" className="link-notice">
              {download
                ? "Résumé coming soon."
                : `${label} details coming soon.`}
            </span>
          )}
        </>
      )}
    </span>
  );
}
