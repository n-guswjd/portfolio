import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

export default {
  title: "UI/Tabs",
  component: Tabs,
};

export const Default = {
  render: () => {
    const [tab, setTab] = useState("projects");

    return (
      <>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-4 p-4 border rounded-xl">Projects 화면</div>

        <Dialog
          open={tab === "contact"}
          onOpenChange={(open) => {
            if (!open) setTab("projects");
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact</DialogTitle>
            </DialogHeader>
            <p>Contact 화면</p>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const ShowcaseStyle = {
  render: () => (
    <Tabs defaultValue="preview" className="flex flex-col gap-2">
      <div className="rounded-2xl border bg-white shadow-sm p-6 min-h-[300px]">
        <TabsList>
          <TabsTrigger value="preview">화면 미리보기</TabsTrigger>
          <TabsTrigger value="components">UI 컴포넌트 쇼케이스</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          화면 미리보기
        </TabsContent>
        <TabsContent value="components" className="mt-4">
          UI 컴포넌트
        </TabsContent>
      </div>
    </Tabs>
  ),
};
