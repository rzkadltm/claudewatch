# ClaudeWatch

A desktop app, built with [Tauri](https://tauri.app/), React, and TypeScript, for keeping an eye on your Claude activity — usage, which skills/tools are active, and other Claude Code session information at a glance.

## Tech Stack

- [Tauri 2](https://tauri.app/) — Rust-backed desktop app shell
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server and bundler
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first, responsive styling
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives + Lucide icons) — accessible, composable dashboard components

## Platform Support

| Platform | Status |
| --- | --- |
| Linux  | ✅ Supported |
| macOS  | ✅ Supported |
| Windows | ❌ Not supported yet |

## Prerequisites

You'll need [Rust](https://www.rust-lang.org/) and [Node.js](https://nodejs.org/) (with npm) installed, plus a few OS-level packages for Tauri's webview.

### Rust (Linux & macOS)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Linux

**Fedora**

```sh
sudo dnf install webkit2gtk4.1-devel \
  openssl-devel \
  curl \
  wget \
  file \
  libappindicator-gtk3-devel \
  librsvg2-devel \
  libxdo-devel
sudo dnf group install "c-development"
```

**Debian / Ubuntu**

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

Other distros: see the [Tauri Linux prerequisites](https://v2.tauri.app/start/prerequisites/#linux).

### macOS

Install the Xcode Command Line Tools:

```sh
xcode-select --install
```

## Setup

```sh
git clone git@github.com:rzkadltm/claudewatch.git
cd claudewatch
npm install
```

## Development

```sh
npm run tauri dev
```

## Building

```sh
npm run tauri build
```

Produces a native bundle for your current OS in `src-tauri/target/release/bundle/`.

## License

Licensed under the [MIT License](LICENSE).
