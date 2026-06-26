#!/usr/bin/env python3
# Static server for the Travel Wiki demo that disables caching, so the
# tunnel always serves the freshly built index.html (no stale browser cache).
# Threaded so a long-lived tunnel keep-alive connection can't block new requests.
import http.server, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8787

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

class Server(http.server.ThreadingHTTPServer):
    allow_reuse_address = True       # SO_REUSEADDR: rebind immediately past a TIME_WAIT socket
    daemon_threads = True            # don't let lingering connections block shutdown

with Server(("", PORT), NoCacheHandler) as httpd:
    print(f"no-cache threaded server on :{PORT}", flush=True)
    httpd.serve_forever()
