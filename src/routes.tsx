import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DemoBoard } from "./pages/board";
import { DemoBoardLauncher } from "./pages/board-config";
import { DemoMyPosts } from "./pages/my-posts";
import { DemoScreenSlot } from "./pages/screens-by-id";
import { TestPostToScreenPage } from "./pages/test/post-to-screen";
import { LandingPage } from "./pages/landing";


export const FizzboardRoutes = () => {
  return (
    <BrowserRouter basename="/fizzboard-demo">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/launch" element={<DemoBoardLauncher />} />
        <Route path="/my-posts" element={<DemoMyPosts />} />

        <Route path="/boards/:id" element={
          <DemoBoard 
          />}
        />

        <Route path="/screens/:id" element={<DemoScreenSlot />} />
        <Route path="/test/post-to-screen" element={<TestPostToScreenPage />} />
      </Routes>
    </BrowserRouter>
  )
}