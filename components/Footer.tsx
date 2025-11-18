import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">Bea</h3>
            <p className="text-sm">
              Making your tech problems disappear. Simply.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/logs" className="hover:text-white transition-colors">
                  Learning Logs
                </Link>
              </li>
              <li>
                <Link href="/intake" className="hover:text-white transition-colors">
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
            <p className="text-sm mb-2">
              <a
                href={`mailto:${siteContent.footer.email}`}
                className="hover:text-white transition-colors"
              >
                {siteContent.footer.email}
              </a>
            </p>
            <p className="text-sm">
              <Link href="/schedule" className="hover:text-white transition-colors">
                Schedule a coffee chat
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-8 text-sm text-center md:text-left">
          <p className="mb-2">{siteContent.footer.copyright}</p>
          <p className="text-xs">{siteContent.footer.privacyText}</p>
        </div>
      </div>
    </footer>
  );
}
