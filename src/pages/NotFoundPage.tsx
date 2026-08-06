import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="nfp">
      <div className="outer nfp-inner">
        <p className="nfp-code">404</p>
        <h1 className="nfp-title">This page doesn't exist.</h1>
        <p className="nfp-sub">The address may be mistyped, or the page may have moved.</p>
        <Link to="/" className="btn-primary">Go home</Link>
      </div>
    </div>
  );
}
