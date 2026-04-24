import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export function useContactForm(onSuccess?: () => void) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (data: ContactFormData) => {
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
    if (!endpoint) {
      toast.error("Error sending the form. Please try again.")
      return
    }
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      form.reset()
      onSuccess?.()
      toast.success("Message sent successfully!")
    } else {
      toast.error("Error sending the form. Please try again.")
    }
  }

  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
