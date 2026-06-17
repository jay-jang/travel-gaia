#!/usr/bin/env python3
# Static server for the Travel Gaia demo that disables caching, so the
# tunnel always serves the freshly built index.html (no stale browser cache).
import http.server, socketserver, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8787

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"no-cache server on :{PORT}")
    httpd.serve_forever()
