# Copilot Instructions for e-commerce React + Vite Project

## Project Overview
- This is a React SPA bootstrapped with Vite, using HMR and ESLint for development.
- The codebase is organized by feature: `src/components/` (UI), `src/context/` (React Contexts), `src/services/` (API/data), `src/auth/` (auth screens), and `src/provider/` (global providers).
- Tailwind CSS is used for styling (see `tailwind.config.js`, `postcss.config.js`).
- Entry point: `src/main.jsx` mounts the app and wraps it in providers.

## Key Patterns & Conventions
- **Context API**: Shared state (e.g., cart, URLs) is managed via React Contexts in `src/context/`. Use context hooks (e.g., `useCart`) for access.
- **Component Structure**: UI is modularized in `src/components/`. Each component is focused and stateless where possible.
- **Service Layer**: API/data logic is in `src/services/`. Example: `product-api.js` for product-related requests.
- **Auth Flow**: Auth screens (`Login`, `Signup`, `LogOut`) are in `src/auth/`. State is likely managed via context/provider.
- **Provider Pattern**: Global providers (e.g., `AppProvider`) wrap the app in `src/main.jsx`.
- **Routing**: If present, routing is handled in a top-level component (not shown in README, check for `react-router-dom` usage).

## Developer Workflows
- **Start Dev Server**: `npm run dev` (Vite HMR)
- **Build**: `npm run build` (Vite production build)
- **Lint**: `npm run lint` (ESLint)
- **Styling**: Tailwind classes in JSX; config in `tailwind.config.js`.
- **Add Context**: Create context in `src/context/`, wrap app in provider, expose hooks for usage.
- **Add Component**: Place in `src/components/`, keep logic minimal, use props/context for data.
- **API Integration**: Add functions to `src/services/`, import and use in components/contexts.

## Integration Points
- **External APIs**: See `src/services/` for API calls.
- **Global State**: Use context from `src/context/` and wrap in provider from `src/provider/`.
- **Assets**: Images in `public/images/` and `src/assets/`.

## Examples
- To add a product to cart: use `addToCart` from `CartContext` (see `src/context/CartContext.jsx`).
- To display cart: use `cartItems` from `CartContext` in a component (see `src/components/Cart.jsx`).

## Tips for AI Agents
- Prefer context/hooks for state over prop drilling.
- Keep UI logic in components, business/data logic in services/contexts.
- Follow Tailwind utility-first styling.
- Reference `README.md` for Vite/React conventions.

---
If any section is unclear or missing, please request clarification or provide examples from the codebase.
