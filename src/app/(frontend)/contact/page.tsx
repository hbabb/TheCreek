import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata ={
  title: 'Contact',
};

export default function Contact() {
  return (
    <div className="h-full flex-1 flex flex-col bg-fixed w-full bg-sky-background bg-cover bg-center bg-no-repeat">
      <Header 
        className="bg-transparent"
      />
      <main className="flex flex-col justify-center items-center w-full my-auto mx-auto p-4">
        <div className="relative w-full max-w-2xl mx-auto flex flex-col gap-4">
          <div className="absolute insert-0 -z-10 bg-gray-400/20 backdrop-blur-xl rounded-2xl shadow-2xl" />
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-gray-200/20 shadow-xl p-8">
            <h2 className="text-2xl font-josefinSans font-semibold text-creek-white mb-6 text-center">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
        <Toaster />
      </main>
    </div>
  )
}