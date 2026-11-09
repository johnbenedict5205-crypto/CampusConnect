# Campus Connect

Campus Connect is a student-focused mobile app being developed as one continuous project for ISE101. This Expo project was created once and will be extended in place through Week 18.

## Week 1 foundation

The app currently contains a welcome screen introducing the project. Later course modules will add navigation, reusable components, forms and state, API and cloud data, Supabase authentication, SQLite and offline support, device features, and integrated tests.

## Run the app

Requirements: a supported Node.js LTS release with npm, Git, and either a phone with Expo Go or a configured simulator. iOS Simulator generally requires macOS and Xcode.

```bash
npm install
npx expo start
```

Open the QR code in a compatible Expo Go app or launch a configured simulator. To run the web version, use `npm run web`.

Continue using this same `CampusConnect` folder for future modules. Do not run `create-expo-app` again for weekly activities.

## Project structure

| File or folder | Purpose |
| --- | --- |
| `package.json` | Project scripts and JavaScript dependencies; npm uses it to install and run the project. |
| `app.json` | Expo app name, slug, icons, platform settings, and plugins. |
| `src/app/index.tsx` | Initial Campus Connect welcome screen. |
| `src/app/_layout.tsx` | Shared Expo Router layout and tab navigation setup. |
| `assets/` | App icons, splash art, and other static images. |
| `src/components/` | Reusable interface components, to extend as features are added. |
| `src/constants/` | Shared visual theme and layout constants. |
| `.gitignore` | Excludes generated files, dependencies, and local secrets from Git. |
| `docs/project-overview.md` | Project purpose, intended users, technology choice, and feature roadmap. |
| `docs/evidence/` | Screenshots captured from the actual running app and project tree. |

This project uses React Native and Expo with Expo Router. React Native builds interfaces from native components rather than displaying the app as a website in a mobile browser. Expo provides the project tooling and development workflow; Expo Go can run compatible projects on a phone. Node.js/npm run the development tools and manage packages, and Git can track changes in the single project repository.

## Git and privacy

Before the initial commit, review `git status` and confirm no credentials, private keys, local environment files, or real user data are included. Keep secrets out of source control.
