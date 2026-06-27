# PopX Mobile Application Framework

A pixel-perfect user authentication and profile management module built on top of the **React 18 (Vite)** compilation engine and **Bootstrap 5**. The architecture features a decoupled, centralized state management engine coupled with a native browser history event override system.



---

## 📱 Visual Target Specifications
The application UI layouts are strictly anchored to specific viewport parameters to replicate high-fidelity mobile workspace designs:
* **Target Viewport Constraints:** Width: `375px` | Height: `812px`
* **Layout Positioning Model:** Absolute canvas offset coordinates using precise element boundaries.
* **Global Typography System:** Rubik typeface rendering using modular weights.

---

## ✨ System Architecture Features

* **Central State Machine (`App.jsx`):** Coordinates data collection globally across dynamically mounting child page nodes (`Welcome`, `Signup`, `Profile`).
* **Bulletproof Prop Validation:** Uses object fallback safety hooks (`formData || {}`) inside dynamic list component maps (`inputFields.map()`) to eliminate runtime `undefined` variable memory access exceptions.
* **Hardware Intercept Router:** Leverages a unified lifecycle hook mapping window `popstate` events to state targets, overriding default browser backward arrows to smoothly slide navigation steps back.

---

## 🛠️ Project Stack Configuration

* **Runtime Core:** React 18 (Functional Component Architecture)
* **Build System Accelerator:** Vite v5+ (Fast Refresh HMR)
* **Style Engine & Layout Utilities:** Bootstrap v5.3+ (Flex Utility Grids)
* **Glyph Graphic Asset Packs:** Bootstrap Icons Open-Source Kit

---

## 📦 Local Deployment Strategy

Follow this sequence to setup and run the application engine locally:

### 1. Replicate Project Files
```bash
git clone [https://github.com/pr1yanshuchaurasia/popx-app-assignment.git](https://github.com/pr1yanshuchaurasia/popx-app-assignment.git)
cd popx-app-assignment