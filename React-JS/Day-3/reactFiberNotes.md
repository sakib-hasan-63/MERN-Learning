# React Fiber

## What is React Fiber?

React Fiber is the **new rendering engine** introduced in **React 16**.

It makes React applications **faster**, **smoother**, and **more efficient** by breaking rendering into small tasks.

---

## Why React Fiber?

Before Fiber, React rendered everything at once.

Problems:
- UI could freeze
- Slow performance
- Poor user experience

Fiber solves these problems by doing work in small pieces.

---

## How React Fiber Works

```text
Large Task
    ↓
Small Task 1
    ↓
Pause
    ↓
Small Task 2
    ↓
Pause
    ↓
Complete
```

This keeps the UI smooth and responsive.

---

# Main Features

### 1. Incremental Rendering
- Renders work in small pieces.
- Improves performance.

### 2. Interruptible Rendering
- React can pause rendering.
- High-priority tasks are handled first.

### 3. Priority Scheduling
- High → Button Click
- Medium → Animation
- Low → Background Work

---

## Fiber Tree

Every React component is stored as a **Fiber Node** inside a **Fiber Tree**.

```text
App
│
├── Navbar
├── Home
│   └── Button
└── Footer
```

---

## React Fiber Phases

### 1. Render Phase
- Compares old and new UI.
- Finds changes.
- No DOM update.

### 2. Commit Phase
- Updates the DOM.
- Updates the screen.

---

## React Fiber Flow

```text
State Change
      ↓
React Fiber
      ↓
Render Phase
      ↓
Commit Phase
      ↓
DOM Update
```

---

## Benefits

- Faster Rendering
- Better Performance
- Smooth UI
- Better User Experience
- Efficient DOM Updates

---

## Interview Definition

**React Fiber** is the rendering engine introduced in **React 16**. It breaks rendering into small tasks, making React applications faster and more responsive.

---

## Key Points

- Introduced in React 16
- New Rendering Engine
- Small Task Rendering
- Fiber Tree & Fiber Node
- Render Phase
- Commit Phase
- Better Performance