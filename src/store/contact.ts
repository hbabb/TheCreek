import { create } from 'zustand'
import { contactFormType } from '@/lib/schema/contact'

interface ContactStore {
  isSubmitting: boolean
  setSubmitting: (value: boolean) => void
  formData: Partial<contactFormType>
  updateFormData: (data: Partial<contactFormType>) => void
  resetForm: () => void
}

export const useContactStore = create<ContactStore>((set) => ({
  isSubmitting: false,
  setSubmitting: (value) => set({ isSubmitting: value }),
  formData: {},
  updateFormData: (data) => set((state) => ({ 
    formData: { ...state.formData, ...data } 
  })),
  resetForm: () => set({ formData: {} })
}))