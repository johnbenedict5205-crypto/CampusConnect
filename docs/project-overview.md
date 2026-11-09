# Campus Connect — project overview

## Purpose

Campus Connect is a student-focused mobile application intended to make campus life easier to navigate and help students stay connected. The Week 1 deliverable is the project foundation and welcome screen; feature development will continue in this same Expo project through Week 18.

## Target users

The primary users are students who need a convenient way to find campus information and use student services from a mobile device.

## Technology choice

This course uses React Native with Expo as a cross-platform approach. A shared JavaScript/TypeScript codebase can target Android and iOS, reducing duplicated interface and application logic compared with maintaining separate native apps. React Native renders native UI components; it is not simply a website inside a mobile browser. Expo streamlines project setup, development, testing, and supported device API access.

Platform differences still matter. Android supports devices from many manufacturers, while iOS runs on iPhones. The app must account for different screen sizes, operating-system conventions, permissions, accessibility, performance, network conditions, privacy, and device capabilities.

## Mobile ecosystem

Campus Connect is part of a larger mobile ecosystem:

- **Device:** screen, storage, and, as future features require, sensors or camera.
- **Operating system:** Android or iOS manages app execution, permissions, and platform behavior.
- **Application:** React Native screens and logic provide the student-facing experience.
- **Network and APIs:** future modules may connect the app to remote services.
- **Cloud and local data:** later modules will explore Supabase and SQLite, including offline-aware behavior.
- **Development and distribution:** Expo Go or a simulator supports development testing; app stores and distribution services are later deployment concerns.

## Planned feature roadmap

1. Home/dashboard and navigation.
2. Reusable UI, forms, and application state.
3. API and cloud data.
4. Supabase and authentication with appropriate security.
5. SQLite persistence, offline support, and synchronization.
6. Selected device capabilities with permission and privacy awareness.
7. Responsive design, accessibility, testing, and final integration.

## Week 1 status

- Expo project: created and retained in this folder.
- Welcome screen: implemented in `src/app/index.tsx`.
- Device or simulator used and launch result: record after running the project.
- Screenshots: capture the running screen and project tree and save them in `docs/evidence/`.

## Key generated files

- `package.json` — dependencies, scripts, and project metadata.
- `app.json` — Expo application and platform configuration.
- `src/app/index.tsx` — initial route and welcome screen.
- `src/app/_layout.tsx` — shared route layout and navigation.
- `assets/` — app icons and static images.
- `.gitignore` — excludes generated files, dependencies, and local-only files from Git.

## Development setup

Install a supported Node.js LTS release (npm is included), Git, and Visual Studio Code or another code editor. Use a phone with a compatible Expo Go app or configure a simulator. iOS Simulator generally requires macOS and Xcode. Follow current official setup instructions because supported versions and templates change.

From this project folder, install dependencies and start Expo:

```bash
npm install
npx expo start
```

For future course modules, reopen this same project folder. Do not create another app for weekly activities.

## References

- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [Expo documentation](https://docs.expo.dev/)
- [Create an Expo project](https://docs.expo.dev/get-started/create-a-project/)
- [Expo Go](https://docs.expo.dev/get-started/expo-go/)
- [Git documentation](https://git-scm.com/doc)
