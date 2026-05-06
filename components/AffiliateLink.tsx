interface AffiliateLinkProps {
  href: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Simple anchor wrapper for affiliate links — forces target="_blank" and
 * rel="sponsored noopener noreferrer". GA4 affiliate_click event is fired
 * by the global click delegator in app/layout.tsx, so this component does
 * NOT attach its own onClick handler (avoids double-firing).
 */
export default function AffiliateLink({ href, label, children, className }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={label}
      className={className ?? "underline hover:text-[#C9A84C] font-semibold"}
    >
      {children}
    </a>
  );
}
