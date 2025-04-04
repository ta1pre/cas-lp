/**
 * URLu304bu3089tracking_idu3092u53d6u5f97u3059u308bu30d8u30ebu30d1u30fcu95a2u6570
 * @returns tracking_idu307eu305fu306fnull
 */
export function getTrackingIdFromUrl(): string | null {
  // u30afu30e9u30a4u30a2u30f3u30c8u30b5u30a4u30c9u3067u306eu307fu5b9fu884cu3055u308cu308bu3088u3046u306bu3059u308b
  if (typeof window === 'undefined') return null;
  
  // URLu304bu3089u30afu30a8u30eau30d1u30e9u30e1u30fcu30bfu3092u53d6u5f97
  const params = new URLSearchParams(window.location.search);
  return params.get('tracking_id');
}

/**
 * LINEu8a8du8a3cURLu306bu30eau30c0u30a4u30ecu30afu30c8u3059u308bu95a2u6570
 * @param authUrl - LINEu8a8du8a3cURL
 */
export function redirectToLineAuth(authUrl: string): void {
  // u30afu30e9u30a4u30a2u30f3u30c8u30b5u30a4u30c9u3067u306eu307fu5b9fu884cu3055u308cu308bu3088u3046u306bu3059u308b
  if (typeof window === 'undefined') return;
  
  // LINEu8a8du8a3cURLu306bu30eau30c0u30a4u30ecu30afu30c8
  window.location.href = authUrl;
}
