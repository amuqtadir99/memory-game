# Testing Guide - Memory Master

## Quick Start Testing

### 1. Open the Game
```bash
# Simply open index.html in your browser
# Or use a local server:

# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then navigate to: `http://localhost:8000`

---

## Visual Test Checklist

### ✅ Layout Tests

**Desktop (>1024px)**
- [ ] Game board is 600x600px centered
- [ ] All cards visible within board
- [ ] No horizontal scrolling
- [ ] Stats panel displays in one row
- [ ] Controls fit in one line

**Tablet (768px)**
- [ ] Game board scales to fit
- [ ] Aspect ratio maintained (square)
- [ ] Cards still visible
- [ ] Controls may wrap
- [ ] Stats in 2 columns

**Mobile (375px - iPhone SE)**
- [ ] Game board fits screen width
- [ ] No overflow or horizontal scroll
- [ ] Cards are tappable
- [ ] Controls stack vertically
- [ ] Stats in 2x2 grid

---

### ✅ Difficulty Tests

**Easy Mode (8 cards)**
- [ ] Board shows 4x2 grid
- [ ] All 8 cards visible
- [ ] Cards fit within 600x600px
- [ ] No cards overflow

**Medium Mode (16 cards)**
- [ ] Board shows 4x4 grid
- [ ] All 16 cards visible
- [ ] Cards fit within 600x600px
- [ ] Proper spacing

**Hard Mode (24 cards)**
- [ ] Board shows 6x4 grid
- [ ] All 24 cards visible
- [ ] Cards fit within 600x600px
- [ ] Smaller but readable symbols

**Critical Test**: Switch between all three difficulties rapidly
- [ ] Board size stays consistent (600x600px)
- [ ] Cards never overflow screen
- [ ] Layout doesn't break
- [ ] Smooth transitions

---

### ✅ Visual Design Tests

**Modern Look**
- [ ] Gradient backgrounds visible
- [ ] Smooth rounded corners (24px containers)
- [ ] Layered shadows present
- [ ] Colors are vibrant and modern
- [ ] Not amateur or dated looking

**Animations**
- [ ] Brain icon bounces in header
- [ ] Stars pulse when active
- [ ] Cards flip smoothly (3D effect)
- [ ] Hover effects lift elements
- [ ] Theme toggle rotates 180°
- [ ] Modal slides up with bounce

**Color Gradients**
- [ ] Title has purple gradient
- [ ] Stats values have gradient
- [ ] Matched cards turn green
- [ ] Victory modal header is purple
- [ ] New record badge is gold

**Shadows & Depth**
- [ ] Cards have subtle shadows
- [ ] Hover increases shadow
- [ ] Modal has strong shadow
- [ ] Stat cards have shadows
- [ ] Game board has glow effect

---

### ✅ Functionality Tests

**Game Flow**
1. [ ] Click first card - flips over
2. [ ] Click second card - flips over
3. [ ] If match - both stay green
4. [ ] If no match - both shake and flip back
5. [ ] Move counter increments
6. [ ] Timer starts on first flip
7. [ ] Stars update based on moves

**Match Detection**
- [ ] Correct matches stay flipped
- [ ] Incorrect matches flip back
- [ ] Matched cards show green gradient
- [ ] Mismatched cards shake
- [ ] Can't flip already matched cards
- [ ] Can't flip more than 2 at once

**Victory Condition**
- [ ] All pairs matched triggers victory
- [ ] Timer stops
- [ ] Modal appears with stats
- [ ] New record detected if applicable
- [ ] Play Again button works

---

### ✅ Interactive Elements

**Buttons & Controls**
- [ ] Difficulty selector changes game
- [ ] Sound toggle switches icon (🔊/🔇)
- [ ] New Game resets everything
- [ ] Theme toggle switches (🌙/☀️)
- [ ] All buttons lift on hover
- [ ] Click feedback on all buttons

**Card Interactions**
- [ ] Hover scales card (1.05x)
- [ ] Click flips card (3D rotation)
- [ ] Matched cards pulse
- [ ] Can't interact during processing
- [ ] Cursor changes to pointer

**Stats Interactions**
- [ ] Hover lifts stat cards
- [ ] Border appears on hover
- [ ] Values update in real-time
- [ ] Stars animate when active

---

### ✅ Theme Tests

