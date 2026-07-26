# 📝 Day-3 Notes — Tailwind CSS

## 🎯 What I Learned
How to add interactivity using Tailwind CSS state modifiers and smooth transitions.

---

## ⚡ Core Classes

- **`hover:`** — Mouse hover effect (`hover:bg-blue-600`)
- **`focus:`** — Keyboard / click selection (`focus:ring-2`)
- **`active:`** — Mouse click press down (`active:scale-95`)
- **`disabled:`** — Disabled state styling (`disabled:opacity-50`)
- **`group-hover:`** — Style child when parent is hovered

---

## ✨ Smooth Transitions

- **`transition`** — Enables smooth animation
- **`duration-300`** — Sets speed to 300ms
- **`ease-in-out`** — Smooth motion curve

---

## 💻 Quick Example

```html
<button class="bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-300">
  Click Me
</button>