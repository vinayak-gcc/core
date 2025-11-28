# Core Dashboard

A responsive and interactive HR Management dashboard built with Next.js and Tailwind CSS.

## Features
-   **Dynamic Sidebar**: Collapsible and interactive sidebar with active state management.
-   **Responsive Layout**: Optimized for desktop and mobile views.
-   **Interactive UI**: Hover animations, tooltips, and smooth transitions.
-   **Data Visualization**: Clean and organized data presentation with grid/list views.

## Tech Stack
-   **Framework**: Next.js
-   **Styling**: Tailwind CSS
-   **Language**: TypeScript

## Folder Structure
```
core/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── Card/               # User profile cards (Grid/List)
│   ├── MobileSidebar/      # Responsive mobile sidebar
│   ├── Navbar/             # Top navigation bar
│   ├── Pagination/         # Pagination controls
│   ├── Sidebar/            # Main navigation sidebar
│   ├── Toolbar/            # Search and filter tools
│   └── ...
├── public/                 # Static assets (icons, images)

```

## Key Components
-   **Sidebar**: Dynamic navigation with active state highlighting and collapsible support.
-   **Navbar**: Displays user profile, quick actions, and a real-time clock.
-   **Toolbar**: Contains search functionality, view toggles (Grid/List), and action buttons.
-   **Card**: Adaptive component that renders user details in either a card (Grid view) or a row (List view).
-   **Pagination**: Handles page navigation and rows per page selection.
-   **Mobile Sidebar**: Responsive sidebar drawer for mobile devices.

## Future Improvements
-   [ ] **Dark Mode**: Toggle between light and dark themes.
-   [ ] **Backend Integration**: Connect to a real API for data fetching.
-   [ ] **User Authentication**: Login and protected routes.
-   [ ] **Advanced Filtering**: More complex filter options in the toolbar.

## Getting Started

1.  Install dependencies:
    ```bash
    pnpm install
    ```

2.  Run the development server:
    ```bash
    pnpm dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.
