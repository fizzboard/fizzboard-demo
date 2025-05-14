import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DemoBoardPage } from "./pages/board/demo-board-page";
import { DemoBoardLauncher } from "./pages/board-config";
import { DemoMyPosts } from "./pages/my-posts";
import { DemoScreenSlot } from "./pages/screens-by-id";
import { LandingPage } from "./pages/landing";
import { PostToScreenPage } from "./pages/post-to-screen";
import { DemoChooseProfilePage } from "./pages/demo-choose-profile";
import { DemoMyBoardsPage } from "./pages/my-boards";
import { DemoMyBoardConfigPage } from "./pages/my-boards/my-board-config";
import { LandingNotesAndFodderPage } from "./pages/landing-notes-and-fodder";


export const FizzboardRoutes = () => {
  return (
    <BrowserRouter basename="/fizzboard-demo">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post-to-screen/:id" element={<PostToScreenPage />} />

        <Route path="/launch" element={<DemoBoardLauncher />} />
        <Route path="/boards/:id" element={
          <DemoBoardPage />}
        />

        <Route path="/my-posts" element={<DemoMyPosts />} />
        <Route path="/my-boards" element={<DemoMyBoardsPage />} />
        <Route path="/demo-board-configs/:id" element={<DemoMyBoardConfigPage />} />

        <Route path="/choose-profile" element={<DemoChooseProfilePage />} />

        <Route path="/screens/:id" element={<DemoScreenSlot />} />
        <Route path="/landing-notes-and-fodder" element={<LandingNotesAndFodderPage />} />
        {/* <Route path="/test/post-to-screen" element={<TestPostToScreenPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}