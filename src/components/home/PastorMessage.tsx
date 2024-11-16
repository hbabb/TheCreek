'use client';

import { useEffect } from "react";
import { usePastorMessageStore } from "@/store/pastorMessageStore";
import { Skeleton } from "@/components/ui/skeleton"
// import { index } from "drizzle-orm/mysql-core";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Loader2 } from "lucide-react";

export function PastorMessage() {
  const {
    currentMessage,
    isLoading,
    error,
    fetchLatestMessage
  } = usePastorMessageStore();

  useEffect(() => {
    fetchLatestMessage();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center w-full h-full lg:w-2/3 p-6 mr-8 dark:text-creek-white border-4 rounded-2xl border-creek-blue dark:border-creek-white">
        <h1 className="h-full text-3xl md:text-4xl lg:text-5xl font-allura">
          Message from the Pastor&apos;s Heart 
        </h1>
        {/* Title Skeleton */}
        <Skeleton className="w-[250px] h-[30px] mt-4" />
        {/* Content Skeleton - multiple lines */}
        <Skeleton className="w-full h-[100px] mt-4" />
        <Skeleton className="w-3/4 h-[100px] mt-2" />

        {/* Alternative with spinner:
        <div className="flex items-center justify-center w-full mt-4">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center w-full h-full lg:w-2/3 p-6 mr-8 dark:text-creek-white border-4 rounded-2xl border-creek-blue dark:border-creek-white">
        <h1 className="h-full text-3xl md:text-4xl lg:text-5xl font-allura">
          Message from the Pastor&apos;s Heart 
        </h1>

        <div>
          Error: {error}
        </div>

      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full lg:w-2/3 lg:h-4/5 p-6 mr-16 dark:text-creek-white border-4 rounded-2xl border-creek-blue dark:border-creek-white font-inter">
      <h1 className="h-full text-3xl md:text-4xl lg:text-5xl font-allura font-semibold">
        A Message from the Pastor&apos;s Heart
      </h1>

      {currentMessage && (
        <div className="mt-4">
          {currentMessage.metadata?.title && (
            <h2 className="text-xl font-bold mb-2 md:text-2xl lg:text-3xl">
              {currentMessage.metadata.title}
            </h2>
          )}
          <ScrollArea className="h-3/4 w-full rounded-md">
            <div className="prose dark:prose-invert p-4 md:text-lg lg:text-xl text-justify">
              {currentMessage.content}
            </div>
            {currentMessage.metadata?.scriptureReferences && (
              <div className="mt-4">
                <h3 className="md:text-base lg:text-lg font-semibold">
                  Scripture References:
                </h3>
                  <ul>
                    {currentMessage.metadata.scriptureReferences.map((ref, index) => (
                      <li key={index}>
                        {ref}
                      </li>
                    ))}
                  </ul>
              </div>
            )}
          </ScrollArea>
        </div>
      )}

    </div>
  );
}