# Docker Content Manager

This is a simple Flask application demonstrating Docker commands for content management.

## Features
- Add and view content via web
- Docker volume for persistence
- Basic Docker CLI usage

## Commands

```bash
docker build -t content-manager .
docker volume create content_data
docker run -p 5000:5000 -v content_data:/app content-manager
```
