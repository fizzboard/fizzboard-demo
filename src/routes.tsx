import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DemoBoardPage } from "./pages/board/demo-board-page";
import { DemoBoardLauncher } from "./pages/board-config";
import { DemoMyPosts } from "./pages/my-posts";
import { DemoScreenSlot } from "./pages/screens-by-id";
import { LandingPage } from "./pages/landing";
import { PostToScreenPage } from "./pages/post-to-screen";


export const FizzboardRoutes = () => {
  return (
    <BrowserRouter basename="/fizzboard-demo">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post-to-screen/:id" element={<PostToScreenPage />} />
        <Route path="/launch" element={<DemoBoardLauncher />} />
        <Route path="/my-posts" element={<DemoMyPosts />} />

        <Route path="/boards/:id" element={
          <DemoBoardPage 
          />}
        />

        <Route path="/screens/:id" element={<DemoScreenSlot />} />
        {/* <Route path="/test/post-to-screen" element={<TestPostToScreenPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}