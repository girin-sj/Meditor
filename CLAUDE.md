# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meditor is a React Native application built with React Native 0.82.1 and React 19.1.1. The project supports both iOS and Android platforms and uses TypeScript for type safety.

## Development Commands

### Starting the Development Server

Start Metro bundler (required before running the app):

```bash
npm start
# or
yarn start
```

### Running the Application

**Android:**

```bash
npm run android
```

**iOS:**
First-time setup or after updating native dependencies:

```bash
bundle install
bundle exec pod install
```

Then run:

```bash
npm run ios
```

### Code Quality

**Linting:**

```bash
npm run lint
```

**Testing:**

```bash
npm test
# Run tests with Jest
```

## Project Structure

```
Meditor/
├── index.js                 # Entry point - registers the app
├── App.tsx                  # Root component with SafeAreaProvider setup
├── src/
│   ├── assets/             # Static assets (images, fonts, etc.)
│   └── screens/            # Screen components organized by feature
│       └── home/
│           └── HomeScreen.js
├── __tests__/              # Test files
│   └── App.test.tsx        # Main app test
├── android/                # Android native project
│   └── app/
│       ├── build.gradle    # App-level build configuration
│       └── src/
├── ios/                    # iOS native project
│   ├── Meditor/           # Native iOS code
│   ├── Meditor.xcodeproj/ # Xcode project
│   └── Podfile            # CocoaPods dependencies
```

## Architecture

### Component Hierarchy

- **index.js**: Registers the root `App` component with React Native's `AppRegistry`
- **App.tsx**: The main app component that:
  - Wraps the app in `SafeAreaProvider` for handling safe areas on iOS/Android
  - Sets up `StatusBar` with dark mode support
  - Uses `NewAppScreen` template component for initial display
  - Provides safe area insets to child components

### Key Dependencies

- **react-native-safe-area-context**: Handles safe areas (notches, status bars, etc.)
- **@react-native/new-app-screen**: Template component for the default React Native screen

### Dark Mode Support

The app uses `useColorScheme()` hook to detect system theme preference and adjusts the StatusBar accordingly.

## Coding Standards

### React Native Best Practices

1. **Readability**

   - Replace magic numbers with named constants
   - Abstract complex logic into dedicated components/hooks
   - Split conditional rendering into separate components
   - Use named variables for complex boolean conditions

2. **Component Organization**

   - Organize by feature/domain rather than by type
   - Keep related logic close together
   - Use component composition over props drilling

3. **State Management Patterns**

   - Use React Query for server state
   - Use Recoil for client global state
   - Keep state as local as possible
   - Break broad hooks/contexts into focused ones

4. **Naming Conventions**
   - Use unique, descriptive names for custom functions
   - Name constants to reflect their relationship to logic
   - Use consistent return types for similar functions/hooks

## Native Configuration

### Android

- **Min SDK**: 24 (Android 7.0)
- **Target/Compile SDK**: 36
- **Build Tools**: 36.0.0
- **NDK**: 27.1.12297006
- **Kotlin**: 2.1.20

### iOS

- **Minimum iOS Version**: Defined in Podfile via `min_ios_version_supported`
- **CocoaPods**: Used for dependency management
- **Platform**: iOS native code in `ios/Meditor/`

## Important Notes

### iOS Development

- Always run `bundle exec pod install` after:
  - Cloning the project for the first time
  - Updating native dependencies
  - Adding new native modules

### File Organization

- Screen components should be organized under `src/screens/` by feature
- Shared assets go in `src/assets/`
- The project structure is still early-stage with minimal screens implemented

### Hot Reload

- Fast Refresh is enabled by default for rapid development
- Force reload: Double-tap 'R' on Android, 'R' on iOS Simulator
- Dev Menu: Ctrl+M (Windows/Linux) or Cmd+M (macOS) on Android

### TypeScript

- The project extends `@react-native/typescript-config`
- All `.ts` and `.tsx` files are included
- `node_modules` and `Pods` are excluded from compilation
