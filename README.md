# SIGOP Demo

## Overview

Sanitized demonstration of task-management and realtime coordination patterns from an internal operational prototype.

## Features

- Express API for health and fictional tasks.
- Socket.IO event when a demo task is created.
- Static web view with fictional task data.
- Explicit local MQTT simulation; no real broker is contacted.
- Responsive dashboard with task counts, task creation, and local realtime activity feedback.

## Technologies

Node.js, Express, Socket.IO, JavaScript, HTML, JSON.

## Run

```bash
npm install
npm start
```

Open `http://127.0.0.1:6767`.

## Security and privacy

This is not a commercial or production system. It contains no institutional data, branding, operational identities, or real credentials.
