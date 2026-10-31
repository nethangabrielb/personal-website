import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="nfp">
      <div className="bento-card nfp-inner">
        <p className="nfp-code">404 · Not Found</p>
        <h1 className="nfp-title">This route does not exist.</h1>
        <p className="nfp-sub">
          The requested path may have moved or been mistyped.
        </p>
        <Link to="/" className="btn-tactile btn-tactile-primary">
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}
