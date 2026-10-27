BEAST GAMES 3 · LAST FLAG STANDING — case study page for Aleesha OS
===================================================================

index.html   the whole page (HTML + CSS + JS in one file, all styles scoped under .bg3)
assets/      full-resolution renders, model views, layout plan, storyboard

ADD IT TO THE SITE (Antigravity)
1. Copy this folder into your project's public / static folder, e.g.
     public/projects/beast-games-3/
   so it's served at  https://aleeshakl.vercel.app/projects/beast-games-3/
2. In your Projects window, add a tab "06 BEAST GAMES" with tags
   "Reality Show Set · Neon Arena · Fusion 360" and point its "Open Project ✦"
   button to /projects/beast-games-3/  (or open it inside one of your app windows
   with an <iframe src="/projects/beast-games-3/">).
3. Commit and push; Vercel redeploys.

Prompt you can paste into Antigravity:
  "Add a new project tab '06 BEAST GAMES' to the Projects window. Copy the
   beast-games-3 folder into public/projects/. The tab's Open Project button
   should open /projects/beast-games-3/ in a new window (iframe) styled like
   the other app windows. Keep the 1 Week / 2 Weeks duration label style."

SHARPER IMAGES
The renders here are the largest versions inside the PDF and Figma file
(about 1660 px wide). If you still have the original render exports
(1920 px or 4K), save them over the files in assets/ with the SAME file
names and the page will use them automatically.

Edit the tags / duration in index.html: search for  class="tags"  and  class="spec".