**Light Theme** (Default)
- [ ] Background is light (#f0f4ff)
- [ ] Text is dark and readable
- [ ] Cards are white
- [ ] Gradients are vibrant
- [ ] Good contrast

**Dark Theme** (Click moon icon)
- [ ] Background is dark (#0f172a)
- [ ] Text is light and readable
- [ ] Cards are dark gray
- [ ] Gradients still vibrant
- [ ] Good contrast

**Theme Persistence**
- [ ] Refresh page - theme persists
- [ ] Close and reopen - theme persists
- [ ] Toggle multiple times - works
- [ ] Icon updates correctly

---

### ✅ Sound Tests

**Sound ON** (Default)
- [ ] Icon shows 🔊
- [ ] Flip sound on card reveal
- [ ] Match sound when pair found
- [ ] Mismatch sound on wrong pair
- [ ] Victory melody on win

**Sound OFF**
- [ ] Icon shows 🔇
- [ ] No sounds play
- [ ] Preference saved
- [ ] Works after refresh

---

### ✅ Data Persistence Tests

**Best Time Tracking**
- [ ] Complete a game
- [ ] Time is saved as best
- [ ] Beat the time - updates
- [ ] Slower time - doesn't update
- [ ] Separate per difficulty

**Statistics**
- [ ] Games played increments
- [ ] Games won increments
- [ ] Win rate calculates correctly
- [ ] Stats persist after refresh
- [ ] Updates after each game

**Preferences**
- [ ] Theme choice saves
- [ ] Sound preference saves
- [ ] All persist in localStorage
- [ ] Survive browser close

---

### ✅ Responsive Behavior

**Window Resize**
- [ ] Board scales smoothly
- [ ] No overflow at any size
- [ ] Cards remain proportional
- [ ] Layout doesn't break
- [ ] Transitions are smooth

**Mobile Landscape**
- [ ] Game still playable
- [ ] Board fits screen
- [ ] Stats visible
- [ ] Controls accessible

**Print** (Bonus)
- [ ] Page renders (not optimized)
- [ ] Main elements visible

---

### ✅ Edge Cases

**Rapid Clicking**
- [ ] Can't break game by clicking fast
- [ ] Processing lock works
- [ ] Cards don't get stuck
- [ ] State remains consistent

**Browser Navigation**
- [ ] Back button doesn't break game
- [ ] Refresh works correctly
- [ ] Bookmark and return works
- [ ] Multiple tabs work independently

**LocalStorage Full**
- [ ] Game still works
- [ ] No errors in console
- [ ] Graceful degradation

---

### ✅ Cross-Browser Tests

**Chrome/Edge**
- [ ] All features work
- [ ] Animations smooth
- [ ] Sounds play
- [ ] No console errors

**Firefox**
- [ ] All features work
- [ ] Gradients render
- [ ] Animations work
- [ ] No console errors

**Safari** (macOS/iOS)
- [ ] All features work
- [ ] 3D flips render
- [ ] Gradients work
- [ ] Sound needs user gesture
- [ ] No console errors

---

### ✅ Performance Tests

**Frame Rate**
- [ ] Animations are smooth (60fps)
- [ ] No jank or stuttering
- [ ] Hover effects instant
- [ ] Flips are fluid

**Load Time**
- [ ] Page loads quickly (<500ms)
- [ ] No flash of unstyled content
- [ ] Images load (none to load!)
- [ ] Fonts load smoothly

**Memory**
- [ ] No memory leaks
- [ ] Multiple games don't slow down
- [ ] Console stays clean

---

### ✅ Accessibility Tests

**Keyboard Navigation**
- [ ] Tab through controls works
- [ ] Enter/Space activates buttons
- [ ] Focus indicators visible
- [ ] Logical tab order

**Screen Readers** (Optional)
- [ ] ARIA labels present
- [ ] Semantic HTML helps
- [ ] Buttons are labeled

**Color Contrast**
- [ ] Text readable in both themes
- [ ] Meets WCAG standards
- [ ] Color isn't only indicator

---

## Known Limitations

### Expected Behavior
1. **Sound on Mobile**: May require user interaction first (browser security)
2. **Private Mode**: LocalStorage may not persist
3. **Old Browsers**: Some features may not work (gradients, grid)

### Not Bugs
1. Cards use emoji - appearance varies by OS
2. Fonts load from Google Fonts (requires internet first time)
3. Theme toggle rotates on click (intentional fun effect)

---

## Reporting Issues

If you find bugs:

1. **What's the issue?**
   - Describe what's broken

2. **Steps to reproduce?**
   - How to trigger the bug

3. **Expected vs Actual?**
   - What should happen vs what does happen

4. **Browser & Device?**
   - Chrome 120, iPhone 14, etc.

5. **Console errors?**
   - Open DevTools > Console
   - Copy any red errors

---

## Success Criteria

The game passes testing if:

✅ **Layout**
- Game board is always 600x600px (or scales proportionally on mobile)
- No cards overflow the screen on any difficulty
- Responsive on all screen sizes

✅ **Design**
- Looks modern and fun, not amateur
- Smooth animations throughout
- Vibrant gradients visible
- Professional polish

✅ **Functionality**
- All game mechanics work
- Stats track correctly
- Sounds play (when enabled)
- Data persists

✅ **Performance**
- Smooth 60fps animations
- Fast load times
- No errors in console

✅ **Cross-platform**
- Works on desktop and mobile
- Works in all modern browsers
- Adapts to different screen sizes

---

## Quick Visual Verification

Open `index.html` and verify in 30 seconds:

1. ✅ Game board is centered and fits screen
2. ✅ All cards visible (no scrolling needed within board)
3. ✅ Looks modern with gradients and shadows
4. ✅ Cards flip smoothly when clicked
5. ✅ Matches turn green, mismatches shake
6. ✅ Victory modal appears when done
7. ✅ Stats update correctly
8. ✅ Theme toggle works
9. ✅ Difficulty selector works
10. ✅ Mobile responsive (try resizing)

If all 10 check out: **✅ Game is ready to play!**

---

**Happy Testing! 🎮**
