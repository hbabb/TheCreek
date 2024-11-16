// src/store/pastorMessageStore.ts
import { create } from 'zustand';
import { getLatestPastorMessage, getAllPublishedMessages } from "@/lib/actions/pastorMessage";

interface PastorMessage {
  id: string
  status: string
  content: string
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date | null
  metadata: {
    title?: string
    scriptureReferences?: string[]
    theme?: string
    featuredImage?: string
    tags?: string[]
  } | null
}

interface PastorMessageStore {
  currentMessage: PastorMessage | null
  allMessages: PastorMessage[]
  isLoading: boolean
  error: string | null
  fetchLatestMessage: () => Promise<void>
  fetchAllMessages: () => Promise<void>
  setCurrentMessage: (message: PastorMessage) => void
}

export const usePastorMessageStore = create<PastorMessageStore>((set) => ({
  currentMessage: null,
  allMessages: [],
  isLoading: false,
  error: null,
  fetchLatestMessage: async () => {
    set({ isLoading: true, error: null })
    try {
      const result = await getLatestPastorMessage()
      if (result && 'data' in result) {
        set({ currentMessage: result.data })
      } else if (result?.serverError) {
        set({ error: result.serverError }) // capture server errors
      } else if (result?.validationErrors) {
        set({ error: "Validation failed" }) // capture validation errors
      }
    } catch (error) {
      console.log(error)
      set({ error: 'Failed to fetch latest message' })
    } finally {
      set({ isLoading: false })
    }
  },
  fetchAllMessages: async () => {
    set({ isLoading: true, error: null })
    try {
      const result = await getAllPublishedMessages()
      if (result && 'data' in result) {
        set({ allMessages: result.data })
      } else if (result?.serverError) {
        set({ error: result.serverError }) // capture server errors
      } else if (result?.validationErrors) {
        set({ error: "Validation failed" }) // capture validation errors
      }
    } catch (error) {
      console.log(error)
      set({ error: 'Failed to fetch messages' })
    } finally {
      set({ isLoading: false })
    }
  },
  setCurrentMessage: (message) => set({ currentMessage: message })
}));