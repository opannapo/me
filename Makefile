.PHONY: run-web

run-web:
	@echo "--- run local server di http://localhost:8000 ---"
	@python3 -m http.server 8000
