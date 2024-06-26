import { ChatProvider } from "@/components/ChatProvider";
import ChatBox from "./_components/chat/chat-box";
import ChatButton from "./_components/chat/chat-btn";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      <ChatProvider>
        <ChatButton />
        <ChatBox />
      </ChatProvider>
      <Hero />
    </main>
  );
}
