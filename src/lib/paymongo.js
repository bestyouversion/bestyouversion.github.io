import { supabase, isSupabaseConfigured } from './supabase'

/**
 * Creates a PayMongo checkout session via Supabase Edge Function.
 */
export async function createCheckoutSession(bookingData) {
  if (!isSupabaseConfigured) {
    // Demo mode — show alert instead of redirecting
    return { checkoutUrl: null, isDemo: true }
  }

  const { data, error } = await supabase.functions.invoke('create-checkout', {
    body: {
      bookingId: bookingData.id,
      amount: bookingData.amount,
      description: `Consultation - ${bookingData.date} at ${bookingData.time}`,
      clientName: bookingData.clientName,
      clientEmail: bookingData.clientEmail,
      clientPhone: bookingData.clientPhone,
    },
  })

  if (error) throw error
  return data
}
