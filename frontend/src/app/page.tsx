import Header from "@/components/layout/Header";
import PlayList from "@/components/layout/PlayList";

export default function Home() {


  return (
    <main className="bg-neutral-900 w-full mt-2 p-2 bg-gradient-to-b from-emerald-900 rounded-lg">
      <Header/>
      <PlayList />
    </main>
  );
}
